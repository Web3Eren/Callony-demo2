// src/utils/search.js
const SYNONYMS = {
  aquapark:["su parki","kaydırak","water park","havuz","pool"],
  cocuk:["kids","mini club","aile","family","bebek","children"],
  balayı:["honeymoon","romantik","cift","dugun","evlilik","couple"],
  adult:["yetiskin","adult only","18+","buyuk","sessiz","quiet"],
  lüks:["luxury","premium","vip","kaliteli"],
  plaj:["beach","deniz","kumsal","sahil","koy"],
  snorkeling:["dalis","diving","mercan","su alti","kizildeniz"],
  transfer:["ulasim","havalimani","airport","servis","arac"],
  vize:["pasaport","giris","seyahat","belge","dokuman"],
  fiyat:["para","ucret","maliyet","butce","ucuz","pahali","ekonomik"],
  spa:["masaj","wellness","terapi","hamam","sauna"],
  sarm:["sharm","sarm el sey","misir","egypt","kizildeniz"],
  rixos:["rixy","premium","seagate","golf villa"],
  aile:["family","cocuk","kids","bebek","cocuklu"],
};

export function norm(s=""){
  return s.toLowerCase()
    .replace(/ğ/g,"g").replace(/ü/g,"u").replace(/ş/g,"s")
    .replace(/ı/g,"i").replace(/ö/g,"o").replace(/ç/g,"c")
    .replace(/[^a-z0-9\s]/g,"").trim();
}

function lev(a,b){
  if(Math.abs(a.length-b.length)>2)return 99;
  const d=Array.from({length:a.length+1},(_,i)=>Array.from({length:b.length+1},(_,j)=>i===0?j:j===0?i:0));
  for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)
    d[i][j]=a[i-1]===b[j-1]?d[i-1][j-1]:1+Math.min(d[i-1][j],d[i][j-1],d[i-1][j-1]);
  return d[a.length][b.length];
}

function expand(terms){
  const out=new Set(terms);
  terms.forEach(t=>{
    Object.entries(SYNONYMS).forEach(([k,vs])=>{
      const nk=norm(k);
      if(nk.includes(t)||t.includes(nk)){out.add(nk);vs.forEach(v=>out.add(norm(v)));}
      vs.forEach(v=>{if(norm(v).includes(t)){out.add(nk);vs.forEach(v2=>out.add(norm(v2)));} });
    });
  });
  return [...out];
}

function scoreText(txt,terms){
  const n=norm(txt); const words=n.split(/\s+/);
  return terms.reduce((s,t)=>{
    if(n.includes(t))return s+3;
    return s+words.reduce((ws,w)=>{
      const d=lev(w,t);
      return ws+(d===0?3:d===1?2:d===2&&t.length>4?1:0);
    },0);
  },0);
}

function hotelCorpus(h){
  return [h.name,h.region,h.concept,h.targetCustomer,
    ...(h.tags||[]),...(h.strengths||[]),...(h.competitorDiff||[]),
    h.aquapark?.has?"aquapark su parki kaydırak":"",
    h.kidsClub?.has?"cocuk kulubu kids club mini club":"",
    h.adultOnly?.is?"adult only yetiskin 18+ sessiz":"",
    h.beach?.snorkeling?"snorkeling dalış":"",
    h.salesScript?.keyPoints?.join(" ")||"",
    h.honeymoonSalesScript||"",h.familySalesScript||"",
    h.objections?.map(o=>o.q+" "+o.a).join(" ")||"",
  ].join(" ");
}

function faqCorpus(f){return [f.question,f.answer,f.category,...(f.tags||[])].join(" ");}

export function searchAll(query,hotels,faqs){
  if(!query||norm(query).length<1)return{hotels:[],faqs:[],total:0};
  const terms=norm(query).split(/\s+/).filter(t=>t.length>0);
  const exp=expand(terms);
  const sh=hotels.map(h=>({...h,_s:scoreText(hotelCorpus(h),exp)})).filter(h=>h._s>0).sort((a,b)=>b._s-a._s);
  const sf=faqs.map(f=>({...f,_s:scoreText(faqCorpus(f),exp)})).filter(f=>f._s>0).sort((a,b)=>b._s-a._s);
  return{hotels:sh,faqs:sf,total:sh.length+sf.length};
}

export function buildAIContext(hotels){
  return hotels.map(h=>`
OTEL: ${h.name} | ${h.region} | ${h.concept}
Hedef: ${h.targetCustomer}
Güçlü Yönler: ${h.strengths?.join("; ")}
Aquapark: ${h.aquapark?.has?"VAR - "+h.aquapark.note:"YOK"}
Çocuk Kulübü: ${h.kidsClub?.has?h.kidsClub.name+" "+h.kidsClub.ageRange:"YOK"}
Adult Only: ${h.adultOnly?.is?"EVET "+h.adultOnly.ageLimit+"+":"HAYIR"}
Satış Açılışı: ${h.salesScript?.opening||""}
İtirazlar: ${h.objections?.map(o=>'"'+o.q+'" → '+o.a).join(" | ")||""}
Rakip Farkı: ${h.competitorDiff?.join("; ")||""}
`.trim()).join("\n\n---\n\n");
}

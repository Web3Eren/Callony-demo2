// src/App.jsx
import { useState, useEffect, useRef } from "react";
import { HOTELS } from "./data/hotels.js";
import { FAQS } from "./data/faqs.js";
import { searchAll } from "./utils/search.js";
import { C, F, GFONTS, GCSS } from "./utils/theme.js";
import { Sidebar } from "./components/Sidebar.jsx";
import { HotelDetail } from "./components/HotelDetail.jsx";
import { AiAssistant } from "./components/AiAssistant.jsx";
import { Badge, Chip, SLabel, CopyBtn, WABox, Divider, StatBox, InfoRow } from "./components/UI.jsx";

// ── TOPBAR ───────────────────────────────────────────────────
function TopBar({ query, setQuery, inputRef }) {
  return (
    <div style={{height:50,background:C.surface,borderBottom:`1px solid ${C.border}`,
      display:"flex",alignItems:"center",padding:"0 20px",gap:14,flexShrink:0}}>
      <div style={{flex:1,maxWidth:580,position:"relative"}}>
        <span style={{position:"absolute",left:11,top:"50%",transform:"translateY(-50%)",
          fontSize:13,color:C.textDim,pointerEvents:"none"}}>🔍</span>
        <input ref={inputRef} value={query} onChange={e=>setQuery(e.target.value)}
          placeholder="Hızlı ara: aquapark, balayı, adult only, snorkeling, pasaport, transfer..."
          style={{width:"100%",padding:"7px 30px 7px 32px",borderRadius:8,
            border:`1px solid ${query?C.cyan+"66":C.border2}`,
            background:C.surface2,color:C.text,fontSize:12.5,
            outline:"none",fontFamily:F.body,transition:"border-color .15s"}}/>
        {query && (
          <button onClick={()=>setQuery("")} style={{position:"absolute",right:9,
            top:"50%",transform:"translateY(-50%)",background:"transparent",
            border:"none",color:C.textDim,fontSize:16,lineHeight:1}}>×</button>
        )}
      </div>
      <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:16}}>
        <span style={{fontSize:11,color:C.textDim,fontFamily:F.body}}>
          <span style={{color:C.cyan,fontWeight:600}}>{HOTELS.length}</span> otel ·{" "}
          <span style={{color:C.green,fontWeight:600}}>{FAQS.length}</span> SSS
        </span>
        <div style={{display:"flex",alignItems:"center",gap:5}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:C.green,boxShadow:`0 0 5px ${C.green}`}}/>
          <span style={{fontSize:11,color:C.textSub,fontFamily:F.body}}>Canlı</span>
        </div>
        <div style={{fontSize:10,color:C.textDim,padding:"3px 9px",borderRadius:6,
          background:C.surface2,border:`1px solid ${C.border}`,fontFamily:F.body}}>
          Güncelleme: 20 May 2025
        </div>
      </div>
    </div>
  );
}

// ── HOTEL CARD ───────────────────────────────────────────────
function HotelCard({ hotel, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:C.surface,borderRadius:13,overflow:"hidden",cursor:"pointer",
        border:`1px solid ${hov?C.cyan+"55":C.border}`,transition:"all .18s",
        transform:hov?"translateY(-2px)":"translateY(0)",
        boxShadow:hov?`0 8px 24px rgba(56,189,248,0.07)`:"none"}}>
      <div style={{height:126,overflow:"hidden",position:"relative"}}>
        <img src={hotel.image} alt={hotel.name} style={{
          width:"100%",height:"100%",objectFit:"cover",
          transition:"transform .4s",transform:hov?"scale(1.05)":"scale(1)"}}/>
        <div style={{position:"absolute",inset:0,
          background:"linear-gradient(to bottom,transparent 25%,rgba(11,17,32,.92))"}}/>
        {/* Quick actions on hover */}
        {hov && (
          <div style={{position:"absolute",top:8,right:8,display:"flex",gap:5,animation:"fadeIn .15s"}}>
            <button onClick={e=>{e.stopPropagation();navigator.clipboard.writeText(hotel.whatsappTemplates?.general||"");}}
              style={{padding:"4px 9px",borderRadius:6,border:`1px solid ${C.cyan}66`,
                background:"rgba(11,17,32,.8)",color:C.cyan,fontSize:10,fontWeight:600,fontFamily:F.body}}>
              📋 WA Kopyala
            </button>
          </div>
        )}
        <div style={{position:"absolute",bottom:8,left:10,display:"flex",gap:4,flexWrap:"wrap"}}>
          {hotel.badges.map(b=><Badge key={b} type={b}/>)}
        </div>
      </div>
      <div style={{padding:"11px 13px"}}>
        <div style={{fontSize:9,color:C.textDim,letterSpacing:2,marginBottom:3,fontFamily:F.body,fontWeight:600}}>
          {hotel.region.toUpperCase()}
        </div>
        <div style={{fontSize:14,fontWeight:700,color:C.text,fontFamily:F.head,lineHeight:1.2,marginBottom:3}}>
          {hotel.name}
        </div>
        <div style={{fontSize:11,color:C.textSub,marginBottom:9,fontFamily:F.body}}>
          {"★".repeat(hotel.stars)} · {hotel.concept}
        </div>
        <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
          {hotel.aquapark?.has    && <Chip icon="🌊" label="Aquapark"      color={C.cyan}  bg={C.cyanDim}/>}
          {hotel.kidsClub?.has    && <Chip icon="👧" label="Çocuk Kulübü" color={C.green} bg={C.greenDim}/>}
          {hotel.beach?.hasPrivate && <Chip icon="🏖" label="Özel Plaj"   color={C.gold}  bg={C.goldDim}/>}
          {hotel.adultOnly?.is    && <Chip icon="🔞" label={`${hotel.adultOnly.ageLimit}+ Only`} color={C.red} bg={C.redDim}/>}
          {hotel.beach?.snorkeling && <Chip icon="🐠" label="Snorkeling"  color={C.amber} bg={C.amberDim}/>}
        </div>
        <div style={{marginTop:9,fontSize:10,color:C.cyan,fontFamily:F.body,fontWeight:600,
          opacity:hov?1:0,transition:".15s"}}>
          Detayları Görüntüle →
        </div>
      </div>
    </div>
  );
}

// ── FAQ CARD ─────────────────────────────────────────────────
function FaqCard({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{background:C.surface,border:`1px solid ${open?C.border2:C.border}`,
      borderRadius:9,overflow:"hidden",transition:"border-color .12s"}}>
      <button onClick={()=>setOpen(!open)} style={{width:"100%",padding:"11px 14px",
        background:"transparent",border:"none",color:C.text,cursor:"pointer",
        display:"flex",justifyContent:"space-between",alignItems:"center",
        textAlign:"left",fontSize:12.5,fontFamily:F.body,fontWeight:500,gap:10}}>
        <div>
          <span style={{fontSize:9,fontWeight:700,color:C.cyan,letterSpacing:2,display:"block",marginBottom:2}}>
            {faq.category.toUpperCase()}
          </span>
          {faq.question}
        </div>
        <span style={{color:C.cyan,fontSize:17,flexShrink:0,
          transform:open?"rotate(45deg)":"none",transition:".15s"}}>+</span>
      </button>
      {open && (
        <div style={{padding:"0 14px 13px",borderTop:`1px solid ${C.border}`}}>
          <div style={{fontSize:13,color:C.textSub,lineHeight:1.7,margin:"10px 0 12px",fontFamily:F.body}}>
            {faq.answer}
          </div>
          {faq.whatsapp && <>
            <WABox text={faq.whatsapp}/>
            <div style={{marginTop:7}}>
              <CopyBtn text={faq.whatsapp} label="WhatsApp Kopyala" small/>
            </div>
          </>}
        </div>
      )}
    </div>
  );
}

// ── PAGES ────────────────────────────────────────────────────

function DashboardPage({ setPage, onSelect }) {
  const topSeller = HOTELS.find(h=>h.badges.includes("top-seller"));
  return (
    <div style={{animation:"slideU .2s ease"}}>
      <div style={{marginBottom:22}}>
        <div style={{fontSize:18,fontWeight:700,color:C.text,fontFamily:F.head,marginBottom:4}}>
          Hoş Geldiniz 👋
        </div>
        <div style={{fontSize:13,color:C.textSub,fontFamily:F.body}}>
          Callony Operasyon Sistemi · Şarm El Şeyh / Rixos Koleksiyonu
        </div>
      </div>

      {/* Quick stats */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:24}}>
        <StatBox label="Aktif Otel" value={HOTELS.length} icon="🏨" color={C.cyan}/>
        <StatBox label="SSS Kaydı" value={FAQS.length} icon="❓" color={C.green}/>
        <StatBox label="WA Şablonu" value={HOTELS.length*5} icon="📱" color={C.gold}/>
        <StatBox label="Sistem" value="Canlı" icon="⚡" color={C.green}/>
      </div>

      {/* Quick access */}
      <SLabel>HIZLI ERİŞİM</SLabel>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:24}}>
        {[
          {id:"hotels",icon:"🏨",label:"Oteller",sub:`${HOTELS.length} aktif`},
          {id:"scripts",icon:"💬",label:"Satış Scriptleri",sub:"Tüm oteller"},
          {id:"whatsapp",icon:"📱",label:"WhatsApp",sub:`${HOTELS.length*5} şablon`},
          {id:"ai",icon:"✨",label:"AI Asistan",sub:"Sorularını sor"},
          {id:"transfer",icon:"🚐",label:"Transfer",sub:"SSH bilgileri"},
          {id:"visa",icon:"📋",label:"Vize & Pasaport",sub:"Mısır kuralları"},
        ].map(item=>(
          <button key={item.id} onClick={()=>setPage(item.id)} style={{
            background:C.surface,border:`1px solid ${C.border}`,borderRadius:10,
            padding:"12px 14px",cursor:"pointer",textAlign:"left",transition:"all .15s",
          }}
          onMouseOver={e=>{e.currentTarget.style.borderColor=C.cyan+"55";e.currentTarget.style.transform="translateY(-1px)";}}
          onMouseOut={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform="translateY(0)";}}>
            <div style={{fontSize:18,marginBottom:6}}>{item.icon}</div>
            <div style={{fontSize:12,fontWeight:600,color:C.text,fontFamily:F.head,marginBottom:2}}>{item.label}</div>
            <div style={{fontSize:10,color:C.textDim,fontFamily:F.body}}>{item.sub}</div>
          </button>
        ))}
      </div>

      {/* Hotels preview */}
      <SLabel>OTELLER</SLabel>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
        {HOTELS.map(h=><HotelCard key={h.id} hotel={h} onClick={()=>onSelect(h)}/>)}
      </div>
    </div>
  );
}

function HotelsPage({ onSelect }) {
  return (
    <div style={{animation:"slideU .18s ease"}}>
      <SLabel>AKTİF OTELLER ({HOTELS.length})</SLabel>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:13}}>
        {HOTELS.map(h=><HotelCard key={h.id} hotel={h} onClick={()=>onSelect(h)}/>)}
      </div>
    </div>
  );
}

function ScriptsPage() {
  return (
    <div style={{animation:"slideU .18s ease"}}>
      <SLabel>SATIŞ SCRİPTLERİ</SLabel>
      {HOTELS.map(h=>(
        <div key={h.id} style={{background:C.surface,border:`1px solid ${C.border}`,
          borderRadius:11,padding:"15px 17px",marginBottom:13}}>
          <div style={{fontSize:15,fontWeight:700,color:C.text,fontFamily:F.head,marginBottom:3}}>{h.name}</div>
          <div style={{fontSize:11,color:C.textSub,marginBottom:12,fontFamily:F.body}}>{h.targetCustomer}</div>

          <div style={{fontSize:9,fontWeight:700,color:C.textDim,letterSpacing:2,marginBottom:5,fontFamily:F.body}}>AÇILIŞ</div>
          <div style={{fontSize:13,color:C.text,fontStyle:"italic",fontFamily:F.body,lineHeight:1.65,marginBottom:12,
            padding:"8px 12px",background:C.cyanDim,borderRadius:7,border:`1px solid ${C.cyan}22`}}>
            "{h.salesScript?.opening}"
          </div>

          <div style={{fontSize:9,fontWeight:700,color:C.textDim,letterSpacing:2,marginBottom:6,fontFamily:F.body}}>ANAHTAR NOKTALAR</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:10}}>
            {h.salesScript?.keyPoints?.map((p,i)=>(
              <span key={i} style={{fontSize:11,color:C.green,background:C.greenDim,
                padding:"3px 9px",borderRadius:99,border:`1px solid ${C.green}33`,fontFamily:F.body}}>
                ✓ {p}
              </span>
            ))}
          </div>

          <div style={{fontSize:11,color:C.gold,fontStyle:"italic",fontFamily:F.body,
            padding:"6px 10px",background:C.goldDim,borderRadius:7}}>
            🎯 Kapanış: "{h.salesScript?.closing}"
          </div>
        </div>
      ))}
    </div>
  );
}

function WhatsAppPage() {
  const TYPES = [
    {key:"general",icon:"📢",label:"Genel"},
    {key:"honeymoon",icon:"💑",label:"Balayı"},
    {key:"family",icon:"👨‍👩‍👧",label:"Aile"},
    {key:"priceRequest",icon:"📊",label:"Fiyat İsteme"},
    {key:"transfer",icon:"🚐",label:"Transfer"},
  ];
  const [type, setType] = useState("general");
  return (
    <div style={{animation:"slideU .18s ease"}}>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:18}}>
        {TYPES.map(t=>(
          <button key={t.key} onClick={()=>setType(t.key)} style={{
            padding:"6px 13px",borderRadius:7,fontSize:11,fontWeight:600,
            border:`1px solid ${type===t.key?C.cyan:C.border2}`,
            background:type===t.key?C.cyanDim:"transparent",
            color:type===t.key?C.cyan:C.textSub,fontFamily:F.body,transition:"all .12s",
          }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>
      {HOTELS.map(h=>{
        const text=h.whatsappTemplates?.[type];
        if(!text)return null;
        return (
          <div key={h.id} style={{background:C.surface,border:`1px solid ${C.border}`,
            borderRadius:11,padding:"13px 15px",marginBottom:13}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:9}}>
              <div style={{fontSize:13,fontWeight:700,color:C.text,fontFamily:F.head}}>{h.name}</div>
              <CopyBtn text={text} label="Kopyala" small/>
            </div>
            <WABox text={text}/>
          </div>
        );
      })}
    </div>
  );
}

function TransferPage() {
  const tFaqs = FAQS.filter(f=>f.category==="Transfer");
  return (
    <div style={{animation:"slideU .18s ease"}}>
      <SLabel>TRANSFER BİLGİLERİ — ŞARM EL ŞEYH (SSH)</SLabel>
      {HOTELS.map(h=>(
        <div key={h.id} style={{background:C.surface,border:`1px solid ${C.border}`,
          borderRadius:11,padding:"14px 16px",marginBottom:12}}>
          <div style={{fontSize:14,fontWeight:700,color:C.text,fontFamily:F.head,marginBottom:10}}>{h.name}</div>
          <div style={{background:C.surface2,borderRadius:8,padding:"2px 12px",border:`1px solid ${C.border}`,marginBottom:10}}>
            <InfoRow label="Havalimanı" value={h.transfer?.airport||"—"}/>
            <InfoRow label="Süre" value={h.transfer?.duration||"—"} valueColor={C.cyan}/>
            <InfoRow label="Tahmini Fiyat" value={h.transfer?.approxPrice||"—"}/>
            <InfoRow label="Seçenekler" value={h.transfer?.options?.join(", ")||"—"} last/>
          </div>
          {h.transfer?.note&&<div style={{fontSize:11,color:C.gold,fontFamily:F.body,
            padding:"5px 10px",background:C.goldDim,borderRadius:6,marginBottom:8}}>💡 {h.transfer.note}</div>}
          <CopyBtn text={h.whatsappTemplates?.transfer||""} label="Transfer Mesajını Kopyala" small/>
        </div>
      ))}
      <Divider my={20}/>
      <SLabel>SIK SORULAN SORULAR</SLabel>
      <div style={{display:"flex",flexDirection:"column",gap:7}}>
        {tFaqs.map(f=><FaqCard key={f.id} faq={f}/>)}
      </div>
    </div>
  );
}

function VisaPage() {
  const vFaqs = FAQS.filter(f=>f.category==="Vize & Pasaport");
  return (
    <div style={{animation:"slideU .18s ease"}}>
      <div style={{background:C.surface,border:`1px solid ${C.gold}44`,
        borderRadius:11,padding:"15px 17px",marginBottom:20}}>
        <div style={{fontSize:13,fontWeight:700,color:C.gold,fontFamily:F.head,marginBottom:10}}>
          ⚠️ Kritik Hatırlatmalar — Her Müşteriye Söyleyin
        </div>
        {[
          "Pasaport seyahat tarihinden itibaren min. 6 ay geçerli olmalı",
          "Türk vatandaşları Mısır'a kapıda vize alabilir (25 USD, nakit/kart)",
          "E-vize alternatifi: visa2egypt.gov.eg",
          "Sinai vizesi yalnızca Şarm bölgesi için geçerli — Mısır geneli değil",
        ].map((n,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:7,fontSize:13,
            color:C.text,fontFamily:F.body,alignItems:"flex-start"}}>
            <span style={{color:C.gold,flexShrink:0,fontWeight:700}}>›</span>{n}
          </div>
        ))}
      </div>
      <SLabel>SIK SORULAN SORULAR</SLabel>
      <div style={{display:"flex",flexDirection:"column",gap:7}}>
        {vFaqs.map(f=><FaqCard key={f.id} faq={f}/>)}
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div style={{animation:"slideU .18s ease"}}>
      <SLabel>AYARLAR</SLabel>
      <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:11,padding:"18px"}}>
        <div style={{fontSize:13,color:C.textSub,fontFamily:F.body,lineHeight:1.7}}>
          <p>📁 <b style={{color:C.text}}>Otel verilerini güncellemek için:</b><br/>
          <code style={{color:C.cyan,background:C.surface2,padding:"2px 6px",borderRadius:4,fontSize:11}}>
            src/data/hotels.js
          </code> dosyasını düzenleyin.</p>
          <br/>
          <p>❓ <b style={{color:C.text}}>SSS güncellemek için:</b><br/>
          <code style={{color:C.cyan,background:C.surface2,padding:"2px 6px",borderRadius:4,fontSize:11}}>
            src/data/faqs.js
          </code> dosyasını düzenleyin.</p>
          <br/>
          <p>🤖 <b style={{color:C.text}}>AI Asistan için:</b><br/>
          Vercel → Settings → Environment Variables → <code style={{color:C.gold,background:C.surface2,padding:"2px 6px",borderRadius:4,fontSize:11}}>ANTHROPIC_API_KEY</code> ekleyin.</p>
          <br/>
          <p>🎨 <b style={{color:C.text}}>Tema renkleri için:</b><br/>
          <code style={{color:C.cyan,background:C.surface2,padding:"2px 6px",borderRadius:4,fontSize:11}}>
            src/utils/theme.js
          </code> dosyasını düzenleyin.</p>
        </div>
      </div>
    </div>
  );
}

function SearchResultsPage({ query, onSelect }) {
  const results = searchAll(query, HOTELS, FAQS);
  return (
    <div style={{animation:"slideU .18s ease"}}>
      <div style={{marginBottom:18,display:"flex",alignItems:"center",gap:10}}>
        <span style={{fontSize:13,color:C.textSub,fontFamily:F.body}}>
          "<span style={{color:C.text,fontWeight:600}}>{query}</span>" —{" "}
          <span style={{color:results.total>0?C.cyan:C.red,fontWeight:700}}>
            {results.total>0?`${results.total} sonuç bulundu`:"Sonuç bulunamadı"}
          </span>
        </span>
      </div>
      {results.hotels.length>0 && <>
        <SLabel>OTELLER ({results.hotels.length})</SLabel>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12,marginBottom:22}}>
          {results.hotels.map(h=><HotelCard key={h.id} hotel={h} onClick={()=>onSelect(h)}/>)}
        </div>
      </>}
      {results.faqs.length>0 && <>
        <SLabel>SIK SORULAN SORULAR ({results.faqs.length})</SLabel>
        <div style={{display:"flex",flexDirection:"column",gap:7}}>
          {results.faqs.map(f=><FaqCard key={f.id} faq={f}/>)}
        </div>
      </>}
    </div>
  );
}

// ── MAIN ─────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("dashboard");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const inputRef = useRef(null);

  const isSearching = query.trim().length >= 2;

  const renderContent = () => {
    if (isSearching) return <SearchResultsPage query={query} onSelect={setSelected}/>;
    switch(page) {
      case "dashboard": return <DashboardPage setPage={p=>{setPage(p);setQuery("");}} onSelect={setSelected}/>;
      case "hotels":    return <HotelsPage onSelect={setSelected}/>;
      case "scripts":   return <ScriptsPage/>;
      case "whatsapp":  return <WhatsAppPage/>;
      case "transfer":  return <TransferPage/>;
      case "visa":      return <VisaPage/>;
      case "ai":        return <AiAssistant/>;
      case "settings":  return <SettingsPage/>;
      default:          return <DashboardPage setPage={setPage} onSelect={setSelected}/>;
    }
  };

  return (
    <>
      <style>{GFONTS}{GCSS}</style>
      <div style={{display:"flex",height:"100vh",overflow:"hidden",background:C.bg}}>
        <Sidebar active={page} onChange={p=>{setPage(p);setQuery("");}}/>
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",minWidth:0}}>
          <TopBar query={query} setQuery={setQuery} inputRef={inputRef}/>
          <div style={{flex:1,overflowY:"auto",padding:page==="ai"?0:"22px 24px"}}>
            {renderContent()}
          </div>
        </div>
        {selected && <HotelDetail hotel={selected} onClose={()=>setSelected(null)}/>}
      </div>
    </>
  );
}

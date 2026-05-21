// src/components/HotelDetail.jsx
import { useState, useEffect } from "react";
import { C, F } from "../utils/theme.js";
import { Badge, SLabel, CopyBtn, StatBox, WABox, InfoRow, Chip, Divider } from "./UI.jsx";

const TABS = [
  {id:"overview",  label:"Genel Bakış"},
  {id:"rooms",     label:"Oda & Olanaklar"},
  {id:"food",      label:"Restoranlar"},
  {id:"sales",     label:"Satış Scriptleri"},
  {id:"objections",label:"İtirazlar"},
  {id:"whatsapp",  label:"WhatsApp"},
];

const WA_TYPES = [
  {key:"general",      icon:"📢", label:"Genel Tanıtım"},
  {key:"honeymoon",    icon:"💑", label:"Balayı"},
  {key:"family",       icon:"👨‍👩‍👧", label:"Aile"},
  {key:"priceRequest", icon:"📊", label:"Fiyat İsteme"},
  {key:"transfer",     icon:"🚐", label:"Transfer"},
];

export function HotelDetail({ hotel, onClose }) {
  const [tab, setTab] = useState("overview");
  const [waType, setWaType] = useState("general");

  useEffect(() => {
    setTab("overview"); setWaType("general");
    const esc = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [hotel?.id]);

  if (!hotel) return null;

  const currentWA = hotel.whatsappTemplates?.[waType] || "";

  return (
    <>
      <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(4,8,18,.72)",
        zIndex:200,backdropFilter:"blur(4px)",animation:"fadeIn .15s"}}/>

      <div style={{position:"fixed",top:0,right:0,bottom:0,width:700,
        background:C.surface,borderLeft:`1px solid ${C.border2}`,
        zIndex:201,display:"flex",flexDirection:"column",
        animation:"slideR .22s cubic-bezier(.16,1,.3,1)"}}>

        {/* ── STICKY HEADER ── */}
        <div style={{flexShrink:0,borderBottom:`1px solid ${C.border}`}}>
          {/* Title row */}
          <div style={{padding:"16px 22px 0",display:"flex",gap:12,alignItems:"flex-start"}}>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:10,color:C.textDim,letterSpacing:2,marginBottom:3,fontFamily:F.body,fontWeight:600}}>
                {hotel.region.toUpperCase()}
              </div>
              <div style={{fontSize:19,fontWeight:700,color:C.text,fontFamily:F.head,lineHeight:1.2,marginBottom:7}}>
                {hotel.name}
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                {hotel.badges.map(b=><Badge key={b} type={b}/>)}
                <span style={{fontSize:10,color:C.cyan,background:C.cyanDim,padding:"2px 8px",
                  borderRadius:99,border:`1px solid ${C.cyan}44`,fontWeight:600,fontFamily:F.body}}>
                  {hotel.concept}
                </span>
                {hotel.adultOnly?.is && (
                  <span style={{fontSize:10,color:C.red,background:C.redDim,padding:"2px 8px",
                    borderRadius:99,border:`1px solid ${C.red}44`,fontWeight:600,fontFamily:F.body}}>
                    🔞 {hotel.adultOnly.ageLimit}+ Only
                  </span>
                )}
              </div>
            </div>

            {/* Sticky action buttons */}
            <div style={{display:"flex",flexDirection:"column",gap:6,flexShrink:0}}>
              <CopyBtn text={currentWA} label="WhatsApp Kopyala" small/>
              <button onClick={onClose} style={{
                width:32,height:32,borderRadius:7,border:`1px solid ${C.border2}`,
                background:"transparent",color:C.textSub,fontSize:18,
                display:"flex",alignItems:"center",justifyContent:"center",
                transition:"all .15s",
              }}
                onMouseOver={e=>{e.currentTarget.style.borderColor=C.red;e.currentTarget.style.color=C.red;}}
                onMouseOut={e=>{e.currentTarget.style.borderColor=C.border2;e.currentTarget.style.color=C.textSub;}}>
                ×
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div style={{display:"flex",padding:"8px 22px 0",gap:0,overflowX:"auto"}}>
            {TABS.map(t=>(
              <button key={t.id} onClick={()=>setTab(t.id)} style={{
                padding:"7px 14px",background:"transparent",border:"none",
                color: tab===t.id ? C.cyan : C.textSub,
                borderBottom:`2px solid ${tab===t.id ? C.cyan : "transparent"}`,
                cursor:"pointer",fontSize:12,fontWeight:600,
                fontFamily:F.body,transition:"all .12s",whiteSpace:"nowrap",
              }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div style={{flex:1,overflowY:"auto",padding:"18px 22px 36px"}}>

          {/* GENEL BAKIŞ */}
          {tab==="overview" && (
            <div style={{animation:"slideU .18s ease"}}>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:18}}>
                <StatBox label="Aquapark" icon="🌊"
                  value={hotel.aquapark?.has?"✓ Var":"✗ Yok"}
                  color={hotel.aquapark?.has?C.green:C.red}/>
                <StatBox label="Çocuk Kulübü" icon="👧"
                  value={hotel.kidsClub?.has?hotel.kidsClub.ageRange:"Yok"}
                  color={hotel.kidsClub?.has?C.green:C.textDim}/>
                <StatBox label="Adult Only" icon="🔞"
                  value={hotel.adultOnly?.is?`${hotel.adultOnly.ageLimit}+`:"Hayır"}
                  color={hotel.adultOnly?.is?C.red:C.textDim}/>
                <StatBox label="Özel Plaj" icon="🏖"
                  value={hotel.beach?.hasPrivate?"✓ Var":"Yok"}
                  color={hotel.beach?.hasPrivate?C.green:C.textDim}/>
                <StatBox label="Snorkeling" icon="🐠"
                  value={hotel.beach?.snorkeling?"✓ Dahil":"Yok"}
                  color={hotel.beach?.snorkeling?C.gold:C.textDim}/>
                <StatBox label="Transfer" icon="🚐"
                  value={hotel.transfer?.duration||"—"}
                  color={C.cyan}/>
              </div>

              <SLabel>💪 Güçlü Yönler</SLabel>
              <div style={{marginBottom:16}}>
                {hotel.strengths.map((s,i)=>(
                  <div key={i} style={{display:"flex",gap:8,marginBottom:7,alignItems:"flex-start"}}>
                    <span style={{color:C.cyan,flexShrink:0,fontWeight:700,marginTop:1}}>›</span>
                    <span style={{fontSize:13,color:C.text,lineHeight:1.55,fontFamily:F.body}}>{s}</span>
                  </div>
                ))}
              </div>

              {hotel.competitorDiff?.length>0 && <>
                <SLabel>⚔️ Rakiplerinden Farkı</SLabel>
                <div style={{marginBottom:16}}>
                  {hotel.competitorDiff.map((d,i)=>(
                    <div key={i} style={{fontSize:12,color:C.textSub,padding:"7px 11px",
                      background:C.goldDim,border:`1px solid ${C.gold}22`,
                      borderRadius:7,marginBottom:5,fontFamily:F.body,lineHeight:1.5}}>⚡ {d}</div>
                  ))}
                </div>
              </>}

              <SLabel>🎯 Hedef Müşteri</SLabel>
              <div style={{padding:"10px 14px",background:C.cyanDim,border:`1px solid ${C.cyan}22`,
                borderRadius:9,marginBottom:16,fontSize:13,color:C.text,fontFamily:F.body}}>
                {hotel.targetCustomer}
              </div>

              <SLabel>🏖 Plaj & Deniz</SLabel>
              <div style={{background:C.surface2,borderRadius:9,padding:"2px 14px",border:`1px solid ${C.border}`,marginBottom:16}}>
                <InfoRow label="Plaj Tipi" value={hotel.beach?.type||"—"}/>
                <InfoRow label="Şezlong" value={hotel.beach?.sunbeds||"—"}/>
                <InfoRow label="Snorkeling" value={hotel.beach?.snorkeling?"✓ Ekipman Dahil":"Yok"}
                  valueColor={hotel.beach?.snorkeling?C.green:C.textDim}/>
                {hotel.beach?.waterSportsNote && (
                  <InfoRow label="Su Sporları" value={hotel.beach.waterSportsNote} last/>
                )}
              </div>

              <SLabel>⚠️ Önemli Notlar</SLabel>
              {hotel.importantNotes.map((n,i)=>(
                <div key={i} style={{fontSize:12,color:C.textSub,padding:"6px 11px",
                  background:`rgba(212,175,55,0.05)`,border:`1px solid ${C.gold}22`,
                  borderRadius:7,marginBottom:5,fontFamily:F.body}}>{n}</div>
              ))}
            </div>
          )}

          {/* ODALAR */}
          {tab==="rooms" && (
            <div style={{animation:"slideU .18s ease"}}>
              <SLabel>🛏 Oda Tipleri</SLabel>
              {hotel.roomTypes.map((r,i)=>(
                <div key={i} style={{padding:"11px 14px",background:C.surface2,borderRadius:9,
                  border:`1px solid ${C.border}`,marginBottom:8}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                    <span style={{fontSize:13,fontWeight:600,color:C.text,fontFamily:F.head}}>{r.name}</span>
                    <span style={{fontSize:12,color:C.cyan,fontFamily:F.body}}>{r.size}</span>
                  </div>
                  <div style={{fontSize:12,color:C.textSub,fontFamily:F.body}}>🪟 {r.view}</div>
                  {r.note && <div style={{fontSize:11,color:C.gold,marginTop:4,fontFamily:F.body}}>★ {r.note}</div>}
                </div>
              ))}

              <Divider my={20}/>
              <SLabel>🌊 Aquapark & Havuz</SLabel>
              <div style={{background:C.surface2,borderRadius:9,padding:"2px 14px",border:`1px solid ${C.border}`,marginBottom:16}}>
                <InfoRow label="Aquapark" value={hotel.aquapark.has?"✓ Var":"✗ Yok"}
                  valueColor={hotel.aquapark.has?C.green:C.red}/>
                {hotel.aquapark.has && <>
                  <InfoRow label="Saatler" value={hotel.aquapark.hours}/>
                  <InfoRow label="Dahil mi" value={hotel.aquapark.included?"✓ Ücretsiz":"Ücretli"}
                    valueColor={hotel.aquapark.included?C.green:C.amber}/>
                  <InfoRow label="Min. Yaş" value={`${hotel.aquapark.minAge} yaş`}/>
                </>}
                <InfoRow label="Not" value={hotel.aquapark.note} last/>
              </div>

              {hotel.kidsClub?.has && <>
                <SLabel>👧 {hotel.kidsClub.name}</SLabel>
                <div style={{background:C.surface2,borderRadius:9,padding:"2px 14px",border:`1px solid ${C.border}`,marginBottom:10}}>
                  <InfoRow label="Yaş" value={hotel.kidsClub.ageRange} valueColor={C.green}/>
                  <InfoRow label="Saatler" value={hotel.kidsClub.hours}/>
                  <InfoRow label="Ücret" value={hotel.kidsClub.price} valueColor={C.green} last/>
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16}}>
                  {hotel.kidsClub.activities.map(a=>(
                    <span key={a} style={{fontSize:11,color:C.cyan,background:C.cyanDim,
                      padding:"2px 8px",borderRadius:99,border:`1px solid ${C.cyan}33`,fontFamily:F.body}}>{a}</span>
                  ))}
                </div>
              </>}

              {hotel.adultOnly?.is && (
                <div style={{padding:"12px 14px",background:C.redDim,border:`1px solid ${C.red}44`,
                  borderRadius:9,fontSize:13,color:C.red,fontFamily:F.body}}>
                  🔞 {hotel.adultOnly.note}
                </div>
              )}
            </div>
          )}

          {/* RESTORANLAR */}
          {tab==="food" && (
            <div style={{animation:"slideU .18s ease"}}>
              <SLabel>🍽 Restoranlar & Barlar</SLabel>
              {hotel.restaurants.map((r,i)=>(
                <div key={i} style={{padding:"11px 14px",background:C.surface2,borderRadius:9,
                  border:`1px solid ${C.border}`,marginBottom:8}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                    <span style={{fontSize:13,fontWeight:600,color:C.text,fontFamily:F.head}}>{r.name}</span>
                    <span style={{fontSize:11,color:C.cyan,fontFamily:F.body}}>{r.hours}</span>
                  </div>
                  <div style={{fontSize:12,color:C.textSub,fontFamily:F.body}}>
                    {r.cuisine}
                    {r.note && <span style={{color:C.amber}}> · ⚠️ {r.note}</span>}
                  </div>
                </div>
              ))}

              <Divider my={20}/>
              <SLabel>🚐 Transfer Bilgisi</SLabel>
              <div style={{background:C.surface2,borderRadius:9,padding:"2px 14px",border:`1px solid ${C.border}`}}>
                <InfoRow label="Havalimanı" value={hotel.transfer?.airport||"—"}/>
                <InfoRow label="Süre" value={hotel.transfer?.duration||"—"} valueColor={C.cyan}/>
                <InfoRow label="Tahmini Fiyat" value={hotel.transfer?.approxPrice||"—"}/>
                <InfoRow label="Seçenekler" value={hotel.transfer?.options?.join(", ")||"—"} last/>
              </div>
              {hotel.transfer?.note && (
                <div style={{fontSize:11,color:C.gold,marginTop:8,fontFamily:F.body,padding:"6px 11px",
                  background:C.goldDim,borderRadius:7}}>💡 {hotel.transfer.note}</div>
              )}
            </div>
          )}

          {/* SATIŞ SCRİPTLERİ */}
          {tab==="sales" && (
            <div style={{animation:"slideU .18s ease"}}>
              <SLabel>🗣 Açılış Cümlesi</SLabel>
              <div style={{padding:"12px 14px",background:C.cyanDim,border:`1px solid ${C.cyan}22`,
                borderRadius:9,marginBottom:16,fontSize:13,color:C.text,
                fontFamily:F.body,lineHeight:1.65,fontStyle:"italic"}}>
                "{hotel.salesScript?.opening}"
              </div>

              <SLabel>✅ Anahtar Satış Noktaları</SLabel>
              <div style={{marginBottom:16}}>
                {hotel.salesScript?.keyPoints?.map((p,i)=>(
                  <div key={i} style={{display:"flex",gap:8,padding:"7px 11px",
                    background:C.greenDim,border:`1px solid ${C.green}22`,
                    borderRadius:7,marginBottom:5,alignItems:"flex-start"}}>
                    <span style={{color:C.green,flexShrink:0,fontWeight:700}}>✓</span>
                    <span style={{fontSize:13,color:C.text,fontFamily:F.body}}>{p}</span>
                  </div>
                ))}
              </div>

              <SLabel>💑 Balayı Satış Dili</SLabel>
              <div style={{padding:"12px 14px",background:C.pinkDim,border:`1px solid ${C.pink}22`,
                borderRadius:9,marginBottom:16,fontSize:13,color:C.text,
                fontFamily:F.body,lineHeight:1.7,whiteSpace:"pre-line"}}>
                {hotel.honeymoonSalesScript}
              </div>

              <SLabel>👨‍👩‍👧 Aile Satış Dili</SLabel>
              <div style={{padding:"12px 14px",background:C.greenDim,border:`1px solid ${C.green}22`,
                borderRadius:9,marginBottom:16,fontSize:13,color:C.text,
                fontFamily:F.body,lineHeight:1.7,whiteSpace:"pre-line"}}>
                {hotel.familySalesScript}
              </div>

              <div style={{padding:"10px 14px",background:C.goldDim,border:`1px solid ${C.gold}22`,
                borderRadius:9,fontSize:12,color:C.gold,fontFamily:F.body,fontStyle:"italic"}}>
                🎯 Kapanış: "{hotel.salesScript?.closing}"
              </div>
            </div>
          )}

          {/* İTİRAZLAR */}
          {tab==="objections" && (
            <div style={{animation:"slideU .18s ease"}}>
              <SLabel>💬 İtiraz Cevapları</SLabel>
              {hotel.objections.map((o,i)=>(
                <div key={i} style={{marginBottom:12,background:C.surface2,
                  borderRadius:9,border:`1px solid ${C.border}`,overflow:"hidden"}}>
                  <div style={{padding:"9px 14px",background:"rgba(56,189,248,0.05)",
                    borderBottom:`1px solid ${C.border}`,fontSize:13,fontWeight:600,
                    color:C.cyan,fontFamily:F.body}}>
                    ❓ {o.q}
                  </div>
                  <div style={{padding:"10px 14px",fontSize:13,color:C.text,
                    lineHeight:1.65,fontFamily:F.body}}>
                    {o.a}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* WHATSAPP */}
          {tab==="whatsapp" && (
            <div style={{animation:"slideU .18s ease"}}>
              {/* Type selector */}
              <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16}}>
                {WA_TYPES.map(t=>(
                  <button key={t.key} onClick={()=>setWaType(t.key)} style={{
                    padding:"6px 13px",borderRadius:7,fontSize:11,fontWeight:600,
                    border:`1px solid ${waType===t.key?C.cyan:C.border2}`,
                    background: waType===t.key ? C.cyanDim : "transparent",
                    color: waType===t.key ? C.cyan : C.textSub,
                    fontFamily:F.body,transition:"all .12s",
                  }}>
                    {t.icon} {t.label}
                  </button>
                ))}
              </div>

              <WABox text={currentWA}/>
              <div style={{marginTop:10,display:"flex",gap:8}}>
                <CopyBtn text={currentWA} label="WhatsApp'a Kopyala"/>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

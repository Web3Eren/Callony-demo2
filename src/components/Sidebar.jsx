// src/components/Sidebar.jsx
import { C, F } from "../utils/theme.js";
import { HOTELS } from "../data/hotels.js";

const NAV = [
  { id:"dashboard", icon:"⬛", label:"Dashboard" },
  { id:"hotels",    icon:"🏨", label:"Oteller",         count:true },
  { id:"scripts",   icon:"💬", label:"Satış Scriptleri" },
  { id:"whatsapp",  icon:"📱", label:"WhatsApp Şablonları" },
  { id:"transfer",  icon:"🚐", label:"Transfer" },
  { id:"visa",      icon:"📋", label:"Vize & Pasaport" },
  { id:"ai",        icon:"✨", label:"AI Asistan" },
  { id:"settings",  icon:"⚙️", label:"Ayarlar" },
];

export function Sidebar({ active, onChange }) {
  return (
    <div style={{
      width:216, flexShrink:0, background:C.surface,
      borderRight:`1px solid ${C.border}`,
      display:"flex", flexDirection:"column", height:"100vh",
    }}>
      {/* Logo */}
      <div style={{padding:"16px 16px 14px",borderBottom:`1px solid ${C.border}`,flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:9}}>
          <div style={{
            width:30,height:30,borderRadius:8,flexShrink:0,
            background:`linear-gradient(135deg,${C.cyan},#0ea5e9)`,
            display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,
          }}>✈️</div>
          <div>
            <div style={{fontSize:14,fontWeight:700,color:C.text,fontFamily:F.head,letterSpacing:-.3}}>
              Callony
            </div>
            <div style={{fontSize:8,color:C.textDim,letterSpacing:2.5,fontWeight:700,fontFamily:F.body}}>
              TRAVEL OPS
            </div>
          </div>
        </div>
      </div>

      {/* Region pill */}
      <div style={{padding:"10px 12px 8px"}}>
        <div style={{
          display:"flex",alignItems:"center",gap:6,padding:"6px 10px",
          background:C.surface2,borderRadius:8,border:`1px solid ${C.border}`,
        }}>
          <span style={{fontSize:12}}>🇪🇬</span>
          <span style={{fontSize:11,color:C.textSub,fontFamily:F.body,fontWeight:500}}>Şarm El Şeyh</span>
        </div>
      </div>

      {/* Nav */}
      <nav style={{flex:1,padding:"4px 8px",overflowY:"auto"}}>
        <div style={{fontSize:9,fontWeight:700,color:C.textDim,letterSpacing:2,
          padding:"8px 6px 6px",fontFamily:F.body}}>MENÜ</div>

        {NAV.map(item => {
          const isActive = active === item.id;
          return (
            <button key={item.id} onClick={() => onChange(item.id)} style={{
              width:"100%", display:"flex", alignItems:"center", gap:8,
              padding:"8px 8px", borderRadius:7, border:"none",
              background: isActive ? C.cyanDim : "transparent",
              color: isActive ? C.cyan : C.textSub,
              cursor:"pointer", fontSize:12, fontFamily:F.body,
              fontWeight: isActive ? 600 : 400,
              transition:"all .12s", textAlign:"left", marginBottom:1,
              borderLeft:`2px solid ${isActive ? C.cyan : "transparent"}`,
            }}
            onMouseOver={e=>{if(!isActive){e.currentTarget.style.background=C.surface2;e.currentTarget.style.color=C.text;}}}
            onMouseOut={e=>{if(!isActive){e.currentTarget.style.background="transparent";e.currentTarget.style.color=C.textSub;}}}>
              <span style={{fontSize:13,width:18,textAlign:"center",flexShrink:0}}>{item.icon}</span>
              <span style={{flex:1}}>{item.label}</span>
              {item.count && (
                <span style={{fontSize:10,fontWeight:700,color:isActive?C.cyan:C.textDim,
                  background:isActive?C.cyanDim:C.surface3,padding:"1px 6px",borderRadius:99,
                  border:`1px solid ${isActive?C.cyan+"44":C.border2}`}}>
                  {HOTELS.length}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Status footer */}
      <div style={{padding:"12px 14px",borderTop:`1px solid ${C.border}`,flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:4}}>
          <div style={{width:6,height:6,borderRadius:"50%",background:C.green,
            boxShadow:`0 0 5px ${C.green}`,flexShrink:0}}/>
          <span style={{fontSize:11,color:C.textSub,fontFamily:F.body}}>Sistem çevrimiçi</span>
        </div>
        <div style={{fontSize:10,color:C.textDim,fontFamily:F.body}}>
          Güncelleme: 20 May 2025
        </div>
      </div>
    </div>
  );
}

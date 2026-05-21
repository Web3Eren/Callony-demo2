// src/components/UI.jsx
import { useState } from "react";
import { C, F } from "../utils/theme.js";

export function Badge({ type }) {
  const MAP = {
    "top-seller":{label:"🔥 En Çok Satan",color:C.amber,bg:C.amberDim},
    "vip":       {label:"⭐ VIP",         color:C.gold, bg:C.goldDim},
    "balayı":    {label:"💑 Balayı",      color:C.pink, bg:C.pinkDim},
    "adult-only":{label:"18+ Adult",      color:C.red,  bg:C.redDim},
    "aile":      {label:"👨‍👩‍👧 Aile",       color:C.green,bg:C.greenDim},
  };
  const b = MAP[type]; if (!b) return null;
  return (
    <span style={{display:"inline-flex",alignItems:"center",padding:"2px 8px",borderRadius:99,
      fontSize:10,fontWeight:600,letterSpacing:.3,color:b.color,background:b.bg,
      border:`1px solid ${b.color}44`,whiteSpace:"nowrap",fontFamily:F.body}}>
      {b.label}
    </span>
  );
}

export function Chip({ icon, label, color, bg }) {
  return (
    <span style={{display:"inline-flex",alignItems:"center",gap:3,padding:"2px 8px",
      borderRadius:99,fontSize:10,fontWeight:600,color,background:bg,
      border:`1px solid ${color}44`,fontFamily:F.body,whiteSpace:"nowrap"}}>
      {icon} {label}
    </span>
  );
}

export function Tag({ children, color = C.textSub, bg = C.surface2 }) {
  return (
    <span style={{padding:"2px 8px",borderRadius:6,fontSize:10,fontWeight:600,
      color,background:bg,border:`1px solid ${C.border2}`,fontFamily:F.body}}>
      {children}
    </span>
  );
}

export function SLabel({ children, style }) {
  return (
    <div style={{fontSize:10,fontWeight:700,color:C.textDim,letterSpacing:2,
      textTransform:"uppercase",marginBottom:8,fontFamily:F.body,...style}}>
      {children}
    </div>
  );
}

export function Divider({ my = 16 }) {
  return <div style={{height:1,background:C.border,margin:`${my}px 0`}} />;
}

export function CopyBtn({ text, label = "Kopyala", small, block }) {
  const [ok, setOk] = useState(false);
  const go = () => { navigator.clipboard.writeText(text); setOk(true); setTimeout(() => setOk(false), 2000); };
  return (
    <button onClick={go} style={{
      display: block ? "flex" : "inline-flex", alignItems:"center", gap:6,
      width: block ? "100%" : "auto", justifyContent: block ? "center" : "flex-start",
      padding: small ? "5px 12px" : "8px 16px",
      borderRadius:8, border:`1px solid ${ok?C.green:C.border2}`,
      background: ok ? C.greenDim : C.surface2,
      color: ok ? C.green : C.textSub,
      fontSize: small ? 11 : 12, fontWeight:600,
      fontFamily:F.body, transition:"all .18s", whiteSpace:"nowrap",
    }}>
      {ok ? "✓ Kopyalandı" : `📋 ${label}`}
    </button>
  );
}

export function InfoRow({ label, value, valueColor, last }) {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
      padding:"7px 0",borderBottom: last ? "none" : `1px solid ${C.border}`}}>
      <span style={{fontSize:12,color:C.textSub,fontFamily:F.body}}>{label}</span>
      <span style={{fontSize:12,color:valueColor||C.text,fontWeight:600,fontFamily:F.body}}>{value}</span>
    </div>
  );
}

export function StatBox({ label, value, color = C.cyan, icon }) {
  return (
    <div style={{background:C.surface2,borderRadius:10,padding:"11px 14px",border:`1px solid ${C.border}`}}>
      <div style={{fontSize:9,color:C.textDim,letterSpacing:1.5,marginBottom:5,fontFamily:F.body,fontWeight:700}}>
        {icon && <span style={{marginRight:4}}>{icon}</span>}{label.toUpperCase()}
      </div>
      <div style={{fontSize:14,fontWeight:700,color,fontFamily:F.body}}>{value}</div>
    </div>
  );
}

export function WABox({ text }) {
  return (
    <div style={{background:"#060e1a",border:`1px solid ${C.border2}`,
      borderRadius:10,padding:"14px 16px"}}>
      <pre style={{margin:0,whiteSpace:"pre-wrap",fontSize:12,
        color:C.text,fontFamily:F.body,lineHeight:1.8}}>
        {text}
      </pre>
    </div>
  );
}

export function Btn({ children, onClick, variant = "ghost", small, icon, disabled, block }) {
  const styles = {
    primary:{ background:`linear-gradient(135deg,${C.cyan},#0ea5e9)`, color:"#fff", border:"none" },
    ghost:  { background:"transparent", color:C.textSub, border:`1px solid ${C.border2}` },
    danger: { background:C.redDim, color:C.red, border:`1px solid ${C.red}44` },
    gold:   { background:C.goldDim, color:C.gold, border:`1px solid ${C.gold}44` },
  };
  const s = styles[variant] || styles.ghost;
  return (
    <button onClick={onClick} disabled={disabled} style={{
      display:"inline-flex", alignItems:"center", gap:6,
      width: block ? "100%" : "auto", justifyContent: block ? "center" : "flex-start",
      padding: small ? "5px 12px" : "8px 16px",
      borderRadius:8, fontSize: small ? 11 : 12, fontWeight:600,
      fontFamily:F.body, transition:"all .15s", whiteSpace:"nowrap",
      opacity: disabled ? .5 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      ...s,
    }}>
      {icon && <span>{icon}</span>}{children}
    </button>
  );
}

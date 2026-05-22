// src/components/AiAssistant.jsx
import { useState, useRef, useEffect } from "react";
import { C, F } from "../utils/theme.js";
import { HOTELS } from "../data/hotels.js";
import { getAIResponse } from "../utils/aiLogic.js";
import { CopyBtn } from "./UI.jsx";

const QUICK = [
  "Bu oteli balayı çiftine nasıl anlatırım?",
  "Müşteri 'çok pahalı' dedi, ne demeliyim?",
  "Çocuklu aile için hangi otel en uygun?",
  "Seagate ile Radamis farkı nedir?",
  "Mısır güvenli mi sorusuna nasıl cevap vereyim?",
  "Magawish'in en güçlü satış noktası nedir?",
  "Adult Only oteli nasıl pazarlayayım?",
  "Snorkeling için en iyi otel hangisi?",
];

function TypingDots() {
  return (
    <div style={{display:"flex",gap:4,padding:"12px 14px",background:C.surface2,
      borderRadius:"10px 10px 10px 2px",border:`1px solid ${C.border}`,
      width:"fit-content"}}>
      {[0,1,2].map(i=>(
        <div key={i} style={{width:6,height:6,borderRadius:"50%",background:C.cyan,
          animation:`pulse 1s ease ${i*.2}s infinite`}}/>
      ))}
    </div>
  );
}

function Msg({ m }) {
  const isUser = m.role === "user";
  return (
    <div style={{display:"flex",justifyContent:isUser?"flex-end":"flex-start",
      animation:"slideU .18s ease",marginBottom:12}}>
      {!isUser && (
        <div style={{width:26,height:26,borderRadius:7,flexShrink:0,
          background:`linear-gradient(135deg,${C.cyan},#0ea5e9)`,
          display:"flex",alignItems:"center",justifyContent:"center",
          fontSize:13,marginRight:8,marginTop:1}}>✨</div>
      )}
      <div style={{maxWidth:"76%",display:"flex",flexDirection:"column",
        alignItems:isUser?"flex-end":"flex-start",gap:4}}>
        <div style={{padding:"10px 14px",borderRadius:isUser?"10px 10px 2px 10px":"10px 10px 10px 2px",
          background:isUser?C.cyanDim:C.surface2,
          border:`1px solid ${isUser?C.cyan+"44":C.border}`,
          fontSize:13,color:C.text,lineHeight:1.65,fontFamily:F.body,whiteSpace:"pre-line"}}>
          {m.text}
        </div>
        {!isUser && m.text && (
          <CopyBtn text={m.text} label="Kopyala" small/>
        )}
      </div>
    </div>
  );
}

export function AiAssistant() {
  const [msgs, setMsgs] = useState([{
    role:"assistant",
    text:"Merhaba! Ben Callony AI satış asistanınım.\n\nOtel bilgileri, satış scriptleri, itiraz cevapları veya otel karşılaştırması için sorularınızı yazın. Hızlı ve satış odaklı cevaplar veriyorum. 🚀",
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior:"smooth"});
  }, [msgs, loading]);

  const send = (q) => {
    const question = (q || input).trim();
    if (!question || loading) return;
    setInput("");
    setMsgs(m => [...m, {role:"user", text:question}]);
    setLoading(true);

    // Demo typing delay — API yok, tamamen frontend
    const delay = 300 + Math.random() * 200;
    setTimeout(() => {
      let answer;
      try {
        answer = getAIResponse(question);
      } catch(err) {
        answer = "⚠️ Bir hata oluştu, lütfen tekrar deneyin.";
        console.error("[AiAssistant]", err);
      }
      setMsgs(m => [...m, {role:"assistant", text:answer}]);
      setLoading(false);
      inputRef.current?.focus();
    }, delay);
  };

  return (
    <div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg}}>

      {/* Header */}
      <div style={{padding:"16px 24px",borderBottom:`1px solid ${C.border}`,
        background:C.surface,flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
          <div style={{width:34,height:34,borderRadius:9,
            background:`linear-gradient(135deg,${C.cyan},#0ea5e9)`,
            display:"flex",alignItems:"center",justifyContent:"center",fontSize:17}}>✨</div>
          <div>
            <div style={{fontSize:14,fontWeight:700,color:C.text,fontFamily:F.head}}>Callony AI</div>
            <div style={{fontSize:11,color:C.textSub,fontFamily:F.body}}>Satış odaklı · Call center hızında</div>
          </div>
          <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:C.green,
              boxShadow:`0 0 5px ${C.green}`}}/>
            <span style={{fontSize:11,color:C.textSub,fontFamily:F.body}}>Hazır</span>
          </div>
        </div>

        {/* Quick prompts */}
        <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
          {QUICK.map(p=>(
            <button key={p} onClick={()=>send(p)} disabled={loading} style={{
              padding:"3px 10px",borderRadius:99,fontSize:10,fontWeight:500,
              border:`1px solid ${C.border2}`,background:"transparent",
              color:C.textSub,fontFamily:F.body,transition:"all .12s",
              cursor:loading?"not-allowed":"pointer",
            }}
            onMouseOver={e=>{if(!loading){e.currentTarget.style.borderColor=C.cyan;e.currentTarget.style.color=C.cyan;}}}
            onMouseOut={e=>{e.currentTarget.style.borderColor=C.border2;e.currentTarget.style.color=C.textSub;}}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div style={{flex:1,overflowY:"auto",padding:"18px 24px"}}>
        {msgs.map((m,i) => <Msg key={i} m={m}/>)}
        {loading && <TypingDots/>}
        <div ref={bottomRef}/>
      </div>

      {/* Input */}
      <div style={{padding:"12px 24px",borderTop:`1px solid ${C.border}`,
        background:C.surface,flexShrink:0,display:"flex",gap:8}}>
        <input ref={inputRef} value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&send()}
          placeholder="Soru yazın... (Enter gönderir)"
          disabled={loading}
          style={{flex:1,padding:"9px 14px",borderRadius:9,
            border:`1px solid ${input?C.cyan+"55":C.border2}`,
            background:C.bg,color:C.text,fontSize:13,outline:"none",
            fontFamily:F.body,transition:"border-color .15s",
            opacity:loading?.6:1}}/>
        <button onClick={()=>send()} disabled={loading||!input.trim()} style={{
          padding:"9px 18px",borderRadius:9,
          background:loading||!input.trim()?C.surface2:`linear-gradient(135deg,${C.cyan},#0ea5e9)`,
          border:`1px solid ${loading||!input.trim()?C.border2:"transparent"}`,
          color:loading||!input.trim()?C.textDim:"#fff",
          fontSize:13,fontWeight:600,fontFamily:F.body,
          opacity:loading||!input.trim()?.6:1,
          transition:"all .15s",cursor:loading||!input.trim()?"not-allowed":"pointer",
        }}>
          {loading?"…":"→"}
        </button>
      </div>

    </div>
  );
}

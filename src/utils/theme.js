export const C = {
  bg:"#0B1120",surface:"#0D1526",surface2:"#111c30",surface3:"#162038",
  border:"#182235",border2:"#1e2e48",borderHov:"#2a3f60",
  cyan:"#38BDF8",cyanDim:"rgba(56,189,248,0.08)",cyanGlow:"rgba(56,189,248,0.15)",cyanMid:"rgba(56,189,248,0.22)",
  gold:"#D4AF37",goldDim:"rgba(212,175,55,0.10)",goldGlow:"rgba(212,175,55,0.18)",
  text:"#E2EBF6",textSub:"#7A95B4",textDim:"#354E6A",
  green:"#2DD4BF",greenDim:"rgba(45,212,191,0.09)",
  red:"#F87171",redDim:"rgba(248,113,113,0.09)",
  amber:"#FBB024",amberDim:"rgba(251,176,36,0.10)",
  pink:"#E879A0",pinkDim:"rgba(232,121,160,0.09)",
};
export const F={head:"'Poppins',sans-serif",body:"'Inter',sans-serif"};
export const GFONTS=`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');`;
export const GCSS=`
*{box-sizing:border-box;margin:0;padding:0;}
html,body,#root{height:100%;overflow:hidden;}
body{background:#0B1120;font-family:'Inter',sans-serif;color:#E2EBF6;}
::-webkit-scrollbar{width:3px;height:3px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:#1e2e48;border-radius:99px;}
input::placeholder,textarea::placeholder{color:#354E6A;}
button{font-family:'Inter',sans-serif;cursor:pointer;}
@keyframes slideR{from{transform:translateX(20px);opacity:0}to{transform:translateX(0);opacity:1}}
@keyframes slideU{from{transform:translateY(8px);opacity:0}to{transform:translateY(0);opacity:1}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes pulse{0%,100%{opacity:.2}50%{opacity:1}}
`;

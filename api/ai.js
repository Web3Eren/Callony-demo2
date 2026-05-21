// api/ai.js — Vercel Serverless Function
// API key SADECE environment variable'dan okunur.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error:"Method not allowed" });
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error:"ANTHROPIC_API_KEY tanımlı değil." });
  const { question, hotelContext } = req.body || {};
  if (!question?.trim()) return res.status(400).json({ error:"Soru boş." });
  if (question.length > 1200) return res.status(400).json({ error:"Soru çok uzun." });
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method:"POST",
      headers:{"Content-Type":"application/json","x-api-key":apiKey,"anthropic-version":"2023-06-01"},
      body:JSON.stringify({
        model:"claude-sonnet-4-20250514", max_tokens:500,
        system:`Sen Callony'nin uzman call center satış asistanısın. Şarm El Şeyh / Mısır otel satışı konusunda deneyimlisin.
Kurallar: Kısa cevaplar (max 4-5 cümle). Satış odaklı. Pratik. Türkçe. Emoji kullanabilirsin.
Call center hızında cevap ver — uzun metinler olmamalı.

Otel verileri:
${hotelContext||"Veri yok"}`,
        messages:[{role:"user",content:question.trim()}],
      }),
    });
    if (!r.ok) return res.status(502).json({ error:"AI servisi yanıt vermedi." });
    const d = await r.json();
    const answer = d.content?.map(c=>c.text).join("")||"Yanıt alınamadı.";
    return res.status(200).json({ answer });
  } catch(err) {
    return res.status(500).json({ error:"Sunucu hatası: "+err.message });
  }
}

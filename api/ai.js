// api/chat.js
// Vercel Serverless Function — Callony Demo AI
// Anthropic API'ye istek atar, yanıtı { reply: "..." } olarak döner.

export default async function handler(req, res) {

  // ── CORS ──────────────────────────────────────────────────────────────────
  res.setHeader("Access-Control-Allow-Origin",  "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Yalnızca POST istekleri kabul edilir." });
  }

  // ── API KEY ───────────────────────────────────────────────────────────────
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("[chat.js] ANTHROPIC_API_KEY bulunamadı.");
    return res.status(500).json({
      error: "Sunucu yapılandırma hatası: API anahtarı tanımlı değil.",
    });
  }

  // ── BODY PARSE ────────────────────────────────────────────────────────────
  let message;
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    message = (body?.message || body?.question || "").trim();
  } catch {
    return res.status(400).json({ error: "İstek gövdesi JSON formatında olmalıdır." });
  }

  if (!message) {
    return res.status(400).json({ error: "message alanı boş olamaz." });
  }

  // ── ANTHROPIC API ─────────────────────────────────────────────────────────
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type":         "application/json",
        "x-api-key":            apiKey,
        "anthropic-version":    "2023-06-01",
      },
      body: JSON.stringify({
        model:      "claude-haiku-4-5-20251001", // güncel Haiku — claude-3-5-haiku-latest Şubat 2026'da retire edildi
        max_tokens: 1024,
        system: `Sen Callony'nin Şarm El-Şeyh otel satış asistanısın.
Kısa, net ve satış odaklı cevaplar ver. Gereksiz uzatma.
Otel isimleri: Rixos Radamis Sharm El Sheikh, Rixos Radamis – Beach Hotel, Rixos Premium Seagate Sharm El Sheikh, Swissotel Sharm El Sheikh, Rixos Premium Magawish Suites & Villas.
Türkçe cevap ver.`,
        messages: [
          { role: "user", content: message }
        ],
      }),
    });

    // HTTP seviyesi hata
    if (!response.ok) {
      let detail = "";
      try {
        const errBody = await response.json();
        detail = errBody?.error?.message || JSON.stringify(errBody);
      } catch {
        detail = await response.text().catch(() => "");
      }
      console.error(`[chat.js] Anthropic HTTP ${response.status}:`, detail);
      return res.status(502).json({
        error: `Anthropic API hatası (${response.status}): ${detail || "Bilinmeyen hata"}`,
      });
    }

    // Başarılı yanıt
    const data = await response.json();
    const reply = data?.content?.[0]?.text?.trim() || "";

    if (!reply) {
      console.warn("[chat.js] Anthropic yanıtı boş döndü:", JSON.stringify(data));
      return res.status(502).json({ error: "AI yanıtı boş döndü, lütfen tekrar deneyin." });
    }

    return res.status(200).json({ reply });

  } catch (err) {
    console.error("[chat.js] Beklenmedik hata:", err);
    return res.status(500).json({
      error: `Sunucu hatası: ${err.message || "Bilinmeyen hata"}`,
    });
  }
}

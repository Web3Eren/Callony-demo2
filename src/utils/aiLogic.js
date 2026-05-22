// src/utils/aiLogic.js
// Callony Demo — Frontend Rule-Based AI
// hotels.js ve faqs.js datasını okuyarak cevap üretir.
// Gerçek API zorunlu değildir.

import { HOTELS } from "../data/hotels.js";
import { FAQS } from "../data/faqs.js";

// ─── Normalize: küçük harf + Türkçe karakter düzleştirme ──────────────────────
function norm(str = "") {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
    .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/İ/g, "i").replace(/Ğ/g, "g");
}

// ─── Soruda geçen otel(ler)i bul ─────────────────────────────────────────────
// Hem tam kelime eşleşmesi hem de otel adındaki her anlamlı token'ı dener.
// Özel takma adlar için h.aliases dizisi desteklenir.
function findHotels(query) {
  const q = norm(query);
  return (HOTELS || []).filter((h) => {
    try {
      // Tüm aday isimler: asıl ad + aliases
      const candidates = [h.name, ...(Array.isArray(h.aliases) ? h.aliases : [])];
      return candidates.some((candidate) => {
        const cn = norm(candidate);
        // Tam eşleşme
        if (q.includes(cn)) return true;
        // Token bazlı: "Rixos Seagate" → ["rixos","seagate"], her biri ≥4 harf
        const tokens = cn.split(/\s+/).filter((t) => t.length >= 4);
        return tokens.length > 0 && tokens.every((t) => q.includes(t));
      });
    } catch {
      return false;
    }
  });
}

// ─── FAQ datasında eşleşme ara ────────────────────────────────────────────────
function findFaq(query) {
  const q = norm(query);
  const scored = (FAQS || []).map((f) => {
    const keywords = (f.tags || f.keywords || []).map(norm);
    const hits = keywords.filter((kw) => kw && q.includes(kw)).length;
    return { faq: f, hits };
  }).filter((x) => x.hits > 0);
  scored.sort((a, b) => b.hits - a.hits);
  return scored[0]?.faq || null;
}

// ─── İlk N kelime (özet kısaltma yardımcısı) ─────────────────────────────────
function short(text = "", maxWords = 30) {
  if (!text || typeof text !== "string") return "";
  const words = text.trim().split(/\s+/);
  return words.length <= maxWords ? text : words.slice(0, maxWords).join(" ") + "…";
}

// ─── Objection'ı güvenli stringe çevir ───────────────────────────────────────
// { q: "...", a: "..." } formatını da, düz string'i de kabul eder.
function formatObjection(o, index) {
  if (!o) return null;
  if (typeof o === "string") return `· ${o}`;
  if (typeof o === "object") {
    const question = o.q || o.question || o.soru || "";
    const answer   = o.a || o.answer  || o.cevap || "";
    if (question && answer) return `❓ ${question}\n   ${answer}`;
    if (answer)   return `· ${answer}`;
    if (question) return `· ${question}`;
  }
  return null;
}

// ─── Swim-up oda kontrolü ─────────────────────────────────────────────────────
// swimUpRooms.has, roomTypes içinde anahtar kelime veya rooms dizisi kontrol eder.
const SWIMUP_KEYWORDS = ["swim up", "swim-up", "swimup", "havuz erisim", "havuz erişim", "direkt havuz", "pool access"];

function hasSwimUp(hotel) {
  try {
    if (hotel.swimUpRooms?.has) return true;

    // roomTypes: dizi veya obje olabilir
    const rt = hotel.roomTypes;
    if (Array.isArray(rt)) {
      return rt.some((r) => {
        const rn = norm(typeof r === "string" ? r : (r.name || r.type || ""));
        return SWIMUP_KEYWORDS.some((kw) => rn.includes(norm(kw)));
      });
    }
    if (rt && typeof rt === "object") {
      return Object.values(rt).some((r) => {
        const rn = norm(typeof r === "string" ? r : (r.name || r.type || ""));
        return SWIMUP_KEYWORDS.some((kw) => rn.includes(norm(kw)));
      });
    }

    // rooms dizisi fallback
    const rooms = hotel.rooms;
    if (Array.isArray(rooms)) {
      return rooms.some((r) => {
        const rn = norm(typeof r === "string" ? r : (r.name || r.type || ""));
        return SWIMUP_KEYWORDS.some((kw) => rn.includes(norm(kw)));
      });
    }
  } catch {
    return false;
  }
  return false;
}

// ─── Otel özet bloğu üret ─────────────────────────────────────────────────────
function buildHotelBlock(hotel, context = "general") {
  const lines = [];

  lines.push(`🏨 ${hotel.name}`);
  if (hotel.concept) {
    const stars = hotel.stars ? "★".repeat(Number(hotel.stars)) + " · " : "";
    lines.push(`${stars}${hotel.concept}`);
  }
  lines.push("");

  // Bağlama göre satış scripti
  if (context === "honeymoon" && hotel.honeymoonSalesScript) {
    lines.push(`💍 Balayı için: ${short(hotel.honeymoonSalesScript, 35)}`);
  } else if (context === "family" && hotel.familySalesScript) {
    lines.push(`👨‍👩‍👧 Aile için: ${short(hotel.familySalesScript, 35)}`);
  } else if (hotel.salesScript?.opening) {
    lines.push(`💬 "${short(hotel.salesScript.opening, 30)}"`);
  } else if (typeof hotel.salesScript === "string") {
    lines.push(`💬 ${short(hotel.salesScript, 35)}`);
  }

  // Güçlü yönler
  const strengths = hotel.strengths || hotel.salesScript?.keyPoints || [];
  if (Array.isArray(strengths) && strengths.length > 0) {
    lines.push("");
    lines.push("✅ Güçlü yönler:");
    strengths.slice(0, 4).forEach((s) => {
      if (s && typeof s === "string") lines.push(`  · ${s}`);
    });
  }

  // Hedef müşteri
  if (hotel.targetCustomer) {
    lines.push("");
    lines.push(`🎯 ${short(hotel.targetCustomer, 20)}`);
  }

  // Öne çıkan chip'ler
  const chips = [];
  if (hotel.aquapark?.has)      chips.push("🌊 Aquapark");
  if (hotel.kidsClub?.has)      chips.push("👧 Çocuk Kulübü");
  if (hotel.beach?.hasPrivate)  chips.push("🏖 Özel Plaj");
  if (hotel.adultOnly?.is)      chips.push(`🔞 ${hotel.adultOnly.ageLimit || 16}+ Only`);
  if (hotel.beach?.snorkeling)  chips.push("🐠 Snorkeling");
  if (hasSwimUp(hotel))         chips.push("🏊 Swim-up Oda");
  if (chips.length > 0) lines.push("\n" + chips.join("  ·  "));

  return lines.join("\n");
}

// ─── Ana AI Fonksiyonu ────────────────────────────────────────────────────────
export function getAIResponse(question) {
  try {
    if (!question?.trim()) return "Bir soru yazın, hemen yanıtlayayım! 😊";

    const q = norm(question);
    const NOTE = "\n\n─\n💡 Bu bilgi demo datasına göre hazırlanmıştır.";

    // ── 1. FAQ anahtar kelimeleri: vize, pasaport, transfer ────────────────
    const faqKeywords = [
      "vize", "pasaport", "transfer", "havalimani", "airport",
      "check-in", "check in", "gec cikis", "checkout", "para", "doviz", "nakit",
    ];
    if (faqKeywords.some((kw) => q.includes(kw))) {
      const faq = findFaq(question);
      if (faq) return `📋 ${faq.question}\n\n${faq.answer}${NOTE}`;
    }

    // ── 2. Otel karşılaştırma (2+ otel) ──────────────────────────────────
    const mentionedHotels = findHotels(question);

    if (mentionedHotels.length >= 2) {
      const isHoneymoon = /balayi|balaji|cift|romantik|adults.?only|yetiskin/.test(q);
      const isFamily    = /aile|cocuk|bebek|aquapark|kids/.test(q);
      const ctx = isHoneymoon ? "honeymoon" : isFamily ? "family" : "general";
      const blocks = mentionedHotels.map((h) => buildHotelBlock(h, ctx));
      return `📊 Karşılaştırma:\n\n${blocks.join("\n\n─────────────\n\n")}${NOTE}`;
    }

    // ── 3. Tek otel sorusu ──────────────────────────────────────────────
    if (mentionedHotels.length === 1) {
      const hotel = mentionedHotels[0];
      const isHoneymoon = /balayi|balaji|cift|romantik|adults.?only|yetiskin/.test(q);
      const isFamily    = /aile|cocuk|bebek|aquapark|kids/.test(q);
      const ctx = isHoneymoon ? "honeymoon" : isFamily ? "family" : "general";

      // İtiraz sorusu
      if (/pahali|ucuz|fiyat|neden bu kadar|deger.?mi|itiraz/.test(q)) {
        const rawObj = hotel.objections || hotel.salesScript?.objections || [];
        const objections = Array.isArray(rawObj) ? rawObj : [];
        if (objections.length > 0) {
          const lines = [`💡 ${hotel.name} — İtiraz Yönetimi:\n`];
          objections.slice(0, 3).forEach((o, i) => {
            const formatted = formatObjection(o, i);
            if (formatted) lines.push(formatted);
          });
          return lines.join("\n") + NOTE;
        }
      }

      return buildHotelBlock(hotel, ctx) + NOTE;
    }

    // ── 4. Genel aile / çocuk sorusu ───────────────────────────────────
    if (/aile|cocuk|bebek|kids/.test(q)) {
      const family = HOTELS.filter(
        (h) => h.kidsClub?.has || h.aquapark?.has || norm(h.targetCustomer || "").includes("aile")
      );
      if (family.length > 0) {
        const lines = ["👨‍👩‍👧 Aile & Çocuklu misafirler için öneriler:\n"];
        family.forEach((h) => {
          const feats = [];
          if (h.aquapark?.has) feats.push("Aquapark");
          if (h.kidsClub?.has) feats.push("Çocuk Kulübü");
          lines.push(`🏨 ${h.name}${feats.length ? " — " + feats.join(", ") : ""}`);
          if (h.familySalesScript) lines.push(`   ${short(h.familySalesScript, 25)}`);
        });
        return lines.join("\n") + NOTE;
      }
    }

    // ── 5. Balayı / çift / adults only sorusu ──────────────────────────
    if (/balayi|balaji|cift|romantik|adults.?only|yetiskin/.test(q)) {
      const honeymoon = HOTELS.filter(
        (h) => h.adultOnly?.is || h.honeymoonSalesScript || h.badges?.includes("balayı")
      );
      if (honeymoon.length > 0) {
        const lines = ["💍 Balayı & Çiftler için öneriler:\n"];
        honeymoon.forEach((h) => {
          const label = h.adultOnly?.is ? ` — ${h.adultOnly.ageLimit || 16}+ Adults Only` : "";
          lines.push(`🏨 ${h.name}${label}`);
          if (h.honeymoonSalesScript) lines.push(`   ${short(h.honeymoonSalesScript, 25)}`);
        });
        return lines.join("\n") + NOTE;
      }
    }

    // ── 6. Aquapark sorusu ──────────────────────────────────────────────
    if (/aquapark|su.?park/.test(q)) {
      const aq = HOTELS.filter((h) => h.aquapark?.has);
      if (aq.length > 0) {
        const lines = ["🌊 Aquapark bulunan oteller:\n"];
        aq.forEach((h) => {
          const detail = h.aquapark?.slides ? `${h.aquapark.slides} kaydırak` : "";
          lines.push(`🏨 ${h.name}${detail ? " — " + detail : ""}`);
        });
        return lines.join("\n") + NOTE;
      }
    }

    // ── 7. Swim-up oda sorusu ───────────────────────────────────────────
    if (/swim.?up|havuzlu.?oda|pool.?access|direkt.?havuz/.test(q)) {
      const sw = HOTELS.filter(hasSwimUp);
      if (sw.length > 0) {
        const lines = ["🏊 Swim-up oda bulunan oteller:\n"];
        sw.forEach((h) => lines.push(`🏨 ${h.name}`));
        return lines.join("\n") + NOTE;
      }
      return `🏊 Swim-up oda bilgisi demo datasında şu an eşleşmiyor.\nhotels.js'de roomTypes içinde "Swim Up" geçen kayıtlar otomatik algılanır.${NOTE}`;
    }

    // ── 8. Snorkeling sorusu ────────────────────────────────────────────
    if (/snorkel|dalis|mercan|reef/.test(q)) {
      const sn = HOTELS.filter((h) => h.beach?.snorkeling);
      if (sn.length > 0) {
        const lines = ["🐠 Snorkeling imkânı olan oteller:\n"];
        sn.forEach((h) => lines.push(`🏨 ${h.name}`));
        return lines.join("\n") + NOTE;
      }
    }

    // ── 9. FAQ genel fallback ───────────────────────────────────────────
    const faqFallback = findFaq(question);
    if (faqFallback) {
      return `📋 ${faqFallback.question}\n\n${faqFallback.answer}${NOTE}`;
    }

    // ── 10. Cevap bulunamadı ────────────────────────────────────────────
    return [
      "🤔 Bu soruya demo datasında doğrudan bir cevap bulunamadı.",
      "",
      "Deneyebileceğiniz sorular:",
      '· "Seagate ile Radamis farkı nedir?"',
      '· "Çocuklu aile için hangi otel?"',
      '· "Balayı için öneri"',
      '· "Swissotel adults only mu?"',
      '· "Magawish kimlere uygun?"',
      '· "Vize gerekiyor mu?"',
      '· "Transfer süresi ne kadar?"',
      '· "Aquapark hangi otelde var?"',
      '· "Swim-up oda hangi otelde?"',
      "",
      "─\n💡 Demo datasına göre hazırlanmıştır.",
    ].join("\n");

  } catch (err) {
    console.error("[aiLogic] getAIResponse error:", err);
    return "⚠️ Beklenmedik bir hata oluştu. Lütfen tekrar deneyin.";
  }
}

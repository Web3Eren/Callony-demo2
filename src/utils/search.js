// src/utils/search.js

const SYNONYMS = {
  aquapark: ["su parki", "kaydırak", "water park", "havuz", "pool"],
  cocuk:    ["kids", "mini club", "aile", "family", "bebek", "children"],
  balayi:   ["honeymoon", "romantik", "cift", "dugun", "evlilik", "couple"],
  adult:    ["yetiskin", "adult only", "18+", "buyuk", "sessiz", "quiet"],
  luks:     ["luxury", "premium", "vip", "kaliteli"],
  plaj:     ["beach", "deniz", "kumsal", "sahil", "koy"],
  snorkeling:["dalis", "diving", "mercan", "su alti", "kizildeniz"],
  transfer: ["ulasim", "havalimani", "airport", "servis", "arac"],
  vize:     ["pasaport", "giris", "seyahat", "belge", "dokuman"],
  fiyat:    ["para", "ucret", "maliyet", "butce", "ucuz", "pahali", "ekonomik"],
  spa:      ["masaj", "wellness", "terapi", "hamam", "sauna"],
  sarm:     ["sharm", "sarm el sey", "misir", "egypt", "kizildeniz"],
  rixos:    ["rixy", "premium", "seagate", "golf villa"],
  aile:     ["family", "cocuk", "kids", "bebek", "cocuklu"],
};

// ─── Yardımcılar ──────────────────────────────────────────────────────────────

/** Her türlü değeri güvenle string'e çevirir */
function toStr(val) {
  if (val == null) return "";
  if (typeof val === "string") return val;
  if (typeof val === "number" || typeof val === "boolean") return String(val);
  return "";
}

/**
 * Array, string veya herhangi bir şeyi güvenle string dizisine çevirir.
 * join() çağrısından önce her zaman bunu kullanın.
 */
function toStrArr(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val.map(toStr).filter(Boolean);
  if (typeof val === "string" && val.trim()) return [val.trim()];
  return [];
}

/** Objection'ı { q, a } veya string olarak kabul eder */
function objectionToStr(o) {
  if (!o) return "";
  if (typeof o === "string") return o;
  if (typeof o === "object") {
    const q = toStr(o.q || o.question || o.soru);
    const a = toStr(o.a || o.answer  || o.cevap);
    return [q, a].filter(Boolean).join(" ");
  }
  return "";
}

export function norm(s = "") {
  return toStr(s)
    .toLowerCase()
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
    .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9\s]/g, "").trim();
}

function lev(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 99;
  const d = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) =>
      i === 0 ? j : j === 0 ? i : 0
    )
  );
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = a[i - 1] === b[j - 1]
        ? d[i - 1][j - 1]
        : 1 + Math.min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1]);
  return d[a.length][b.length];
}

function expand(terms) {
  const out = new Set(terms);
  terms.forEach((t) => {
    Object.entries(SYNONYMS).forEach(([k, vs]) => {
      const nk = norm(k);
      if (nk.includes(t) || t.includes(nk)) {
        out.add(nk);
        vs.forEach((v) => out.add(norm(v)));
      }
      vs.forEach((v) => {
        if (norm(v).includes(t)) {
          out.add(nk);
          vs.forEach((v2) => out.add(norm(v2)));
        }
      });
    });
  });
  return [...out];
}

function scoreText(txt, terms) {
  const n = norm(txt);
  const words = n.split(/\s+/);
  return terms.reduce((s, t) => {
    if (n.includes(t)) return s + 3;
    return s + words.reduce((ws, w) => {
      const d = lev(w, t);
      return ws + (d === 0 ? 3 : d === 1 ? 2 : d === 2 && t.length > 4 ? 1 : 0);
    }, 0);
  }, 0);
}

function hotelCorpus(h) {
  try {
    // keyPoints güvenli join
    const keyPoints = toStrArr(h.salesScript?.keyPoints).join(" ");

    // objections — { q, a } veya string her ikisini destekle
    const objText = toStrArr(h.objections)
      .map(objectionToStr)
      .filter(Boolean)
      .join(" ");

    // competitorDiff — string veya array
    const competitorText = toStrArr(h.competitorDiff).join(" ");

    // strengths — string veya array
    const strengthsText = toStrArr(h.strengths).join(" ");

    // tags
    const tagsText = toStrArr(h.tags).join(" ");

    return [
      toStr(h.name),
      toStr(h.region),
      toStr(h.concept),
      toStr(h.targetCustomer),
      tagsText,
      strengthsText,
      competitorText,
      h.aquapark?.has    ? "aquapark su parki kaydırak" : "",
      h.kidsClub?.has    ? "cocuk kulubu kids club mini club" : "",
      h.adultOnly?.is    ? "adult only yetiskin 18+ sessiz" : "",
      h.beach?.snorkeling? "snorkeling dalış" : "",
      keyPoints,
      toStr(h.honeymoonSalesScript),
      toStr(h.familySalesScript),
      objText,
    ].join(" ");
  } catch {
    return toStr(h?.name);
  }
}

function faqCorpus(f) {
  try {
    return [
      toStr(f.question),
      toStr(f.answer),
      toStr(f.category),
      ...toStrArr(f.tags),
    ].join(" ");
  } catch {
    return "";
  }
}

// ─── Dışa aktarılan fonksiyonlar ─────────────────────────────────────────────

export function searchAll(query, hotels, faqs) {
  try {
    if (!query || norm(query).length < 1) return { hotels: [], faqs: [], total: 0 };
    const terms = norm(query).split(/\s+/).filter((t) => t.length > 0);
    const exp   = expand(terms);

    const safeHotels = Array.isArray(hotels) ? hotels : [];
    const safeFaqs   = Array.isArray(faqs)   ? faqs   : [];

    const sh = safeHotels
      .map((h) => { try { return { ...h, _s: scoreText(hotelCorpus(h), exp) }; } catch { return { ...h, _s: 0 }; } })
      .filter((h) => h._s > 0)
      .sort((a, b) => b._s - a._s);

    const sf = safeFaqs
      .map((f) => { try { return { ...f, _s: scoreText(faqCorpus(f), exp) }; } catch { return { ...f, _s: 0 }; } })
      .filter((f) => f._s > 0)
      .sort((a, b) => b._s - a._s);

    return { hotels: sh, faqs: sf, total: sh.length + sf.length };
  } catch {
    return { hotels: [], faqs: [], total: 0 };
  }
}

export function buildAIContext(hotels) {
  try {
    const safeHotels = Array.isArray(hotels) ? hotels : [];
    return safeHotels.map((h) => {
      try {
        // Her alan için toStrArr + join — array veya string fark etmez
        const strengths     = toStrArr(h.strengths).join("; ")     || "—";
        const competitorDiff= toStrArr(h.competitorDiff).join("; ")|| "—";
        const keyPoints     = toStrArr(h.salesScript?.keyPoints).join("; ") || "—";

        const objText = toStrArr(h.objections)
          .map((o) => {
            if (typeof o === "string") return o;
            if (typeof o === "object") {
              const q = toStr(o.q || o.question || "");
              const a = toStr(o.a || o.answer   || "");
              return q && a ? `"${q}" → ${a}` : q || a;
            }
            return "";
          })
          .filter(Boolean)
          .join(" | ") || "—";

        return [
          `OTEL: ${toStr(h.name)} | ${toStr(h.region)} | ${toStr(h.concept)}`,
          `Hedef: ${toStr(h.targetCustomer)}`,
          `Güçlü Yönler: ${strengths}`,
          `Aquapark: ${h.aquapark?.has ? "VAR - " + toStr(h.aquapark.note) : "YOK"}`,
          `Çocuk Kulübü: ${h.kidsClub?.has ? toStr(h.kidsClub.name) + " " + toStr(h.kidsClub.ageRange) : "YOK"}`,
          `Adult Only: ${h.adultOnly?.is ? "EVET " + toStr(h.adultOnly.ageLimit) + "+" : "HAYIR"}`,
          `Satış Açılışı: ${toStr(h.salesScript?.opening)}`,
          `Anahtar Noktalar: ${keyPoints}`,
          `İtirazlar: ${objText}`,
          `Rakip Farkı: ${competitorDiff}`,
        ].join("\n");
      } catch {
        return `OTEL: ${toStr(h?.name)} — veri yüklenemedi`;
      }
    }).join("\n\n---\n\n");
  } catch {
    return "";
  }
}

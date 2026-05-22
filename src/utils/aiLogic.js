// src/utils/aiLogic.js
// Callony AI — Demo Satış Asistanı
// Frontend-only, API gerektirmez.

// ─── Normalize ───────────────────────────────────────────────────────────────
function norm(str = "") {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
    .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/İ/g, "i").replace(/Ğ/g, "g");
}

function has(q, ...keywords) {
  return keywords.some(kw => norm(q).includes(norm(kw)));
}

// ─── Otel Profilleri ──────────────────────────────────────────────────────────
const HOTELS = {
  radamis: {
    fullName: "Rixos Radamis Sharm El Sheikh",
    stars: 5,
    concept: "Ultra Her Şey Dahil",
    pitch: "Rixos Radamis, geniş aile odaları, dev aquapark ve nefes kesen mercan resifleriyle ailelerin birinci tercihi. Çocuklar Rixy Kids Club'da eğlenirken ebeveynler beach bar'da dinlenebilir.",
    honeymoon: "Radamis'in özel sahil köşeleri ve romantik gün batımı manzarası çiftler için unutulmaz anlar yaratıyor. Honeymoon paketi ile oda yükseltmesi ve şampanya servisi dahil.",
    family: "Aquapark, Rixy Kids Club (4-12 yaş ücretsiz) ve geniş aile süitleriyle Radamis ailelerin favorisi. Çocuklar güvende, ebeveynler huzurlu.",
    strengths: ["Dev aquapark — 12 kaydırak", "Rixy Kids Club ücretsiz", "Doğrudan mercan resifine erişim", "Geniş aile odaları", "Ultra HSD konsept"],
    adultOnly: false,
    aquapark: true,
    snorkeling: true,
    swimUp: false,
    objection: "Fiyat farkı tamamen aquapark, çocuk kulübü ve ultra HSD konsepiyle açıklanıyor. Başka bir otelde bu hizmetleri ayrı ayrı öderdiniz — burada hepsi dahil.",
  },
  radamisBeach: {
    fullName: "Rixos Radamis Beach Hotel",
    stars: 5,
    concept: "Her Şey Dahil",
    pitch: "Rixos Radamis Beach, direkt plaj erişimi ve samimi Rixos kalitesiyle uygun bütçeli misafirler için ideal seçim. Şarm'ın en güzel koyu üzerinde konumlanıyor.",
    honeymoon: "Sahil odaları ve özel plaj köşeleriyle romantik bir tatil arayan çiftler için sade ama şık bir tercih.",
    family: "Çocuk havuzu ve animasyon ekibiyle aileler için rahat bir seçenek. Aquapark isteyenler için Radamis ana otele ücretsiz transfer mevcut.",
    strengths: ["Direkt plaj erişimi", "Rixos kalitesi uygun fiyata", "Samimi ve sıcak atmosfer", "Radamis aquapark'a erişim imkânı"],
    adultOnly: false,
    aquapark: false,
    snorkeling: true,
    swimUp: false,
    objection: "Radamis Beach, Rixos kalitesini daha erişilebilir bir fiyata sunan bilinçli bir tercih. Bütçe odaklı müşteriler için mükemmel değer.",
  },
  seagate: {
    fullName: "Rixos Premium Seagate",
    stars: 5,
    concept: "Ultra Her Şey Dahil — Adults Only (16+)",
    pitch: "Rixos Premium Seagate, 16+ adults only konseptiyle sessizlik ve lükse önem veren çiftlerin ve yetişkinlerin vazgeçilmezi. Premium restoranlar, özel plaj ve swim-up odalar.",
    honeymoon: "Seagate'in swim-up odaları, özel plajı ve candle-light akşam yemekleriyle balayı tam burada başlıyor. Adults only ortamı, o romantik huzuru garantiliyor.",
    family: "Seagate 16+ adults only — aileler için Radamis'i öneririm, çocuklar orada çok daha mutlu olur.",
    strengths: ["Adults Only 16+ — gerçek huzur", "Swim-up odalar", "Premium restoranlar (ekstra ücretsiz)", "Özel plaj", "Şarm'ın en prestijli lokasyonu"],
    adultOnly: true,
    adultAge: 16,
    aquapark: false,
    snorkeling: true,
    swimUp: true,
    objection: "Seagate'in fiyatı, adults only konsepi, swim-up odalar ve premium restoranlarla tamamen örtüşüyor. Karşılaştırılabilir bir otel bulmak Şarm'da çok zor.",
  },
  swissotel: {
    fullName: "Swissotel Sharm El Sheikh",
    stars: 5,
    concept: "Her Şey Dahil",
    pitch: "Swissotel, İsviçre otelcilik kalitesini Şarm'a taşıyor. Merkezi konum, şık tasarım ve güvenilir servis standardıyla iş seyahatçilerini ve kalite tutkunlarını ağırlıyor.",
    honeymoon: "Swissotel'in şık odaları ve spa merkezi romantik bir kaçamak arayan çiftler için ideal. Sakin atmosfer, kaliteli servis.",
    family: "Swissotel aileler için uygun — çocuk havuzu ve animasyon mevcut. Aquapark isteyenler için Radamis daha iyi bir tercih olabilir.",
    strengths: ["İsviçre otelcilik güvencesi", "Merkezi Şarm lokasyonu", "Modern ve şık tasarım", "Güvenilir servis standardı", "Spa & wellness merkezi"],
    adultOnly: false,
    aquapark: false,
    snorkeling: false,
    swimUp: false,
    objection: "Swissotel'in fiyatı, İsviçre marka güvencesi ve uluslararası servis standardının karşılığı. Güvenilirlik arayanlar için doğru tercih.",
  },
  magawish: {
    fullName: "Rixos Premium Magawish Suites & Villas",
    stars: 5,
    concept: "Ultra Her Şey Dahil — Suite & Villa",
    pitch: "Rixos Premium Magawish, sadece suite ve villalardan oluşan eşsiz yapısıyla hem ailelere hem çiftlere lüks mahremiyeti sunuyor. Şarm'ın en geniş odalarına sahip tek Rixos.",
    honeymoon: "Özel havuzlu villalar ve butler servisiyle Magawish, gerçek anlamda lüks bir balayı deneyimi yaşatıyor. Kimsenin sizi rahatsız etmediği bir cennet.",
    family: "Geniş aile süitleri ve özel villa seçenekleri, büyük aileler için ideal. Çocuklar için mini villa bahçesi, ebeveynler için tam mahremiyet.",
    strengths: ["Sadece suite & villa — standart oda yok", "Özel havuzlu villa seçeneği", "Butler servisi", "Şarm'ın en geniş yaşam alanları", "Ultra HSD — her şey dahil"],
    adultOnly: false,
    aquapark: false,
    snorkeling: true,
    swimUp: false,
    objection: "Magawish'te standart oda yok — en küçük oda bile suite. Bu fiyat, aslında metrekare başına Şarm'ın en uygun lüks seçeneği.",
  },
};

// ─── Soruda geçen otel(leri) bul ─────────────────────────────────────────────
function findHotels(q) {
  const n = norm(q);
  const found = [];
  if (has(n, "radamis beach", "radamis hotel")) found.push(HOTELS.radamisBeach);
  else if (has(n, "radamis"))                   found.push(HOTELS.radamis);
  if (has(n, "seagate"))                        found.push(HOTELS.seagate);
  if (has(n, "swissotel", "swiss"))             found.push(HOTELS.swissotel);
  if (has(n, "magawish", "magavis"))            found.push(HOTELS.magawish);
  return found;
}

// ─── Bağlam tespiti ───────────────────────────────────────────────────────────
function getContext(q) {
  if (has(q, "balayi", "balayı", "cift", "çift", "romantik", "evlilik", "dugun", "düğün"))
    return "honeymoon";
  if (has(q, "aile", "cocuk", "çocuk", "bebek", "kids", "mini club"))
    return "family";
  return "general";
}

// ─── Tek otel cevabı ──────────────────────────────────────────────────────────
function singleHotelReply(hotel, ctx) {
  const lines = [];
  lines.push(`🏨 **${hotel.fullName}**`);
  lines.push(`${"★".repeat(hotel.stars)} · ${hotel.concept}`);
  lines.push("");

  if (ctx === "honeymoon") {
    lines.push(`💍 ${hotel.honeymoon}`);
  } else if (ctx === "family") {
    lines.push(`👨‍👩‍👧 ${hotel.family}`);
  } else {
    lines.push(`💬 ${hotel.pitch}`);
  }

  lines.push("");
  lines.push("✅ Öne çıkan özellikler:");
  hotel.strengths.slice(0, 4).forEach(s => lines.push(`  · ${s}`));

  const chips = [];
  if (hotel.aquapark)   chips.push("🌊 Aquapark");
  if (hotel.snorkeling) chips.push("🐠 Snorkeling");
  if (hotel.swimUp)     chips.push("🏊 Swim-up Oda");
  if (hotel.adultOnly)  chips.push(`🔞 ${hotel.adultAge}+ Adults Only`);
  if (chips.length)     lines.push("\n" + chips.join("  ·  "));

  return lines.join("\n");
}

// ─── Karşılaştırma cevabı ─────────────────────────────────────────────────────
function comparisonReply(hotels, ctx) {
  const blocks = hotels.map(h => singleHotelReply(h, ctx));
  return "📊 Karşılaştırma:\n\n" + blocks.join("\n\n─────────────────\n\n");
}

// ─── Senaryo cevapları ────────────────────────────────────────────────────────

function replyAquapark() {
  return `🌊 **Aquapark için en iyi seçim: Rixos Radamis**

Şarm El Şeyh'in en büyük aquapark'ına sahip tek otel. 12 kaydırak, çocuk havuzu ve Ultra HSD konseptiyle ailelerin birinci tercihi.

✅ Aquapark tamamen ücretsiz — HSD'ye dahil
✅ Rixy Kids Club (4-12 yaş) ücretsiz
✅ Yetişkin havuzları ayrı

📌 Diğer otellerde aquapark bulunmuyor — Radamis bu konuda rakipsiz.

─
Rezervasyon için müsaitlik sormamı ister misiniz?`;
}

function replySwimUp() {
  return `🏊 **Swim-up oda: Rixos Premium Seagate**

Seagate, Şarm'da swim-up odalara sahip en prestijli otel. Odanızdan direkt havuza adım atabilirsiniz.

✅ Swim-up odalar adults only (16+) bölümünde
✅ Sabah kahvenizi havuz kenarında içebilirsiniz
✅ Ultra HSD — tüm yemek ve içecekler dahil

💍 Özellikle balayı çiftleri için çok popüler.

─
Swim-up oda müsaitliğini kontrol etmemi ister misiniz?`;
}

function replySnorkeling() {
  return `🐠 **Snorkeling için en iyi seçenekler:**

**1. Rixos Radamis** — Doğrudan mercan resifine sahil erişimi. Ekipman HSD kapsamında dahil.

**2. Rixos Premium Seagate** — Özel plaj, sakin adults only ortamında snorkeling keyfi.

**3. Rixos Premium Magawish** — Villa'nızdan kısa yürüyüşle erişilebilen temiz mercan resifleri.

📌 Kızıldeniz, dünyanın en zengin mercan ekosistemlerinden biri — hangisini seçerseniz seçin hayal kırıklığı yaşamazsınız.`;
}

function replyHoneymoon() {
  return `💍 **Balayı için en iyi 2 seçenek:**

**1. Rixos Premium Seagate** ⭐ En Çok Tercih Edilen
Adults only (16+), swim-up odalar, özel plaj ve premium restoranlar. Gerçek bir balayı deneyimi istiyorsanız Seagate ilk tercih.

**2. Rixos Premium Magawish**
Özel havuzlu villa seçeneği, butler servisi ve tam mahremiyet. "Kimse bizi rahatsız etmesin" diyen çiftler için ideal.

─
Hangi tarihler için planlıyorsunuz? Müsaitlik ve fiyat bilgisi alayım.`;
}

function replyFamily() {
  return `👨‍👩‍👧 **Çocuklu aileler için en iyi seçenekler:**

**1. Rixos Radamis** ⭐ En Popüler
Dev aquapark (12 kaydırak), Rixy Kids Club (4-12 yaş ücretsiz), geniş aile odaları. Çocuklar çok seviyor.

**2. Rixos Premium Magawish**
Büyük aileler için geniş suite ve villa seçenekleri. Mahremiyet önemli olan aileler için ideal.

📌 Seagate adults only (16+) olduğu için aile tatili için uygun değil — Radamis çok daha doğru bir tercih.

─
Kaç kişisiniz ve hangi tarihler için bakayım?`;
}

function replyAdultsOnly() {
  return `🔞 **Adults Only otel: Rixos Premium Seagate (16+)**

Şarm El Şeyh'te adults only konseptini en iyi uygulayan otel Seagate.

✅ 16+ yaş zorunlu — gerçek sessizlik garantisi
✅ Swim-up odalar
✅ Premium restoranlar (ekstra ücret yok)
✅ Özel plaj
✅ Ultra HSD konsept

💬 "Çocuk sesi duymadan dinlenmek istedik, Seagate mükemmeldi" — misafir yorumu

─
Balayı mı yoksa çift tatili mi planlıyorsunuz?`;
}

function replyTransfer() {
  return `🚐 **Şarm El Şeyh — Havalimanı Transfer (SSH)**

Tüm otellere mesafe:

· Rixos Radamis → 15-20 dk
· Rixos Radamis Beach → 15-20 dk
· Rixos Premium Seagate → 10-15 dk  ← en yakın
· Swissotel Sharm → 10-15 dk
· Rixos Premium Magawish → 20-25 dk

✅ 3 gece ve üzeri konaklamalarda transfer hizmetimiz dahil.
📌 Transfer organizasyonu için uçuş numarası ve iniş saatini paylaşmanız yeterli.`;
}

function replyVisa() {
  return `📋 **Mısır Vize Bilgisi — Türk Vatandaşları**

✅ Şarm El Şeyh için VİZE GEREKMİYOR
→ Sinai Stamp ile giriş yapılır, ücretsiz.

⚠️ Önemli Notlar:
· Pasaport dönüş tarihinden itibaren minimum 6 ay geçerli olmalı
· Sinai Stamp yalnızca Şarm bölgesinde geçerli (Kahire, Hurghada için ayrı vize gerekir)
· Hurghada / Kahire seyahatlerinde ~30 USD kapıda vize

📌 Müşterinize pasaportunu seyahat öncesi mutlaka kontrol ettirin.`;
}

function replyExpensive(hotel) {
  const h = hotel || null;
  if (h) {
    return `💡 **"${h.fullName} çok pahalı" itirazına cevap:**

${h.objection}

📌 Şunu da hatırlatın: Ultra HSD konseptinde yemek, içecek, aktivite, animasyon — hepsi dahil. Ayrı ayrı hesaplayınca fark eriyip gidiyor.

─
"Peki size en uygun tarih hangisi?" diye devam edin — konuyu fiyattan tarihe çekin.`;
  }
  return `💡 **"Çok pahalı" itirazını kırma:**

1. **Dahil olanları gösterin:** Ultra HSD'de yemek, içecek, aktivite, transfer — hepsi dahil. Gerçek maliyet karşılaştırması yapın.

2. **Değer sorusu sorun:** "Bütçenize en uygun tarih hangisi?" — konuyu fiyattan tarihe çekin.

3. **Alternatif sunun:** Daha kısa süre veya farklı oda tipiyle bütçeye oturtun.

4. **Sosyal kanıt kullanın:** "Bu ay çok yoğun rezervasyon var, bu fiyat kısa süre geçerli."

─
Müşteri hangi oteli değerlendiriyor?`;
}

function replySafety() {
  return `✅ **"Mısır güvenli mi?" sorusuna cevap:**

Şarm El Şeyh, Mısır'ın geri kalanından bağımsız bir turizm bölgesi olarak değerlendirilmeli.

· Şarm El Şeyh yıllık 1 milyonun üzerinde turist ağırlıyor
· Rixos otelleri kendi güvenlik ekipleri ve çevrili kompleks yapısıyla en güvenli seçenekler
· Türkiye, Almanya, İngiltere'den her yıl binlerce aile tatil yapıyor
· Dışişleri Bakanlığı'nın güncel seyahat uyarılarını takip edin

📌 "Rixos bünyesinde tatil yapıyorsunuz, otel dışına çıkmanız gerekmiyor" şeklinde güvence verin.`;
}

// ─── Ana Fonksiyon ────────────────────────────────────────────────────────────
export function getAIResponse(question) {
  try {
    if (!question || !question.trim()) return "Bir soru yazın, hemen yanıtlayayım! 😊";

    const q = question.trim();
    const ctx = getContext(q);
    const NOTE = "\n\n─\n💡 Demo datasına göre hazırlanmıştır.";

    // ── 1. Vize / pasaport ─────────────────────────────────────────────────
    if (has(q, "vize", "pasaport", "giris", "giriş", "belge"))
      return replyVisa() + NOTE;

    // ── 2. Transfer / havalimanı ───────────────────────────────────────────
    if (has(q, "transfer", "havalimani", "havalimanı", "airport", "ulasim", "ulaşım"))
      return replyTransfer() + NOTE;

    // ── 3. Güvenlik ────────────────────────────────────────────────────────
    if (has(q, "guvenli", "güvenli", "guvenlik", "güvenlik", "tehlikeli", "misir güvenli", "misir guvenli"))
      return replySafety() + NOTE;

    // ── 4. Aquapark ────────────────────────────────────────────────────────
    if (has(q, "aquapark", "su parki", "su parkı", "kaydırak", "kaydırak"))
      return replyAquapark() + NOTE;

    // ── 5. Swim-up ─────────────────────────────────────────────────────────
    if (has(q, "swim up", "swim-up", "swimup", "havuzlu oda", "havuz oda"))
      return replySwimUp() + NOTE;

    // ── 6. Snorkeling ──────────────────────────────────────────────────────
    if (has(q, "snorkel", "dalis", "dalış", "mercan", "reef", "su alti", "su altı"))
      return replySnorkeling() + NOTE;

    // ── 7. Adults only ─────────────────────────────────────────────────────
    if (has(q, "adults only", "adult only", "yetiskin", "yetişkin", "18+", "16+", "sadece yetiskin"))
      return replyAdultsOnly() + NOTE;

    // ── 8. Balayı / çift ───────────────────────────────────────────────────
    if (ctx === "honeymoon" && findHotels(q).length === 0)
      return replyHoneymoon() + NOTE;

    // ── 9. Aile / çocuk ────────────────────────────────────────────────────
    if (ctx === "family" && findHotels(q).length === 0)
      return replyFamily() + NOTE;

    // ── 10. Pahalı itirazı (otel adı ile) ──────────────────────────────────
    if (has(q, "pahali", "pahalı", "ucuz", "fiyat", "neden bu kadar", "deger mi", "değer mi", "itiraz")) {
      const hotels = findHotels(q);
      return replyExpensive(hotels[0] || null) + NOTE;
    }

    // ── 11. Otel karşılaştırma (2+ otel) ───────────────────────────────────
    const mentionedHotels = findHotels(q);
    if (mentionedHotels.length >= 2)
      return comparisonReply(mentionedHotels, ctx) + NOTE;

    // ── 12. Tek otel sorusu ────────────────────────────────────────────────
    if (mentionedHotels.length === 1)
      return singleHotelReply(mentionedHotels[0], ctx) + NOTE;

    // ── 13. Genel balayı / aile (otel adı olmadan) ─────────────────────────
    if (ctx === "honeymoon") return replyHoneymoon() + NOTE;
    if (ctx === "family")    return replyFamily() + NOTE;

    // ── 14. Fallback ───────────────────────────────────────────────────────
    return [
      "🤔 Bu konuda sizi daha iyi yönlendirebilmem için biraz daha bilgi verebilir misiniz?",
      "",
      "Örnek sorular:",
      '· "Radamis ile Seagate farkı nedir?"',
      '· "Balayı için hangi oteli önerirsiniz?"',
      '· "Çocuklu aile için en iyi otel hangisi?"',
      '· "Aquapark hangi otelde var?"',
      '· "Swissotel adults only mu?"',
      '· "Vize gerekiyor mu?"',
      '· "Transfer süresi ne kadar?"',
      "",
      "─\n💡 Demo datasına göre hazırlanmıştır.",
    ].join("\n");

  } catch (err) {
    console.error("[aiLogic] getAIResponse error:", err);
    return "⚠️ Bir hata oluştu, lütfen tekrar deneyin.";
  }
}

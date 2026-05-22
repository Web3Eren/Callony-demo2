// src/utils/aiLogic.js
// Callony AI — Demo Satış Asistanı
// Frontend-only, API gerektirmez.

// ─── Normalize ───────────────────────────────────────────────────────────────
function norm(str) {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
    .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/İ/g, "i").replace(/Ğ/g, "g");
}

function has(q) {
  var keywords = Array.prototype.slice.call(arguments, 1);
  var nq = norm(q);
  return keywords.some(function(kw) { return nq.includes(norm(kw)); });
}

// ─── Otel Profilleri ─────────────────────────────────────────────────────────
var HOTELS = {
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
    objection: "Fiyat farkı tamamen aquapark, çocuk kulübü ve ultra HSD konseptiyle açıklanıyor. Başka bir otelde bu hizmetleri ayrı ayrı öderdiniz — burada hepsi dahil.",
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
    objection: "Seagate'in fiyatı, adults only konsepti, swim-up odalar ve premium restoranlarla tamamen örtüşüyor. Karşılaştırılabilir bir otel bulmak Şarm'da çok zor.",
  },
  rixosSharm: {
    fullName: "Rixos Sharm El Sheikh — Adults Only 18+",
    stars: 5,
    concept: "Ultra Her Şey Dahil — Adults Only (18+)",
    pitch: "Rixos Sharm El Sheikh, 18+ adults only konseptiyle Şarm'ın en özel yetişkin deneyimini sunuyor. Swim-up odalar, premium restoranlar ve tam anlamıyla huzurlu bir tatil ortamı.",
    honeymoon: "18+ adults only ortamı, swim-up odalar ve romantik plaj köşeleriyle Rixos Sharm balayı çiftleri için mükemmel. Hiçbir çocuk gürültüsü olmadan tam bir çift tatili deneyimi.",
    family: "Rixos Sharm El Sheikh 18+ adults only olduğu için çocuklu aileler için uygun değil. Çocuklarınızla tatil için Rixos Radamis'i öneririm — aquapark ve kids club ile çocuklar çok daha mutlu olur.",
    strengths: ["Adults Only 18+ — mutlak sessizlik garantisi", "Swim-up odalar", "Ultra HSD — tüm yemek ve içecekler dahil", "Premium restoranlar", "Özel plaj erişimi", "Lüks spa & wellness"],
    adultOnly: true,
    adultAge: 18,
    aquapark: false,
    snorkeling: true,
    swimUp: true,
    objection: "Rixos Sharm'ın fiyatı, 18+ adults only garantisi, swim-up odalar, ultra HSD konsept ve premium hizmet paketinin karşılığı. Aynı konforu ve sessizliği başka bir otelde bulmak Şarm'da neredeyse imkânsız.",
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

// ─── İtiraz Sözlüğü ──────────────────────────────────────────────────────────
var OBJECTIONS = {
  dusunecegim: {
    label: '"Düşüneceğim"',
    keywords: ["dusunecegim", "düşüneceğim", "dusuneyim", "düşüneyim", "sonra ararim", "sonra ararım", "sonra donerim", "sonra dönerim"],
    reply: "💡 **\"Düşüneceğim\" itirazı — Kapanış Tekniği**\n\nBu itiraz genellikle \"ikna olmadım\" değil, \"bana biraz daha yardım et\" anlamına gelir.\n\n**Adım 1 — Neyin eksik olduğunu anlayın:**\n> \"Tabii ki, hiç acele etmeyin. Merak ettiğim şu: aklınızda takılan bir şey var mı, yoksa sadece zaman mı lazım?\"\n\n**Adım 2 — Somutlaştırın:**\n> \"Fiyat mı, tarih mi yoksa otel seçimi mi konusunda emin değilsiniz?\"\n\n**Adım 3 — Aciliyet yaratın (yumuşak):**\n> \"Anlıyorum. Şunu da söyleyeyim, bu tarihlerde doluluk çok hızlı artıyor. Bugün kapora ile yeri bloke edip, kararı yarın da verebilirsiniz.\"\n\n**Adım 4 — Küçük adım önerin:**\n> \"Hemen rezervasyon yapmak zorunda değilsiniz — sadece tarihi ayıralım, 24 saat içinde iptal ücretsiz.\"",
  },
  esimleKonusayim: {
    label: '"Eşimle / Ailemle konuşayım"',
    keywords: ["esimle", "eşimle", "ailemle", "konusayim", "konuşayım", "karar veremem", "beraber karar"],
    reply: "💡 **\"Eşimle konuşayım\" itirazı — Kapanış Tekniği**\n\n**Adım 1 — Saygı gösterin, süreci sahiplenin:**\n> \"Çok doğal, bu tür kararları birlikte almak önemli. Eşinizle konuşurken işinize yarasın diye size bir özet gönderebilir miyim?\"\n\n**Adım 2 — Eşi sürece dahil edin:**\n> \"Eşiniz de görüşmeye katılmak ister mi? Sizi tekrar arayıp birlikte konuşabiliriz.\"\n\n**Adım 3 — Geri arama zamanı belirleyin:**\n> \"Ne zaman konuşmuş olursunuz — yarın öğleden sonra sizi arasam uygun mu?\"\n\n**Adım 4 — Yeri kapatmayı önerin:**\n> \"Bu arada tarihi kaybetmemek için kapora ile bloke edebiliriz, eşinizle konuştuktan sonra onaylarsınız.\"",
  },
  baskayerBakacagim: {
    label: '"Başka yerle karşılaştırayım"',
    keywords: ["baska yer", "başka yer", "karsilastir", "karşılaştır", "baska otel", "başka otel", "alternatif", "diger otel", "diğer otel", "arastiriyorum", "araştırıyorum"],
    reply: "💡 **\"Başka yerle karşılaştırayım\" itirazı — Kapanış Tekniği**\n\n**Adım 1 — Destekleyin, rakip olmayın:**\n> \"Kesinlikle karşılaştırın, bu çok akıllıca. Peki neyle karşılaştırıyorsunuz? Ben de size yardımcı olayım.\"\n\n**Adım 2 — Rixos'un farkını net koyun:**\n> \"Aynı fiyat aralığındaki otellerin çoğunda Ultra HSD yok — yani yemek, içki, aktivite ayrı ücretli. Gerçek toplam maliyeti hesaplayalım mı?\"\n\n**Adım 3 — Zamanlamaya dikkat çekin:**\n> \"Karşılaştırırken şunu da göz önünde bulundurun: bu tarihler için doluluk başladı. Beğendiğiniz oda tipi kapanabilir.\"\n\n**Adım 4 — Avantajı somutlaştırın:**\n> \"Rixos'ta Ultra HSD dahil — 7 günlük tatilde kişi başı yemek-içki gideri ortalama 300-400 EUR. Bunu fiyata ekleyince tablo değişiyor.\"",
  },
  cokPahali: {
    label: '"Çok pahalı"',
    keywords: ["pahali", "pahalı", "ucuz", "indirim", "iskonto", "neden bu kadar", "deger mi", "değer mi"],
    reply: "💡 **\"Çok pahalı\" itirazı — Kapanış Tekniği**\n\n**Adım 1 — Fiyatı parçalara ayırın:**\n> \"Anlıyorum. Gelin birlikte hesaplayalım: 7 gece, 2 kişi, Ultra HSD dahil. Kişi başı gecelik düşünce kaç EUR ediyor?\"\n\n**Adım 2 — Dahil olanları listeleyin:**\n> \"Bu fiyata dahil: tüm yemekler, alkollü-alkolsüz içecekler, snorkeling ekipmanı, animasyon, aquapark (Radamis'te). Bunları ayrı alsanız ne kadar ödersiniz?\"\n\n**Adım 3 — Alternatif sunun:**\n> \"Bütçenizi biraz aşıyorsa, 5 gecelik bir seçenek de çok popüler. Ya da farklı bir oda tipiyle fiyatı optimize edelim.\"\n\n**Adım 4 — Sosyal kanıt kullanın:**\n> \"Bu ayın en çok satan paketi bu — hem kalite hem fiyat dengesi nedeniyle. Genellikle erken kapanıyor.\"",
  },
  zamanimYok: {
    label: '"Şu an zamanım yok"',
    keywords: ["zamanim yok", "zamanım yok", "mesgulim", "meşgulüm", "simdi degil", "şimdi değil", "sonra ara", "sonra konusalim", "sonra konuşalım"],
    reply: "💡 **\"Şu an zamanım yok\" itirazı — Kapanış Tekniği**\n\n**Adım 1 — Saygı gösterin, kontrolü elinizde tutun:**\n> \"Hiç sorun değil, 2 dakikanız var mı sadece? Sadece tarihi bloke edelim, detayları istediğiniz zaman konuşuruz.\"\n\n**Adım 2 — Geri arama zamanı kilitleyin:**\n> \"Ne zaman uygun olur — yarın sabah 10 mu, öğleden sonra 3 mü?\"\n\n**Adım 3 — Mesaj bırakın:**\n> \"Size bir özet mesaj atayım, uygun olduğunuzda bakarsınız. E-posta mı SMS mi tercih edersiniz?\"",
  },
};

// ─── Sezon & Fiyat Takvimi ────────────────────────────────────────────────────
var SEASON_CALENDAR = {
  low: {
    months: ["Kasım", "Aralık", "Ocak", "Şubat"],
    label: "Düşük Sezon",
    tip: "En uygun fiyatlar bu dönemde. Doluluk düşük, otel daha sakin. Hava sıcaklığı 20-24°C — yüzme için ideal olmayabilir ama şehir turu ve spa için mükemmel.",
  },
  shoulder: {
    months: ["Mart", "Nisan", "Ekim"],
    label: "Omuz Sezon",
    tip: "Fiyat-kalite dengesi en iyi dönem. Hava güzel (26-30°C), kalabalık yok, fiyatlar makul. Özellikle balayı ve çift tatilleri için çok popüler.",
  },
  high: {
    months: ["Mayıs", "Haziran", "Eylül"],
    label: "Yüksek Sezon",
    tip: "Doluluk artıyor, fiyatlar yukarı çıkıyor. En az 6-8 hafta önceden rezervasyon şart. Erken rezervasyon indirimleri bu dönemde en değerli.",
  },
  peak: {
    months: ["Temmuz", "Ağustos"],
    label: "Tepe Sezon",
    tip: "Yılın en yoğun dönemi. Fiyatlar zirveye ulaşır. Mutlaka erken rezervasyon — okul tatili döneminde son dakika yer bulmak neredeyse imkânsız. Aileler için en popüler dönem.",
  },
};

// ─── Kapanış Teknikleri ───────────────────────────────────────────────────────
var CLOSING_TECHNIQUES = {
  urgency: {
    label: "Aciliyet Yaratma",
    scripts: [
      "Bu tarihler için doluluk bu hafta hızla artıyor, bugün bloke etmek avantajlı.",
      "Şu an baktığım sistemde bu oda tipinden sadece 2 kaldı.",
      "Erken rezervasyon fiyatı bu hafta sonu bitiyor — sonraki hafta %15-20 daha pahalı olacak.",
    ],
  },
  miniYes: {
    label: "Küçük Evet Tekniği",
    tip: "Küçük sorularla müşteriyi 'evet' ritmine sokun. Büyük karar küçük kararların toplamına dönüşür.",
    scripts: [
      "Tarih olarak Temmuz mu Ağustos mu daha uygun size?",
      "İki kişi mi gidiyorsunuz?",
      "Sahil manzarası mı, havuz manzarası mı tercih edersiniz?",
    ],
  },
  kapora: {
    label: "Kapora ile Bağlama",
    scripts: [
      "Hemen kesin karar vermek zorunda değilsiniz — küçük bir kapora ile tarihi 48 saat bloke edebiliriz.",
      "Kapora iadeli — eğer 24 saat içinde vazgeçerseniz tam iade yapıyoruz. Riski sıfır.",
      "Yeri garantilemek için bugün küçük bir kapora alalım, fatura detaylarını yarın konuşuruz.",
    ],
  },
  summary: {
    label: "Özet Kapanış",
    scripts: [
      "O zaman özetleyelim: [Otel] — [Tarih] — [Oda Tipi] — [Kişi Sayısı]. Şimdi rezervasyonu başlatalım mı?",
      "Her şey net görünüyor, tek yapmanız gereken onay vermek. Devam edelim mi?",
    ],
  },
  alternative: {
    label: "Alternatif Kapanış",
    scripts: [
      "Peki bu otel değil ama alternatif seçenek sizi tatmin eder mi?",
      "7 gece uzun geliyorsa 5 gece ile başlayabiliriz — aynı kalite, daha kısa süre.",
    ],
  },
};

// ─── Rakip Karşılaştırması ────────────────────────────────────────────────────
var COMPETITORS = {
  sunrise: {
    name: "SUNRISE Arabian Beach Resort",
    keywords: ["sunrise", "arabian beach"],
    stars: 5,
    concept: "Her Şey Dahil",
    weaknesses: ["Ultra HSD değil — alkollü içecekler kısıtlı saatlerde", "Adults only konsept yok", "Rixos'a kıyasla animasyon ve aktivite seçeneği sınırlı"],
    rixosAdvantage: "Rixos'ta Ultra HSD kapsamında tüm gün sınırsız içecek ve çok daha geniş aktivite yelpazesi var. Sunrise'da bazı servisler ekstra ücretli.",
  },
  whiteHills: {
    name: "White Hills Resort",
    keywords: ["white hills", "whitehills"],
    stars: 4,
    concept: "Her Şey Dahil",
    weaknesses: ["4 yıldız — Rixos'un 5 yıldız hizmet standardı yok", "Aquapark yok", "Kids club sınırlı"],
    rixosAdvantage: "Rixos, 5 yıldız Ultra HSD ile tamamen farklı bir kategori. White Hills aynı fiyat aralığındaysa Rixos açık ara daha iyi değer sunuyor.",
  },
  meraki: {
    name: "Meraki Resort",
    keywords: ["meraki"],
    stars: 5,
    concept: "Her Şey Dahil — Adults Only",
    weaknesses: ["Rixos markasının küresel güvencesi yok", "Ultra HSD değil", "Swim-up oda seçenekleri kısıtlı"],
    rixosAdvantage: "Meraki adults only konseptiyle benzer, ancak Rixos'un Ultra HSD avantajı ve küresel marka güvencesi çok daha güçlü.",
  },
  fourSeasons: {
    name: "Four Seasons Sharm El Sheikh",
    keywords: ["four seasons", "dört mevsim"],
    stars: 5,
    concept: "Oda + Kahvaltı / Yarım Pansiyon",
    weaknesses: ["HSD değil — yemek, içecek, aktivite hepsi ekstra ücretli", "Gerçek toplam maliyet Rixos'tan çok daha yüksek", "Aquapark yok"],
    rixosAdvantage: "Four Seasons oda fiyatı cazip görünebilir ama HSD olmadığı için gerçek tatil maliyeti çok daha yüksek. Rixos Ultra HSD ile 7 günlük tatilde kişi başı 400-600 EUR tasarruf sağlıyor.",
  },
  baron: {
    name: "Baron Resort Sharm El Sheikh",
    keywords: ["baron"],
    stars: 5,
    concept: "Her Şey Dahil",
    weaknesses: ["Rixos kalite standardı yok", "Ultra HSD değil", "Tesis yenileme ihtiyacı var", "Rixos'un kids club ve aquapark imkânı yok"],
    rixosAdvantage: "Baron benzer fiyat aralığında olabilir ama misafir memnuniyeti ve tesis kalitesi Rixos'un oldukça gerisinde. Aynı bütçeyle Rixos Radamis Beach çok daha iyi bir seçim.",
  },
};

// ─── Müşteri Tipi Profilleri ──────────────────────────────────────────────────
var CUSTOMER_PROFILES = {
  pazarlikci: {
    label: "Pazarlıkçı Müşteri",
    keywords: ["indirim", "daha ucuz", "fiyat ver", "en düşük", "en ucuz", "kampanya", "promosyon", "iskonto"],
    signals: ["Sürekli fiyat sorar", "Başka fiyat teklifi aldığını söyler", "Her öneride 'daha ucuzu var mı?' der"],
    approach: [
      "Fiyattan değere kayın: 'Fiyat değil, değer konuşalım — dahil olanları göstereyim.'",
      "Toplam maliyet hesabı yapın: Ultra HSD'nin gerçek tasarrufunu somutlaştırın.",
      "Küçük ayrıcalık sunun: Oda yükseltmesi, erken check-in, transfer gibi fiyatsız avantajlar.",
      "Son fiyat çerçevesi: 'Bu fiyat bu hafta geçerli, sonraki hafta yeniden fiyatlama var.'",
    ],
    avoid: "Direkt indirim yapmayın — bir kez inerseniz müşteri her seferinde bekler.",
  },
  kararsiz: {
    label: "Kararsız Müşteri",
    keywords: ["bilmiyorum", "emin degil", "emin değil", "karar veremedim", "hangisi iyi", "ne önerirsin", "ne önerirsiniz"],
    signals: ["Çok soru sorar ama karar vermez", "Her öneride yeni bir soru çıkar", "Sürekli 'düşüneceğim' der"],
    approach: [
      "Seçenekleri ikiye indirin: 'Size göre en iyi 2 seçenek şu — hangisi daha yakın?'",
      "Karar yükünü hafifletin: 'Şimdi kesin karar vermenize gerek yok, tarihi bloke edelim.'",
      "Sosyal kanıt kullanın: 'Bu otel bu ay en çok tercih edilen — çoğu müşteri memnun döndü.'",
      "Küçük evet soruları sorun: Tarih, kişi sayısı, oda tipi — adım adım ilerleyin.",
    ],
    avoid: "Çok fazla seçenek sunmayın — karar felci yaşatır.",
  },
  arastirmaci: {
    label: "Araştırmacı Müşteri",
    keywords: ["arastirdim", "araştırdım", "okudum", "yorumlara baktim", "yorumlara baktım", "tripadvisor", "booking", "karşılaştırdım"],
    signals: ["Detaylı sorular sorar", "Rakip otel ismi verir", "Review ve puanlara referans yapar"],
    approach: [
      "Bilgisini takdir edin: 'Çok doğru bir araştırma yapmışsınız.'",
      "Daha derin bilgi verin: Genel bilgiler değil, içeriden detaylar paylaşın.",
      "Rakip karşılaştırmasını sahiplenin: 'Booking'de görmediğiniz Ultra HSD farkını anlatayım.'",
      "Somut veri kullanın: Dahil hizmetlerin maddi karşılığını hesaplayın.",
    ],
    avoid: "Genel laflar etmeyin — bu profil boş satış dili fark eder.",
  },
  aceleci: {
    label: "Aceleci Müşteri",
    keywords: ["acil", "hemen", "bugün", "bu hafta", "son dakika", "hızlı"],
    signals: ["Uzun açıklama istemez", "Hızlı karar verir", "Fiyatı ikinci planda tutar"],
    approach: [
      "Hızlı ve net olun: 2-3 seçenek, kısa açıklama, hemen fiyat.",
      "Süreci basitleştirin: 'Şu an rezervasyon açıyorum, 5 dakikada halledelim.'",
      "Müsaitliği önce kontrol edin: 'Tarihiniz için yer var mı bakıyorum.'",
    ],
    avoid: "Uzun anlatım yapmayın — sabırsızlanır ve kapatır.",
  },
  vipMusterisi: {
    label: "VIP / Lüks Odaklı Müşteri",
    keywords: ["en iyi", "en lüks", "villa", "suite", "butler", "özel", "vip", "kaliteli", "premium"],
    signals: ["Fiyat sormaz, kalite sorar", "Detay ve ayrıcalık önemli", "Referans ve deneyim paylaşır"],
    approach: [
      "Magawish veya Seagate'i öne çıkarın: Villa, butler servisi, swim-up.",
      "Özel hissi yaratın: 'Sizin için özel bir paket hazırlayabilirim.'",
      "Fiyat değil değer konuşun: Ekstra servisler, sürpriz organizasyonlar.",
      "Detaya girin: Restoran menüsü, oda büyüklüğü, plaj rezervasyonu gibi ayrıcalıklar.",
    ],
    avoid: "Standart paket teklif etmeyin — bu profil 'herkese aynı' teklifi reddeder.",
  },
};

// ─── Yardımcı: Soruda geçen otel(leri) bul ───────────────────────────────────
function findHotels(q) {
  var n = norm(q);
  var found = [];

  if (
    has(n, "rixos sharm", "sharm adult only", "adult only rixos", "18+ rixos", "rixos 18", "adults only") ||
    (has(n, "swim up rixos") && !has(n, "seagate", "magawish", "radamis"))
  ) {
    found.push(HOTELS.rixosSharm);
  }

  if (has(n, "radamis beach", "radamis hotel")) {
    found.push(HOTELS.radamisBeach);
  } else if (has(n, "radamis")) {
    found.push(HOTELS.radamis);
  }
  if (has(n, "seagate"))              found.push(HOTELS.seagate);
  if (has(n, "swissotel", "swiss"))   found.push(HOTELS.swissotel);
  if (has(n, "magawish", "magavis"))  found.push(HOTELS.magawish);

  return found;
}

function findCompetitor(q) {
  var keys = Object.keys(COMPETITORS);
  for (var i = 0; i < keys.length; i++) {
    var c = COMPETITORS[keys[i]];
    for (var j = 0; j < c.keywords.length; j++) {
      if (norm(q).includes(norm(c.keywords[j]))) return c;
    }
  }
  return null;
}

function findObjection(q) {
  var keys = Object.keys(OBJECTIONS);
  for (var i = 0; i < keys.length; i++) {
    var o = OBJECTIONS[keys[i]];
    for (var j = 0; j < o.keywords.length; j++) {
      if (norm(q).includes(norm(o.keywords[j]))) return o;
    }
  }
  return null;
}

function findCustomerProfile(q) {
  var keys = Object.keys(CUSTOMER_PROFILES);
  for (var i = 0; i < keys.length; i++) {
    var p = CUSTOMER_PROFILES[keys[i]];
    for (var j = 0; j < p.keywords.length; j++) {
      if (norm(q).includes(norm(p.keywords[j]))) return p;
    }
  }
  return null;
}

function getContext(q) {
  if (has(q, "balayi", "balayı", "cift", "çift", "romantik", "evlilik", "dugun", "düğün")) return "honeymoon";
  if (has(q, "aile", "cocuk", "çocuk", "bebek", "kids", "mini club")) return "family";
  return "general";
}

// ─── Cevap Üreticiler ─────────────────────────────────────────────────────────
function singleHotelReply(hotel, ctx) {
  var lines = [];
  lines.push("🏨 **" + hotel.fullName + "**");
  lines.push("★".repeat(hotel.stars) + " · " + hotel.concept);
  lines.push("");

  if (ctx === "honeymoon") {
    lines.push("💍 " + hotel.honeymoon);
  } else if (ctx === "family") {
    lines.push("👨‍👩‍ " + hotel.family);
  } else {
    lines.push("💬 " + hotel.pitch);
  }

  lines.push("");
  lines.push("✅ Öne çıkan özellikler:");
  hotel.strengths.slice(0, 4).forEach(function(s) { lines.push("  · " + s); });

  var chips = [];
  if (hotel.aquapark)   chips.push("🌊 Aquapark");
  if (hotel.snorkeling) chips.push("🐠 Snorkeling");
  if (hotel.swimUp)     chips.push("🏊 Swim-up Oda");
  if (hotel.adultOnly)  chips.push("🔞 " + hotel.adultAge + "+ Adults Only");
  if (chips.length)     lines.push("\n" + chips.join("  ·  "));

  return lines.join("\n");
}

function comparisonReply(hotels, ctx) {
  var blocks = hotels.map(function(h) { return singleHotelReply(h, ctx); });
  return "📊 Karşılaştırma:\n\n" + blocks.join("\n\n─────────────────\n\n");
}

function replyCompetitor(competitor, rixosHotel) {
  var lines = [];
  lines.push("📊 **Rixos vs " + competitor.name + "**");
  lines.push("");
  lines.push("**" + competitor.name + "** (" + competitor.stars + "★ · " + competitor.concept + ")");
  lines.push("");
  lines.push("⚠️ Zayıf yönleri:");
  competitor.weaknesses.forEach(function(w) { lines.push("  · " + w); });
  lines.push("");
  lines.push("✅ **Rixos'un avantajı:**");
  lines.push(competitor.rixosAdvantage);

  if (rixosHotel) {
    lines.push("");
    lines.push("🏨 **Önerim: " + rixosHotel.fullName + "**");
    lines.push(rixosHotel.pitch);
  }

  lines.push("");
  lines.push("─");
  lines.push("💡 Müşteriye sorun: \"Rakip otelde tam olarak ne sizi çekiyor?\" — oradan itirazı kırın.");
  return lines.join("\n");
}

function replyCustomerProfile(profile) {
  var lines = [];
  lines.push("🎯 **Müşteri Tipi: " + profile.label + "**");
  lines.push("");
  lines.push("🔍 Tanıma sinyalleri:");
  profile.signals.forEach(function(s) { lines.push("  · " + s); });
  lines.push("");
  lines.push("✅ Yaklaşım:");
  profile.approach.forEach(function(a) { lines.push("  · " + a); });
  lines.push("");
  lines.push("⛔ Kaçının: " + profile.avoid);
  return lines.join("\n");
}

function replySeasonCalendar() {
  var lines = [];
  lines.push("📅 **Şarm El Şeyh — Sezon & Fiyat Takvimi**");
  lines.push("");
  var icons = { low: "🟢", shoulder: "🟡", high: "🟠", peak: "🔴" };
  var keys = ["low", "shoulder", "high", "peak"];
  keys.forEach(function(key) {
    var s = SEASON_CALENDAR[key];
    lines.push(icons[key] + " **" + s.label + "** — " + s.months.join(", "));
    lines.push("  " + s.tip);
    lines.push("");
  });
  lines.push("─");
  lines.push("💡 **Satış notu:** Müşteri esnek tarihli ise Mart-Nisan veya Ekim'e yönlendirin — hem uygun hem güzel hava.");
  return lines.join("\n");
}

function replyClosingTechniques() {
  var lines = [];
  lines.push("🎯 **Kapanış Teknikleri**");
  lines.push("");
  var keys = Object.keys(CLOSING_TECHNIQUES);
  keys.forEach(function(key) {
    var t = CLOSING_TECHNIQUES[key];
    lines.push("**" + t.label + "**");
    if (t.tip) lines.push("📌 " + t.tip);
    t.scripts.forEach(function(s) { lines.push("  > \"" + s + "\""); });
    lines.push("");
  });
  return lines.join("\n");
}

function replyAquapark() {
  return "🌊 **Aquapark için en iyi seçim: Rixos Radamis**\n\nŞarm El Şeyh'in en büyük aquapark'ına sahip tek otel. 12 kaydırak, çocuk havuzu ve Ultra HSD konseptiyle ailelerin birinci tercihi.\n\n✅ Aquapark tamamen ücretsiz — HSD'ye dahil\n✅ Rixy Kids Club (4-12 yaş) ücretsiz\n✅ Yetişkin havuzları ayrı\n\n📌 Diğer otellerde aquapark bulunmuyor — Radamis bu konuda rakipsiz.\n\n─\nRezervasyon için müsaitlik sormamı ister misiniz?";
}

function replySwimUp() {
  return "🏊 **Swim-up oda seçenekleri:**\n\n**1. Rixos Sharm El Sheikh — Adults Only 18+** ⭐ Tam Sessizlik\n18+ adults only ortamında swim-up oda deneyimi. Odanızdan direkt havuza — hiçbir çocuk gürültüsü olmadan. Balayı ve çift tatilleri için birinci tercih.\n\n**2. Rixos Premium Seagate (16+)**\nSeagate'in swim-up odaları da çok popüler. 16+ adults only, özel plaj ve premium restoranlarla lüks bir paket.\n\n✅ Her iki otelde de swim-up odalar Ultra HSD kapsamında\n✅ Sabah kahvenizi havuz kenarında içebilirsiniz\n💍 Özellikle balayı çiftleri için çok tercih ediliyor.\n\n─\nSwim-up oda müsaitliğini kontrol etmemi ister misiniz?";
}

function replySnorkeling() {
  return "🐠 **Snorkeling için en iyi seçenekler:**\n\n**1. Rixos Radamis** — Doğrudan mercan resifine sahil erişimi. Ekipman HSD kapsamında dahil.\n\n**2. Rixos Premium Seagate** — Özel plaj, sakin adults only ortamında snorkeling keyfi.\n\n**3. Rixos Sharm El Sheikh Adults Only 18+** — Huzurlu 18+ ortamında özel plajdan snorkeling deneyimi.\n\n**4. Rixos Premium Magawish** — Villa'nızdan kısa yürüyüşle erişilebilen temiz mercan resifleri.\n\n📌 Kızıldeniz, dünyanın en zengin mercan ekosistemlerinden biri — hangisini seçerseniz seçin hayal kırıklığı yaşamazsınız.";
}

function replyHoneymoon() {
  return "💍 **Balayı için en iyi seçenekler:**\n\n**1. Rixos Sharm El Sheikh — Adults Only 18+** ⭐ En Romantik\n18+ adults only garantisi, swim-up odalar ve özel plajıyla tam anlamıyla ikili bir tatil. Hiçbir çocuk sesi duymadan romantik bir balayı istiyorsanız ilk tercih bu.\n\n**2. Rixos Premium Seagate (16+)**\nSwim-up odalar, özel plaj ve candle-light akşam yemekleriyle balayı tam burada başlıyor. Adults only ortamı, o romantik huzuru garantiliyor.\n\n**3. Rixos Premium Magawish**\nÖzel havuzlu villa seçeneği, butler servisi ve tam mahremiyet. \"Kimse bizi rahatsız etmesin\" diyen çiftler için ideal.\n\n─\nHangi tarihler için planlıyorsunuz? Müsaitlik ve fiyat bilgisi alayım.";
}

function replyFamily() {
  return "👨‍👩‍👧 **Çocuklu aileler için en iyi seçenekler:**\n\n**1. Rixos Radamis** ⭐ En Popüler\nDev aquapark (12 kaydırak), Rixy Kids Club (4-12 yaş ücretsiz), geniş aile odaları. Çocuklar çok seviyor.\n\n**2. Rixos Premium Magawish**\nBüyük aileler için geniş suite ve villa seçenekleri. Mahremiyet önemli olan aileler için ideal.\n\n📌 Rixos Sharm El Sheikh 18+ adults only olduğu için çocuklu aileler için kesinlikle uygun değil.\n📌 Seagate 16+ adults only olduğu için de aile tatili için uygun değil — Radamis çok daha doğru bir tercih.\n\n─\nKaç kişisiniz ve hangi tarihler için bakayım?";
}

function replyAdultsOnly() {
  return "🔞 **Adults Only otel seçenekleri:**\n\n**1. Rixos Sharm El Sheikh — Adults Only 18+** ⭐ En Sıkı Sınır\nŞarm'da 18+ adults only konseptini uygulayan en özel otel. Swim-up odalar, ultra HSD ve gerçek anlamda sessiz bir tatil ortamı. Mutlak huzur isteyenlerin ilk tercihi.\n\n**2. Rixos Premium Seagate (16+)**\n16+ adults only, swim-up odalar, premium restoranlar ve özel plajla lüks bir yetişkin deneyimi.\n\n─\n**Fark ne?**\n· Rixos Sharm → 18+ (daha sıkı yaş sınırı, daha sessiz)\n· Seagate → 16+ (geniş premium imkânlar, prestijli lokasyon)\n\nHer ikisi de Ultra HSD konseptinde — yemek, içecek, aktivite dahil.\n\n─\nBalayı mı yoksa çift tatili mi planlıyorsunuz?";
}

function replyTransfer() {
  return "🚐 **Şarm El Şeyh — Havalimanı Transfer (SSH)**\n\nTüm otellere mesafe:\n\n· Rixos Radamis → 15-20 dk\n· Rixos Radamis Beach → 15-20 dk\n· Rixos Premium Seagate → 10-15 dk  ← en yakın\n· Rixos Sharm El Sheikh Adults Only → 10-15 dk\n· Swissotel Sharm → 10-15 dk\n· Rixos Premium Magawish → 20-25 dk\n\n✅ 3 gece ve üzeri konaklamalarda transfer hizmetimiz dahil.\n📌 Transfer organizasyonu için uçuş numarası ve iniş saatini paylaşmanız yeterli.";
}

function replyVisa() {
  return "📋 **Mısır Vize Bilgisi — Türk Vatandaşları**\n\n✅ Şarm El Şeyh için VİZE GEREKMİYOR\n→ Sinai Stamp ile giriş yapılır, ücretsiz.\n\n⚠️ Önemli Notlar:\n· Pasaport dönüş tarihinden itibaren minimum 6 ay geçerli olmalı\n· Sinai Stamp yalnızca Şarm bölgesinde geçerli (Kahire, Hurghada için ayrı vize gerekir)\n· Hurghada / Kahire seyahatlerinde ~30 USD kapıda vize\n\n📌 Müşterinize pasaportunu seyahat öncesi mutlaka kontrol ettirin.";
}

function replyExpensive(hotel) {
  if (hotel) {
    return "💡 **\"" + hotel.fullName + " çok pahalı\" itirazına cevap:**\n\n" + hotel.objection + "\n\n📌 Şunu da hatırlatın: Ultra HSD konseptinde yemek, içecek, aktivite, animasyon — hepsi dahil. Ayrı ayrı hesaplayınca fark eriyip gidiyor.\n\n─\n\"Peki size en uygun tarih hangisi?\" diye devam edin — konuyu fiyattan tarihe çekin.";
  }
  return OBJECTIONS.cokPahali.reply;
}

function replySafety() {
  return "✅ **\"Mısır güvenli mi?\" sorusuna cevap:**\n\nŞarm El Şeyh, Mısır'ın geri kalanından bağımsız bir turizm bölgesi olarak değerlendirilmeli.\n\n· Şarm El Şeyh yıllık 1 milyonun üzerinde turist ağırlıyor\n· Rixos otelleri kendi güvenlik ekipleri ve çevrili kompleks yapısıyla en güvenli seçenekler\n· Türkiye, Almanya, İngiltere'den her yıl binlerce aile tatil yapıyor\n· Dışişleri Bakanlığı'nın güncel seyahat uyarılarını takip edin\n\n📌 \"Rixos bünyesinde tatil yapıyorsunuz, otel dışına çıkmanız gerekmiyor\" şeklinde güvence verin.";
}

function replySeagateVsRixosSharm() {
  return "📊 **Rixos Premium Seagate vs Rixos Sharm El Sheikh Adults Only**\n\n| | **Seagate** | **Rixos Sharm** |\n|---|---|---|\n| Yaş sınırı | 16+ | **18+** |\n| Swim-up oda | ✅ | ✅ |\n| Konsept | Ultra HSD | Ultra HSD |\n| Sessizlik | Yüksek | **Maksimum** |\n| Öne çıkan | Prestijli lokasyon | Mutlak adults only |\n\n**Seagate mi, Rixos Sharm mı?**\n\n· **Rixos Sharm** → 18+ sınırıyla daha sıkı bir yetişkin ortamı arıyorsanız, çocukların hiç olmadığı bir tatil istiyorsanız ilk tercih.\n· **Seagate** → 16+ adults only, daha köklü bir otel profili ve geniş premium restoran seçeneği istiyorsanız.\n\n💍 Balayı için her ikisi de mükemmel — fark tercih ve bütçeye göre şekilleniyor.\n\n─\nHangi tarihlere bakayım?";
}

// ─── Ana Fonksiyon ────────────────────────────────────────────────────────────
export function getAIResponse(question) {
  try {
    if (!question || !question.trim()) return "Bir soru yazın, hemen yanıtlayayım! 😊";

    var q = question.trim();
    var ctx = getContext(q);
    var NOTE = "\n\n─\n💡 Demo datasına göre hazırlanmıştır.";

    // 1. Vize / pasaport
    if (has(q, "vize", "pasaport", "giris", "giriş", "belge"))
      return replyVisa() + NOTE;

    // 2. Transfer / havalimanı
    if (has(q, "transfer", "havalimani", "havalimanı", "airport", "ulasim", "ulaşım"))
      return replyTransfer() + NOTE;

    // 3. Güvenlik
    if (has(q, "guvenli", "güvenli", "guvenlik", "güvenlik", "tehlikeli", "misir güvenli", "misir guvenli"))
      return replySafety() + NOTE;

    // 4. Aquapark
    if (has(q, "aquapark", "su parki", "su parkı", "kaydırak", "kaydirak"))
      return replyAquapark() + NOTE;

    // 5. Swim-up
    if (has(q, "swim up", "swim-up", "swimup", "havuzlu oda", "havuz oda"))
      return replySwimUp() + NOTE;

    // 6. Snorkeling
    if (has(q, "snorkel", "dalis", "dalış", "mercan", "reef", "su alti", "su altı"))
      return replySnorkeling() + NOTE;

    // 7. Adults only
    if (has(q, "adults only", "adult only", "yetiskin", "yetişkin", "18+", "16+", "sadece yetiskin", "sadece yetişkin"))
      return replyAdultsOnly() + NOTE;

    // 8. Sezon takvimi
    if (has(q, "sezon", "ne zaman", "hangi ay", "yaz", "kis", "kış", "takvim", "doluluk", "ucuz ay", "uygun ay"))
      return replySeasonCalendar() + NOTE;

    // 9. Kapanış teknikleri
    if (has(q, "kapanis", "kapanış", "closing", "nasıl kapatalım", "nasil kapatalim", "satis teknigi", "satış tekniği", "rezervasyon yaptir", "yaptıramıyorum"))
      return replyClosingTechniques() + NOTE;

    // 10. Müşteri tipi
    if (has(q, "musteri tipi", "müşteri tipi", "pazarlikci", "pazarlıkçı", "kararsiz", "kararsız", "vip musteri", "vip müşteri", "arastirmaci", "araştırmacı", "musteri profil", "müşteri profil")) {
      var profile = findCustomerProfile(q);
      if (profile) return replyCustomerProfile(profile) + NOTE;
      var profileLines = ["🎯 **Müşteri Tipi Profilleri**", ""];
      var pKeys = Object.keys(CUSTOMER_PROFILES);
      pKeys.forEach(function(k) {
        var p = CUSTOMER_PROFILES[k];
        profileLines.push("**" + p.label + "**\n  Sinyal: " + p.signals[0] + "\n  Yaklaşım: " + p.approach[0]);
        profileLines.push("");
      });
      return profileLines.join("\n") + NOTE;
    }

    // 11. Rakip karşılaştırması
    var competitor = findCompetitor(q);
    if (competitor) {
      var hotels = findHotels(q);
      return replyCompetitor(competitor, hotels[0] || null) + NOTE;
    }

    // 12. İtiraz sözlüğü (pahalı hariç — aşağıda özel)
    if (!has(q, "pahali", "pahalı")) {
      var objection = findObjection(q);
      if (objection) return objection.reply + NOTE;
    }

    // 13. Seagate vs Rixos Sharm
    if (has(q, "seagate") && has(q, "rixos sharm", "sharm adult", "18+"))
      return replySeagateVsRixosSharm() + NOTE;

    // 14. Balayı (otel adı olmadan)
    if (ctx === "honeymoon" && findHotels(q).length === 0)
      return replyHoneymoon() + NOTE;

    // 15. Aile — Rixos Sharm uyarısı
    if (ctx === "family") {
      var familyHotels = findHotels(q);
      var hasRixosSharm = familyHotels.some(function(h) { return h === HOTELS.rixosSharm; });
      if (hasRixosSharm) {
        return [
          "⚠️ **Rixos Sharm El Sheikh — Aile Tatili için Uygun Değil**",
          "",
          "Rixos Sharm El Sheikh **18+ adults only** bir otel olduğu için çocuklu aileler kabul edilmiyor.",
          "",
          "👨‍👩‍👧 **Çocuklu aileler için önerim:**",
          "",
          "**1. Rixos Radamis** ⭐ En Popüler",
          "Dev aquapark (12 kaydırak), Rixy Kids Club (4-12 yaş ücretsiz), geniş aile odaları.",
          "",
          "**2. Rixos Premium Magawish**",
          "Geniş suite ve villa seçenekleriyle büyük aileler için mükemmel.",
          "",
          "─\nKaç kişisiniz ve hangi tarihler için bakayım?",
          NOTE,
        ].join("\n");
      }
      if (familyHotels.length === 0) return replyFamily() + NOTE;
    }

    // 16. Pahalı itirazı
    if (has(q, "pahali", "pahalı", "ucuz", "fiyat", "neden bu kadar", "deger mi", "değer mi", "itiraz")) {
      var expHotels = findHotels(q);
      return replyExpensive(expHotels[0] || null) + NOTE;
    }

    // 17. Otel karşılaştırma (2+ otel)
    var mentionedHotels = findHotels(q);
    if (mentionedHotels.length >= 2) return comparisonReply(mentionedHotels, ctx) + NOTE;

    // 18. Tek otel sorusu
    if (mentionedHotels.length === 1) return singleHotelReply(mentionedHotels[0], ctx) + NOTE;

    // 19. Genel balayı / aile
    if (ctx === "honeymoon") return replyHoneymoon() + NOTE;
    if (ctx === "family")    return replyFamily() + NOTE;

    // 20. Fallback
    return [
      "🤔 Bu konuda sizi daha iyi yönlendirebilmem için biraz daha bilgi verebilir misiniz?",
      "",
      "Örnek sorular:",
      "· \"Radamis ile Seagate farkı nedir?\"",
      "· \"Balayı için hangi oteli önerirsiniz?\"",
      "· \"Çocuklu aile için en iyi otel hangisi?\"",
      "· \"Swim-up oda hangi otellerde var?\"",
      "· \"Aquapark hangi otelde var?\"",
      "· \"Müşteri düşüneceğim dedi, ne yapayım?\"",
      "· \"Four Seasons ile Rixos karşılaştır\"",
      "· \"Temmuz için doluluk nasıl?\"",
      "· \"Pazarlıkçı müşteriye nasıl yaklaşayım?\"",
      "· \"Kapanış teknikleri neler?\"",
      "· \"Vize gerekiyor mu?\"",
      "",
      NOTE,
    ].join("\n");

  } catch (err) {
    console.error("[aiLogic] getAIResponse error:", err);
    return "⚠️ Bir hata oluştu, lütfen tekrar deneyin.";
  }
}

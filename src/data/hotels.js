// src/data/hotels.js
// Kaynak: Otel bilgi formları (PDF) — Sadece belgelerde geçen bilgiler kullanılmıştır.
// Son güncelleme: 2026-05-22

export const HOTELS = [
  // ─────────────────────────────────────────────────────────────────
  // 1. RIXOS RADAMIS SHARM EL SHEIKH (ANA BİNA / AQUAPARK BÖLÜMÜ)
  // ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Rixos Radamis Sharm El Sheikh",
    region: "Şarm El Şeyh, Mısır",
    concept: "Ultra Her Şey Dahil",
    stars: 5,
    image: "rixos-radamis-sharm.jpg",

    badges: ["Ultra HSD", "Aquapark Dahil", "Rixy Kids Town", "Dev Resort"],
    tags: ["aile", "aquapark", "çocuk kulübü", "havalimanına yakın", "büyük resort"],
    targetCustomer: "Çocuklu aileler, büyük grup tatilleri, aquapark ve çocuk aktivitesi öncelikli misafirler",

    strengths: [
      "300.000 m² devasa alan — her şey otel içinde",
      "Aqua Mania Jungle Park: 26 aktif kaydırak, Ultra HSD dahil",
      "Rixy Kids Town: şeflik, robotik, itfaiye, sürücü okulu gibi tematik aktiviteler",
      "16 A La Carte + 3 ana restoran — her gece farklı mutfak",
      "1642 oda + 26 özel villa kapasitesi",
      "Havalimanına sadece 6 km"
    ],

    competitorDiff: "Rixos Seagate'e göre aquapark daha büyük (26 vs 23 kaydırak) ve Rixy Kids Town çok daha kapsamlı. Swissotel'e göre tesis alanı ve aktivite çeşitliliği çok daha fazla. Yeni açılan Beach bölümüyle kıyaslandığında ana binanın Rixy Kids Town avantajı belirleyici.",

    roomTypes: [
      {
        name: "Superior Oda – Tirana",
        sizeSqm: "35–40",
        maxCapacity: "3 yetişkin veya 2 yetişkin + 2 çocuk",
        view: "Bahçe veya havuz manzarası",
        features: ["King veya twin yatak", "Özel balkon/teras"]
      },
      {
        name: "Superior Oda – Blue Planet",
        sizeSqm: "40–43",
        maxCapacity: "3 yetişkin veya 2 yetişkin + 2 çocuk",
        view: "Bahçe veya havuz manzarası",
        features: ["King veya twin yatak", "Modern tasarım"]
      },
      {
        name: "Deluxe Oda – Blue Planet",
        sizeSqm: "55",
        maxCapacity: "2 yetişkin + 2 çocuk",
        view: "Bilgi yok",
        features: ["Modern duşlu banyo", "TV'li oturma alanı"]
      },
      {
        name: "Family Oda – Tirana",
        sizeSqm: "51",
        maxCapacity: "4 yetişkin + 1 çocuk",
        view: "Bahçe veya havuz manzarası",
        features: ["1 king + 1 twin oda", "2 ayrı kapıyla bölünmüş"]
      },
      {
        name: "Family Oda – Blue Planet",
        sizeSqm: "50–53",
        maxCapacity: "4 yetişkin + 1 çocuk",
        view: "Bahçe veya havuz manzarası",
        features: ["King ve twin yatak düzeni"]
      },
      {
        name: "Junior Süit – Tirana",
        sizeSqm: "70",
        maxCapacity: "3 yetişkin + 1 çocuk",
        view: "Havuz manzarası",
        features: ["King yatak odası", "Ayrı oturma alanı", "2 banyo", "Özel balkon/teras"]
      },
      {
        name: "Junior Süit – Blue Planet",
        sizeSqm: "59–65",
        maxCapacity: "3 yetişkin + 1 çocuk",
        view: "Bilgi yok",
        features: ["2 bağlantılı alan", "King yatak", "Oturma alanı"]
      },
      {
        name: "Senior Süit – Blue Planet",
        sizeSqm: "67–76",
        maxCapacity: "3 yetişkin + 1 çocuk",
        view: "Bilgi yok",
        features: ["2 yatak odası", "Geniş oturma alanı"]
      },
      {
        name: "2 Yatak Odalı Deluxe Süit – Tirana",
        sizeSqm: "100–150",
        maxCapacity: "4 yetişkin + 2 çocuk",
        view: "Bahçe manzarası",
        features: ["2 geniş yatak odası", "Ayrı oturma alanı"]
      },
      {
        name: "2 Yatak Odalı Deluxe Süit – Blue Planet",
        sizeSqm: "100–150",
        maxCapacity: "4 yetişkin + 2 çocuk",
        view: "Bilgi yok",
        features: ["2 ayrı yatak odası", "Geniş salon", "Modern dekorasyon"]
      }
    ],

    restaurants: [
      { name: "T-Bone", cuisine: "Steak House", hours: "18:30–22:30", extraCharge: false },
      { name: "Hayal", cuisine: "Lübnan, Türk, Fas", hours: "18:30–22:30", extraCharge: false },
      { name: "Wabi Sabi", cuisine: "Japon", hours: "18:30–22:30", extraCharge: false },
      { name: "Rasam", cuisine: "Hint", hours: "18:30–22:30", extraCharge: false },
      { name: "The Mangal", cuisine: "Barbekü", hours: "18:30–22:30", extraCharge: false },
      { name: "Teppanyaki", cuisine: "Japon (Şov)", hours: "18:30–22:30", extraCharge: true, priceNote: "Ekstra ücretli" },
      { name: "Turquoise", cuisine: "Ana Restoran – Uluslararası Açık Büfe", hours: "Bilgi yok", extraCharge: false },
      { name: "Riviera", cuisine: "Akdeniz", hours: "Bilgi yok", extraCharge: false },
      { name: "Salt", cuisine: "Deniz Ürünleri", hours: "Bilgi yok", extraCharge: false },
      { name: "People's", cuisine: "Uluslararası – Plaj Restoranı", hours: "Bilgi yok", extraCharge: false }
    ],

    aquapark: {
      has: true,
      name: "Aqua Mania Jungle Park",
      hours: "10:00–17:00",
      included: true,
      slides: 26,
      note: "Toplam 29 kaydırağın 26'sı aktif. 14 yetişkin + 12 ısıtmalı çocuk kaydırağı. Soft içecek dahil. Food Court 11:00–17:00. Sadece Radamis misafirlerine özel; Seagate aquaparkına erişim yoktur."
    },

    kidsClub: {
      has: true,
      name: "Rixy Kids Town",
      ageRange: "Bilgi yok",
      hours: "09:30–23:00",
      price: "Dahil (Ultra HSD)",
      activities: [
        "Chef Academy",
        "STEM Lab",
        "Acting Academy",
        "Robotic Coding Center",
        "Gardening & Green House",
        "Seramik & Ahşap Sanatları",
        "Resim & El Sanatları",
        "Rope Course (İp Parkuru)",
        "Dance & Sports Center",
        "Outdoor Adventure Zone",
        "Fire Department (İtfaiyeci Deneyimi)",
        "Police Department (Polis Rol Oyunu)",
        "Driving School (Araç Simülasyonu)",
        "Beauty Salon",
        "Indoor & Outdoor Kids Restaurant",
        "Kids Show / Mini Disco & Animasyon"
      ]
    },

    beach: {
      hasPrivate: true,
      type: "Özel kum plaj",
      length: "Bilgi yok",
      sunbeds: "Ücretsiz şezlong ve havlu servisi",
      waterSports: true,
      waterSportsNote: "Dalış merkezi mevcut (Diving Center)",
      snorkeling: true
    },

    transfer: {
      airport: "Sharm El Sheikh Havalimanı (SSH)",
      duration: "~10 dakika",
      options: ["Talep üzerine havalimanı transferi", "Tesis içi shuttle bus"],
      approxPrice: "Bilgi yok",
      note: "Havalimanına 6 km. Erken giriş/geç çıkış: müsaitliğe göre 150 EUR ek ücret."
    },

    adultOnly: {
      is: false,
      ageLimit: null,
      note: "Club Privé bölümü mevcuttur ancak tam adults-only konsepti değildir."
    },

    salesScript: {
      opening: "Rixos Radamis Sharm El Sheikh — Kızıldeniz kıyısında 300.000 m²'lik bir tatil evreni. Aquapark, çocuk şehri, 16 farklı dünya mutfağı ve 24 saat Ultra HSD konfor. Tek bir ödemeyle her şey dahil.",
      keyPoints: [
        "Aqua Mania Jungle Park 26 kaydırak — ayrıca tek kuruş ödenmez",
        "Rixy Kids Town: çocuklar şef, robot mühendisi, itfaiyeci olabilir",
        "16 A La Carte restoran — her akşam farklı bir dünya mutfağı",
        "Havalimanından 6 km — bagajlarla savaşmadan 10 dakikada otelde",
        "Ultra HSD = tüm yiyecek, içecek, aktivite dahil"
      ],
      closing: "Tarihlerinizi paylaşın, sizin için kişiselleştirilmiş bir teklif hazırlayalım. Hangi tarihler uygun?"
    },

    honeymoonSalesScript: "300.000 m²'lik özel dünyanızda balayı başlasın. Havuz manzaralı süit odanızda romantik sabahlar, Anjana Spa'da çift masaj ritüeli, akşamları T-Bone Steak House veya Wabi Sabi'de şık akşam yemekleri. Check-in'den itibaren balayı sürprizleri hazırlanıyor — sadece tarihlerinizi belirtin.",

    familySalesScript: "Çocuklar Rixy Kids Town'da şefleri, robotik mühendisleri ve itfaiyecileri oynarken; siz Aqua Mania'nın 26 kaydırağını ya da Anjana Spa'yı keşfediyorsunuz. Akşam herkes 16 A La Carte arasından dilediğini seçiyor. Ultra HSD'de hesap sormak yok — her şey dahil. Aile tatilinde bu kadar huzurlu olmak mümkün.",

    objections: [
      {
        q: "Mısır'dan emin değilim, güvenli mi?",
        a: "Rixos global bir marka — standartlar Türkiye veya Dubai ile birebir aynı. Tesis tamamen kendi içinde kapalı bir dünya; dışarı çıkmanıza gerek yok. Şarm El Şeyh turistik bölge olarak oldukça güvenlidir."
      },
      {
        q: "Uçuş süresi çok uzun değil mi?",
        a: "İstanbul'dan Sharm El Sheikh'e direkt uçuşlar yaklaşık 3–3,5 saat. Havalimanına da sadece 6 km — iner inmez otelde oluyorsunuz."
      },
      {
        q: "Çocukla tatil zor olur mu?",
        a: "Tam tersi — Rixy Kids Town'da çocuklar sabah 9'dan gece 11'e kadar meşgul. Siz de o sürede huzurla dinleniyorsunuz. Hem çocuklar hem ebeveynler tatilden ayrı ayrı keyif alıyor."
      },
      {
        q: "Ultra HSD pahalı değil mi?",
        a: "Tek seferlik ödeyip her şeyi alıyorsunuz: 16 A La Carte, 26 kaydıraklı aquapark, tüm içecekler, animasyon, çocuk kulübü. Dışarıda aynı deneyimi yaşamak bu fiyatın çok üstüne çıkar."
      },
      {
        q: "Seagate'den farkı ne?",
        a: "Radamis'in aquaparkı daha büyük (26 aktif kaydırak) ve Rixy Kids Town çok daha kapsamlı — tam bir çocuk şehri. Seagate biraz daha sakin ve 'premium' bir his veriyor. Çocuklu aileler için Radamis kesinlikle daha avantajlı."
      }
    ],

    importantNotes: [
      "Check-in: 14:00 / Check-out: 12:00",
      "Erken giriş/geç çıkış: müsaitliğe göre 150 EUR ek ücret",
      "Akşam yemeklerinde smart casual kıyafet; plaj kıyafeti restoranlarda yasaktır",
      "Tüm alanlarda ücretsiz Wi-Fi",
      "Evcil hayvan kabul edilmez",
      "Oda servisi 24 saat (ücretli menüler), minibar günlük yenilenir",
      "Doktor ve hemşire talep üzerine (ücretli)",
      "Çamaşır & kuru temizleme ücretlidir",
      "Alkollü içecekler bardakla servis edilir; şişe servisi yapılmaz",
      "Radamis misafirleri Seagate aquaparkını kullanamazlar"
    ],

    whatsappTemplates: {
      general: "Merhaba! 🌊 Rixos Radamis Sharm El Sheikh hakkında bilgi almak istediğinizi gördük. 300.000 m²'lik devasa tesiste 1642 oda, 26 villa, Aqua Mania Jungle Park (26 kaydırak), Rixy Kids Town ve 16 A La Carte restoran sizi bekliyor. Size özel fiyat teklifi için hangi tarihler uygun?",
      honeymoon: "Tebrikler! 💍 Balayınız için Rixos Radamis'te özel sürprizler hazırlayabiliriz: süit dekorasyonu, Anjana Spa çift masajı ve romantik akşam yemeği rezervasyonu. Tarihlerinizi ve oda tercihini paylaşır mısınız?",
      family: "Merhaba! 👨‍👩‍👧‍👦 Aile tatili için Rixos Radamis harika bir seçim! Rixy Kids Town'da Chef Academy, STEM Lab, Robot Coding ve 26 kaydıraklı aquapark dahil. Çocukların yaşlarını ve kişi sayısını belirtir misiniz, size özel hesaplama yapalım?",
      priceRequest: "Merhaba! Rixos Radamis Sharm El Sheikh için fiyat araştırıyorsunuz. Tarihler, kişi sayısı ve oda tipini paylaşır mısınız? En uygun teklifi hemen hazırlayalım. 🏨",
      transfer: "Rixos Radamis Sharm El Sheikh, havalimanına sadece 6 km — yaklaşık 10 dakika. Transfer talep etmek ister misiniz? Uçuş saatinizi belirtin, düzenleyelim. ✈️"
    },

    lastUpdated: "2026-05-22"
  },

  // ─────────────────────────────────────────────────────────────────
  // 2. RIXOS RADAMIS – BEACH HOTEL
  // ─────────────────────────────────────────────────────────────────
  {
    id: 2,
    name: "Rixos Radamis – Beach Hotel",
    region: "Şarm El Şeyh, Mısır",
    concept: "Ultra Her Şey Dahil",
    stars: 5,
    image: "rixos-radamis-beach.jpg",

    badges: ["Ultra HSD", "Denize Sıfır", "Özel Cabanalar", "2015 Açılış"],
    tags: ["denize yakın", "plaj", "aile", "çift", "cabanalar", "beach"],
    targetCustomer: "Deniz önü tatil isteyen aileler ve çiftler, plaj konforu öncelikli misafirler",

    strengths: [
      "Denize sıfır konum — odadan çıkınca plaj",
      "Özel şık cabanalar ile premium plaj deneyimi",
      "Ultra HSD ile tüm öğünler ve içecekler dahil",
      "11 A La Carte restoran seçeneği",
      "Tüm odalar balkon veya teraslı",
      "Rixy Kids Club plaj alanında özel etkinlikler"
    ],

    competitorDiff: "Ana Radamis binasına kıyasla denize çok daha yakın konum ve şık cabanalar ön plana çıkıyor. Aqua Mania Jungle Park ve Rixy Kids Town için ana binayı ziyaret etme durumu netleştirilmeli. Seagate'e kıyasla daha modern (2015 sonrası renovasyon) ve deniz manzarası daha güçlü.",

    roomTypes: [
      {
        name: "Superior Room Beach Side",
        sizeSqm: "41",
        maxCapacity: "2 yetişkin + 2 çocuk",
        view: "Beach Side",
        features: ["Balkon veya teras", "Çay-kahve seti", "Minibar", "Bornoz & terlik", "Çocuk bornozu"]
      },
      {
        name: "Deluxe Room Beach Side",
        sizeSqm: "55",
        maxCapacity: "2 yetişkin + 2 çocuk",
        view: "Beach Side",
        features: ["Balkon veya teras", "Çay-kahve seti", "Minibar", "Bornoz & terlik", "Çocuk bornozu"]
      },
      {
        name: "Premium Room Beach Side",
        sizeSqm: "60",
        maxCapacity: "2 yetişkin + 2 çocuk",
        view: "Beach Side",
        features: ["Balkon veya teras", "Ayrı oturma alanı", "Minibar", "Bornoz & terlik", "Çocuk bornozu"]
      },
      {
        name: "Executive Suite Beach Side",
        sizeSqm: "118",
        maxCapacity: "4 yetişkin + 2 çocuk",
        view: "Beach Side",
        features: ["Balkon veya teras", "Ayrı salon ve yemek alanı", "Minibar", "Bornoz & terlik", "Çocuk bornozu"]
      }
    ],

    restaurants: [
      { name: "Hayal", cuisine: "Lübnan, Türk, Fas", hours: "Bilgi yok", extraCharge: false },
      { name: "T-Bone", cuisine: "Steak House", hours: "Bilgi yok", extraCharge: false },
      { name: "Wabi Sabi", cuisine: "Japon & Sushi", hours: "Bilgi yok", extraCharge: false },
      { name: "L'Olivo", cuisine: "İtalyan", hours: "Bilgi yok", extraCharge: false },
      { name: "Salt", cuisine: "Deniz Ürünleri", hours: "Bilgi yok", extraCharge: false },
      { name: "Cactus", cuisine: "Meksika", hours: "Bilgi yok", extraCharge: false },
      { name: "Rasam", cuisine: "Hint", hours: "Bilgi yok", extraCharge: false },
      { name: "The Mangal", cuisine: "BBQ", hours: "Bilgi yok", extraCharge: false },
      { name: "Riviera", cuisine: "Akdeniz", hours: "Bilgi yok", extraCharge: false },
      { name: "Mandarin", cuisine: "Uzak Doğu", hours: "Bilgi yok", extraCharge: false },
      { name: "People's", cuisine: "Uluslararası Panoramik", hours: "Bilgi yok", extraCharge: false },
      { name: "Teppanyaki", cuisine: "Japon Izgara Şov", hours: "Bilgi yok", extraCharge: true, priceNote: "60 USD/kişi" }
    ],

    aquapark: {
      has: false,
      name: "Bilgi yok",
      hours: "Bilgi yok",
      included: false,
      slides: 0,
      note: "Beach Hotel bölümünde müstakil aquapark PDF'te belirtilmemiştir. Ana Radamis binasının Aqua Mania Jungle Park'ına erişim durumu rezervasyon sırasında netleştirilmelidir."
    },

    kidsClub: {
      has: true,
      name: "Rixy Kids Town",
      ageRange: "Bilgi yok",
      hours: "09:30–23:00",
      price: "Dahil (Ultra HSD)",
      activities: [
        "Plaj alanında özel etkinlikler",
        "Şeflikten robotik kodlamaya aktiviteler",
        "Renkli gösteriler ve yaratıcı atölyeler",
        "Mini Disco & Animasyon"
      ]
    },

    beach: {
      hasPrivate: true,
      type: "Özel plaj — denize sıfır konum",
      length: "Bilgi yok",
      sunbeds: "Şezlong ve havlu (dahil)",
      waterSports: true,
      waterSportsNote: "Su sporları mevcut (detay bilgisi PDF'te yok)",
      snorkeling: true
    },

    transfer: {
      airport: "Sharm El Sheikh Havalimanı (SSH)",
      duration: "~10 dakika",
      options: ["Ücretli transfer imkânı"],
      approxPrice: "Bilgi yok",
      note: "Havalimanına 9 km mesafe. 05:00 öncesi girişlerde 1 gece ücreti alınır; 05:00–09:00 arası müsaitliğe göre ücretlidir."
    },

    adultOnly: {
      is: false,
      ageLimit: null,
      note: "Aileler ve çiftler için tasarlanmıştır."
    },

    salesScript: {
      opening: "Rixos Radamis Beach Hotel — Kızıldeniz'e adım attığınız anda başlayan bir tatil. Denize sıfır konumuyla odadan çıkar çıkmaz plaj, şık cabanalar ve Ultra HSD konfort.",
      keyPoints: [
        "Tüm odalar Beach Side — denize karşı balkon veya teras",
        "Özel cabanalar ile premium plaj deneyimi",
        "11 A La Carte restoran — farklı mutfaklar",
        "Rixy Kids Club gece 11'e kadar çocuklara özel etkinlik",
        "Ultra HSD kapsamında tüm yiyecek-içecek dahil"
      ],
      closing: "Tarihlerinizi paylaşın, size özel fiyat teklifi hazırlayalım. Hangi tarihler uygun?"
    },

    honeymoonSalesScript: "Denize bakan odanızda romantik Kızıldeniz sabahı, özel cabanada iki kişilik gün batımı keyfi, akşam T-Bone veya Salt'ta gurme yemek. Beach Hotel balayı için bambaşka bir his veriyor — deniz her an yanınızda.",

    familySalesScript: "Odadan çıkar çıkmaz plaj! Çocuklar Rixy Kids Club'da plaj etkinliklerinde, siz cabana'nızda huzurla dinleniyorsunuz. Akşam 11 farklı A La Carte arasından seçim yapıyorsunuz. Denize sıfır aile tatilinin en doğal hali.",

    objections: [
      {
        q: "Beach Hotel mi, Ana bina mı tercih etmeliyim?",
        a: "Beach Hotel denize sıfır — sabah uyandığınızda doğruca Kızıldeniz. Ana bina ise aquaparka ve Rixy Kids Town'a daha yakın. Önceliğiniz deniz mi yoksa aquapark & çocuk aktivitesi mi?"
      },
      {
        q: "Aquapark var mı?",
        a: "Beach Hotel bölümünde müstakil aquapark bilgisi belgede geçmiyor. Ana binanın Aqua Mania Jungle Park'ına erişim konusunu rezervasyon sırasında birlikte netleştirebiliriz."
      },
      {
        q: "Ultra HSD tam olarak ne içeriyor?",
        a: "Tüm öğünler, tüm yerel ve yabancı içecekler, animasyon programları ve aktiviteler dahil. Yalnızca Teppanyaki gibi özel şov restoranları ve spa ekstra ücretlidir."
      }
    ],

    importantNotes: [
      "Check-in: 14:00 / Check-out: 12:00",
      "05:00 öncesi girişlerde 1 gece ücreti alınır",
      "05:00–09:00 arası erken giriş müsaitliğe bağlı ve ücretlidir",
      "Tüm odalar sigara içilmez (non-smoking)",
      "Alkollü içecekler bardakla servis edilir; şişe servisi yapılmaz",
      "Spa ve fitness kullanımı 16 yaş üstü misafirler içindir",
      "Teppanyaki ekstra ücretlidir: 60 USD/kişi"
    ],

    whatsappTemplates: {
      general: "Merhaba! 🏖️ Rixos Radamis Beach Hotel — Kızıldeniz'e sıfır, özel cabanalar ve Ultra HSD konfort sizi bekliyor. Tarihlerinizi paylaşır mısınız, size özel fiyat verelim?",
      honeymoon: "Tebrikler! 💍 Balayı için denize sıfır Beach Hotel süit, özel cabana ve romantik akşam yemeği paketi hazırlayabiliriz. Tarihlerinizi belirtin!",
      family: "Merhaba! 👨‍👩‍👦 Denize sıfır aile tatili için Rixos Radamis Beach Hotel harika! Rixy Kids Club, 11 A La Carte restoran ve özel plaj. Çocukların yaşlarını paylaşır mısınız?",
      priceRequest: "Rixos Radamis Beach Hotel için fiyat araştırıyorsunuz. Tarih, kişi sayısı ve oda tipini belirtir misiniz? Hemen teklif hazırlayalım. 🌊",
      transfer: "Rixos Radamis Beach Hotel, havalimanına 9 km — yaklaşık 10 dakika. Transfer ayarlamak ister misiniz? Uçuş saatini belirtin, halledelim. ✈️"
    },

    lastUpdated: "2026-05-22"
  },

  // ─────────────────────────────────────────────────────────────────
  // 3. RIXOS PREMIUM SEAGATE SHARM EL SHEIKH
  // ─────────────────────────────────────────────────────────────────
  {
    id: 3,
    name: "Rixos Premium Seagate Sharm El Sheikh",
    region: "Şarm El Şeyh, Mısır",
    concept: "Premium Her Şey Dahil (Ultra HSD)",
    stars: 5,
    image: "rixos-premium-seagate.jpg",

    badges: ["Ultra HSD", "Aquaventure Park", "Swim-Up Oda", "Presidential Suite", "Villa"],
    tags: ["aile", "aquapark", "swim-up", "villa", "premium", "büyük grup"],
    targetCustomer: "Premium tatil arayan aileler, swim-up oda isteyen çiftler, büyük aile grupları ve villa konaklaması arayanlar",

    strengths: [
      "Rixos Aquaventure Park: 23 kaydırak dahil — ayrıca giriş ücreti yok",
      "Swim Up odalar — terastan doğrudan özel havuza erişim",
      "12 A La Carte restoran + 2 açık büfe",
      "Superior Villa 360 m², özel bahçe & havuz + özel uşak",
      "Presidential Suite 480 m²",
      "Exclusive Sports Club — deniz kıyısında ücretsiz grup dersleri"
    ],

    competitorDiff: "Radamis aquaparkına kıyasla daha sakin (23 kaydırak), ancak Lazy River, dönme dolap, çarpışan araba gibi ekstra kuru eğlence özellikleri var. Swim Up oda seçeneği Radamis'te yok. Swissotel'e kıyasla tesis alanı çok daha geniş ve Premium HSD kapsamı daha zengin.",

    roomTypes: [
      {
        name: "Superior Room (Ana Bina)",
        sizeSqm: "32",
        maxCapacity: "3 yetişkin veya 2 yetişkin + 2 çocuk",
        view: "Bilgi yok",
        features: ["King veya twin yatak", "Minibar", "Çay-kahve", "Bornoz & terlik", "LCD IP TV", "Wi-Fi", "Kasa", "Klima"]
      },
      {
        name: "Superior Room Aqua",
        sizeSqm: "30",
        maxCapacity: "3 yetişkin veya 2 yetişkin + 2 çocuk",
        view: "Aquaparka yakın konum",
        features: ["King veya twin yatak", "Minibar", "Bornoz & terlik", "LCD IP TV", "Wi-Fi"]
      },
      {
        name: "Deluxe Room",
        sizeSqm: "36–40",
        maxCapacity: "3 yetişkin veya 2 yetişkin + 2 çocuk",
        view: "Balkon veya teras",
        features: ["King veya twin", "Ücretsiz günlük minibar (su, soft içecek, bira)", "Klima", "Wi-Fi"]
      },
      {
        name: "Deluxe Room Aqua",
        sizeSqm: "32",
        maxCapacity: "3 yetişkin veya 2 yetişkin + 2 çocuk",
        view: "Üst katlarda balkon",
        features: ["King veya twin", "Ücretsiz günlük minibar (su, soft içecek, bira)", "Klima", "Wi-Fi"]
      },
      {
        name: "Premium Room",
        sizeSqm: "36–40",
        maxCapacity: "3 yetişkin veya 2 yetişkin + 2 çocuk",
        view: "Deniz manzarası (üst katlar)",
        features: ["Premium odalara özel paylaşımlı havuz", "Balkon", "Minibar", "Wi-Fi"]
      },
      {
        name: "Swim Up Room",
        sizeSqm: "36–40",
        maxCapacity: "3 yetişkin veya 2 yetişkin + 2 çocuk",
        view: "Deniz & havuz manzarası — zemin kat",
        features: ["Terastan doğrudan özel havuza erişim", "King veya twin", "Minibar", "Wi-Fi", "Kasa"]
      },
      {
        name: "Junior Suite",
        sizeSqm: "53–58",
        maxCapacity: "3 yetişkin + 1 çocuk",
        view: "Deniz manzarası (üst katlar)",
        features: ["Premium paylaşımlı havuz", "Balkon", "Minibar", "Wi-Fi", "Kasa"]
      },
      {
        name: "Family Room",
        sizeSqm: "48–58",
        maxCapacity: "4 yetişkin + 1 çocuk",
        view: "Balkon",
        features: ["1 king + 1 twin yatak odası", "Her odada minibar, LCD TV, duş, balkon"]
      },
      {
        name: "Family Room Aqua",
        sizeSqm: "56",
        maxCapacity: "4 yetişkin + 1 çocuk",
        view: "Zemin kat teras",
        features: ["1 king + 1 twin oda (ara kapılı)", "2 LCD TV", "Minibar", "Wi-Fi"]
      },
      {
        name: "Family Suite",
        sizeSqm: "64–68",
        maxCapacity: "4 yetişkin + 2 çocuk",
        view: "Balkon",
        features: ["1 king + 1 twin oda", "Her iki odada minibar, LCD TV, duş, balkon"]
      },
      {
        name: "Superior Suite Aqua",
        sizeSqm: "88",
        maxCapacity: "4 yetişkin + 2 çocuk",
        view: "Aquaparka yakın — balkon/teras",
        features: ["King veya twin", "Minibar", "Bornoz & terlik", "LCD IP TV", "Wi-Fi"]
      },
      {
        name: "Grand Suite Aqua",
        sizeSqm: "108",
        maxCapacity: "4 yetişkin + 2 çocuk",
        view: "Teras",
        features: ["1 king + 1 twin oda", "Oturma alanı", "3 minibar", "3 LCD TV", "2 banyo"]
      },
      {
        name: "Presidential Suite",
        sizeSqm: "480",
        maxCapacity: "6 yetişkin veya 4 yetişkin + 2 çocuk",
        view: "Havuz veya deniz manzarası",
        features: ["1 king ana oda + giyinme odası", "2 ilave yatak odası", "2 salon", "Jakuzi", "Tam donanımlı mutfak"]
      },
      {
        name: "Superior Villa",
        sizeSqm: "360",
        maxCapacity: "8 yetişkin + 2 çocuk",
        view: "Özel bahçe ve havuz",
        features: [
          "3 yatak odası (king ve twin)",
          "4 banyo",
          "Tam donanımlı mutfak",
          "65\" LCD IP TV",
          "Özel bahçe ve yüzme havuzu",
          "Özel uşak hizmeti"
        ]
      }
    ],

    restaurants: [
      { name: "Turquoise", cuisine: "7/24 Uluslararası Açık Büfe", hours: "24 saat", extraCharge: false },
      { name: "Veranda", cuisine: "Uluslararası Açık Büfe (kahvaltı, öğle, akşam)", hours: "Bilgi yok", extraCharge: false },
      { name: "Asian", cuisine: "Asya", hours: "Bilgi yok", extraCharge: false },
      { name: "Lalezar", cuisine: "Türk & Osmanlı", hours: "Bilgi yok", extraCharge: false },
      { name: "Epicure", cuisine: "Modern Fransız", hours: "Bilgi yok", extraCharge: false },
      { name: "La Churrascaria", cuisine: "Brezilya Izgara", hours: "Bilgi yok", extraCharge: false },
      { name: "The Mangal", cuisine: "Kırmızı Et / Kendi Izgaranız", hours: "Bilgi yok", extraCharge: false },
      { name: "L'Olivo", cuisine: "İtalyan", hours: "Bilgi yok", extraCharge: false },
      { name: "Salt", cuisine: "Deniz Ürünleri", hours: "Bilgi yok", extraCharge: false },
      { name: "People's", cuisine: "Rezervasyonsuz Uluslararası", hours: "Bilgi yok", extraCharge: false },
      { name: "Teppanyaki", cuisine: "Japon Şov", hours: "Bilgi yok", extraCharge: true, priceNote: "Menü 1: 60 USD, Menü 2: 70 USD, Menü 3: 80 USD" },
      { name: "Mykonos", cuisine: "Yunan", hours: "Bilgi yok", extraCharge: true, priceNote: "20 USD/kişi sabit" }
    ],

    aquapark: {
      has: true,
      name: "Rixos Aquaventure Park",
      hours: "10:00–17:30",
      included: true,
      slides: 23,
      note: "Temalı çocuk alanları, Lazy River, dev salıncaklar, kuru eğlence parkı, dönme dolap, çarpışan arabalar, snack istasyonları, food court. Rixos misafirlerine sınırsız erişim dahil."
    },

    kidsClub: {
      has: true,
      name: "Rixy Kids Club",
      ageRange: "Bilgi yok",
      hours: "09:30–23:00",
      price: "Dahil (Ultra HSD)",
      activities: [
        "Çocuk havuzu",
        "Animasyon ekibi eşliğinde oyunlar ve atölyeler",
        "Gösteriler ve temalı aktiviteler",
        "Günlük menüler ve sağlıklı atıştırmalıklar",
        "Mini disko"
      ]
    },

    beach: {
      hasPrivate: true,
      type: "Özel plaj — Kızıldeniz kıyısı",
      length: "Bilgi yok",
      sunbeds: "Dahil (detay bilgisi yok)",
      waterSports: true,
      waterSportsNote: "Su sporları mevcut (detay bilgisi PDF'te yok)",
      snorkeling: true
    },

    transfer: {
      airport: "Sharm El Sheikh Havalimanı (SSH)",
      duration: "~10 dakika",
      options: ["Ücretli transfer imkânı"],
      approxPrice: "Bilgi yok",
      note: "Havalimanına 9 km. 05:00 öncesi girişlerde 1 gece ücreti alınır; 05:00–09:00 arası ücretlidir."
    },

    adultOnly: {
      is: false,
      ageLimit: null,
      note: "Hem aileler hem çiftler için uygundur. Swim Up ve Premium odalar çiftler için özellikle önerilir."
    },

    salesScript: {
      opening: "Rixos Premium Seagate — 23 kaydıraklı Aquaventure Park ayrıca ücret ödemeden dahil, Swim Up odanın terasından havuza adım atıyorsunuz, 12 A La Carte restoran sizi bekliyor.",
      keyPoints: [
        "Aquaventure Park dahil — lazy river, dönme dolap, çarpışan araba ile gerçek bir eğlence parkı",
        "Swim Up oda: terasta oturur, havuza atlarsınız",
        "Superior Villa 360 m²: özel havuz + uşak hizmeti",
        "Exclusive Sports Club deniz kenarında yoga, crossfit, aqua zumba",
        "12 A La Carte + 2 açık büfe"
      ],
      closing: "Tarihlerinizi ve tercih ettiğiniz oda tipini paylaşın, hemen fiyat hazırlayalım."
    },

    honeymoonSalesScript: "Swim Up oda seçin — terastan havuza sabah kahvaltısı mümkün. Anjana Spa'da Moroccan Bath ve çift masajı, akşam Epicure'de Modern Fransız menü. Gece Rixos Arena'da Broadway şovları. Seagate'de balayı başka hissettiriyor.",

    familySalesScript: "23 kaydıraklı Aquaventure Park, Lazy River, dönme dolap ve çarpışan arabalar — çocuklar oradan hiç çıkmak istemez. Rixy Kids Club sabah 9'dan gece 11'e kadar açık. Family Room Aqua'da aquaparka adım atma mesafesi. 12 A La Carte ile akşam herkese uygun seçenek var.",

    objections: [
      {
        q: "Aquaventure Park dahil mi, ayrıca ücret ödüyor muyuz?",
        a: "Tamamen dahil! Rixos misafirlerine sınırsız erişim Ultra HSD kapsamında. 23 kaydırak, lazy river, kuru eğlence parkı, dönme dolap, çarpışan araba — hiçbiri için ekstra ücret ödemiyorsunuz."
      },
      {
        q: "Swim Up oda nedir tam olarak?",
        a: "Zemin katta, terasta oturduğunuzda doğrudan özel havuza girebildiğiniz oda. Sabah kahvaltısını terastan yapıp havuza atlayabilirsiniz. Deniz ve havuz manzarası da var."
      },
      {
        q: "Radamis ile Seagate arasında hangisi daha iyi?",
        a: "Seagate biraz daha premium hisli ve sakin. Swim Up oda, Lazy River ve kuru eğlence parkı Seagate'te var. Radamis'in ise Rixy Kids Town avantajı çok büyük — tematik çocuk şehri. Bütçe ve önceliğinize göre ikisini de değerlendirebiliriz."
      },
      {
        q: "Villa kaç kişiyi alıyor?",
        a: "Superior Villa 360 m²'de 8 yetişkin + 2 çocuk konaklar. Özel bahçe, yüzme havuzu ve kişisel uşak hizmeti dahil. Büyük aile grupları için mükemmel."
      }
    ],

    importantNotes: [
      "Check-in: 14:00 / Check-out: 12:00",
      "05:00 öncesi girişlerde 1 gece ücreti alınır",
      "05:00–09:00 arası erken giriş müsaitliğe bağlı ve ücretlidir",
      "Tüm odalar ve sütler tamamen sigarasızdır",
      "Alkollü içecekler yalnızca bardakta servis edilir; şişe servisi yapılmaz",
      "Teppanyaki ekstra ücretli: Menü 1: 60 USD, Menü 2: 70 USD, Menü 3: 80 USD",
      "Mykonos Restoran ekstra ücretli: 20 USD/kişi",
      "Radamis misafirleri Seagate Aquapark'ını kullanamaz (ve tersi)"
    ],

    whatsappTemplates: {
      general: "Merhaba! 🌊 Rixos Premium Seagate hakkında bilgi almak istediğinizi gördük. 23 kaydıraklı Aquaventure Park dahil, Swim Up odalar ve 12 A La Carte restoran sizi bekliyor. Tarihlerinizi paylaşır mısınız?",
      honeymoon: "Tebrikler! 💍 Rixos Premium Seagate Swim Up oda + Anjana Spa çift masajı + özel akşam yemeği paketi mükemmel bir balayı başlangıcı. Tarihlerinizi yazın, detayları birlikte planlayalım.",
      family: "Merhaba! 👨‍👩‍👧‍👦 Rixos Premium Seagate'de 23 kaydıraklı Aquaventure Park, Lazy River ve aile odaları sizi bekliyor. Çocukların yaş ve sayısını belirtir misiniz?",
      priceRequest: "Rixos Premium Seagate için fiyat araştırıyorsunuz. Tarih, kişi sayısı ve oda tipini (örn. Swim Up, Family Room) paylaşır mısınız? Hemen hazırlayalım. 🏨",
      transfer: "Rixos Premium Seagate, havalimanına 9 km — yaklaşık 10 dakika. Transfer ayarlamamı ister misiniz? Uçuş saatinizi yazın. ✈️"
    },

    lastUpdated: "2026-05-22"
  },

  // ─────────────────────────────────────────────────────────────────
  // 4. SWISSOTEL SHARM EL SHEIKH
  // ─────────────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Swissotel Sharm El Sheikh",
    region: "Şarm El Şeyh, Mısır",
    concept: "Ultra Her Şey Dahil",
    stars: 5,
    image: "swissotel-sharm.jpg",

    badges: ["Ultra HSD", "Yeni Açılış 2024", "Adults Only Bölümü", "Naama Bay'a 1 km", "Tek HSD Swissôtel"],
    tags: ["adults only", "yeni tesis", "balayı", "çift", "aile", "naama bay", "butik hissi"],
    targetCustomer: "Sakinlik ve zarafet isteyen çiftler ve balayı çiftleri (Adults Only bölümü), aquaparka yakın oda isteyen aileler (Aqua bölümü)",

    strengths: [
      "Dünyanın tek Ultra HSD Swissôtel — global prestijli marka deneyimi",
      "2024 açılışı — sıfır, tamamen yeni tesis",
      "Adults Only bölümü (16+) ve Aqua (aile) bölümü — aynı tesiste iki konsept",
      "Naama Bay'a yalnızca 1 km",
      "Sky Lounge Bar — Sharm panoramik manzarası",
      "6 farklı A La Carte restoran"
    ],

    competitorDiff: "Rixos markalarından farklı olarak Swissôtel konsepti daha butik ve prestijli bir his veriyor. Adults Only bölümüyle balayı ve çift tatili konusunda Rixos'tan ayrışıyor. Aquapark Rixos'lara kıyasla daha küçük (10 kaydırak) ama Lazy River ve dalgalar havuzu mevcut. Naama Bay merkezine en yakın seçenek.",

    roomTypes: [
      {
        name: "Deluxe Oda Aqua",
        sizeSqm: "45",
        maxCapacity: "Bilgi yok",
        view: "Bilgi yok",
        section: "Aqua (Aile Bölümü)",
        count: 194,
        features: ["Mini bar", "Çay/kahve seti", "Kasa", "Balkon veya teras", "LCD TV", "Bornoz & terlik", "Sigara içilmez"]
      },
      {
        name: "Swiss Select Oda Aqua",
        sizeSqm: "55",
        maxCapacity: "Bilgi yok",
        view: "Bilgi yok",
        section: "Aqua (Aile Bölümü)",
        count: 148,
        features: ["Mini bar", "Çay/kahve seti", "Kasa", "Balkon veya teras", "LCD TV", "Bornoz & terlik", "Sigara içilmez"]
      },
      {
        name: "Family Room Aqua",
        sizeSqm: "55",
        maxCapacity: "Bilgi yok",
        view: "Bilgi yok",
        section: "Aqua (Aile Bölümü)",
        count: 80,
        features: ["Bağlantılı odalar", "Aquaparka yakın konum", "Çocuklara özel tasarım"]
      },
      {
        name: "Family Suite Aqua",
        sizeSqm: "90",
        maxCapacity: "Bilgi yok",
        view: "Bilgi yok",
        section: "Aqua (Aile Bölümü)",
        count: 2,
        features: ["Geniş aile süiti", "Aquaparka yakın"]
      },
      {
        name: "Signature Suite Aqua",
        sizeSqm: "135",
        maxCapacity: "Bilgi yok",
        view: "Bilgi yok",
        section: "Aqua (Aile Bölümü)",
        count: 2,
        features: ["En büyük Aqua süit"]
      },
      {
        name: "Swiss Select Room Adult",
        sizeSqm: "55",
        maxCapacity: "Bilgi yok",
        view: "Bilgi yok",
        section: "Adults Only (16+)",
        count: 151,
        features: ["Mini bar", "Çay/kahve seti", "Espresso makinesi", "Kasa", "Balkon veya teras", "LCD TV", "Bornoz & terlik", "Sigara içilmez"]
      },
      {
        name: "Junior Suite Adult",
        sizeSqm: "68",
        maxCapacity: "Bilgi yok",
        view: "Bilgi yok",
        section: "Adults Only (16+)",
        count: 4,
        features: ["Geniş yaşam alanı", "Teraslı süit", "Sakinlik odaklı"]
      },
      {
        name: "Suite Adult",
        sizeSqm: "75",
        maxCapacity: "Bilgi yok",
        view: "Bilgi yok",
        section: "Adults Only (16+)",
        count: 6,
        features: ["Geniş yaşam alanı", "Teraslı süit"]
      },
      {
        name: "Executive Suite Adult",
        sizeSqm: "110",
        maxCapacity: "Bilgi yok",
        view: "Bilgi yok",
        section: "Adults Only (16+)",
        count: 2,
        features: ["Geniş yaşam alanı", "Teraslı süit"]
      },
      {
        name: "Signature Suite Adult",
        sizeSqm: "120",
        maxCapacity: "Bilgi yok",
        view: "Bilgi yok",
        section: "Adults Only (16+)",
        count: 1,
        features: ["En prestijli Adults Only süit"]
      }
    ],

    restaurants: [
      { name: "The Quarter", cuisine: "Ana Restoran — Uluslararası Açık Büfe", hours: "24 saat çeşitli servisler", extraCharge: false },
      { name: "Flame Garden Grill", cuisine: "Barbekü", hours: "Bilgi yok", extraCharge: false },
      { name: "La Rosetta", cuisine: "İtalyan", hours: "Bilgi yok", extraCharge: false },
      { name: "Mumbai", cuisine: "Hint", hours: "Bilgi yok", extraCharge: false },
      { name: "Churrasco Brazil", cuisine: "Brezilya", hours: "Bilgi yok", extraCharge: false },
      { name: "La Taverna", cuisine: "Yunan", hours: "Bilgi yok", extraCharge: false },
      { name: "Sky Lounge", cuisine: "Asya & Sushi", hours: "Bilgi yok", extraCharge: false }
    ],

    aquapark: {
      has: true,
      name: "Swissotel Aquapark",
      hours: "Bilgi yok",
      included: true,
      slides: 10,
      note: "10 su kaydırağı, çocuklara özel su alanları, dalgalar havuzu, Lazy River, snack bar ve açık hava yemek alanı."
    },

    kidsClub: {
      has: true,
      name: "Çocuk Kulübü",
      ageRange: "4–12",
      hours: "09:30–23:00",
      price: "Dahil (Ultra HSD)",
      activities: [
        "Günlük atölyeler",
        "Oyunlar",
        "Mini disko",
        "Film geceleri"
      ]
    },

    beach: {
      hasPrivate: true,
      type: "Özel plaj — Kızıldeniz kıyısı",
      length: "100 metre",
      sunbeds: "Dahil (detay bilgisi yok)",
      waterSports: true,
      waterSportsNote: "Su aktiviteleri mevcut (detay bilgisi PDF'te yok)",
      snorkeling: true
    },

    transfer: {
      airport: "Sharm El Sheikh Havalimanı (SSH)",
      duration: "~15 dakika",
      options: ["Transfer imkânı (detay bilgisi yok)"],
      approxPrice: "Bilgi yok",
      note: "Havalimanına 11,5 km. Naama Bay'a yalnızca 1 km."
    },

    adultOnly: {
      is: false,
      ageLimit: 16,
      note: "Otelin Adults Only bölümü yalnızca 16 yaş ve üzeri misafirler için tasarlanmıştır. Aqua bölümü tüm yaşlara açıktır. Spa ve fitness alanları 16+ yaş içindir."
    },

    salesScript: {
      opening: "Swissotel Sharm El Sheikh — dünyanın tek Ultra HSD Swissôtel'i, 2024'te kapılarını açtı. Naama Bay'a 1 km, hem Adults Only hem aile bölümüyle herkese uygun ama herkesin kendi dünyasında keyif yaptığı bir tesis.",
      keyPoints: [
        "2024 açılışı — her şey sıfırdan yeni",
        "Dünyanın tek Ultra HSD Swissôtel — prestijli marka farkı",
        "Adults Only bölümü 16+ yaş için tamamen sessiz ve zarif",
        "Naama Bay'a 1 km — şehir gezisi kolay",
        "Swissôtel global standardı: Accor Hotels bünyesinde"
      ],
      closing: "Adults Only mu, aile bölümü mü istediğinizi belirtin, uygun oda ve teklifi hemen hazırlayalım."
    },

    honeymoonSalesScript: "2024'te açılan taze bir tesiste balayı yapın. Adults Only bölümünde 55–120 m² arası süitler, Tipsy Bar'da gün batımı kokteyliniz, Purovel Spa'da çift masajı ve Sky Lounge'da Şarm panoraması. Swissôtel kalitesi her detayda hissediliyor — balayı bunun için var.",

    familySalesScript: "Swissotel Aqua bölümünde bağlantılı aile odaları, 10 kaydıraklı aquapark ve 4–12 yaş çocuk kulübü gece 11'e kadar açık. Aquaparka en yakın konumda Family Room ile çocuklar için her şey hazır. The Quarter'da 24 saat açık büfe ile hiç aç kalınmıyor.",

    objections: [
      {
        q: "Swissôtel mi, Rixos mu tercih etmeliyim?",
        a: "İkisi de Ultra HSD ama Swissôtel daha butik ve yeni (2024). Adults Only bölümüyle çiftler için sakinlik çok daha ön planda. Rixos daha büyük tesis, daha fazla aktivite çeşitliliği sunuyor. Sakinlik mi yoksa büyük tesis enerjisi mi istersiniz?"
      },
      {
        q: "Adults Only bölümü gerçekten çocuksuz mu?",
        a: "Evet, yalnızca 16 yaş ve üzeri misafirler bu bölüme kabul ediliyor. Spa ve fitness alanları da 16+ yaş için. Çocuklu aileler Aqua bölümüne yönlendiriliyor."
      },
      {
        q: "2024 açılışı güvenilir mi, yeterince oturmuş mu?",
        a: "Swissôtel dünya genelinde çok köklü bir zincir — Accor Hotels bünyesinde. 2024 açılışı tüm ekipman ve odaların sıfırdan yeni olduğu anlamına geliyor. Bu bir avantaj."
      },
      {
        q: "Aquapark Rixos'lardan küçük mü?",
        a: "Evet, 10 kaydırak var ama Lazy River ve dalgalar havuzu da mevcut. Çok büyük aquapark önceliğinizse Rixos Seagate (23 kaydırak) veya Radamis (26 kaydırak) daha uygun olabilir."
      }
    ],

    importantNotes: [
      "Check-in: 14:00 / Check-out: 12:00",
      "Otelin bazı bölümleri yalnızca 18 yaş ve üzeri misafirler için tasarlanmış (Adults Only)",
      "Tüm odalar ve sütler sigara içilmez",
      "Spa ve spor salonu 16 yaş ve üzeri misafirler içindir",
      "Alkollü içecekler yalnızca kadehle servis edilir; şişe servisi yapılmaz",
      "Açık alanlardaki hizmet ve aktiviteler hava koşullarına bağlı olarak değişebilir"
    ],

    whatsappTemplates: {
      general: "Merhaba! 🏨 Swissotel Sharm El Sheikh — dünyanın tek Ultra HSD Swissôtel'i, 2024 açılışı ve Naama Bay'a 1 km! Aile mi, çift mi tatil planlıyorsunuz, size uygun bölümü önerelim. Tarihlerinizi paylaşır mısınız?",
      honeymoon: "Tebrikler! 💍 2024 açılışı Swissotel Adults Only süit + Purovel Spa çift masajı + Sky Lounge akşamı. Balayı için taze ve zarif bir tesis. Tarihlerinizi yazın, detayları planlayalım.",
      family: "Merhaba! 👨‍👩‍👦 Swissotel Aqua bölümünde bağlantılı aile odaları, 10 kaydıraklı aquapark ve gece 11'e kadar çocuk kulübü hazır. Çocukların yaşlarını belirtir misiniz?",
      priceRequest: "Swissotel Sharm için fiyat araştırıyorsunuz. Adults Only mu, Aqua bölümü mü tercih edersiniz? Tarih ve kişi sayısını paylaşın, hemen teklif hazırlayalım. 🌟",
      transfer: "Swissotel Sharm El Sheikh, havalimanına 11,5 km. Transfer ayarlamamı ister misiniz? Uçuş saatinizi yazın. ✈️"
    },

    lastUpdated: "2026-05-22"
  },

  // ─────────────────────────────────────────────────────────────────
  // 5. RIXOS PREMIUM MAGAWISH SUITES & VILLAS – HURGHADA
  // ─────────────────────────────────────────────────────────────────
  {
    id: 5,
    name: "Rixos Premium Magawish Suites & Villas",
    region: "Hurghada, Mısır",
    concept: "Ultra Her Şey Dahil",
    stars: 5,
    image: "rixos-magawish-hurghada.jpg",

    badges: ["Ultra HSD", "Sadece Süit & Villa", "Royal Villa 944 m²", "1 km Özel Plaj", "30 Havuz", "Swim-Up Süit"],
    tags: ["villa", "lüks", "süit", "büyük grup", "balayı", "hurghada", "1km plaj", "özel havuz"],
    targetCustomer: "Geniş villa veya özel havuzlu süit isteyen üst segment misafirler, büyük aileler, özel plaj ve maksimum mahremiyet arayanlar",

    strengths: [
      "255.000 m² — Hurghada'nın en prestijli suite & villa resort alanlarından biri",
      "1 km özel plaj ve 30 ısıtmalı havuz",
      "En küçük oda 130 m² — standart oda yok, her şey süit veya villa",
      "Royal Villa 944 m²: özel havuz, bahçe ve kişisel butler",
      "Lagoon Swim Up Suite: doğrudan havuz erişimi",
      "Havalimanına sadece 7 km"
    ],

    competitorDiff: "Şarm El Şeyh tesisleriyle kıyaslandığında farklı bir destinasyon (Hurghada). Oda boyutları tüm rakiplerden büyük — minimum 130 m²'den başlıyor. Rixos Seagate veya Radamis gibi kalabalık bir resort değil; daha sakin, daha özel ve villaların ağırlıklı olduğu bir konsept.",

    roomTypes: [
      {
        name: "Superior Suite",
        sizeSqm: "140",
        maxCapacity: "2 yetişkin + 2 çocuk veya 3 yetişkin + 1 çocuk",
        view: "Deniz veya havuz manzarası",
        features: ["Geniş oturma alanı", "Yatak odası"]
      },
      {
        name: "Lagoon Deluxe Suite",
        sizeSqm: "130",
        maxCapacity: "3 yetişkin + 1 çocuk veya 2 yetişkin + 2 çocuk",
        view: "Deniz ve havuz manzaralı balkon (2. kat)",
        features: ["Geniş oturma odası", "2 minibar", "Kahve makinesi"]
      },
      {
        name: "Lagoon Swim Up Suite",
        sizeSqm: "130",
        maxCapacity: "3 yetişkin + 1 çocuk veya 2 yetişkin + 2 çocuk",
        view: "Bilgi yok",
        features: ["Direkt havuz erişimi", "Geniş teras", "King-size yatak", "2 minibar", "Espresso makinesi"]
      },
      {
        name: "Pool Villa",
        sizeSqm: "105–129",
        maxCapacity: "3 yetişkin + 1 çocuk veya 4 yetişkin",
        view: "Havuz manzarası",
        features: ["Geniş oturma odası", "King veya twin yatak", "Lüks teras"]
      },
      {
        name: "Executive Family Suite",
        sizeSqm: "170",
        maxCapacity: "4 yetişkin + 2 çocuk veya 5 yetişkin + 1 çocuk",
        view: "Deniz manzaralı balkon",
        features: ["2 büyük yatak odası", "Oturma alanı", "Her odada duş, minibar, espresso makinesi"]
      },
      {
        name: "Executive Pool Villa",
        sizeSqm: "240",
        maxCapacity: "5 yetişkin + 2 çocuk veya 6 yetişkin",
        view: "Direkt havuz erişimli büyük teras",
        features: ["3 yatak odası", "3 banyo", "Oturma & yemek alanı"]
      },
      {
        name: "Royal Villa",
        sizeSqm: "944",
        maxCapacity: "8 yetişkin + 2 çocuk",
        view: "Özel bahçe ve yüzme havuzu",
        features: [
          "4 yatak odası",
          "4 banyo + 1 misafir tuvaleti",
          "Tam donanımlı mutfak",
          "4 minibar",
          "Ev sinema sistemi",
          "Kişisel butler hizmeti"
        ]
      }
    ],

    restaurants: [
      {
        name: "Turquoise",
        cuisine: "Ana Restoran — Uluslararası Açık Büfe",
        hours: "Kahvaltı 07:00–10:00 / Geç Kahvaltı 10:00–11:00 / Öğle 12:30–15:30 / Akşam 18:30–21:30",
        extraCharge: false,
        note: "Kızıldeniz manzaralı geniş teras"
      },
      {
        name: "People's",
        cuisine: "Uluslararası Menü",
        hours: "09:00–22:00 (Gece atıştırmalıkları 22:00–07:00)",
        extraCharge: false,
        note: "Kızıldeniz manzarası, gece de açık"
      },
      { name: "Salt", cuisine: "Deniz Ürünleri", hours: "Bilgi yok", extraCharge: false, note: "Plajda servis" },
      { name: "Lalezar", cuisine: "Türk Mutfağı", hours: "Bilgi yok", extraCharge: false },
      { name: "Asian", cuisine: "Uzak Doğu, Sushi", hours: "Bilgi yok", extraCharge: false },
      { name: "La Churrascaria", cuisine: "Brezilya Izgara", hours: "Bilgi yok", extraCharge: false },
      { name: "The Mangal", cuisine: "BBQ — Aileler için açık hava", hours: "Bilgi yok", extraCharge: false },
      { name: "Teppanyaki", cuisine: "Asya Şov", hours: "Bilgi yok", extraCharge: true, priceNote: "Ücret bilgisi PDF'te belirtilmemiş" }
    ],

    aquapark: {
      has: false,
      name: "Bilgi yok",
      hours: "Bilgi yok",
      included: false,
      slides: 0,
      note: "PDF'te müstakil aquapark bilgisi verilmemiştir. 30 adet ısıtmalı havuz mevcuttur."
    },

    kidsClub: {
      has: true,
      name: "Rixy Kids Club",
      ageRange: "4–12",
      hours: "09:30–23:00",
      price: "Dahil (Ultra HSD)",
      activities: [
        "Sabah: Yoga, Yüz Boyama, Origami, Hayvan Maskeleri, Bahçe Oyunları",
        "Öğle: Kumdan Kale, Sandviç Yapımı, Limbo, Jenga",
        "Akşam: Mini Disco, Karaoke, Sinema, Yıldızları Bul Oyunu",
        "Tüm gün: Kostüm Partileri, Organik Bahçe, Hafıza Duvarı, Yaratıcı Atölyeler, Pizza & Turta Saatleri, Balon Sanatı"
      ]
    },

    beach: {
      hasPrivate: true,
      type: "Özel plaj — Kızıldeniz kıyısı",
      length: "1 km",
      sunbeds: "Dahil (detay bilgisi yok)",
      waterSports: true,
      waterSportsNote: "Su sporları mevcut (detay bilgisi PDF'te yok)",
      snorkeling: true
    },

    transfer: {
      airport: "Hurghada Uluslararası Havalimanı (HRG)",
      duration: "~10–15 dakika",
      options: ["Ücretli transfer imkânı"],
      approxPrice: "Bilgi yok",
      note: "Havalimanına 7 km. Hurghada şehir merkezine 12 km. Senzo AVM'ye 10 km."
    },

    adultOnly: {
      is: false,
      ageLimit: null,
      note: "Tüm yaşlara açık. Rixy Kids Club 4–12 yaş aralığına hizmet vermektedir."
    },

    salesScript: {
      opening: "Rixos Premium Magawish — Hurghada'nın 1 km özel plajında en küçük odası 130 m²'den başlayan, sadece süit ve villa konseptiyle çalışan prestijli bir resort. 30 ısıtmalı havuz, 7 A La Carte restoran ve Ultra HSD.",
      keyPoints: [
        "Standart oda yok — en küçük oda 130 m²",
        "Royal Villa 944 m²: butler, özel havuz, bahçe, ev sineması",
        "1 km özel plaj ve 30 ısıtmalı havuz",
        "Lagoon Swim Up Suite: terastan direkt havuza",
        "Havalimanına 7 km — kısa transfer"
      ],
      closing: "Kaç kişilik ve hangi tür konaklamayı düşünüyorsunuz? Süit mi villa mı? Tarihlerinizi paylaşın, hemen teklif çıkaralım."
    },

    honeymoonSalesScript: "Royal Villa'da kendi bahçeniz ve özel havuzunuz var, kişisel butler her isteğinizi yerine getiriyor — 944 m²'de sadece ikinizsiniz. Anjana Spa'da hamam ritüeli ve çift masajı, Beach Bar'da Kızıldeniz gün batımı kokteyliniz. Balayı böyle olmalı.",

    familySalesScript: "Executive Family Suite (170 m²) veya Executive Pool Villa (240 m²) ile tüm aile rahat eder. Rixy Kids Club gece 11'e kadar 4–12 yaş çocuklara özel, aileler The Mangal'da açık havada BBQ keyfinde. 1 km plajda şezlonglar ve 30 ısıtmalı havuz her mevsim kullanılabilir.",

    objections: [
      {
        q: "Neden Hurghada, Sharm El Sheikh neden değil?",
        a: "Hurghada şehir merkezine daha yakın — alışveriş ve çıkış daha kolay. Magawish tamamen kendi içinde kapalı bir resort, dışarıya çıkmanıza gerek yok. Sharm daha tur odaklı, Hurghada biraz daha şehirli bir atmosfer."
      },
      {
        q: "130 m² en küçük oda çok abartı değil mi?",
        a: "Bu tesiste standart oda yok — her şey süit veya villa. Rixos Premium Magawish zaten üst segment için tasarlanmış. Mahremiyet ve alan önceliğinizse bu kesinlikle doğru tercih."
      },
      {
        q: "Aquapark yok mu?",
        a: "PDF'te müstakil aquapark bilgisi geçmiyor. Ama 30 ısıtmalı havuz var. Büyük aquapark önceliğinizse Seagate (23 kaydırak) veya Radamis (26 kaydırak) daha uygun olabilir."
      },
      {
        q: "Royal Villa için fiyat çok yüksek olmaz mı?",
        a: "944 m², özel bahçe, özel havuz, 4 yatak odası, butler ve ev sineması — 8 yetişkin + 2 çocuk için bölününce kişi başı çok makul çıkıyor. Büyük aile grupları veya özel kutlamalar için ideal."
      }
    ],

    importantNotes: [
      "Check-in: 14:00 sonrası / Check-out: 12:00 öncesi",
      "05:00–09:00 arası erken giriş: müsaitliğe göre ücretlidir",
      "05:00'ten önce giriş: müsaitliğe göre 1 gecelik ücret alınır",
      "Tesisin her yerinde ücretsiz Wi-Fi",
      "Ücretsiz açık otopark",
      "Alkollü içecekler tüm restoran ve barlarda yalnızca bardakta servis edilir; şişe servisi yapılmaz",
      "Teppanyaki ekstra ücretlidir (ücret bilgisi PDF'te belirtilmemiş, rezervasyon öncesi sorulmalı)",
      "30 havuz kışın ısıtmalıdır",
      "Ücretli transfer imkânı mevcuttur"
    ],

    whatsappTemplates: {
      general: "Merhaba! 🏝️ Rixos Premium Magawish Hurghada — 1 km özel plaj, 30 ısıtmalı havuz, en küçük odası 130 m²'den başlayan Hurghada'nın en prestijli suite & villa resort'u. Tarihlerinizi ve kaç kişilik konaklamayı düşündüğünüzü paylaşır mısınız?",
      honeymoon: "Tebrikler! 💍 Royal Villa'da özel bahçe & havuz + kişisel butler + Anjana Spa hamam ritüeli. Balayı için daha özel bir yer düşünmek zor. Tarihlerinizi yazın, detayları planlayalım.",
      family: "Merhaba! 👨‍👩‍👧‍👦 Executive Family Suite (170 m²) veya Executive Pool Villa (240 m²) ile tüm aile rahat. Rixy Kids Club gece 11'e kadar açık, 1 km plaj ve 30 havuz. Çocuk sayısı ve yaşlarını belirtir misiniz?",
      priceRequest: "Rixos Magawish Hurghada için fiyat araştırıyorsunuz. Süit mi villa mı, tarih ve kişi sayısı nedir? Hemen teklif hazırlayalım. 🌺",
      transfer: "Rixos Magawish, Hurghada havalimanına 7 km — yaklaşık 10–15 dakika. Transfer ayarlamak ister misiniz? Uçuş saatinizi belirtin. ✈️"
    },

    lastUpdated: "2026-05-22"
  }
];

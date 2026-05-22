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

    competitorDiff: "Radamis'in Rixy Kids Town'u gerçek anlamda bir çocuk şehri — şeflik akademisinden robotik kodlamaya, itfaiyecilikten sürücü okuluna kadar tematik deneyimler. Seagate'te bu yok. Aquapark da daha büyük: 26 aktif kaydırak vs Seagate'in 23'ü. Swissotel'e kıyasla tesis ölçeği ve aktivite zenginliği çok farklı bir ligde. Beach bölümüyle karşılaştırınca: plaj önceliğiniz varsa Beach, çocuk aktivitesi önceliğinizse ana bina.",

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
      opening: "Şarm El Şeyh'te aile tatili denince Radamis farklı bir yerde duruyor. 300.000 m²'lik alan, 26 kaydıraklı aquapark, gerçek bir çocuk şehri ve 16 farklı dünya mutfağı — üstelik bunların hepsi tek ödemeyle. Çocuklar da siz de tatilde ayrı ayrı keyif çıkarıyorsunuz.",
      keyPoints: [
        "Aqua Mania Jungle Park: 26 aktif kaydırak, ayrıca tek kuruş ödenmiyor",
        "Rixy Kids Town gerçek anlamda bir çocuk şehri — şeflik, robotik kodlama, itfaiyecilik, sürücü okulu",
        "16 A La Carte restoran — her akşam farklı bir mutfak, rezervasyon ücretsiz",
        "Havalimanından 6 km, iner inmez 10 dakikada oteldesiniz",
        "Ultra HSD: yiyecek, içecek, aquapark, çocuk kulübü, animasyon hepsi dahil"
      ],
      closing: "Tatil tarihlerinizi ve kaç kişi olduğunuzu paylaşın, size özel bir teklif çıkarayım."
    },

    honeymoonSalesScript: "300.000 m²'lik tesiste kendinize ait bir köşe bulmak hiç zor değil. Havuz manzaralı süit odanızda sakin bir sabah, Anjana Spa'da çift masaj ritüeli, akşam T-Bone'da ya da Wabi Sabi'de iki kişilik masa. Check-in'de balayı süprizlerini biz ayarlıyoruz — sadece tarihleri siz belirleyin.",

    familySalesScript: "Çocuklar sabah 9'da Rixy Kids Town'a giriyor, gece 11'e kadar şef, robotik mühendisi, itfaiyeci oluyorlar. Siz o sürede Aqua Mania'nın 26 kaydırağını deniyorsunuz ya da Anjana Spa'da nefes alıyorsunuz. Akşam 16 A La Carte arasından herkes kendi istediğini seçiyor. Ultra HSD olduğu için hesap gelmiyor — sadece imza atıyorsunuz.",

    objections: [
      {
        q: "Mısır'dan emin değilim, güvenli mi?",
        a: "Rixos global bir zincir, standartlar Türkiye veya Dubai ile aynı. Tesis kendi içinde kapalı bir dünya — dışarıya çıkmanıza gerek kalmıyor. Şarm El Şeyh turistik bölge olarak yıllardır sorunsuz işliyor."
      },
      {
        q: "Uçuş süresi çok uzun değil mi?",
        a: "İstanbul'dan direkt uçuşlarla yaklaşık 3–3,5 saat. Havalimanına da 6 km — inip 10 dakikada otelde oluyorsunuz. Antalya'ya uçmaktan çok da farklı değil."
      },
      {
        q: "Çocukla tatil zor olur mu?",
        a: "Tam tersi. Rixy Kids Town sabah 9'dan gece 11'e kadar açık. Çocuklar orada meşgulken siz huzurla dinleniyorsunuz. Birçok aile 'çocuklu tatilde bu kadar rahat edeceğimizi beklemiyorduk' diyor."
      },
      {
        q: "Ultra HSD pahalı değil mi?",
        a: "Tek seferlik ödeyip her şeyi alıyorsunuz: 16 restoran, 26 kaydıraklı aquapark, içecekler, çocuk kulübü, animasyon. Bunları tek tek dışarıda alsanız bu fiyatın çok üstüne çıkar."
      },
      {
        q: "Seagate'den farkı ne?",
        a: "Radamis'in aquaparkı daha büyük, 26 aktif kaydırak. Ama asıl fark Rixy Kids Town — Seagate'de bu yok. Çocuklu aileler için Radamis daha avantajlı. Seagate biraz daha sakin, swim-up oda gibi farklı özellikleri var — bütçe ve önceliğe göre ikisini de konuşabiliriz."
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
      general: "Merhaba, Rixos Radamis hakkında bilgi almak istiyorsunuz, doğru mu anladım?\n\nŞarm'ın en büyük resort'larından biri — 26 kaydıraklı aquapark, Rixy Kids Town çocuk şehri ve 16 farklı A La Carte restoran. Hepsi Ultra HSD kapsamında, ayrıca bir şey ödemiyorsunuz.\n\nHangi tarihler aklınızda, kaç kişisiniz?",

      honeymoon: "Tebrikler, ne güzel bir karar!\n\nRadamis'te balayı için havuz manzaralı süit ayarlıyoruz, check-in'de küçük bir sürpriz hazırlıyoruz. Anjana Spa'da çift masaj, akşamları T-Bone veya Wabi Sabi'de masa — sakin ama her şey yanı başınızda.\n\nTarihlerinizi paylaşır mısınız? Hangi oda tipini düşündüğünüzü de söylerseniz hemen bakayım.",

      family: "Merhaba! Aile tatili için Radamis gerçekten iyi bir seçim.\n\nRixy Kids Town sabah 9'dan gece 11'e kadar açık — şeflik, robotik kodlama, itfaiyecilik, sürücü simülatörü. Çocuklar oraya girince çıkmak istemiyorlar. Siz de 26 kaydıraklı aquaparkta ya da Anjana Spa'da rahatlıyorsunuz, hesap yok çünkü her şey dahil.\n\nÇocukların yaşlarını ve kaç kişi olduğunuzu yazabilir misiniz?",

      priceRequest: "Tabii, hemen bakayım.\n\nŞu bilgileri paylaşabilir misiniz:\n– Hangi tarihler?\n– Kaç yetişkin, kaç çocuk (varsa yaşları)?\n– Oda tipi tercihiniz var mı, yoksa ben önereyim mi?\n\nBunları alınca size gerçekçi bir rakam vereyim.",

      transfer: "Havalimanına 6 km, yaklaşık 10 dakikalık yol — kısa bir transfer.\n\nAyarlamak ister misiniz? Uçuş saatinizi ve kaç kişi olduğunuzu yazarsanız halledelim.",

      followUp: "Merhaba, geçen gün Radamis hakkında konuşmuştuk — aklınıza takılan bir şey var mı?\n\nFarklı tarihler veya oda seçenekleri görmek isterseniz de bakmaya hazırım.",

      lastRoomWarning: "Radamis için baktığım tarihlerde müsaitlik oldukça daralıyor. Kesin bir bilgi vermek istemem ama eğer bu tarihler aklınızdaysa yakın zamanda netleştirmekte fayda var.\n\nHâlâ düşünüyor musunuz?",

      priceIncrease: "Merhaba, size bir bilgi geçmek istedim — baktığınız tarihler için fiyatlar kısa süre içinde güncellenecek.\n\nEğer karar aşamasındaysanız şu anki rakamla ilerlemek daha avantajlı olabilir. Sormak istediğiniz bir şey var mı?",

      reservationClose: "Rezervasyonunuz için son adıma geldik. Onaylamam için tarih, oda tipi ve kişi sayısını bir kez daha teyit edebilir misiniz?\n\nBir sorunuz varsa hemen yanıtlayayım, aksi halde işlemi başlatıyorum.",

      flightUpdate: "Uçuş bilgilerinizde bir değişiklik olduysa lütfen beni haberdar edin — transfer saatini ve check-in planını buna göre güncelleyelim.\n\nYeni saat veya sefer numaranız hazır olunca yazabilirsiniz."
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

    competitorDiff: "Ana Radamis binasına kıyasla denize çok daha yakın ve cabanalar daha şık. Plaj odaklı bir tatil isteyenler için belirleyici fark bu. Aqua Mania ve Rixy Kids Town'a erişim durumu rezervasyon sırasında netleştirilmeli. Seagate'e kıyasla daha modern renovasyon ve deniz manzarası öne çıkıyor.",

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
      opening: "Sabah uyandığınızda perde açılıyor, Kızıldeniz tam karşınızda. Beach Hotel'de deniz her an görüş alanınızda — odadan çıkar çıkmaz plaj, özel cabanalar ve Ultra HSD konfor.",
      keyPoints: [
        "Tüm odalar Beach Side — her balkon veya terasta deniz var",
        "Özel cabanalar: plajda kendinize ait bir köşe",
        "11 A La Carte restoran — her akşam farklı bir seçenek",
        "Rixy Kids Club gece 11'e kadar çocuklara özel etkinlik",
        "Ultra HSD kapsamında tüm yiyecek-içecek dahil, ekstra hesap yok"
      ],
      closing: "Hangi tarihler düşünüyorsunuz? Kaç kişisiniz? Hemen bakayım."
    },

    honeymoonSalesScript: "Denize bakan odanızda Kızıldeniz'le başlayan bir sabah, özel cabanada iki kişilik sessiz bir öğleden sonra, akşam T-Bone'da ya da Salt'ta masa. Beach Hotel çiftler için farklı bir his veriyor — deniz sürekli orada, yanınızda.",

    familySalesScript: "Odadan çıkar çıkmaz plaj — çocuklar zaten oraya koşuyor. Rixy Kids Club plajda ayrı etkinlikler düzenliyor, siz cabana'nızda huzurla oturuyorsunuz. Akşam 11 A La Carte arasından herkes istediğini seçiyor. Denize sıfır aile tatili böyle olur.",

    objections: [
      {
        q: "Beach Hotel mi, ana bina mı tercih etmeliyim?",
        a: "Beach Hotel'de sabah uyandığınızda deniz tam önünüzde — bu çok farklı bir his. Ana binada ise aquapark ve Rixy Kids Town daha yakın. Önceliğiniz plaj mı, yoksa aquapark ve çocuk aktivitesi mi — buna göre birlikte karar verelim."
      },
      {
        q: "Aquapark var mı?",
        a: "Beach Hotel bölümünde müstakil aquapark bilgisi belgede geçmiyor. Ana binanın Aqua Mania Jungle Park'ına erişim konusunu rezervasyon öncesi birlikte netleştirebiliriz."
      },
      {
        q: "Ultra HSD tam olarak ne içeriyor?",
        a: "Tüm öğünler, içecekler, animasyon ve aktiviteler dahil. Teppanyaki gibi şov restoranları ile spa ekstra ücretli — bunların dışında her şey kapsam içinde."
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
      general: "Merhaba, Rixos Radamis Beach Hotel'e bakıyorsunuz, doğru mu?\n\nBuranın en güçlü özelliği tam anlamıyla denize sıfır olması — balkondan deniz, odadan çıkınca plaj. Özel cabanalar da var, plajda kendinize ait bir köşe. Ultra HSD kapsamında her şey dahil, 11 A La Carte restoran seçenek.\n\nHangi tarihler aklınızda?",

      honeymoon: "Tebrikler!\n\nBalayı için Beach Hotel güzel bir seçim — Kızıldeniz'e bakan oda, özel cabana ve istediğiniz akşam için masa ayarı. Check-in'e bir şeyler de ekleyebiliriz tabii.\n\nTarihlerinizi ve hangi oda tipini düşündüğünüzü yazabilir misiniz?",

      family: "Merhaba! Aile tatili için Radamis Beach Hotel'e bakıyorsunuz, anlıyorum.\n\nDenize sıfır konum çocuklu aileler için gerçekten rahat — odadan çıkınca plaj, Rixy Kids Club gece 11'e kadar açık. 11 A La Carte restoran var, Ultra HSD kapsamında hesap gelmiyor.\n\nÇocukların yaşları ve kaç kişi olduğunuzu yazar mısınız?",

      priceRequest: "Tabii, hemen bakayım.\n\nŞu bilgileri alabilir miyim:\n– Giriş ve çıkış tarihleri?\n– Kaç yetişkin, kaç çocuk?\n– Özel bir oda tercihiniz var mı?\n\nBunlara göre gerçekçi bir rakam vereyim.",

      transfer: "Havalimanına 9 km, yaklaşık 10 dakika yol.\n\nTransfer ayarlamamı ister misiniz? Uçuş saatinizi ve kaç kişi olduğunuzu yazın, halledelim.",

      followUp: "Merhaba, Beach Hotel için konuşmuştuk — aklınıza takılan bir şey var mı?\n\nFarklı tarih veya oda seçeneklerine bakmak isterseniz de yardımcı olmaya hazırım.",

      lastRoomWarning: "Beach Hotel için baktığım tarihlerde müsaitlik azalmaya başladı. Şu an için iyi bir seçenek var ama uzun süre beklemeyebilir.\n\nHâlâ değerlendiriyor musunuz?",

      priceIncrease: "Merhaba, kısa bir bilgi geçmek istedim — baktığınız tarihler için fiyatlar yakında güncellenecek.\n\nEğer hâlâ düşünüyorsanız şu anki rakamı kilitlemek mantıklı olabilir. Sormak istediğiniz bir şey var mı?",

      reservationClose: "Her şey tamam görünüyor, son adıma geldik.\n\nTarih, oda tipi ve kişi sayısını bir kez teyit edebilir misiniz? Bir sorunuz yoksa rezervasyonu başlatıyorum.",

      flightUpdate: "Uçuş bilgilerinizde değişiklik olduysa lütfen yazın — transfer ve check-in planını ona göre ayarlayalım.\n\nYeni sefer saatiniz hazır olunca haberdar edin."
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

    competitorDiff: "Radamis'e kıyasla daha sakin bir tempo, swim-up oda seçeneği ve Lazy River ile kuru eğlence parkı var — Radamis'te bunlar yok. Çocuklu aileler için Radamis'in Rixy Kids Town avantajı büyük; ama Seagate'i premium hisli, biraz daha sakin bir ortam arayanlar tercih ediyor. Swissotel'e göre çok daha geniş tesis ve daha zengin Premium HSD kapsamı.",

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
      opening: "Seagate biraz farklı bir his veriyor. Aynı Rixos kalitesi ama tempo biraz daha sakin, oda seçenekleri biraz daha kişisel. Swim Up oda seçerseniz sabah terastan havuza giriş yapıyorsunuz. Aquaventure Park dahil, 12 A La Carte restoran hazır.",
      keyPoints: [
        "Swim Up oda: terasta kahvaltı, sonra doğrudan havuza — başka bir his",
        "Aquaventure Park dahil: lazy river, dönme dolap, çarpışan araba, 23 kaydırak",
        "Exclusive Sports Club: deniz kıyısında yoga, crossfit, aqua zumba ücretsiz",
        "Superior Villa 360 m²: özel havuz, bahçe, kişisel uşak — 8 kişiye kadar",
        "12 A La Carte + 7/24 açık büfe"
      ],
      closing: "Swim Up mu, villa mı, yoksa aile odası mı düşünüyorsunuz? Tarihlerinizi paylaşın, hemen bakalım."
    },

    honeymoonSalesScript: "Swim Up odada sabah: teras kapısını açıyorsunuz, havuz tam önünüzde. Kahvaltıyı terastan yapıp suya atlıyorsunuz. Anjana Spa'da Moroccan Bath ve çift masajı, akşam Epicure'de Modern Fransız menü. Gece Rixos Arena'da Broadway şovları. Seagate'te balayı gerçekten başka hissettiriyor.",

    familySalesScript: "Aquaventure Park'ta 23 kaydırak, Lazy River, dönme dolap ve çarpışan arabalar var — çocuklar oradan çıkmak istemez. Rixy Kids Club sabahtan gece 11'e açık. Family Room Aqua seçerseniz aquaparka adım atma mesafesinde oluyorsunuz. 12 A La Carte ile her akşam herkes istediğini buluyor.",

    objections: [
      {
        q: "Aquaventure Park dahil mi?",
        a: "Evet, tamamen dahil. Lazy River, kuru eğlence parkı, dönme dolap, çarpışan araba, 23 kaydırak — hepsi Ultra HSD kapsamında, ayrıca ücret ödemiyorsunuz."
      },
      {
        q: "Swim Up oda nedir tam olarak?",
        a: "Zemin katta, terastan direkt havuza girebildiğiniz oda. Sabah kahvaltısını terastan yapıp havuza atlayabiliyorsunuz. Deniz ve havuz manzarası da var."
      },
      {
        q: "Radamis ile Seagate arasında hangisi daha iyi?",
        a: "Seagate daha sakin ve premium hisli — swim-up oda, lazy river, kuru eğlence parkı burada var. Radamis'in Rixy Kids Town'u ise tematik çocuk aktivitelerinde çok daha kapsamlı. Çocuk aktivitesi önceliğinizse Radamis, biraz daha sakin ve swim-up istiyorsanız Seagate daha uygun."
      },
      {
        q: "Villa kaç kişiyi alıyor?",
        a: "Superior Villa 360 m², 8 yetişkin + 2 çocuğa kadar. Özel bahçe, yüzme havuzu ve kişisel uşak hizmeti dahil. Büyük aile grupları veya özel kutlamalar için ideal."
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
      general: "Merhaba, Rixos Premium Seagate için bilgi istiyorsunuz anlıyorum.\n\nSeagate biraz farklı bir his — aynı Rixos kalitesi ama daha sakin, daha kişisel. Swim Up oda seçeneği var, terasta başlayan sabah direkt havuza atlıyor. Aquaventure Park tamamen dahil, 12 A La Carte restoran hazır.\n\nHangi tarihler ve ne tür bir oda düşünüyorsunuz?",

      honeymoon: "Tebrikler!\n\nSeagate'te balayı için Swim Up oda güzel bir başlangıç — sabah terastan havuza, Anjana Spa'da çift masaj, akşam Epicure'de Modern Fransız menü. Romantik bir hafta planlamak zor değil.\n\nTarihlerinizi yazın, tercih ettiğiniz oda tipini de söylerseniz hemen detaylandırayım.",

      family: "Merhaba! Seagate'e aile tatili için bakıyorsunuz, anlıyorum.\n\nAquaventure Park'ta 23 kaydırak, Lazy River, dönme dolap ve çarpışan araba var — çocuklar oraya girince çıkmak istemez. Rixy Kids Club gece 11'e kadar açık. Family Room Aqua alırsanız aquaparka adım mesafesinde oluyorsunuz.\n\nKaç kişisiniz, çocukların yaşları ne?",

      priceRequest: "Tabii, tarih ve kişi sayısını paylaşır mısınız?\n\nSwim Up, aile odası veya villa gibi belirli bir oda tercihiniz varsa onu da yazın — ona göre daha isabetli bir teklif çıkarayım.",

      transfer: "Havalimanına 9 km, yaklaşık 10 dakika.\n\nTransfer ayarlamak ister misiniz? Uçuş saatinizi ve kaç kişi olduğunuzu yazın, halledelim.",

      followUp: "Merhaba, Seagate için konuşmuştuk — aklınızda hâlâ var mı?\n\nFarklı tarih veya oda seçeneklerine bakmak isterseniz söyleyin, bir de ona bakayım.",

      lastRoomWarning: "Seagate için baktığım tarihlerde Swim Up odalar dolmaya başladı. Başka oda tipleri mevcut ama bu konuda bilginiz olsun istedim.\n\nHâlâ değerlendiriyor musunuz?",

      priceIncrease: "Merhaba, Seagate için bir not düşmek istedim — baktığınız tarihlerde fiyatlar kısa süre içinde güncellenecek.\n\nEğer hâlâ düşünüyorsanız mevcut rakamı kilitlemek avantajlı olabilir. Sormak istediğiniz bir şey var mı?",

      reservationClose: "Her şey hazır, son adıma geldik.\n\nTarih, oda tipi ve kişi sayısını teyit edebilir misiniz? Eklemek istediğiniz bir şey yoksa rezervasyonu başlatıyorum.",

      flightUpdate: "Uçuş bilgilerinizde değişiklik olduysa lütfen bildirin — transfer ve giriş planını buna göre güncelleyelim.\n\nYeni sefer saatiniz hazır olunca yazabilirsiniz."
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

    competitorDiff: "Rixos markalarına kıyasla Swissôtel daha butik ve şehirli bir his veriyor. Adults Only bölümü balayı ve çift tatilinde gerçek bir ayrışma noktası — Rixos'ta buna yakın bir konsept yok. Aquapark 10 kaydırakla daha küçük ama Lazy River ve dalgalar havuzu mevcut. Naama Bay'a en yakın seçenek olması şehirde zaman geçirmek isteyenler için avantaj.",

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
      opening: "2024'te açıldı, her şey sıfırdan yeni. Dünyanın tek Ultra HSD Swissôtel'i — Rixos'tan farklı bir marka hissi arayanlar için güçlü bir seçenek. Adults Only bölümü ve aile bölümü aynı tesiste ama birbirinden tamamen ayrı.",
      keyPoints: [
        "2024 açılışı: odalar, ekipman, her şey sıfır",
        "Adults Only bölümü 16+ — çocuksuz, sakin, zarif",
        "Naama Bay'a 1 km: şehirde yemek veya alışveriş isteyenler için kolay erişim",
        "Swissôtel: Accor Hotels bünyesinde global bir zincir — standartlar belli",
        "Sky Lounge'dan Şarm panoraması — gün batımında başka bir his"
      ],
      closing: "Adults Only bölümü mü yoksa aile bölümü mü düşünüyorsunuz? Tarihlerinizi paylaşın, uygun odayı ve teklifi hazırlayalım."
    },

    honeymoonSalesScript: "2024'te açılan taze bir tesiste balayı. Adults Only bölümünde etrafınızda sadece yetişkinler var — gerçek anlamda sakin. 55 ile 120 m² arasında süit seçenekleri, Purovel Spa'da çift masajı, Tipsy Bar'da gün batımı kokteyliniz, Sky Lounge'da Şarm'ı tepeden izlemek. Swissôtel kalitesi her detayda kendini belli ediyor.",

    familySalesScript: "Aqua bölümünde aile odaları aquaparka adım atma mesafesinde. 10 kaydırak, dalgalar havuzu ve Lazy River var. Çocuk kulübü gece 11'e kadar 4–12 yaş için açık. The Quarter'da 24 saat açık büfe — aç kalan olmuyor. Naama Bay'a 1 km olduğu için akşam şehire çıkma seçeneği de var.",

    objections: [
      {
        q: "Swissôtel mi, Rixos mu tercih etmeliyim?",
        a: "İkisi de Ultra HSD ama his farklı. Swissôtel daha butik ve yeni, Adults Only bölümüyle çiftler için sakinlik çok daha ön planda. Rixos daha büyük tesis, daha fazla aktivite. Sakinlik ve zarafet önceliğinizse Swissôtel, büyük resort enerjisi istiyorsanız Rixos."
      },
      {
        q: "Adults Only bölümü gerçekten çocuksuz mu?",
        a: "Evet, yalnızca 16 yaş ve üzeri bu bölüme girebiliyor. Spa ve fitness da 16+. Çocuklu aileler Aqua bölümüne yönlendiriliyor — tamamen ayrı."
      },
      {
        q: "2024 açılışı güvenilir mi, oturmuş mu?",
        a: "Swissôtel dünya genelinde çok köklü bir zincir, Accor bünyesinde. 2024 açılışı aslında bir avantaj — oda ve ekipman sıfırdan yeni. Marka standardı zaten belirli."
      },
      {
        q: "Aquapark Rixos'lardan küçük mü?",
        a: "Evet, 10 kaydırak var. Ama Lazy River ve dalgalar havuzu da mevcut. Çok büyük aquapark önceliğinizse Seagate (23) veya Radamis (26) daha uygun. Aquapark ikincil öncelikteyse Swissôtel'in diğer avantajları daha belirleyici."
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
      general: "Merhaba, Swissotel Sharm için bilgi almak istiyorsunuz anlıyorum.\n\n2024'te açıldı, her şey sıfırdan yeni — dünyanın tek Ultra HSD Swissôtel'i bu arada. Adults Only ve aile bölümü aynı tesiste ama tamamen ayrı çalışıyor. Naama Bay'a da 1 km.\n\nÇift mi aile mi tatili planlıyorsunuz? Ona göre uygun bölümü konuşalım.",

      honeymoon: "Tebrikler!\n\nBalayı için Swissotel'in Adults Only bölümü gerçekten güzel bir seçenek — etrafınızda sadece yetişkinler, 2024 açılışı her şey yeni. Purovel Spa'da çift masaj, Sky Lounge'da gün batımı, 55–120 m² arasında süit seçenekleri.\n\nTarihlerinizi ve kaç gecelik düşündüğünüzü yazabilir misiniz?",

      family: "Merhaba! Swissotel Aqua bölümü aile tatili için iyi kurgulanmış.\n\nBağlantılı aile odaları aquaparka yakın — dalgalar havuzu ve Lazy River de var. Çocuk kulübü gece 11'e kadar 4–12 yaş için açık. Naama Bay'a 1 km, akşam şehire çıkma seçeneği de mevcut.\n\nÇocukların yaşları ve kaç kişi olduğunuzu yazar mısınız?",

      priceRequest: "Tabii.\n\nAdults Only bölümü mü, aile bölümü mü düşünüyorsunuz? Tarih ve kişi sayısını da paylaşın, hemen bir teklif hazırlayayım.",

      transfer: "Havalimanına 11,5 km, yaklaşık 15 dakika.\n\nTransfer ayarlamak ister misiniz? Uçuş saatinizi yazın, halledelim.",

      followUp: "Merhaba, Swissotel için konuşmuştuk — hâlâ değerlendiriyor musunuz?\n\nFarklı tarih veya oda seçeneklerine bakabiliriz, söylemek yeterli.",

      lastRoomWarning: "Swissotel'de baktığım tarihler için Adults Only süitlerde yer azalmaya başladı. Aqua bölümünde seçenek daha geniş, ama bilginiz olsun istedim.\n\nHâlâ düşünüyor musunuz?",

      priceIncrease: "Merhaba, kısa bir bilgi — Swissotel için baktığınız tarihlerde fiyat güncellemesi yaklaşıyor.\n\nEğer karar aşamasındaysanız mevcut rakamı kilitlemekte fayda var. Sormak istediğiniz bir şey var mı?",

      reservationClose: "Her şey hazır görünüyor, son adım kaldı.\n\nTarih, bölüm (Adults Only / Aqua), oda tipi ve kişi sayısını bir kez teyit edebilir misiniz? Onay gelince başlatıyorum.",

      flightUpdate: "Uçuş bilgilerinizde bir değişiklik olduysa lütfen yazın — transfer planını buna göre düzenleyelim.\n\nYeni sefer saatiniz netleşince haberdar edin."
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

    competitorDiff: "Şarm tesisleriyle aynı ligde değerlendirmemek lazım — farklı bir destinasyon ve farklı bir konsept. Oda büyüklükleri tüm rakiplerden belirgin şekilde büyük: minimum 130 m²'den başlıyor. Magawish kalabalık bir resort değil — daha sakin, daha özel, villalar ağırlıklı. Alan ve mahremiyet önceliği olan üst segment müşteri için doğal tercih.",

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
      opening: "Magawish'te standart oda yok. En küçük oda 130 m²'den başlıyor — her şey süit ya da villa. Hurghada'da 1 km özel plaj, 30 ısıtmalı havuz ve Ultra HSD. Alan ve mahremiyet önceliği olanlar için bambaşka bir his.",
      keyPoints: [
        "En küçük oda 130 m² — süit altı bir seçenek yok",
        "Royal Villa 944 m²: özel bahçe, özel havuz, kişisel butler, ev sineması",
        "1 km özel plaj, 30 ısıtmalı havuz — kış da dahil kullanılabilir",
        "Lagoon Swim Up Suite: terastan direkt havuza",
        "Havalimanına 7 km — kısa transfer"
      ],
      closing: "Süit mi, villa mı düşünüyorsunuz? Kaç kişisiniz? Tarihlerinizi paylaşın, hemen bir teklif çıkarayım."
    },

    honeymoonSalesScript: "Royal Villa'da dışarısı kapalı: özel bahçeniz, özel havuzunuz, kişisel butler'ınız var. 944 m²'de sadece ikinizsiniz. Anjana Spa'da hamam ritüeli ve çift masajı, Beach Bar'da Kızıldeniz'e karşı gün batımı kokteyliniz. Bu kadar mahremiyet başka bir yerde zor.",

    familySalesScript: "Executive Family Suite 170 m², Executive Pool Villa ise 240 m² — geniş aileler için nefes alacak alan var. Rixy Kids Club gece 11'e kadar 4–12 yaş için açık. The Mangal'da açık hava BBQ, 1 km plajda şezlonglar ve 30 ısıtmalı havuz yıl boyunca aktif. Herkes kendi köşesini buluyor.",

    objections: [
      {
        q: "Neden Hurghada, Şarm El Şeyh neden değil?",
        a: "Hurghada şehir merkezine daha yakın — alışveriş ve dışarı çıkış daha kolay. Ama Magawish kendi içinde kapalı bir dünya, dışarıya çıkmanıza gerek kalmıyor. Şarm daha tur odaklı, Hurghada biraz daha şehirle iç içe bir atmosfer."
      },
      {
        q: "130 m² en küçük oda çok abartılı değil mi?",
        a: "Bu tesisin konsepti bu — standart oda yok, her şey süit veya villa. Magawish zaten alan ve mahremiyet için tercih ediliyor. Büyük oda istemiyorsanız Şarm'daki Rixos seçenekleri daha uygun olabilir."
      },
      {
        q: "Aquapark yok mu?",
        a: "Belgede müstakil aquapark geçmiyor, ama 30 ısıtmalı havuz var. Büyük aquapark önceliğinizse Seagate (23 kaydırak) veya Radamis (26 kaydırak) daha uygun olur."
      },
      {
        q: "Royal Villa çok pahalı olmaz mı?",
        a: "944 m², 4 yatak odası, özel havuz, bahçe, butler ve ev sineması — 8 yetişkin + 2 çocuk bölününce kişi başı oldukça makul çıkıyor. Büyük aile grupları veya özel kutlamalar için bu fiyatın karşılığı fazlasıyla var."
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
      general: "Merhaba, Rixos Magawish Hurghada için bilgi almak istiyorsunuz anlıyorum.\n\nBurası biraz farklı bir konsept — standart oda yok, en küçük oda 130 m²'den başlıyor, her şey süit ya da villa. 1 km özel plaj, 30 ısıtmalı havuz. Alan ve sessizlik öncelikli olanlar için Hurghada'nın en iyi seçeneklerinden biri.\n\nKaç kişilik bir konaklama düşünüyorsunuz, tarihler ne zaman?",

      honeymoon: "Tebrikler!\n\nBalayı için Magawish'te mahremiyet gerçekten farklı bir seviyede — Lagoon Swim Up Suite'te terasta başlayan sabah, Anjana Spa'da hamam ritüeli ve çift masaj, Beach Bar'da Kızıldeniz'e karşı akşam. Etrafınız kalabalık değil, tesis büyük ve sakin.\n\nTarihlerinizi yazın, Swim Up Süit mi yoksa Pool Villa mı bakalım?",

      family: "Merhaba! Magawish geniş aileler için gerçekten iyi kurgulanmış.\n\nExecutive Family Suite 170 m², Executive Pool Villa ise 240 m² — herkesin nefes alacağı alan var. Rixy Kids Club gece 11'e kadar 4–12 yaş için açık, The Mangal'da açık hava BBQ, 30 ısıtmalı havuz yıl boyu aktif.\n\nKaç kişisiniz, çocukların yaşları ne?",

      priceRequest: "Tabii, hemen bakayım.\n\nSüit mi villa mı düşünüyorsunuz? Tarih ve kişi sayısını da paylaşın, gerçekçi bir teklif çıkarayım.",

      transfer: "Hurghada havalimanına 7 km, yaklaşık 10–15 dakika.\n\nTransfer ayarlamak ister misiniz? Uçuş saatinizi ve kaç kişi olduğunuzu yazın, halledelim.",

      followUp: "Merhaba, Magawish için konuşmuştuk — hâlâ değerlendiriyor musunuz?\n\nFarklı tarih veya oda seçeneklerine bakabiliriz, söylemek yeterli.",

      lastRoomWarning: "Magawish'te baktığım tarihler için villa müsaitliği daralıyor. Süit seçenekleri daha geniş ama bilginiz olsun istedim.\n\nHâlâ düşünüyor musunuz?",

      priceIncrease: "Merhaba, kısa bir bilgi — Magawish için baktığınız tarihlerde fiyatlar yakında güncellenecek.\n\nEğer karar aşamasındaysanız mevcut rakamı kilitlemek mantıklı olabilir. Sormak istediğiniz bir şey var mı?",

      reservationClose: "Her şey hazır, son adıma geldik.\n\nSüit / villa tipi, tarih ve kişi sayısını bir kez teyit edebilir misiniz? Onay gelince başlatıyorum.",

      flightUpdate: "Uçuş bilgilerinizde değişiklik olduysa lütfen yazın — transfer ve giriş planını buna göre güncelleyelim.\n\nYeni sefer saatiniz netleşince haberdar edin."
    },

   lastUpdated: "2026-05-22"
  },
  {
    id: 6,
    name: "Rixos Sharm El Sheikh",
    aliases: ["Rixos Sharm", "Sharm Adult Only", "18+ Rixos", "Rixos 18+"],
    region: "Şarm El Şeyh",
    stars: 5,
    concept: "Ultra Her Şey Dahil — Adults Only 18+",
    image: "/images/rixos-sharm.jpg",
    badges: ["Adults Only 18+", "Ultra HSD", "Swim-Up Suite", "Özel Plaj"],
    targetCustomer: "18+ yetişkinler, çiftler, sessizlik ve lüks arayanlar, DJ ve gece hayatı isteyenler, balayı çiftleri",
    adultOnly: { is: true, ageLimit: 18, note: "18 yaş altı misafir kabul edilmemektedir. Spa ve spor salonu 16 yaş üzeri içindir." },

    strengths: [
      "Şarm'ın tek 18+ adults only Rixos oteli — gerçek huzur garantisi",
      "153.000 m² dev kompleks, 330 m özel plaj, 147 m iskele",
      "7 yüzme havuzu",
      "Swim-Up Suite — terastan özel havuza direkt geçiş (110 m²)",
      "8 A'la Carte restoran + 9 bar & lounge — tümü Ultra HSD dahil",
      "X Lounge & Sunset Lounge — ünlü DJ performansları",
      "Anjana Spa — Türk hamamı, aromaterapi, Bali & Thai masajı",
      "Gece partileri ve sabahlara kadar eğlence",
    ],

    competitorDiff: [
      "Şarm'daki tek 18+ adults only Rixos — çocuklu otellerle karşılaştırılamaz",
      "Swim-Up Suite sadece bu otelde mevcut",
      "8 A'la Carte restoran Ultra HSD dahil — çoğu otelde ek ücretli",
      "Gece kulübü kalitesinde DJ ve canlı performanslar",
    ],

    roomTypes: [
      { name: "Superior Oda", sizeSqm: 37, view: "Bahçe veya havuz manzaralı", maxCapacity: "3 Yetişkin", features: ["King veya twin yatak", "Balkon/teras", "Mini bar", "32\" LCD TV", "Wi-Fi", "Çay-kahve seti"] },
      { name: "Deluxe Oda", sizeSqm: 50, view: "Bahçe veya havuz manzaralı", maxCapacity: "3 Yetişkin", features: ["King veya twin yatak", "Balkon/teras", "Mini bar", "Wi-Fi"] },
      { name: "Aile Odası", sizeSqm: 58, view: "Bahçe manzaralı", maxCapacity: "4 Yetişkin", features: ["2 yatak odalı, ara kapılı", "1 king size + 2 tek kişilik yatak", "Balkon/teras"] },
      { name: "Junior Suite", sizeSqm: 74, view: "Havuz veya bahçe manzaralı", maxCapacity: "3 Yetişkin", features: ["King size yatak", "Geniş oturma alanı", "40\" döner LCD TV", "Çift lavabo, küvet, duş kabini", "Büyük balkon"] },
      { name: "Senior Suite", sizeSqm: 74, view: "Havuz veya bahçe manzaralı", maxCapacity: "3 Yetişkin", features: ["King size yatak", "Ayrı salon", "Küvetli banyo", "Balkon/teras"] },
      { name: "Swim-Up Suite", sizeSqm: 110, view: "Deniz manzaralı", maxCapacity: "3 Yetişkin", features: ["Terastan özel havuza direkt geçiş", "Deniz manzaralı geniş salon", "2 lavabo, küvet, duş", "Executive Lounge erişimi dahil"] },
      { name: "Diplomatic Suite", sizeSqm: 148, view: "Havuz ve bahçe manzaralı", maxCapacity: "3 Yetişkin", features: ["Modern dekorasyon", "Geniş salon", "2 büyük banyo (küvet+duş)", "Geniş teras"] },
    ],

    restaurants: [
      { name: "The Palm Restaurant", cuisine: "Uluslararası Açık Büfe", hours: "07:00–10:00 / 12:30–14:30 / 18:30–21:30 / 23:00–02:00", extraCharge: false },
      { name: "Gusto", cuisine: "İtalyan", hours: "18:30–22:00", extraCharge: false },
      { name: "Asian", cuisine: "Asya Mutfağı", hours: "18:30–22:00", extraCharge: false },
      { name: "Salt", cuisine: "Deniz Ürünleri", hours: "Snacks 11:00–17:00 / Akşam 18:30–22:00", extraCharge: false },
      { name: "Taj Mahal", cuisine: "Hint Mutfağı", hours: "18:30–22:00", extraCharge: false },
      { name: "Lalezar", cuisine: "Türk Mutfağı", hours: "Kahvaltı 07:00–10:00 / Akşam 18:30–22:00", extraCharge: false },
      { name: "La Churrascaria", cuisine: "Brezilya", hours: "18:30–22:00", extraCharge: false },
      { name: "The Mangal", cuisine: "Barbekü", hours: "18:30–22:00", extraCharge: false },
      { name: "Sakura", cuisine: "Sushi Bar", hours: "18:30–22:00", extraCharge: false },
    ],

    aquapark: { has: false, note: "Aquapark bulunmamaktadır. 7 yüzme havuzu mevcuttur." },

    kidsClub: { has: false, note: "18+ adults only oteldir, çocuk kulübü bulunmamaktadır." },

    beach: {
      hasPrivate: true,
      type: "Kum & Mercan — 330 m özel plaj, 147 m iskele",
      sunbeds: "Şezlong ve şemsiye dahil",
      snorkeling: true,
      waterSportsNote: "İskele üzerinden su sporları ve dalış organizasyonu",
    },

    transfer: {
      airport: "SSH — Şarm El Şeyh Havalimanı",
      duration: "8 km — yaklaşık 10–15 dk",
      approxPrice: "15–25 USD",
      options: ["VIP transfer", "Minibüs", "Özel araç"],
      note: "3 gece ve üzeri konaklamalarda transfer dahildir.",
    },

    swimUpRooms: { has: true, note: "Swim-Up Suite — 110 m², terastan özel havuza direkt geçiş" },

    salesScript: {
      opening: "Şarm'da hem lüks hem huzur istiyorsanız, Rixos Sharm El Sheikh tam size göre. 18+ konsepti sayesinde çocuk sesi yok, sadece siz, sessizlik ve Kızıldeniz var.",
      keyPoints: [
        "18+ adults only — gerçek huzur",
        "Swim-Up Suite — uyandığınız anda havuz başında",
        "8 A'la Carte restoran Ultra HSD dahil",
        "X Lounge'da DJ performansları — gece hayatı Rixos kalitesinde",
        "330 m özel plaj ve snorkeling",
        "Anjana Spa — Türk hamamı ve masaj",
      ],
      closing: "Şarm'da bu kalitede adults only bir otel bulmak zor. Tarihinizi söyleyin, hemen kontrol edeyim.",
    },

    honeymoonSalesScript: "Her şey var ama çocuk sesi yok — balayı için mükemmel. Swim-Up Suite'te sabah kahvenizi havuz kenarında içerken, gün batımını 330 metrelik özel plajdan izliyorsunuz. Akşam 8 farklı A'la Carte restorandan birinde romantik yemek, gece X Lounge'da DJ eşliğinde dans. Bu bir tatil değil, bir his.",

    familySalesScript: "Bu otel 18+ adults only olduğundan çocuklu aileler için uygun değil. Çocuklu misafirler için Rixos Premium Magawish'i öneririm — Rixy Kids Club ve geniş suite seçenekleriyle mükemmel bir aile oteli.",

    objections: [
      { q: "Çok pahalı", a: "8 A'la Carte restoran, Swim-Up Suite, Anjana Spa, gece partileri — hepsi Ultra HSD dahil. Başka bir otelde bunları ayrı ayrı ödediğinizde fark çok daha büyük çıkıyor." },
      { q: "Aquapark yok mu?", a: "Aquapark yok ama 7 havuz, 330 m özel plaj ve snorkeling mevcut. Bu otel aquapark yerine sessizlik ve lüks sunan adults only bir konsept — hedef kitle zaten farklı." },
      { q: "Aile için uygun mu?", a: "18+ adults only olduğu için çocuklu aileler kabul edilmiyor. Aile tatili için Rixos Premium Magawish çok daha uygun — Kids Club ve geniş suitler mevcut." },
    ],

    importantNotes: [
      "18 yaş altı misafir kabul edilmemektedir",
      "Check-in: 14:00 / Check-out: 12:00",
      "Tüm odalar ve süitlerde sigara içilmez",
      "Spa ve spor salonları 16 yaş üzeri içindir",
      "Havalimanına 8 km, Naama Bay'e 17 km",
      "21 bina — asansör bulunmamaktadır",
    ],

    whatsappTemplates: {
      general: `🏨 *Rixos Sharm El Sheikh — Adults Only 18+*\n\n✨ Ultra Her Şey Dahil · 5 Yıldız Deluxe\n🔞 18+ Adults Only — Gerçek huzur garantisi\n\n✅ 330 m özel plaj\n✅ Swim-Up Suite seçeneği\n✅ 8 A'la Carte restoran (tümü dahil)\n✅ X Lounge — DJ performansları\n✅ Anjana Spa\n\nTarih ve kişi sayınızı paylaşın, fiyat bilgisi alayım 📩`,
      honeymoon: `💑 *Balayı — Rixos Sharm El Sheikh*\n\n"Her şey var ama çocuk sesi yok."\n\n🏊 Swim-Up Suite — terastan özel havuza direkt geçiş\n🍽 8 A'la Carte restoran — romantik akşam yemekleri\n🌅 330 m özel plaj — gün batımı keyfi\n🎵 X Lounge — DJ eşliğinde geceleri\n💆 Anjana Spa — çift masajı\n\nBalayı tarihlerinizi paylaşın 💍`,
      family: `👨‍👩‍👧 *Aile Tatili — Önemli Bilgi*\n\nRixos Sharm El Sheikh 18+ Adults Only oteli olduğundan çocuklu aileler için uygun değildir.\n\nAileler için önerimiz:\n🏨 *Rixos Premium Magawish*\n✅ Rixy Kids Club (4-12 yaş)\n✅ Geniş suite ve villa seçenekleri\n✅ Ultra HSD konsept\n\nDetaylı bilgi için beni arayın 📞`,
      priceRequest: `💰 *Fiyat Bilgisi — Rixos Sharm El Sheikh*\n\n📅 Tarih:\n👥 Kişi sayısı:\n🛏 Oda tipi:\n\nBilgileri paylaşın, en güncel fiyatı hemen ileteyim ✅`,
      transfer: `🚐 *Transfer — Rixos Sharm El Sheikh*\n\nHavalimanı: SSH · Mesafe: 8 km · Süre: ~10-15 dk\n\n✈️ Uçuş no:\n🕐 İniş saati:\n👥 Kişi sayısı:\n\n3 gece ve üzeri konaklamada transfer dahil 🎁`,
    },
  },

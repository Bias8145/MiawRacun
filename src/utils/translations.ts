// Dictionary for Language Switching (Indo, Jawa, Sunda, English)
// FULLY AUDITED: AUTHENTIC INDONESIAN SLANG & CAT LOGIC FOR ALL LANGUAGES

export type Language = 'id' | 'jv' | 'su' | 'en';

export const TRANSLATIONS = {
  id: {
    // UI Elements
    searchPlaceholder: "Lagi nyari sesajen apa buat Majikan?",
    categoryTitle: "Kategori Gemoy",
    sortNewest: "Paling Fresh",
    sortPopular: "Paling Viral",
    loginTitle: "Portal Babu Elite",
    loginDesc: "Hanya untuk Babu Terpilih (Admin). Kucing liar minggir dulu miaw.",
    passwordLabel: "Kode Rahasia",
    passwordPlaceholder: "Bisikin kodenya...",
    loginBtn: "Gass Masuk",
    addBtn: "Tambah Racun",
    logoutBtn: "Kabur",
    emptyState: "Yah, barangnya ghoib...",
    emptyStateSub: "Coba ketik yang bener atau ganti mood kamu, Babu!",
    buyBtn: "Angkut Gan",
    shareBtn: "Sebar Racun",
    hotBadge: "Lagi Rame!",
    adminControls: "Panel Kendali Babu:",
    wishlistEmpty: "Masih kosong nih. Gak niat belanja ya?",
    
    // Language Selector
    langLabel: "Bahasa",
    langId: "Indo Gaul",
    langJv: "Boso Jowo",
    langSu: "Basa Sunda",
    langEn: "English",

    // Moods
    moodTitle: "Mood Babu Hari Ini",
    moodAll: "B aja sih",
    moodSultan: "Lagi Kebanyakan Duit",
    moodBokek: "Dompet Menjerit",
    moodGalau: "Butuh Pelukan (Online)",
    moodBucin: "Bucin Mode On",

    // Modals
    addTitle: "Spill Barang Baru",
    editTitle: "Revisi Barang",
    urlLabel: "Link Keranjang Kuning/Oren",
    urlHelp: "Tempel link, klik tongkat ajaib biar AI yang mikir captionnya!",
    titleLabel: "Nama Barang",
    descLabel: "Kenapa Harus Beli?",
    catLabel: "Masuk Kandang Mana?",
    platLabel: "Lapak Mana?",
    saveBtn: "Sebarkan Racun",
    updateBtn: "Simpan Perubahan",
    
    // Confirmation
    confirmTitle: "Bentar Dulu Miaw",
    confirmLogin: "Yakin kodenya bener? Jangan malu-maluin ras kucing!",
    confirmLogout: "Mau kemana? Jatah Whiskas belum cair loh.",
    confirmDelete: "Serius mau hapus? Padahal lucu loh...",
    confirmSave: "Udah yakin belum? Nanti nyesel loh kalau salah.",
    cancelBtn: "Gak Jadi Deh",
    confirmBtn: "Gasskeun!",
    loadingBtn: "Sabar Bestie...",
    
    // Toasts & Messages
    welcomeBack: "Welcome back, Babu Kesayangan!",
    wrongPass: "Salah woy! Kamu mata-mata anjing ya?",
    bye: "Jangan lupa balik lagi bawa makanan!",
    saved: "Mantap! Racun berhasil disebar.",
    updated: "Sip, data udah dipermak.",
    deleted: "Dibuang ke tempat sampah (litter box).",
    copied: "Link dicopy! Buruan racunin temenmu.",
    wishlistAdded: "Masuk wishlist! Jangan cuma wacana ya.",
    wishlistRemoved: "Dihapus. Yah, gak jadi beli...",

    // GACHA CONTENT
    gachaCta: [
      "Kebanyakan uang? Sini aku bantu abisin!",
      "Lagi gabut? Sini aku pilihin racun!",
      "Bingung mau beli apa? Klik aku miaw!",
      "Lagi cari tanda semesta? Ini tombolnya!",
      "Berani klik? Awas dompet boncos!",
      "Lagi galau? Obatnya cuma belanja!"
    ],
    gachaToasts: [
      "Taraa! Majikan milihin ini, wajib CO!",
      "Nih, jangan banyak mikir langsung bayar!",
      "Kata kucing oren, ini bagus buat kamu.",
      "Awas nyesel kalo gak beli ini sekarang.",
      "Jodoh gak kemana, barang diskon bisa kemana-mana. Sikat!",
      "Ini takdir. Kamu harus punya ini.",
      "Dompetmu bergetar melihat ini kan?",
      "Fix no debat, ini lucu banget tolong!"
    ]
  },
  jv: {
    // UI Elements
    searchPlaceholder: "Pados upeti menapa kagem Ndoro Kucing?",
    categoryTitle: "Kategori Ingkang Sae",
    sortNewest: "Ingkang Enggal",
    sortPopular: "Ingkang Rame",
    loginTitle: "Mlebet Area Lurah",
    loginDesc: "Niki wewengkon khusus Lurah Abdi. Kucing kampung ampun mlebet.",
    passwordLabel: "Sandi Rahasia",
    passwordPlaceholder: "Lebetaken mriki...",
    loginBtn: "Mlebet",
    addBtn: "Caos Upeti",
    logoutBtn: "Miyos",
    emptyState: "Waduh, mboten kepanggih...",
    emptyStateSub: "Cobi pados tembung sanes utawi gantos mood Panjenengan!",
    buyBtn: "Tumbas Sakniki",
    shareBtn: "Sebar",
    hotBadge: "Saweg Rame!",
    adminControls: "Pengaturan Lurah:",
    wishlistEmpty: "Dereng wonten ingkang ditandai. Abdi kirang cepet!",

    // Language Selector
    langLabel: "Boso",
    langId: "Indo Gaul",
    langJv: "Boso Jowo",
    langSu: "Basa Sunda",
    langEn: "English",

    // Moods
    moodTitle: "Penggalih Abdi Dinten Niki",
    moodAll: "Biyasa Mawon",
    moodSultan: "Lagi Sugih Arto",
    moodBokek: "Dompet Tipis",
    moodGalau: "Saweg Susah Ati",
    moodBucin: "Saweg Tresno",

    // Modals
    addTitle: "Nambah Barang Enggal",
    editTitle: "Ngedit Barang",
    urlLabel: "Link Affiliate",
    urlHelp: "Tempel link, klik tongkat ajaib!",
    titleLabel: "Nami Barang",
    descLabel: "Deskripsi",
    catLabel: "Kategori",
    platLabel: "Platform",
    saveBtn: "Simpen",
    updateBtn: "Update",

    // Confirmation
    confirmTitle: "Nyuwun Pangapunten",
    confirmLogin: "Yakin sandinipun leres? Ampun ngisin-ngisini Ndoro!",
    confirmLogout: "Badhe tindak pundi? Mangke sinten sing ngresiki pasir?",
    confirmDelete: "Saestu badhe mbusak? Eman-eman loh...",
    confirmSave: "Sampun leres datanipun? Monggo diupload!",
    cancelBtn: "Mboten Siyos",
    confirmBtn: "Inggih, Monggo",
    loadingBtn: "Sekedap...",

    // Toasts
    welcomeBack: "Sugeng rawuh Lurah Abdi! Ndoro kangen.",
    wrongPass: "Sandi lepat! Panjenengan Abdi liar nggih?",
    bye: "Sugeng tindak! Ampun kesupen jatah Whiskas.",
    saved: "Sampun kesimpen miaw!",
    updated: "Sampun diupdate miaw!",
    deleted: "Sampun dibucal teng kothak wedhi!",
    copied: "Link sampun dicopy!",
    wishlistAdded: "Mlebet wishlist! Awas menawi namung wacana.",
    wishlistRemoved: "Sampun dibusak saking wishlist.",

    // GACHA CONTENT
    gachaCta: [
      "Kathah arto? Mriki kula bantu ngentekaken!",
      "Saweg gabut? Mriki kula pilihaken!",
      "Bingung badhe tumbas napa? Klik mriki!",
      "Pados pitedah saking Gusti? Niki tombolipun!",
      "Wantun klik? Ati-ati dompet jebol!",
      "Saweg galau? Tumbas barang mawon!"
    ],
    gachaToasts: [
      "Taraa! Ndoro milihaken niki, kedah tumbas!",
      "Niki sae, ampun mikir dangu-dangu!",
      "Dawuh Ndoro Kucing, niki cocog kagem Panjenengan.",
      "Getun loh menawi mboten tumbas sakniki.",
      "Jodho saged pundi mawon, diskon mboten.",
      "Niki takdir. Panjenengan kedah gadhah.",
      "Dompet Panjenengan geter ningali niki to?",
      "Estu sae sanget, tulung!"
    ]
  },
  su: {
    // UI Elements
    searchPlaceholder: "Bade milari upeti naon kanggo Juragan?",
    categoryTitle: "Kategori Arupis",
    sortNewest: "Paling Anyar",
    sortPopular: "Paling Rame",
    loginTitle: "Login Hulu Babu",
    loginDesc: "Ieu husus kanggo Hulu Babu. Ulah waka lebet pami sanes.",
    passwordLabel: "Sandi Rahasia",
    passwordPlaceholder: "Lebetkeun didieu...",
    loginBtn: "Hayu Lebet",
    addBtn: "Setor Upeti",
    logoutBtn: "Kaluar",
    emptyState: "Duh, teu kapendak...",
    emptyStateSub: "Cobi pilari kecap sanes atanapi gentos mood anjeun!",
    buyBtn: "Galeuh Ayeuna",
    shareBtn: "Sebarkeun",
    hotBadge: "Nuju Rame!",
    adminControls: "Menu Hulu Babu:",
    wishlistEmpty: "Teu acan aya nu ditandaan. Babu kirang gercep!",

    // Language Selector
    langLabel: "Basa",
    langId: "Indo Gaul",
    langJv: "Boso Jowo",
    langSu: "Basa Sunda",
    langEn: "English",

    // Moods
    moodTitle: "Manah Babu Dinten Ieu",
    moodAll: "Biasa Wae",
    moodSultan: "Nuju Beunghar",
    moodBokek: "Dompet Ipis",
    moodGalau: "Nuju Galau",
    moodBucin: "Nuju Bogoh",

    // Modals
    addTitle: "Nambihan Barang",
    editTitle: "Ngedit Barang",
    urlLabel: "Link Affiliate",
    urlHelp: "Tempel link, klik tongkat ajaib!",
    titleLabel: "Nami Barang",
    descLabel: "Deskripsi",
    catLabel: "Kategori",
    platLabel: "Platform",
    saveBtn: "Sebarkeun Racun",
    updateBtn: "Simpen Parobihan",

    // Confirmation
    confirmTitle: "Konfirmasi Heula",
    confirmLogin: "Yakin sandina leres? Ulah ngisinkeun Juragan!",
    confirmLogout: "Bade kabur? Engke saha nu mersihan pasir?",
    confirmDelete: "Leres bade miceun barang ieu? Hanjakal loh...",
    confirmSave: "Atos mantep datana? Hayu upload!",
    cancelBtn: "Teu Janten",
    confirmBtn: "Gasskeun!",
    loadingBtn: "Sakedap...",

    // Toasts
    welcomeBack: "Wilujeng sumping Hulu Babu!",
    wrongPass: "Sandi lepat! Anjeun Babu liar nya?",
    bye: "Pileuleuyan! Ulah hilap jatah Whiskas.",
    saved: "Parantos disimpen miaw!",
    updated: "Parantos diupdate miaw!",
    deleted: "Parantos dipiceun kana kotak pasir!",
    copied: "Link dicopy!",
    wishlistAdded: "Lebet wishlist! Awas pami mung wacana.",
    wishlistRemoved: "Dihapus tina wishlist.",

    // GACHA CONTENT
    gachaCta: [
      "Seueur artos? Kadieu dibantuan seepkeun!",
      "Nuju gabut? Kadieu dipangmilihkeun!",
      "Bingung bade meser naon? Klik didieu!",
      "Milari tanda ti alam semesta? Ieu tombolna!",
      "Wantun klik? Awas dompet boncos!",
      "Nuju galau? Ubarna mung balanja!"
    ],
    gachaToasts: [
      "Taraa! Juragan milihkeun ieu, kedah digaleuh!",
      "Ieu sae pisan, ulah lami mikir!",
      "Saur Juragan Kucing, ieu cocog kanggo anjeun.",
      "Hanjakal loh pami teu meser ayeuna.",
      "Jodoh mah tiasa kamana wae, diskon mah moal.",
      "Ieu takdir. Anjeun kedah gaduh ieu.",
      "Dompet anjeun ngageter ningali ieu kan?",
      "Aslina ieu lucu pisan, tulung!"
    ]
  },
  en: {
    // UI Elements
    searchPlaceholder: "Searching tribute for the Master (Cat)?",
    categoryTitle: "Cute Categories",
    sortNewest: "Fresh Drops",
    sortPopular: "Most Hype",
    loginTitle: "Head Servant Login",
    loginDesc: "Restricted area for Head Servant. Regular Hoomans keep out.",
    passwordLabel: "Secret Password",
    passwordPlaceholder: "Enter here...",
    loginBtn: "Enter",
    addBtn: "Offer Tribute",
    logoutBtn: "Logout",
    emptyState: "Oops, tribute not found miaw...",
    emptyStateSub: "Try searching something else or change your mood Hooman!",
    buyBtn: "Buy Now",
    shareBtn: "Spread Poison",
    hotBadge: "Trending!",
    adminControls: "Head Servant Menu:",
    wishlistEmpty: "Nothing marked yet. You are too slow Hooman!",
    
    // Language Selector
    langLabel: "Language",
    langId: "Indo Gaul",
    langJv: "Boso Jowo",
    langSu: "Basa Sunda",
    langEn: "English",

    // Moods
    moodTitle: "Hooman's Mood Today",
    moodAll: "Just Normal",
    moodSultan: "Feeling Rich",
    moodBokek: "Broke AF",
    moodGalau: "Heartbroken",
    moodBucin: "In Love",

    // Modals
    addTitle: "Add New Tribute",
    editTitle: "Edit Tribute",
    urlLabel: "Affiliate Link",
    urlHelp: "Paste link, click magic wand!",
    titleLabel: "Item Name",
    descLabel: "Description",
    catLabel: "Category",
    platLabel: "Platform",
    saveBtn: "Spread the Poison",
    updateBtn: "Save Changes",

    // Confirmation
    confirmTitle: "Confirm Please Miaw",
    confirmLogin: "Sure about the password? Don't embarrass the Master!",
    confirmLogout: "Running away? Who will clean the litter box?",
    confirmDelete: "Really throw this away? What a waste...",
    confirmSave: "Data looks good? Let's upload!",
    cancelBtn: "Cancel",
    confirmBtn: "Let's Go!",
    loadingBtn: "Wait...",

    // Toasts
    welcomeBack: "Welcome back Head Servant!",
    wrongPass: "Wrong password! Are you an illegal Hooman?",
    bye: "Bye! Don't forget the food.",
    saved: "Tribute saved successfully!",
    updated: "Data updated successfully!",
    deleted: "Item thrown into the litter box!",
    copied: "Link copied!",
    wishlistAdded: "Added to wishlist!",
    wishlistRemoved: "Removed from wishlist.",

    // GACHA CONTENT
    gachaCta: [
      "Too much money? Let me help you spend it!",
      "Bored? Let me choose for you!",
      "Confused what to buy? Click me miaw!",
      "Looking for a sign? This is it!",
      "Dare to click? Your wallet might cry!",
      "Heartbroken? Retail therapy is the cure!"
    ],
    gachaToasts: [
      "Taraa! Master chose this, you MUST buy!",
      "This is it, don't think twice!",
      "Master Cat says this looks good on you.",
      "You'll regret it if you don't buy this now.",
      "Soulmates can wait, discounts cannot.",
      "This is destiny. You need this.",
      "Your wallet is trembling seeing this, right?",
      "Honestly, this is too cute to ignore!"
    ]
  }
};

// --- RICH QUOTES LIBRARY ---
export const GREETINGS_ID = {
  morning: [
    "Pagi Babu! Mangkuk makan kok masih kosong? Gercep dong!",
    "Bangun woy! Matahari udah setinggi ekspektasi Majikan.",
    "Kerja yang rajin ya Babu, biar bisa beliin Royal Canin.",
    "Jangan lupa sarapan, biar kuat menghadapi kenyataan (dan tagihan).",
    "Pagi-pagi jangan ngeluh, mending checkoutin barang buat Majikan.",
    "Semesta mendukungmu untuk belanja hari ini miaw.",
    "Cek saldo dulu, kalau masih ada nol-nya, gass belanja!",
    "Jujurly, pagi ini kamu keliatan butuh belanja.",
    "Mager boleh, tapi jangan lupa kasih makan Majikan.",
    "Gaspol cari cuan buat beli Whiskas sachet!"
  ],
  afternoon: [
    "Siang Babu! Jangan lupa istirahat (sambil scroll Shopee).",
    "Panas banget, butuh yang seger-seger (alias paket dateng).",
    "Awas ngantuk! Obatnya cuma satu: Check-out keranjang.",
    "Siang-siang gabut? Cek barang baru yuk, siapa tau jodoh.",
    "Jangan lupa minum air putih, biar gak dehidrasi pas liat harga.",
    "Panas gini enaknya ngadem di kamar sambil unboxing.",
    "Sabi banget nih checkout barang lucu buat moodbooster.",
    "Lagi jam rawan ngantuk, mending cuci mata liat racun."
  ],
  evening: [
    "Sore Babu! Udah pulang kerja? Mana upeti buat Majikan?",
    "Saatnya santai sejenak sambil menuhin keranjang belanja.",
    "Mandi dulu sana, biar seger pas unboxing paket.",
    "Sore yang indah untuk menghabiskan gaji bulan ini.",
    "Langit senja bagus, tapi lebih bagus notif 'Paket Sedang Dikirim'.",
    "Udah sore, jangan lupa angkat jemuran dan checkout belanjaan.",
    "Santuy dulu bestie, scroll-scroll racun siapa tau ada flash sale.",
    "Sore-sore galau? Mending beli baju baru biar glowing."
  ],
  night: [
    "Malem Babu! Belum tidur? Nunggu flash sale ya?",
    "Matikan lampu, nyalakan layar HP, siapkan jari buat war.",
    "Awas kalap tengah malem, besok pagi nyesel (tapi boong).",
    "Mimpi indah itu isinya resi valid dan gratis ongkir.",
    "Begadang jangan begadang, kalau tiada artinya (kecuali belanja).",
    "Udah malem, Majikan mau bobo. Kamu jangan berisik (kecuali klik beli).",
    "Overthinking di malam hari < Checkout barang lucu.",
    "Tidur yang nyenyak, besok kerja keras lagi buat Majikan."
  ],
  random: [
    "Duit bisa dicari, barang lucu limited edition!",
    "Definisi bahagia: Paket dateng pas lagi sedih.",
    "Self reward itu penting, jangan pelit sama diri sendiri.",
    "Barang ini 100% approved by Kucing (dan Babu-nya).",
    "Dompet boleh nangis, hati harus happy kiyowo.",
    "Menunda checkout adalah menunda kebahagiaan hakiki.",
    "Diskon itu kayak gebetan, harus gercep sebelum diambil orang.",
    "Obat stress paling ampuh: Unboxing paket.",
    "Hidup itu singkat, beli aja selagi ada duitnya.",
    "Gak usah mikir panjang, nanti keburu sold out loh.",
    "Fix no debat, ini barang lucu banget tolong!",
    "Jujurly, aku keracunan barang ini gara-gara kamu.",
    "Boncos dikit gak ngaruh, yang penting estetik.",
    "Sumpah ini gemoy parah, wajib masuk keranjang!",
    "Racun duniawi emang gak ada obatnya.",
    "Khilaf itu manusiawi, apalagi kalau diskon 50%.",
    "Beli sekarang, nyesel kemudian? Gak mungkin lah!",
    "Majikan bersabda: Checkout sekarang atau dicakar!",
    "Babu yang baik adalah babu yang rajin belanja.",
    "Uang bukan segalanya, tapi segalanya butuh uang (buat belanja)."
  ]
};

export const GREETINGS_JV = {
  morning: [
    "Sugeng Enjang Ndoro! Sampun wungu dereng?",
    "Wungu woy! Srengenge sampun dhuwur.",
    "Nyambut damel sing sregep nggih, kagem tumbas Whiskas.",
    "Ampun kesupen sarapan, kajenge kiat ngadepi kasunyatan."
  ],
  afternoon: [
    "Sugeng Siyang! Benter sanget nggih dinten niki.",
    "Ampun kesupen istirahat sinambi ningali Shopee.",
    "Ngunjuk rumiyin, kajenge mboten dehidrasi.",
    "Awas ngantuk, tambanipun namung setunggal: Belanja."
  ],
  evening: [
    "Sugeng Sonten! Wancinipun santai.",
    "Sampun siram dereng? Ambunipun kecut loh.",
    "Nopo pun mantuk saking kantor? Pundi upetinipun?",
    "Langit sonten sae, nanging langkung sae menawi paket dugi."
  ],
  night: [
    "Sugeng Dalu! Dereng tilem? Ngentosi flash sale nggih?",
    "Ati-ati kalap tengah wengi, mangke getun.",
    "Mangke kesiangan loh, Ndoro butuh maem enjang.",
    "Tilem sing angler, mbenjang pados arto malih."
  ],
  random: [
    "Arto saged dipadosi, nanging barang sae niki winates.",
    "Blanja niku obat stress ingkang paling mujarab.",
    "Gesang niku sekedap, tumbas mawon mumpung wonten.",
    "Ndoro Kucing remen sanget kaliyan barang niki."
  ]
};

export const GREETINGS_SU = {
  morning: [
    "Wilujeng Enjing Juragan! Geura hudang, rejeki dipatok hayam.",
    "Hudang euy! Panonpoe tos luhur.",
    "Didamel nu getol nya, kanggo meser Royal Canin.",
    "Ulah hilap sarapan, meh kuat mayar cicilan."
  ],
  afternoon: [
    "Wilujeng Siang! Panas pisan poe ieu nya.",
    "Ulah hilap istirahat bari muka aplikasi balanja.",
    "Eueut heula, bilih lieur ningali harga.",
    "Awas tunduh, ubarna mah mung hiji: Checkout."
  ],
  evening: [
    "Wilujeng Sonten! Waktosna santai bari ngopi.",
    "Ibak heula jug, meh seger pas paket dongkap.",
    "Atos uih teu acan? Mana oleh-oleh kanggo Majikan?",
    "Sonten anu endah kanggo miceun artos (balanja)."
  ],
  night: [
    "Wilujeng Wengi! Teu acan kulem? Nagoan diskon nya?",
    "Ati-ati kalap wengi-wengi, enjingna nyesel.",
    "Engke kasiangan, Majikan kaburu lapar.",
    "Kulem nu tibra, enjing milari artos deui."
  ],
  random: [
    "Artos tiasa dipilari, tapi barang lucuna moal aya deui.",
    "Balanja teh obat stress nu paling ampuh.",
    "Hirup mah sakedap, meser weh mumpung aya.",
    "Juragan Kucing resep pisan kana barang ieu."
  ]
};

export const GREETINGS_EN = {
  morning: [
    "Good Morning Hooman! Why is my bowl empty?",
    "Rise and shine! The sun is up, and so are the prices.",
    "Work hard today, so you can afford my premium food.",
    "Don't forget breakfast, you need energy to scroll."
  ],
  afternoon: [
    "Good Afternoon! It's getting hot in here.",
    "Don't forget to rest (and check out your cart).",
    "Stay hydrated, shopping is a sport.",
    "Feeling sleepy? The cure is Retail Therapy."
  ],
  evening: [
    "Good Evening! Time to relax and spend money.",
    "Go shower, you smell like outside.",
    "Are you home yet? Where is my tribute?",
    "A beautiful evening to unbox some packages."
  ],
  night: [
    "Good Night! Still awake waiting for flash sale?",
    "Watch out for impulse buying at 2 AM.",
    "Go to sleep, I need you fresh to serve me tomorrow.",
    "Sweet dreams of valid tracking numbers."
  ],
  random: [
    "Money returns, but this limited edition item doesn't.",
    "Shopping is cheaper than therapy.",
    "Life is short, buy the cute thing.",
    "The Master (Me) approves of this purchase."
  ]
};

export const QUOTES_ID = [
  "Uang bisa dicari, barang lucu limited edition.",
  "Belanja adalah obat stress terbaik.",
  "Hidup itu singkat, checkout sekarang.",
  "Kerja keras bagai kuda, belanja bagai Raja.",
  "Dompet boncos demi kebahagiaan.",
  "Lebih baik nyesel beli daripada nyesel gak beli.",
  "Bahagia itu sederhana: Paket datang.",
  "Menabung pangkal kaya, belanja pangkal bahagia.",
  "Cintailah produk di keranjangmu.",
  "Dunia sementara, barang lucu selamanya."
];

export const QUOTES_JV = [
  "Arto saged dipadosi, nanging barang sae niki winates.",
  "Blanja niku obat stress ingkang paling mujarab.",
  "Gesang niku sekedap, tumbas mawon mumpung wonten.",
  "Luwih becik getun tumbas tinimbang getun mboten tumbas.",
  "Nabung niku sae, nanging blanja niku nyenengake."
];

export const QUOTES_SU = [
  "Artos tiasa dipilari, tapi barang lucuna moal aya deui.",
  "Balanja teh obat stress nu paling ampuh.",
  "Hirup mah sakedap, meser weh mumpung aya.",
  "Langkung sae kaduhung meser tibatan kaduhung teu meser.",
  "Nabung mah sae, tapi balanja mah matak bagja."
];

export const QUOTES_EN = [
  "Money returns, time doesn't. Buy it.",
  "Shopping is cheaper than therapy.",
  "Life is short, buy the shoes (or cat toys).",
  "Better to regret buying than regret missing out.",
  "Saving is good, but shopping feels better."
];

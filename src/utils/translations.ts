// Dictionary for Language Switching (Indo, Jawa, Sunda, English)

export type Language = 'id' | 'jv' | 'su' | 'en';

// --- GREETING DICTIONARIES (Must be exported for Greeting.tsx) ---

export const GREETINGS_ID = {
  morning: [
    "Pagi Babu! Mangkuk makan kok masih kosong?",
    "Bangun woy! Matahari udah tinggi, setinggi ekspektasi Majikan.",
    "Kerja yang rajin ya Babu, biar bisa beliin Royal Canin.",
    "Jangan lupa sarapan, biar kuat menghadapi kenyataan (dan tagihan).",
    "Pagi-pagi jangan ngeluh, mending checkoutin barang buat Majikan.",
    "Semesta mendukungmu untuk belanja hari ini miaw.",
    "Cek saldo dulu, kalau masih ada nol-nya, gass belanja!"
  ],
  afternoon: [
    "Siang Babu! Jangan lupa istirahat (sambil scroll Shopee).",
    "Panas banget, butuh yang seger-seger (alias checkout keranjang).",
    "Udah makan siang? Kalau belum, makan dulu biar kuat bayar paylater.",
    "Jam-jam rawan ngantuk. Mending cuci muka terus belanja.",
    "Tetap semangat walau dompet mulai menipis miaw."
  ],
  evening: [
    "Sore santuy. Enaknya ngopi sambil liat diskonan.",
    "Udah pulang kerja? Jangan lupa setoran upeti ke Majikan.",
    "Langitnya bagus ya, sebagus barang yang mau kamu beli.",
    "Waktunya santai sejenak sebelum jadi babu lagi besok.",
    "Sore-sore gini enaknya ngemil Whiskas (buat aku, kamu beli sendiri)."
  ],
  night: [
    "Malem Babu. Belum tidur? Lagi overthinking ya?",
    "Begadang jangan begadang, kecuali nunggu flash sale.",
    "Tidur gih, biar besok bisa kerja keras bagai kuda (buat kucing).",
    "Mimpi indah ya, semoga mimpinya dapet diskon 99%.",
    "Jangan lupa matiin lampu, hemat listrik buat beli pasir kucing."
  ],
  random: [
    "Hidup itu singkat, checkout itu abadi.",
    "Uang bisa dicari, barang lucu kalau sold out sakit hati.",
    "Menabung pangkal kaya, belanja pangkal bahagia.",
    "Majikan senang, hidup tenang.",
    "Jujurly, kamu butuh barang ini.",
    "Definisi bahagia: Paket datang pas lagi sedih.",
    "Kerja keraslah sampai kucingmu makan Royal Canin tiap hari.",
    "Beli aja dulu, nyeselnya belakangan (canda deng)."
  ]
};

export const GREETINGS_JV = {
  morning: [
    "Sugeng Enjang Abdi! Sampun paring dhahar dereng?",
    "Tangi luuur! Srengenge sampun dhuwur.",
    "Nyambut damel sing sregep nggih, kagem tumbas Whiskas.",
    "Ampun kesupen sarapan, supados kiat ngadepi tagihan.",
    "Enjang-enjang ampun sambat, mending blonjo mawon."
  ],
  afternoon: [
    "Sugeng Siyang! Ampun kesupen ngaso.",
    "Panas ngeten niki penak e ngadem kaliyan scroll toko oren.",
    "Sampun dhahar siang? Menawi dereng, monggo dhahar rumiyin.",
    "Wancinipun ngantuk. Mending raup lajeng blonjo.",
    "Tetep semangat senajan dompet saya tipis."
  ],
  evening: [
    "Sugeng Sonten. Penak e ngunjuk kopi kaliyan ningali diskon.",
    "Sampun kondur nyambut damel? Ampun kesupen setoran.",
    "Langite sae nggih, kados barang sing badhe ditumbas.",
    "Wancinipun santai saderengipun dados abdi malih benjing.",
    "Sonten ngeten penak e nyamikan."
  ],
  night: [
    "Sugeng Dalu. Dereng sare? Saweg galau nopo?",
    "Ampun begadang, kajawi nenggo flash sale.",
    "Monggo sare, supados benjing saged nyambut damel malih.",
    "Mimpi ingkang sae nggih.",
    "Ampun kesupen mejahi lampu."
  ],
  random: [
    "Gesang menika sekedap, checkout menika abadi.",
    "Arto saged dipadosi, barang sae menawi telas damel sakit ati.",
    "Nabung pangkal sugih, blonjo pangkal bungah.",
    "Ndoro seneng, gesang ayem.",
    "Saestu, Panjenengan betah barang niki.",
    "Definisi bungah: Paket dumugi pas saweg susah.",
    "Nyambut damel sing mempeng kagem Ndoro Kucing.",
    "Tumbas mawon rumiyin, getunipun mangke."
  ]
};

export const GREETINGS_SU = {
  morning: [
    "Wilujeng Enjing Babu! Tos masihan tuang teu acan?",
    "Hudang euy! Panonpoe tos luhur.",
    "Damel nu getol nya, kanggo meser Royal Canin.",
    "Ulah hilap sarapan, meh kiat mayar cicilan.",
    "Enjing-enjing ulah ngeluh, mending balanja wae."
  ],
  afternoon: [
    "Wilujeng Siang! Ulah hilap istirahat.",
    "Panas kieu mah raosna ngadem bari scroll Shopee.",
    "Tos tuang siang? Pami teu acan, tuang heula.",
    "Waktosna tunduh. Mending wawasuh teras balanja.",
    "Tetep sumanget sanaos dompet ipis."
  ],
  evening: [
    "Wilujeng Sonten. Raosna ngopi bari ningal diskon.",
    "Tos uih damel? Ulah hilap setoran ka Juragan.",
    "Langitna sae nya, sapertos barang nu bade digaleuh.",
    "Waktosna santai sateuacan janten babu deui enjing.",
    "Sonten kieu raosna ngemil."
  ],
  night: [
    "Wilujeng Wengi. Teu acan kulem? Nuju galau nya?",
    "Ulah begadang, iwal nunggu flash sale.",
    "Geura kulem, meh enjing tiasa damel deui.",
    "Mimpi nu sae nya.",
    "Ulah hilap pareuman lampu."
  ],
  random: [
    "Hirup mah sakedap, checkout mah abadi.",
    "Artos tiasa dipilari, barang sae pami seep matak nyeri hate.",
    "Nabung pangkal beunghar, balanja pangkal bagja.",
    "Juragan bingah, hirup tenang.",
    "Aslina, anjeun peryogi barang ieu.",
    "Definisi bagja: Paket dongkap pas nuju sedih.",
    "Damel sing leres kanggo Juragan Ucing.",
    "Galeuh we heula, kaduhung mah engke."
  ]
};

export const GREETINGS_EN = {
  morning: [
    "Good Morning Hooman! Is my bowl full yet?",
    "Wake up! The sun is high, so are my expectations.",
    "Work hard today, so you can buy me premium food.",
    "Don't forget breakfast, you need strength to pay bills.",
    "No complaining in the morning, just shopping."
  ],
  afternoon: [
    "Good Afternoon! Don't forget to rest (and scroll).",
    "It's hot outside, stay cool and checkout your cart.",
    "Had lunch? Eat well so you can work well.",
    "Sleepy hours. Wash your face and buy something.",
    "Stay spirited even if the wallet is crying."
  ],
  evening: [
    "Good Evening. Coffee and discounts sound good.",
    "Back from work? Don't forget my tribute.",
    "Beautiful sky, just like the item you want.",
    "Time to relax before serving me again tomorrow.",
    "Evening snacks are the best."
  ],
  night: [
    "Good Night. Still awake? Overthinking?",
    "Don't stay up late, unless it's for a flash sale.",
    "Go to sleep, work hard like a horse tomorrow (for me).",
    "Sweet dreams, hope you dream of 99% discounts.",
    "Turn off the lights, save money for cat litter."
  ],
  random: [
    "Life is short, checkout is eternal.",
    "Money returns, sold out items break hearts.",
    "Saving makes you rich, shopping makes you happy.",
    "Happy Master, happy life.",
    "Honestly, you need this.",
    "Happiness is: Package arriving when you're sad.",
    "Work hard until your cat eats premium food daily.",
    "Buy now, regret later (just kidding)."
  ]
};

// --- MAIN TRANSLATIONS OBJECT ---

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
    
    // NEW KEYS
    wishlistLabel: "Disimpan", 
    filterBtn: "Filter",
    resetBtn: "Reset Filter",
    gachaTicketLabel: "Tiket Misterius",
    autoOption: "✨ Otomatis",
    urlPlaceholder: "Paste link Shopee/Tokped...",
    titlePlaceholder: "Contoh: Baju Kucing Gemoy",
    descPlaceholder: "Tulis alesan kenapa ini wajib dibeli...",
    defaultDesc: "Barang bagus nih, rekomendasi banget buat kamu! Cek detailnya langsung ya.",
    editBtn: "Edit",
    deleteBtn: "Hapus",
    
    // IMAGE PREVIEW KEYS
    imgLabel: "Link Foto Produk (Opsional)",
    imgPlaceholder: "Paste link gambar (klik kanan foto produk -> copy image address)",
    imgHelper: "Biar makin estetik, paste link fotonya di sini miaw!",

    // Language Selector
    langLabel: "Bahasa",
    langId: "Indonesia",
    langJv: "Jowo Kromo",
    langSu: "Sunda",
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
    urlHelp: "Ketik nama barang, terus klik tongkat ajaib biar AI yang mikir captionnya!", 
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

    // NEW KEYS
    wishlistLabel: "Dipunsimpen", 
    filterBtn: "Saring",
    resetBtn: "Wangsulaken",
    gachaTicketLabel: "Tiket Misteri",
    autoOption: "✨ Otomatis",
    urlPlaceholder: "Tempel link mriki...",
    titlePlaceholder: "Conto: Rasukan Kucing Sae",
    descPlaceholder: "Serat alesan kenging napa kedah tumbas...",
    defaultDesc: "Barang sae niki, cocok sanget kagem Panjenengan! Monggo dipersani.",
    editBtn: "Gantos",
    deleteBtn: "Bucal",

    // IMAGE PREVIEW KEYS
    imgLabel: "Link Foto Produk (Manawi Wonten)",
    imgPlaceholder: "Tempel link gambar saking toko...",
    imgHelper: "Supados langkung sae, tempel link fotonipun mriki miaw!",

    // Language Selector
    langLabel: "Boso",
    langId: "Indonesia",
    langJv: "Jowo Kromo",
    langSu: "Sunda",
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
    urlHelp: "Serat nami barang, lajeng klik tongkat ajaib!", 
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
    searchPlaceholder: "Bade milari upeti naon kanggo Juragan Ucing?", 
    categoryTitle: "Kategori Arupis",
    sortNewest: "Paling Anyar",
    sortPopular: "Paling Rame",
    loginTitle: "Login Hulu Babu",
    loginDesc: "Ieu husus kanggo Hulu Babu. Ucing liar ulah waka lebet.", 
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

    // NEW KEYS
    wishlistLabel: "Diteundeun", 
    filterBtn: "Saring",
    resetBtn: "Balikeun",
    gachaTicketLabel: "Tiket Misteri",
    autoOption: "✨ Otomatis",
    urlPlaceholder: "Tempel link didieu...",
    titlePlaceholder: "Conto: Acuk Ucing Lucu", 
    descPlaceholder: "Serat alesan kunaon kedah meser...",
    defaultDesc: "Barang sae yeuh, rekomendasi pisan kanggo anjeun! Cek detailna langsung.",
    editBtn: "Gentos",
    deleteBtn: "Hapus",

    // IMAGE PREVIEW KEYS
    imgLabel: "Link Foto Produk (Opsional)",
    imgPlaceholder: "Tempel link gambar ti toko...",
    imgHelper: "Supados langkung sae, tempel link fotona didieu miaw!",

    // Language Selector
    langLabel: "Basa",
    langId: "Indonesia",
    langJv: "Jowo Kromo",
    langSu: "Sunda",
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
    urlHelp: "Serat nami barang, teras klik tongkat ajaib!", 
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
      "Saur Juragan Ucing, ieu cocog kanggo anjeun.", 
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
    
    // NEW KEYS
    wishlistLabel: "Saved",
    filterBtn: "Filter",
    resetBtn: "Reset",
    gachaTicketLabel: "Mystery Ticket",
    autoOption: "✨ Auto",
    urlPlaceholder: "Paste link here...",
    titlePlaceholder: "Ex: Cute Cat Outfit",
    descPlaceholder: "Write why we must buy this...",
    defaultDesc: "This is good stuff, highly recommended! Check the details now.",
    editBtn: "Edit",
    deleteBtn: "Delete",

    // IMAGE PREVIEW KEYS
    imgLabel: "Product Image Link (Optional)",
    imgPlaceholder: "Paste image link here...",
    imgHelper: "For better aesthetics, paste the image link here miaw!",

    // Language Selector
    langLabel: "Language",
    langId: "Indonesia",
    langJv: "Jowo Kromo",
    langSu: "Sunda",
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
    urlHelp: "Type item name, then click magic wand!", 
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

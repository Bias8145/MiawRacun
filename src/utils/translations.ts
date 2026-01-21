// Dictionary for Language Switching (Indo, Jawa, Sunda, English)

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

// --- RICH QUOTES LIBRARY (Exported for Greeting.tsx) ---

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
    "Panas banget, butuh yang dingin-dingin atau yang diskon-diskon.",
    "Udah jam segini, paket udah dateng belum?",
    "Kerja mulu, kapan belanjanya?",
    "Awas ngantuk! Mending liat-liat racun biar melek.",
    "Siang-siang gini enaknya checkout barang gemoy.",
    "Tetap semangat cari cuan buat beli Whiskas!"
  ],
  evening: [
    "Sore Babu! Udah siapin makan malam Majikan?",
    "Langitnya bagus ya, sebagus barang di keranjangmu.",
    "Sore santuy sambil nunggu kurir datang.",
    "Jangan lupa mandi, biar wangi pas unboxing paket.",
    "Nikmati senja sambil mikirin mau beli apa lagi.",
    "Pulang kerja langsung buka Miaw Racun, mantap!",
    "Rehat sejenak, belanja kemudian."
  ],
  night: [
    "Malem Babu! Kok belum tidur? Lagi hunting diskon ya?",
    "Begadang jangan begadang, kalau tiada diskonnya.",
    "Mimpi indah ya, semoga besok harga turun.",
    "Tidur yang nyenyak, besok kerja keras lagi buat Majikan.",
    "Jangan lupa matiin lampu, tapi jangan matiin semangat belanja.",
    "Sunyi sepi, waktu yang pas buat checkout diam-diam.",
    "Selamat malam, semoga besok paketnya sampai!"
  ],
  random: [
    "Hidup itu singkat, checkout itu abadi.",
    "Uang bisa dicari, barang lucu limited edition.",
    "Lebih baik nyesel beli daripada nyesel gak beli.",
    "Majikan senang, Babu tenang.",
    "Belanja adalah terapi terbaik (kata kucing).",
    "Jujurly, kamu butuh ini.",
    "Sabi banget nih buat pamer ke tetangga.",
    "Definisi bahagia: Paket sedang dikirim.",
    "Jangan ditahan, lepaskan hasrat belanjamu.",
    "Dompet boncos demi kebahagiaan Majikan.",
    "Khilaf itu manusiawi, yang penting happy.",
    "Gercep sebelum sold out!",
    "Racun duniawi yang hakiki.",
    "Si paling estetik se-komplek.",
    "Fix no debat, ini lucu parah!"
  ]
};

export const GREETINGS_JV = {
  morning: [
    "Sugeng Enjang Abdi! Sampun nyiapaken dhaharan?",
    "Tangi luuur! Srengenge sampun dhuwur.",
    "Nyambut damel sing sregep nggih, kagem tumbas Whiskas.",
    "Ampun kesupen sarapan, kajenge kiat ngadhepi tagihan.",
    "Enjang-enjang ampun sambat, luwih sae belanja.",
    "Dinten niki sae kagem belanja miaw.",
    "Cek saldo rumiyin, menawi taksih wonten, gass!"
  ],
  afternoon: [
    "Sugeng Siyang! Ampun kesupen ngaso.",
    "Panas sanget, betah ingkang asrep-asrep.",
    "Sampun jam semanten, paket sampun dumugi?",
    "Nyambut damel mawon, kapan belanjanipun?",
    "Awas ngantuk! Luwih sae ningali racun.",
    "Siyang ngeten niki eca menawi checkout.",
    "Tetep semangat pados arto kagem Ndoro!"
  ],
  evening: [
    "Sugeng Sonten! Sampun nyiapaken dhahar dalu?",
    "Langitipun sae, kados barang ing keranjang.",
    "Sonten santai sinambi ngrantos kurir.",
    "Ampun kesupen siram, kajenge wangi.",
    "Nikmati senja sinambi mikir badhe tumbas napa.",
    "Wangsul damel langsung mbikak Miaw Racun, jos!",
    "Ngaso sekedap, belanja mangke malih."
  ],
  night: [
    "Sugeng Dalu! Kok dereng sare? Saweg hunting diskon?",
    "Ampun begadang menawi mboten wonten diskon.",
    "Mimpi indah nggih, mugi benjing regi mandhap.",
    "Sare ingkang penak, benjing nyambut damel malih.",
    "Ampun kesupen mejahi lampu.",
    "Sepi nyenyet, wekdal pas kagem checkout.",
    "Sugeng dalu, mugi benjing paketipun dumugi!"
  ],
  random: [
    "Gesang menika sekedap, checkout menika abadi.",
    "Arto saged dipunpadosi, barang sae winates.",
    "Luwih sae getun tumbas tinimbang getun mboten tumbas.",
    "Ndoro remen, Abdi tentrem.",
    "Belanja menika tamba ingkang manjur.",
    "Saestu, Panjenengan betah niki.",
    "Sae sanget kagem pamer teng tangga.",
    "Tegesipun bagya: Paket saweg dikirim.",
    "Ampun ditahan, uculaken kepinginan belanja.",
    "Dompet tipis demi kabagyan Ndoro.",
    "Khilaf menika lumrah, sing penting seneng.",
    "Enggal-enggal saderengipun telas!",
    "Racun donya ingkang nyata.",
    "Ingkang paling sae sak-kampung.",
    "Mboten sah debat, niki lucu sanget!"
  ]
};

export const GREETINGS_SU = {
  morning: [
    "Wilujeng Enjing Babu! Mangkok naha kosong keneh?",
    "Hudang euy! Panonpoe tos luhur.",
    "Damel sing getol nya, kanggo meser Royal Canin.",
    "Ulah hilap sarapan, meh kiat mayar cicilan.",
    "Enjing-enjing ulah ngeluh, mending checkout.",
    "Dinten ieu sae kanggo balanja miaw.",
    "Cek saldo heula, pami aya keneh, gass!"
  ],
  afternoon: [
    "Wilujeng Siang! Ulah hilap istirahat.",
    "Panas pisan, peryogi nu tiis-tiis.",
    "Tos jam sakieu, paket tos dugi teu acan?",
    "Damel wae, iraha balanjana?",
    "Awas tunduh! Mending ningalian racun.",
    "Siang kieu raos pami checkout barang.",
    "Tetep sumanget milari artos kanggo Juragan!"
  ],
  evening: [
    "Wilujeng Sonten! Tos nyiapkeun tuang wengi?",
    "Langitna sae, sapertos barang dina keranjang.",
    "Sonten santai bari ngantosan kurir.",
    "Ulah hilap ibak, meh seungit.",
    "Nikmati senja bari mikiran bade meser naon.",
    "Uih damel langsung muka Miaw Racun, mantap!",
    "Rehat sakedap, balanja engke deui."
  ],
  night: [
    "Wilujeng Wengi! Naha teu acan kulem?",
    "Ulah begadang pami teu aya diskon.",
    "Impenan endah nya, mugia enjing harga turun.",
    "Kulem sing tibra, enjing damel deui.",
    "Ulah hilap mareuman lampu.",
    "Sepi jempling, waktos nu pas kanggo checkout.",
    "Wilujeng wengi, mugia enjing paketna dugi!"
  ],
  random: [
    "Hirup mah sakedap, checkout mah abadi.",
    "Artos tiasa dipilari, barang lucu mah hese.",
    "Langkung sae hanjakal meser tibatan hanjakal teu meser.",
    "Juragan bingah, Babu tenang.",
    "Balanja teh ubar nu paling manjur.",
    "Aslina, anjeun peryogi ieu.",
    "Sae pisan kanggo pamer ka tatangga.",
    "Hartina bagja: Paket nuju dikirim.",
    "Ulah ditahan, lepaskeun kahayang balanja.",
    "Dompet ipis demi kabagjaan Juragan.",
    "Khilaf mah manusa, nu penting happy.",
    "Enggalan sateuacan seep!",
    "Racun dunya nu hakiki.",
    "Nu paling gaya sakampung.",
    "Moal gagal, ieu lucu pisan!"
  ]
};

export const GREETINGS_EN = {
  morning: [
    "Good Morning Hooman! Why is the bowl empty?",
    "Wake up! The sun is high, expectations are higher.",
    "Work hard Hooman, so you can buy premium food.",
    "Don't forget breakfast, stay strong for the bills.",
    "No complaining in the morning, just checkout.",
    "The universe supports your shopping today.",
    "Check balance first, if valid, go shop!"
  ],
  afternoon: [
    "Good Afternoon! Don't forget to rest (and scroll).",
    "It's so hot, need something cool or discounted.",
    "Is the package here yet?",
    "Working all the time, when do you shop?",
    "Don't fall asleep! Look at these items instead.",
    "Perfect afternoon to checkout cute things.",
    "Keep spiriting to earn money for Master!"
  ],
  evening: [
    "Good Evening! Dinner ready yet?",
    "Beautiful sky, just like your cart items.",
    "Chilling while waiting for the courier.",
    "Don't forget to shower, smell good for unboxing.",
    "Enjoy the sunset while thinking what to buy.",
    "Home from work, open Miaw Racun immediately!",
    "Rest a bit, shop later."
  ],
  night: [
    "Good Night! Not sleeping yet? Hunting discounts?",
    "Don't stay up late unless there's a sale.",
    "Sweet dreams, hope prices drop tomorrow.",
    "Sleep tight, work hard again tomorrow.",
    "Don't forget to turn off the lights.",
    "Quiet night, perfect time to checkout secretly.",
    "Good night, hope the package arrives tomorrow!"
  ],
  random: [
    "Life is short, checkout is eternal.",
    "Money returns, limited items don't.",
    "Better regret buying than regret missing out.",
    "Happy Master, Peaceful Servant.",
    "Shopping is the best therapy.",
    "Honestly, you need this.",
    "Perfect to show off to neighbors.",
    "Definition of happiness: Package out for delivery.",
    "Don't hold back, unleash your shopping desire.",
    "Broke wallet for Master's happiness.",
    "Mistakes happen, as long as you're happy.",
    "Fast before it's sold out!",
    "True worldly poison.",
    "The most aesthetic in the neighborhood.",
    "No debate, this is too cute!"
  ]
};

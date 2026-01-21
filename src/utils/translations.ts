// Dictionary for Language Switching (Indo, Jawa, Sunda, English)
// REFINED: Standard Language Names & Authentic Slang

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
    wishlistLabel: "Disimpan", // FIXED: Standard Indonesian
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

    // Language Selector (SIMPLIFIED)
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
    searchPlaceholder: "Bade milari upeti naon kanggo Juragan Ucing?", // FIXED: Ucing
    categoryTitle: "Kategori Arupis",
    sortNewest: "Paling Anyar",
    sortPopular: "Paling Rame",
    loginTitle: "Login Hulu Babu",
    loginDesc: "Ieu husus kanggo Hulu Babu. Ucing liar ulah waka lebet.", // FIXED: Ucing
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
    wishlistLabel: "Diteundeun", // FIXED: Diteundeun
    filterBtn: "Saring",
    resetBtn: "Balikeun",
    gachaTicketLabel: "Tiket Misteri",
    autoOption: "✨ Otomatis",
    urlPlaceholder: "Tempel link didieu...",
    titlePlaceholder: "Conto: Acuk Ucing Lucu", // FIXED: Ucing
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
      "Saur Juragan Ucing, ieu cocog kanggo anjeun.", // FIXED: Ucing
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

// --- RICH QUOTES LIBRARY (KEPT FOR GREETING, BUT REMOVED FROM FOOTER) ---
// (Keeping these variables as they are used in Greeting.tsx)

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
    "Panas banget, butuh yang seger-seger kayak diskon 90%.",
    "Udah makan siang? Kalo belum, makan dulu biar kuat bayar cicilan.",
    "Jam segini enaknya tidur, tapi cicilan PayLater melambai-lambai.",
    "Tetap semangat walau dompet mulai sekarat miaw.",
    "Jangan lupa minum air putih, biar ginjal aman buat dijual (canda).",
    "Kerja terus, kaya kagak, tipes iya. Mending belanja!"
  ],
  evening: [
    "Sore Babu! Udah pulang kerja? Buruan elus-elus Majikan.",
    "Langitnya bagus ya, sebagus barang-barang di keranjangmu.",
    "Waktunya santai sambil mikirin masa depan (dan barang impian).",
    "Sore-sore gini enaknya ngopi sambil nunggu paket dateng.",
    "Pulang kerja langsung buka Miaw Racun, definisi produktif.",
    "Jangan lupa mandi, biar pas paket dateng gak bau asem.",
    "Nikmati senja, sebelum besok kembali menjadi budak korporat."
  ],
  night: [
    "Malem Babu! Belum tidur? Lagi overthinking atau overspending?",
    "Tidur gih, besok masih harus cari duit buat Majikan.",
    "Malam adalah waktu terbaik untuk khilaf belanja online.",
    "Jangan begadang, nanti sakit. Kalo sakit siapa yang ngasih makan aku?",
    "Mimpi indah ya, semoga mimpinya dapet flash sale iPhone 1000 perak.",
    "Matikan lampu, nyalakan notifikasi Shopee.",
    "Dunia butuh istirahat, tapi keinginan belanjamu tidak."
  ],
  random: [
    "Hidup itu singkat, checkout itu abadi.",
    "Uang bisa dicari, barang lucu kalau habis gak restock lagi.",
    "Menabung pangkal kaya, belanja pangkal bahagia.",
    "Beli sekarang, nyesel kemudian (karena gak beli dua).",
    "Jujurly, kamu butuh ini. Percaya sama kucing.",
    "Definisi bahagia: Paket sedang dikirim ke alamat tujuan.",
    "Obat stres paling ampuh adalah bunyi 'Ting!' notifikasi paket.",
    "Sedikit demi sedikit, lama-lama jadi bukit (tagihannya).",
    "Barang ini approved by Kucing Oren. Valid no debat.",
    "Gak usah mikir, langsung sikat. Rezeki ada aja nanti."
  ]
};

export const GREETINGS_JV = {
  morning: [
    "Sugeng Enjang Abdi! Sampun paring dhahar dereng?",
    "Wungu! Srengenge sampun inggil, kados reginipun Whiskas.",
    "Nyambut damel sing sregep nggih, kagem tumbas Royal Canin.",
    "Ampun kesupen sarapan, kersane kiat ngadepi tagihan.",
    "Enjang-enjang ampun sambat, luwung blanja kagem Ndoro.",
    "Dinten niki sae kagem blanja miaw.",
    "Cek saldo rumiyin, menawi taksih wonten nol-ipun, gass!"
  ],
  afternoon: [
    "Sugeng Siyang! Ampun kesupen ngaso (sambil scroll Shopee).",
    "Benter sanget, betah ingkang seger kados diskon 90%.",
    "Sampun dhahar? Menawi dereng, dhahar rumiyin.",
    "Jam semanten ecanipun sare, nanging cicilan nyeluk-nyeluk.",
    "Tetep semangat senajan dompet mulai sekarat miaw.",
    "Ampun kesupen ngunjuk toya pethak.",
    "Nyambut damel terus, sugih mboten, tipes nggih. Mending blanja!"
  ],
  evening: [
    "Sugeng Sonten! Sampun kondur? Enggal elus-elus Ndoro.",
    "Langitipun sae, kados barang-barang ing keranjang.",
    "Wekdalipun santai kaliyan mikir masa depan.",
    "Sonten ngeten ecanipun ngopi kaliyan nengga paket.",
    "Kondur damel langsung mbikak Miaw Racun, mantep.",
    "Ampun kesupen siram, kersane pas paket dugi mboten apek.",
    "Nikmati senja, saderengipun benjing dados budak korporat malih."
  ],
  night: [
    "Sugeng Dalu! Dereng sare? Saweg overthinking napa overspending?",
    "Sare mawon, benjing taksih kedah pados arto kagem Ndoro.",
    "Dalu menika wekdal ingkang pas kagem khilaf blanja.",
    "Ampun begadang, mangke gerah. Sinten sing paring dhahar kula?",
    "Mimpi indah nggih, mugi angsal flash sale.",
    "Pejahaken lampu, gesangaken notifikasi Shopee.",
    "Donya butuh istirahat, nanging karep blanja mboten."
  ],
  random: [
    "Gesang menika sekedap, checkout menika abadi.",
    "Arto saged dipadosi, barang sae menawi telas mboten restock.",
    "Nabung pangkal sugih, blanja pangkal bingah.",
    "Tumbas sakniki, getun mangke (amargi mboten tumbas kalih).",
    "Estu, Panjenengan butuh niki. Pitados kaliyan kucing.",
    "Definisi bingah: Paket saweg dikirim.",
    "Jampi stres paling ampuh nggih menika swanten paket dugi.",
    "Sekedhik mbaka sekedhik, dangu-dangu dados bukit (tagihanipun).",
    "Barang niki dipun acc dening Kucing Oren. Valid.",
    "Mboten sah mikir, langsung sikat. Rejeki wonten mawon mangke."
  ]
};

export const GREETINGS_SU = {
  morning: [
    "Wilujeng Enjing Babu! Mangkok emam naha kosong keneh?",
    "Hudang euy! Panonpoe tos luhur, saluhur ekspektasi Majikan.",
    "Damel sing getol nya, meh tiasa meser Royal Canin.",
    "Ulah hilap sarapan, meh kuat mayar cicilan.",
    "Enjing-enjing ulah ngeluh, mending checkout barang kanggo Majikan.",
    "Dinten ieu sae pisan kanggo balanja miaw.",
    "Cek saldo heula, pami masih aya nol-na, gass!"
  ],
  afternoon: [
    "Wilujeng Siang! Ulah hilap istirahat (bari scroll Shopee).",
    "Hareudang pisan, peryogi nu seger siga diskon 90%.",
    "Atos tuang? Pami teu acan, tuang heula meh kuat.",
    "Jam sakieu ngeunahna bobo, tapi cicilan ngagupayan.",
    "Tetep sumanget sanajan dompet mimiti sekarat miaw.",
    "Ulah hilap ngaleueut cai herang.",
    "Damel wae, beunghar henteu, tipes enya. Mending balanja!"
  ],
  evening: [
    "Wilujeng Sonten! Atos uih damel? Enggal usap-usap Majikan.",
    "Langitna sae, sasae barang-barang dina keranjang.",
    "Waktosna santai bari mikiran masa depan.",
    "Sonten kieu ngeunahna ngopi bari ngantosan paket.",
    "Uih damel langsung muka Miaw Racun, mantap.",
    "Ulah hilap ibak, meh pas paket sumping teu bau haseum.",
    "Nikmati senja, sateuacan enjing janten budak korporat deui."
  ],
  night: [
    "Wilujeng Wengi! Teu acan kulem? Nuju overthinking atanapi overspending?",
    "Kulem gih, enjing masih kedah milari artos kanggo Majikan.",
    "Wengi teh waktos nu pas kanggo khilaf balanja online.",
    "Ulah begadang, bisi nyeri. Saha nu masihan emam abdi?",
    "Mimpi indah nya, mugia kenging flash sale.",
    "Pareuman lampu, hurungkeun notifikasi Shopee.",
    "Dunya butuh istirahat, tapi kahoyong balanja mah henteu."
  ],
  random: [
    "Hirup mah sakedap, checkout mah abadi.",
    "Artos tiasa dipilari, barang sae pami seep moal restock.",
    "Nabung pangkal beunghar, balanja pangkal bagja.",
    "Meser ayeuna, hanjakal engke (kusabab teu meser dua).",
    "Aslina, anjeun peryogi ieu. Percanten ka ucing.", 
    "Definisi bagja: Paket nuju dikirim.",
    "Ubar stres paling ampuh nyaeta sora paket sumping.",
    "Sakedik sakedik, lami-lami janten bukit (tagihanna).",
    "Barang ieu di-acc ku Ucing Oren. Valid no debat.", 
    "Teu kedah mikir, langsung sikat. Rejeki mah aya we engke."
  ]
};

export const GREETINGS_EN = {
  morning: [
    "Good Morning Hooman! Why is my bowl still empty?",
    "Wake up! The sun is high, just like my expectations.",
    "Work hard today, so you can buy me Royal Canin.",
    "Don't forget breakfast, stay strong for the bills.",
    "Stop complaining, start checkout-ing for your Master.",
    "The universe supports your shopping addiction today miaw.",
    "Check your balance, if there's still a zero, go shop!"
  ],
  afternoon: [
    "Good Afternoon! Don't forget to rest (while scrolling).",
    "It's so hot, I need something fresh like 90% discount.",
    "Had lunch? Eat first so you have energy to pay debts.",
    "Best time to nap, but PayLater is calling.",
    "Stay strong even if your wallet is dying miaw.",
    "Don't forget to drink water, keep those kidneys safe.",
    "Work hard, get rich? No, get typhus. Better shop!"
  ],
  evening: [
    "Good Evening! Home from work? Pet me now.",
    "The sky is beautiful, just like your cart items.",
    "Time to relax and think about your poor life choices.",
    "Evening coffee while waiting for packages is the best.",
    "Home from work and opening Miaw Racun? Productive.",
    "Go take a shower, don't smell when the courier arrives.",
    "Enjoy the sunset before becoming a corporate slave again tomorrow."
  ],
  night: [
    "Good Night! Not sleeping? Overthinking or overspending?",
    "Go to sleep, you need to make money for me tomorrow.",
    "Night is the best time for impulsive buying.",
    "Don't stay up late, who will feed me if you get sick?",
    "Sweet dreams, hope you dream of flash sales.",
    "Lights off, Shopee notifications on.",
    "The world needs rest, but your shopping desire doesn't."
  ],
  random: [
    "Life is short, checkout is eternal.",
    "Money can be earned, cute items won't restock.",
    "Saving makes you rich, shopping makes you happy.",
    "Buy now, regret later (for not buying two).",
    "Honestly, you need this. Trust the cat.",
    "Definition of happiness: Package is out for delivery.",
    "Best stress relief is the sound of a package arriving.",
    "Little by little, the bills become a mountain.",
    "This item is approved by the Orange Cat. Valid.",
    "Don't think, just buy. Money will come back eventually."
  ]
};

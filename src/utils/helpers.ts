import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { 
  Shirt, Smartphone, Sparkles, Cat, Home, 
  Coffee, Palette, ShoppingBag, Gift, Car, Baby, BookOpen, Music
} from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Categories with Icons ---
export const CATEGORIES = [
  { id: 'Semua', label: 'Semua', icon: ShoppingBag, color: 'bg-gray-100 text-gray-600' },
  { id: 'OOTD Kece', label: 'OOTD Kece', icon: Shirt, color: 'bg-pink-100 text-pink-500' },
  { id: 'Gadget Sultan', label: 'Gadget Sultan', icon: Smartphone, color: 'bg-blue-100 text-blue-500' },
  { id: 'Skincare', label: 'Skincare', icon: Sparkles, color: 'bg-purple-100 text-purple-500' },
  { id: 'Dunia Anabul', label: 'Dunia Anabul', icon: Cat, color: 'bg-orange-100 text-orange-500' },
  { id: 'Kamar Estetik', label: 'Kamar Estetik', icon: Home, color: 'bg-teal-100 text-teal-500' },
  { id: 'Jajanan', label: 'Jajanan', icon: Coffee, color: 'bg-yellow-100 text-yellow-500' },
  { id: 'Hobi Gabut', label: 'Hobi Gabut', icon: Palette, color: 'bg-indigo-100 text-indigo-500' },
  { id: 'Kado Unik', label: 'Kado Unik', icon: Gift, color: 'bg-rose-100 text-rose-500' }
];

export const PLATFORMS = ['Semua Platform', 'Shopee', 'Tokopedia', 'Lazada', 'TikTok Shop', 'Lainnya'];

// --- CONTEXTUAL DATA FOR AUTO-GENERATION ---

type ContextType = 'fashion' | 'food' | 'tech' | 'cat' | 'beauty' | 'home' | 'hobby' | 'kpop' | 'wibu' | 'mom' | 'automotive' | 'stationery' | 'general';

const detectContext = (text: string): ContextType => {
  const lower = text.toLowerCase();
  
  // Specific Niches first
  if (/(pc|photocard|album|lightstick|kpop|nct|bts|blackpink|exo|seventeen|bias|merch)/.test(lower)) return 'kpop';
  if (/(figure|nendoroid|gundam|cosplay|wig|kostum|anime|manga|komik|wibu|waifu|husbu)/.test(lower)) return 'wibu';
  if (/(popok|pampers|susu bayi|botol susu|baju bayi|mainan anak|stroller|gendongan|mpasi|bayi|anak)/.test(lower)) return 'mom';
  if (/(helm|oli|motor|mobil|sarung tangan|jaket riding|knalpot|spion|sticker motor|parfum mobil)/.test(lower)) return 'automotive';
  if (/(buku|pulpen|binder|kertas|novel|stationery|alat tulis|pensil|spidol|highlighter|jurnal|diary)/.test(lower)) return 'stationery';

  // General Categories
  if (/(baju|celana|kemeja|jaket|sepatu|tas|outfit|dress|rok|jilbab|kerudung|kaos|hoodie|gamis|sandal|dompet|topi|kacamata|jam tangan|aksesoris|kalung|gelang|cincin)/.test(lower)) return 'fashion';
  if (/(makan|snack|minum|kopi|susu|basreng|keripik|cimol|pedas|mie|coklat|roti|kue|biskuit|permen|sambal|enak|lezat|manis|asin|frozen|lauk)/.test(lower)) return 'food';
  if (/(hp|laptop|kamera|charger|kabel|earphone|mouse|keyboard|tws|powerbank|casing|iphone|samsung|android|tablet|headset|monitor|pc|game|console|playstation|nintendo)/.test(lower)) return 'tech';
  if (/(kucing|cat|meow|kitten|pet|pasir|whiskas|royal canin|kalung|baju kucing|mainan kucing|anabul|kandang|litter|scabies|vitamin kucing)/.test(lower)) return 'cat';
  if (/(skincare|makeup|lipstik|serum|wajah|kulit|sun|toner|sabun|masker|lotion|bedak|parfum|body wash|shampoo|conditioner|hair|beauty|glowing)/.test(lower)) return 'beauty';
  if (/(meja|kursi|lampu|dekorasi|sprei|bantal|rak|lemari|dapur|aesthetic|hiasan|dinding|gorden|karpet|gelas|piring|botol|wajan|panci|alat masak)/.test(lower)) return 'home';
  if (/(lukis|gambar|koleksi|diy|rajut|benang|cat|kuas|kanvas|lego|puzzle|board game)/.test(lower)) return 'hobby';
  
  return 'general';
};

const SUFFIXES: Record<ContextType, string[]> = {
  fashion: [
    "OOTD Kece Badai", "Auto Ganteng/Cantik", "Si Paling Fashionista", "Outfit Wajib Punya", "Kece Parah Miaw", "Style Majikan Approved", "Biar Mirip Selebgram", "Outfit Jalan-Jalan", "Definisi Cakep", "Vibes Mahal", "Outfit Ngantor/Kuliah", "Bikin Doi Melirik"
  ],
  food: [
    "Awas Gendut Miaw!", "Enak Banget Tolong", "Diet Mulai Besok Aja", "Racun Lambung", "Wajib Coba Bestie", "Bikin Ngiler", "Anti Gagal Diet (Tapi Boong)", "Teman Nonton Drakor", "Stok Tengah Malam", "Penyelamat Kelaparan", "Rasanya Bintang Lima"
  ],
  tech: [
    "Gadget Sultan", "Spek Dewa Harga Kaki Lima", "Upgrade Setup Miaw", "Teknologi Masa Depan", "Wajib Punya Buat Kerja/Game", "Racun Gadget", "Si Paling Tech Savvy", "Investasi Produktivitas", "Bikin Hidup Lebih Mudah", "Setup Impian"
  ],
  cat: [
    "Majikan Pasti Suka", "Demi Kebahagiaan Anabul", "Approved by Kucing Oren", "Meow Meow Mantap", "Babu Wajib Beli", "Upeti Untuk Ndoro", "Anti Stress Kucing", "Solusi Kucing Anteng", "Biar Kucing Gak Kabur", "Kucing Sehat Babu Senang"
  ],
  beauty: [
    "Auto Glowing Miaw", "Skincare Sultan", "Bye Bye Kusam", "Cantik Paripurna", "Rahasia Glowing", "Biar Mantan Nyesel", "Wajah Licin Kayak Perosotan", "Investasi Wajah", "Makeup Flawless", "Wangi Seharian", "Kulit Sehat Idaman"
  ],
  home: [
    "Kamar Estetik Parah", "Dekorasi Lucu", "Bikin Betah di Rumah", "Rumah Rasa Pinterest", "Wajib Ada di Kamar", "Solusi Kamar Rapi", "Vibesnya Mahal Banget", "Tetangga Auto Iri", "Home Decor Goals", "Suasana Baru Miaw"
  ],
  hobby: [
    "Hobi Mahal (Tapi Worth It)", "Healing Terbaik", "Anti Gabut Club", "Karya Masterpiece", "Mainan Orang Gede", "Koleksi Wajib", "Seni Itu Mahal Miaw"
  ],
  kpop: [
    "Istri Sah Oppa Wajib Punya", "Bias Is My Life", "Koleksi Sultan Kpop", "Demi Ketemu Oppa", "Merch Official/Unofficial Kece", "Biar Dinotice Bias", "Kpopers Garis Keras"
  ],
  wibu: [
    "Waifu/Husbu Nyata", "Wibu Elite Wajib Punya", "Koleksi Otaku", "Demi Isekai", "Cosplay Low Budget", "Wibu Wangi", "Kamar Wibu Estetik"
  ],
  mom: [
    "Ibu Pintar Anak Senang", "Solusi Anak Anteng", "Perlengkapan Bayi Gemoy", "Mommy Gaul Wajib Punya", "Anak Sehat Ibu Hemat", "MPASI Anti GTM"
  ],
  automotive: [
    "Motor Ganteng Maksimal", "Riding Kece", "Anak Motor Wajib Punya", "Mobil Wangi Sultan", "Perawatan Kendaraan", "Safety First Tapi Gaya"
  ],
  stationery: [
    "Semangat Belajar/Kerja", "Alat Tulis Aesthetic", "Catatan Rapi Jaya", "Biar Rajin Nulis", "Journaling Kit Lucu", "Anak Ambis Starter Pack"
  ],
  general: [
    "Gemoy Parah Miaw!", "Racun Keras", "Murah Tapi Mewah", "Lucu Banget Tolong", "Auto Check-out", "Definisi Bahagia", "Anti Boncos Club", "Fix No Debat Lucunya", "Si Paling Viral", "Barang Unik Faedah", "Life Hack Miaw", "Solusi Masalah Hidup"
  ]
};

const DESCRIPTIONS: Record<ContextType, string[]> = {
  fashion: [
    "Jujurly {item} ini bahannya adem banget. Cocok buat OOTD-an di cafe atau sekedar pamer ke tetangga. Sikat sebelum sold out miaw!",
    "Mau tampil kece badai? {item} ini kuncinya. Auto dilirik doi (atau kucing tetangga). Jangan sampe nyesel gak beli!",
    "Definisi outfit yang bikin PD naik 100%. {item} ini cuttingannya pas banget, bikin keliatan langsing (semoga). Checkout sekarang!",
    "Style ala selebgram low budget. {item} ini murah tapi gak murahan. Majikan aja suka liat babunya pake ini.",
    "Baju ini kalau dipake rasanya kayak dipeluk awan. Lembut banget! Cocok buat kamu yang pengen tampil casual tapi tetep slay."
  ],
  food: [
    "Peringatan: {item} ini menyebabkan kecanduan! Sekali coba pasti gak bisa berhenti. Dietnya mulai besok aja ya bestie, hari ini kita khilaf dulu miaw!",
    "Sumpah {item} ini enak banget tolong! Rasanya bikin mau meninggal (lebay dikit). Cocok buat temen nonton drakor atau nemenin majikan tidur.",
    "Rekomendasi jajanan no.1 dari kucing oren! {item} ini bikin lidah bergoyang. Hati-hati kalap beli banyak!",
    "Laper tengah malem? {item} solusinya. Praktis, enak, dan bikin kenyang. Awas jangan dimakan sendirian, bagi-bagi sama hantu pojokan.",
    "Definisi surga dunia dalam satu gigitan. {item} ini rasanya premium banget padahal harganya ramah di kantong pelajar."
  ],
  tech: [
    "Upgrade hidupmu dengan {item} ini! Fiturnya canggih, harganya miring. Cocok buat kaum mendang-mending kayak kita miaw.",
    "Gadget impian sejuta umat. {item} ini speknya gahar banget buat harga segini. Main game lancar, kerja sat-set. Gass angkut!",
    "Bikin setup mejamu makin estetik dengan {item}. Gak cuma gaya, tapi fungsinya juga mantap. Majikan approve!",
    "Solusi buat kamu yang gaptek tapi pengen keliatan keren. {item} ini user-friendly banget. Nenekku aja bisa pake (kayaknya).",
    "Investasi leher ke atas (eh salah). Maksudnya investasi produktivitas! {item} ini bakal bikin kerjamu makin cepet selesai."
  ],
  cat: [
    "Demi kebahagiaan Yang Mulia Majikan, {item} ini hukumnya wajib fardhu ain buat dibeli. Jangan pelit sama kucing sendiri woy!",
    "Sumpah {item} ini lucu banget! Kucing aku sampe guling-guling pas liat ini. Auto jadi babu teladan kalau beliin ini.",
    "Investasi terbaik buat anabul. {item} ini awet dan bikin kucing anteng seharian. Babu bisa istirahat dengan tenang miaw.",
    "Mau liat kucingmu bahagia? Beliin {item} sekarang. Garansi 100% purring (mendengkur) kalau dikasih ini.",
    "Jangan ngaku cat lover kalau belum punya {item}. Ini tuh holy grail-nya dunia perkucingan. Sikat mumpung diskon!"
  ],
  beauty: [
    "Rahasia glowing para artis (bohong deng). Tapi serius, {item} ini bagus banget buat ngerawat diri. Biar pas ketemu mantan udah glow up miaw!",
    "Investasi wajah itu penting bestie. {item} ini reviewnya bagus-bagus. Bye-bye kulit kusam, hello kulit sehat!",
    "Mau cantik gak perlu mahal. {item} ini buktinya. Hasilnya nyata, dompet tetap aman sentosa. Sikat!",
    "Skincare routine wajib masuk list. {item} ini teksturnya enak banget, gak lengket kayak omongan buaya.",
    "Bikin kulitmu selembut bulu kucing Anggora. {item} ini wanginya juga enak banget, bikin rileks seharian."
  ],
  home: [
    "Bikin kamarmu se-estetik Pinterest pake {item} ini. Suasananya jadi cozy banget, bikin males keluar rumah (kaum rebahan can relate).",
    "Dekorasi murah meriah tapi mewah. {item} ini bikin tamu yang dateng auto nanya 'beli dimana?'. Jangan kasih tau, biar kamu aja yang punya miaw!",
    "Solusi rumah rapi dan cantik. {item} ini fungsional banget tapi tetep gemoy. Wajib punya buat rumah masa depan.",
    "Sumpah {item} ini bikin betah di kamar. Cocok buat spot foto-foto atau sekedar bengong mikirin masa depan.",
    "Barang kecil tapi ngaruh banget buat vibes ruangan. {item} ini warnanya cakep, masuk ke tema kamar apa aja."
  ],
  hobby: [
    "Healing terbaik adalah menekuni hobi. {item} ini bakal nemenin waktu gabutmu jadi lebih berfaedah.",
    "Karya seni mahal berawal dari alat yang tepat. {item} ini wajib punya buat kamu yang jiwanya artistik.",
    "Mainan bukan cuma buat anak kecil! {item} ini detailnya cakep banget, cocok buat pajangan atau dimainin pas stress.",
    "Anti stress stress club. {item} ini bikin lupa waktu. Tau-tau udah pagi aja."
  ],
  kpop: [
    "Oppa notice me please! {item} ini wajib masuk koleksi shrine Kpop kamu. Jangan ngaku fans kalau belum punya.",
    "Beli {item} ini berasa meluk bias. Kualitasnya official banget (walau unofficial). Sikat sebelum sold out!",
    "Persiapan konser atau sekedar halu di kamar. {item} ini bikin vibes fangirling makin seru miaw!",
    "Investasi masa depan (dijual lagi mahal). {item} ini rare item loh bestie. Buruan checkout!"
  ],
  wibu: [
    "Wangy wangy wangy! {item} ini bikin waifu/husbu kamu terasa nyata. Cocok buat nemenin isekai.",
    "Koleksi wibu elite. {item} ini detailnya gila sih, persis kayak di animenya. Temen wibumu pasti iri.",
    "Cosplay low budget tapi hasil high quality pake {item}. Siap-siap jadi pusat perhatian di event jejepangan.",
    "Barang wajib buat penghuni kamar otaku. {item} ini bikin vibes kamar makin Jepang banget."
  ],
  mom: [
    "Ibu senang, bayi tenang. {item} ini penyelamat kewarasan ibu-ibu. Praktis dan fungsional banget!",
    "Bahan {item} ini lembut banget, aman buat kulit bayi sensitif. Gak bikin iritasi, bikin bayi bobo nyenyak.",
    "MPASI jadi lebih gampang pake {item}. Anak lahap, ibu gak stress. Wajib masuk list belanja bulanan.",
    "Mainan edukasi yang gak ngebosenin. {item} ini bagus buat melatih motorik anak sambil main."
  ],
  automotive: [
    "Bikin motor/mobilmu makin ganteng pake {item}. Auto dilirik di lampu merah. Kece parah!",
    "Perawatan kendaraan itu investasi. {item} ini bikin mesin awet dan performa tetap prima. Gass!",
    "Safety riding tapi tetep gaya. {item} ini modelnya keren, bahannya kuat. Wajib punya buat anak motor.",
    "Aksesoris kecil yang bikin beda. {item} ini detailnya cakep, bikin tampilan kendaraan makin sporty."
  ],
  stationery: [
    "Catatan rapi adalah kunci IPK 4.0 (Aamiin). {item} ini enak banget dipake nulis, gak mblobor.",
    "Bikin semangat belajar naik 100%. {item} ini warnanya gemoy-gemoy, bikin buku catetan jadi estetik.",
    "Jurnal estetik butuh alat tempur yang oke. {item} ini wajib ada di kotak pensilmu.",
    "Murah tapi gak murahan. {item} ini awet banget, tinta/kualitasnya juara."
  ],
  general: [
    "Gak tau lagi mau bilang apa, {item} ini beneran definisi racun duniawi. Dompet aman? Gak yakin sih, tapi hati senang!",
    "Kalau kamu liat ini, berarti tandanya semesta menyuruhmu checkout {item}. Jangan dilawan, nanti kualat miaw!",
    "Barang wajib punya tahun ini! {item} bikin level kebahagiaan naik drastis. Buruan sikat mumpung stok masih ada!",
    "Jujurly ini {item} bagus banget woy! Gak ngerti lagi, pokoknya harus punya. Titik. Miaw!",
    "Hati-hati kalap! {item} ini ratingnya 1000/10. Kucing aku aja sampe melotot liat harganya yang miring banget.",
    "Bingung mau beli apa? Udah {item} ini aja. Gak bakal nyesel deh, sumpah!",
    "Siap-siap ditanya temen 'beli dimana?' kalau pake {item} ini. Kece parah sih!"
  ]
};

// --- Helper Functions ---

export const getPlatformFromUrl = (url: string): string => {
  if (!url) return 'Lainnya';
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes('shopee') || lowerUrl.includes('shp.ee')) return 'Shopee';
  if (lowerUrl.includes('tokopedia')) return 'Tokopedia';
  if (lowerUrl.includes('lazada')) return 'Lazada';
  if (lowerUrl.includes('tiktok')) return 'TikTok Shop';
  return 'Lainnya';
};

export const getCategoryFromTitle = (title: string): string => {
  if (!title) return 'Random Aja';
  const context = detectContext(title);
  
  switch(context) {
    case 'fashion': return 'OOTD Kece';
    case 'food': return 'Jajanan';
    case 'tech': return 'Gadget Sultan';
    case 'cat': return 'Dunia Anabul';
    case 'beauty': return 'Skincare';
    case 'home': return 'Kamar Estetik';
    case 'hobby': return 'Hobi Gabut';
    case 'kpop': return 'Hobi Gabut';
    case 'wibu': return 'Hobi Gabut';
    case 'mom': return 'Kado Unik'; // Or create new category if needed
    case 'automotive': return 'Hobi Gabut';
    case 'stationery': return 'Hobi Gabut';
    default: 
      const lower = title.toLowerCase();
      if (/(kado|hadiah|gift|hampers|buket)/.test(lower)) return 'Kado Unik';
      return 'Random Aja';
  }
};

// Helper to strip previous suffixes to avoid stacking (e.g. "Baju - Kece - Keren")
const stripSuffix = (title: string) => {
  // Split by " - " which is our standard separator
  const parts = title.split(' - ');
  
  // If we have parts, we assume the first part is the user's original input (or close to it)
  // This is a heuristic, but works well for this specific feature.
  if (parts.length > 1) {
    return parts[0].trim();
  }
  return title.trim();
};

// NEW: Context-Aware Content Generator
export const generateContentFromTitle = (currentTitle: string) => {
  if (!currentTitle || currentTitle.trim().length === 0) return null;

  // 1. Reset/Clean Title (Remove old suffixes)
  const cleanBaseTitle = stripSuffix(currentTitle);

  // 2. Capitalize Title
  const prettyTitle = cleanBaseTitle.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  
  // 3. Detect Context based on the CLEAN title
  const context = detectContext(cleanBaseTitle);
  
  // 4. Select Suffix based on Context
  const suffixList = SUFFIXES[context];
  const randomSuffix = suffixList[Math.floor(Math.random() * suffixList.length)];
  const finalTitle = `${prettyTitle} - ${randomSuffix}`;

  // 5. Select Description based on Context
  const descList = DESCRIPTIONS[context];
  const randomDescTemplate = descList[Math.floor(Math.random() * descList.length)];
  const finalDesc = randomDescTemplate.replace('{item}', prettyTitle);

  return { 
      title: finalTitle, 
      description: finalDesc,
  };
};

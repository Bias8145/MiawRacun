import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { 
  Shirt, Smartphone, Sparkles, Cat, Home, 
  Coffee, Palette, ShoppingBag, Gift, Gamepad2, Plane, Laptop, Briefcase,
  Pill, Leaf, Sprout, Heart, Music, BookOpen, Car, Baby
} from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- REBRANDED CATEGORIES (Meow Slang + Context Colors) ---
// Added 'activeBg' for explicit solid colors when selected
export const CATEGORIES = [
  { 
    id: 'Semua', 
    label: 'Akar Utama', 
    icon: Sprout, 
    color: 'text-emerald-600', 
    bg: 'bg-emerald-100',
    activeBg: 'bg-emerald-500',
    darkColor: 'text-emerald-400',
    darkBg: 'bg-emerald-900/30'
  },
  { 
    id: 'OOTD Meowdel', 
    label: 'Meowdel OOTD', 
    icon: Shirt, 
    color: 'text-pink-600', 
    bg: 'bg-pink-100',
    activeBg: 'bg-pink-500',
    darkColor: 'text-pink-400',
    darkBg: 'bg-pink-900/30'
  },
  { 
    id: 'Tech Purrfect', 
    label: 'Tech Purrfect', 
    icon: Smartphone, 
    color: 'text-sky-600', 
    bg: 'bg-sky-100',
    activeBg: 'bg-sky-500',
    darkColor: 'text-sky-400',
    darkBg: 'bg-sky-900/30'
  },
  { 
    id: 'Glow Up Meow', 
    label: 'Glow Up Meow', 
    icon: Sparkles, 
    color: 'text-purple-600', 
    bg: 'bg-purple-100',
    activeBg: 'bg-purple-500',
    darkColor: 'text-purple-400',
    darkBg: 'bg-purple-900/30'
  },
  { 
    id: 'Majikan Stuff', 
    label: 'Majikan Stuff', 
    icon: Cat, 
    color: 'text-orange-600', 
    bg: 'bg-orange-100',
    activeBg: 'bg-orange-500',
    darkColor: 'text-orange-400',
    darkBg: 'bg-orange-900/30'
  },
  { 
    id: 'Cozy Cage', 
    label: 'Cozy Cage', 
    icon: Home, 
    color: 'text-teal-600', 
    bg: 'bg-teal-100',
    activeBg: 'bg-teal-500',
    darkColor: 'text-teal-400',
    darkBg: 'bg-teal-900/30'
  }, 
  { 
    id: 'Nyam Nyam', 
    label: 'Meowm Nyam', 
    icon: Coffee, 
    color: 'text-amber-600', 
    bg: 'bg-amber-100',
    activeBg: 'bg-amber-500',
    darkColor: 'text-amber-400',
    darkBg: 'bg-amber-900/30'
  }, 
  { 
    id: 'Playtime', 
    label: 'Play-Wood', 
    icon: Gamepad2, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-100',
    activeBg: 'bg-indigo-500',
    darkColor: 'text-indigo-400',
    darkBg: 'bg-indigo-900/30'
  }, 
  { 
    id: 'Travel Paws', 
    label: 'Wander-Paws', 
    icon: Plane, 
    color: 'text-cyan-600', 
    bg: 'bg-cyan-100',
    activeBg: 'bg-cyan-500',
    darkColor: 'text-cyan-400',
    darkBg: 'bg-cyan-900/30'
  }, 
  { 
    id: 'Work from Meow', 
    label: 'Paw-ffice', 
    icon: Briefcase, 
    color: 'text-slate-600', 
    bg: 'bg-slate-100',
    activeBg: 'bg-slate-500',
    darkColor: 'text-slate-400',
    darkBg: 'bg-slate-800'
  }, 
  { 
    id: 'Kado Spesial', 
    label: 'Gift Seeds', 
    icon: Gift, 
    color: 'text-rose-600', 
    bg: 'bg-rose-100',
    activeBg: 'bg-rose-500',
    darkColor: 'text-rose-400',
    darkBg: 'bg-rose-900/30'
  },
  { 
    id: 'Meowdicine', 
    label: 'Meowdicine', 
    icon: Pill, 
    color: 'text-red-600', 
    bg: 'bg-red-100',
    activeBg: 'bg-red-500',
    darkColor: 'text-red-400',
    darkBg: 'bg-red-900/30'
  }
];

export const PLATFORMS = ['Semua Platform', 'Shopee', 'Tokopedia', 'Lazada', 'TikTok Shop', 'Lainnya'];

// --- CONTEXTUAL DATA FOR AUTO-GENERATION ---

type ContextType = 'fashion' | 'food' | 'tech' | 'cat' | 'beauty' | 'home' | 'hobby' | 'kpop' | 'wibu' | 'mom' | 'automotive' | 'stationery' | 'travel' | 'health' | 'general';

const detectContext = (text: string): ContextType => {
  const lower = text.toLowerCase();
  
  // Specific Niches
  if (/(obat|vitamin|suplemen|masker|medis|sehat|sakit|flu|batuk|demam|luka|betadine|minyak kayu putih)/.test(lower)) return 'health';
  if (/(pc|photocard|album|lightstick|kpop|nct|bts|blackpink|exo|seventeen|bias|merch)/.test(lower)) return 'kpop';
  if (/(figure|nendoroid|gundam|cosplay|wig|kostum|anime|manga|komik|wibu|waifu|husbu|game|ps5|nintendo)/.test(lower)) return 'wibu';
  if (/(popok|pampers|susu bayi|botol susu|baju bayi|mainan anak|stroller|gendongan|mpasi|bayi|anak)/.test(lower)) return 'mom';
  if (/(helm|oli|motor|mobil|sarung tangan|jaket riding|knalpot|spion|sticker motor|parfum mobil)/.test(lower)) return 'automotive';
  if (/(buku|pulpen|binder|kertas|novel|stationery|alat tulis|pensil|spidol|highlighter|jurnal|diary|kantor|meja kerja)/.test(lower)) return 'stationery';
  if (/(koper|bantal leher|paspor|travel|liburan|pantai|gunung|camping|tenda)/.test(lower)) return 'travel';

  // General Categories
  if (/(baju|celana|kemeja|jaket|sepatu|tas|outfit|dress|rok|jilbab|kerudung|kaos|hoodie|gamis|sandal|dompet|topi|kacamata|jam tangan|aksesoris|kalung|gelang|cincin)/.test(lower)) return 'fashion';
  if (/(makan|snack|minum|kopi|susu|basreng|keripik|cimol|pedas|mie|coklat|roti|kue|biskuit|permen|sambal|enak|lezat|manis|asin|frozen|lauk)/.test(lower)) return 'food';
  if (/(hp|laptop|kamera|charger|kabel|earphone|mouse|keyboard|tws|powerbank|casing|iphone|samsung|android|tablet|headset|monitor|pc)/.test(lower)) return 'tech';
  if (/(kucing|cat|meow|kitten|pet|pasir|whiskas|royal canin|kalung|baju kucing|mainan kucing|anabul|kandang|litter|scabies|vitamin kucing)/.test(lower)) return 'cat';
  if (/(skincare|makeup|lipstik|serum|wajah|kulit|sun|toner|sabun|masker|lotion|bedak|parfum|body wash|shampoo|conditioner|hair|beauty|glowing)/.test(lower)) return 'beauty';
  if (/(meja|kursi|lampu|dekorasi|sprei|bantal|rak|lemari|dapur|aesthetic|hiasan|dinding|gorden|karpet|gelas|piring|botol|wajan|panci|alat masak)/.test(lower)) return 'home';
  if (/(lukis|gambar|koleksi|diy|rajut|benang|cat|kuas|kanvas|lego|puzzle|board game)/.test(lower)) return 'hobby';
  
  return 'general';
};

const SUFFIXES: Record<ContextType, string[]> = {
  fashion: ["Meowdel OOTD", "Auto Kece", "Style Majikan", "Vibes Mahal", "Outfit Jalan", "Si Paling Fashion"],
  food: ["Meowm Nyam Enak", "Racun Lambung", "Wajib Coba", "Bikin Ngiler", "Anti Diet", "Stok Tengah Malam"],
  tech: ["Tech Purrfect", "Spek Dewa", "Upgrade Setup", "Racun Gadget", "Tech Savvy", "Setup Impian"],
  cat: ["Majikan Stuff", "Demi Anabul", "Meow Meow Mantap", "Upeti Ndoro", "Solusi Kucing Anteng"],
  beauty: ["Glow Up Meow", "Cantik Paripurna", "Rahasia Glowing", "Wajah Licin", "Investasi Wajah"],
  home: ["Cozy Cage", "Rumah Estetik", "Vibes Pinterest", "Bikin Betah", "Dekorasi Lucu"],
  hobby: ["Play-Wood Seru", "Healing Terbaik", "Anti Gabut", "Koleksi Wajib", "Mainan Orang Gede"],
  kpop: ["Istri Oppa", "Koleksi Bias", "Merch Lucu", "Demi Oppa", "Kpopers Wajib Punya"],
  wibu: ["Waifu Nyata", "Wibu Elite", "Koleksi Otaku", "Demi Isekai", "Kamar Wibu"],
  mom: ["Ibu Pintar", "Solusi Anak Anteng", "Perlengkapan Gemoy", "Mommy Gaul", "Anak Sehat"],
  automotive: ["Riding Kece", "Motor Ganteng", "Anak Motor", "Mobil Wangi", "Safety First"],
  stationery: ["Paw-ffice", "Alat Tulis Lucu", "Semangat Kerja", "Meja Rapi", "Anak Ambis"],
  travel: ["Wander-Paws", "Liburan Santuy", "Healing Time", "Siap Jalan-Jalan", "Travel Kit"],
  health: ["Meowdicine", "Sehat Selalu", "Jaga Stamina", "P3K Wajib", "Solusi Sehat"],
  general: ["Gemoy Parah", "Racun MeowTree", "Wajib Punya", "Lucu Banget", "Auto Checkout", "Si Paling Viral"]
};

const DESCRIPTIONS: Record<ContextType, string[]> = {
  fashion: ["Baju ini bikin kamu sekece kucing Anggora. Bahannya adem, modelnya timeless!", "Definisi Meowdel OOTD. Pake ini auto dilirik kucing tetangga."],
  food: ["Hati-hati, makanan ini bikin ketagihan kayak catnip! Enak banget tolong.", "Cemilan wajib buat nemenin nonton atau ngerjain tugas. Meowm nyam!"],
  tech: ["Gadget ini canggih banget, secerdas kucing oren pas minta makan. Wajib punya!", "Upgrade setup kamu biar makin produktif (atau makin asik main game)."],
  cat: ["Persembahan terbaik untuk Yang Mulia Majikan. Garansi purring 100%!", "Jangan pelit sama kucing sendiri. Beliin ini biar dia makin sayang sama babu."],
  beauty: ["Bikin wajah glowing kayak bulu kucing habis mandi. Skincare andalan!", "Rahasia cantik paripurna. Siap-siap dikejar-kejar (sama kucing)."],
  home: ["Bikin kamarmu se-cozy kardus kucing. Estetik dan bikin betah seharian.", "Dekorasi lucu yang bikin rumah makin homey. Tamu pasti nanya beli dimana."],
  hobby: ["Mainan ini seru banget, bisa lupa waktu kayak kucing ngejar laser.", "Koleksi wajib buat healing. Stress hilang, hati senang."],
  kpop: ["Barang wajib buat fangirling. Oppa pasti bangga liat kamu punya ini.", "Lengkapi shrine Kpop kamu dengan item ini. Lucu parah!"],
  wibu: ["Item rare buat nambah koleksi wibu kamu. Sugoi desu ne!", "Bikin waifu/husbu makin deket di hati."],
  mom: ["Ibu senang, bayi tenang. Solusi praktis buat mommy zaman now.", "Perlengkapan bayi yang aman dan gemoy. Si kecil pasti suka."],
  automotive: ["Bikin kendaraan makin ganteng. Gasspol rem blong (eh jangan).", "Aksesoris kece buat riding santuy sore hari."],
  stationery: ["Alat tempur buat kerja atau belajar. Bikin meja makin estetik.", "Nulis jadi makin semangat pake ini. Ide ngalir terus!"],
  travel: ["Teman setia buat healing. Praktis dibawa kemana-mana.", "Liburan makin asik kalau bawa ini. Jangan lupa foto-foto!"],
  health: ["Sedia payung sebelum hujan, sedia ini sebelum sakit. Stay healthy meow!", "Vitamin biar kuat menghadapi kenyataan (dan tagihan)."],
  general: ["Barang random tapi berfaedah. Lucu banget, gak nahan buat checkout!", "MeowTree approved! Barang ini ratingnya 1000/10."]
};

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
  if (!title) return 'Semua';
  const context = detectContext(title);
  
  switch(context) {
    case 'fashion': return 'OOTD Meowdel';
    case 'food': return 'Nyam Nyam';
    case 'tech': return 'Tech Purrfect';
    case 'cat': return 'Majikan Stuff';
    case 'beauty': return 'Glow Up Meow';
    case 'home': return 'Cozy Cage';
    case 'hobby': return 'Playtime';
    case 'kpop': return 'Playtime';
    case 'wibu': return 'Playtime';
    case 'travel': return 'Travel Paws';
    case 'stationery': return 'Work from Meow';
    case 'health': return 'Meowdicine';
    case 'mom': return 'Kado Spesial'; 
    default: 
      const lower = title.toLowerCase();
      if (/(kado|hadiah|gift|hampers|buket)/.test(lower)) return 'Kado Spesial';
      return 'Semua';
  }
};

const stripSuffix = (title: string) => {
  const parts = title.split(' - ');
  if (parts.length > 1) {
    return parts[0].trim();
  }
  return title.trim();
};

export const generateContentFromTitle = (currentTitle: string) => {
  if (!currentTitle || currentTitle.trim().length === 0) return null;

  const cleanBaseTitle = stripSuffix(currentTitle);
  const prettyTitle = cleanBaseTitle.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  const context = detectContext(cleanBaseTitle);
  
  const suffixList = SUFFIXES[context] || SUFFIXES['general'];
  const randomSuffix = suffixList[Math.floor(Math.random() * suffixList.length)];
  const finalTitle = `${prettyTitle} - ${randomSuffix}`;

  const descList = DESCRIPTIONS[context] || DESCRIPTIONS['general'];
  const randomDescTemplate = descList[Math.floor(Math.random() * descList.length)];
  const finalDesc = randomDescTemplate.replace('{item}', prettyTitle);

  return { 
      title: finalTitle, 
      description: finalDesc,
  };
};

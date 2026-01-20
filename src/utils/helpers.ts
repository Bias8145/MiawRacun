import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { 
  Shirt, Smartphone, Sparkles, Cat, Home, 
  Coffee, Palette, ShoppingBag, Gift
} from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Categories with Icons (REMOVED EMOJIS FROM LABELS) ---
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

// --- Auto-Fill Logic ---

const SLANG_SUFFIXES = [
  "Gemoy Parah Miaw!",
  "Wajib Punya Nih!",
  "Racun Keras",
  "Approved by Kucing",
  "Murah Tapi Mewah",
  "Lucu Banget Tolong",
  "Auto Check-out Miaw",
  "Definisi Bahagia",
  "Anti Boncos Club",
  "Si Paling Estetik",
  "Fix No Debat Lucunya"
];

const CAT_DESCRIPTIONS = [
  "Sumpah ini {item} lucu banget! Majikan pasti suka, babu juga bahagia. Gass checkout sebelum kehabisan miaw!",
  "Gak tau lagi mau bilang apa, {item} ini beneran definisi racun duniawi. Dompet aman? Gak yakin sih, tapi hati senang!",
  "Rekomendasi no.1 dari kucing oren! {item} ini bikin hidup makin berwarna. Jangan lupa klaim voucher gratis ongkir ya bestie.",
  "Hati-hati kalap! {item} ini ratingnya 1000/10. Kucing aku aja sampe melotot liat harganya yang miring banget.",
  "Definisi barang estetik yang hakiki. {item} ini cocok banget buat pamer di story IG. Tetangga pasti iri miaw!",
  "Kalau kamu liat ini, berarti tandanya harus beli {item}. Semesta mendukung, dompet merestui (semoga) miaw!",
  "Barang wajib punya tahun ini! {item} bikin level kegemoyan naik drastis. Buruan sikat mumpung stok masih ada!",
  "Jujurly ini {item} bagus banget woy! Gak ngerti lagi, pokoknya harus punya. Titik. Miaw!",
  "Mau tampil kece? {item} ini kuncinya. Auto dilirik doi (atau kucing tetangga) miaw!",
  "Investasi kebahagiaan nih! {item} murah tapi kualitasnya gak main-main. Gasss!",
  "Peringatan: {item} ini menyebabkan kecanduan belanja. Tanggung jawab ditanggung pemenang (pembeli) miaw!"
];

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
  const lowerTitle = title.toLowerCase();
  
  if (/(kucing|cat|meow|kitten|pet|pasir|whiskas|royal canin|kalung|baju kucing|anabul)/.test(lowerTitle)) return 'Dunia Anabul';
  if (/(baju|celana|kemeja|jaket|sepatu|tas|outfit|dress|rok|jilbab|kerudung|kaos|hoodie|gamis)/.test(lowerTitle)) return 'OOTD Kece';
  if (/(hp|laptop|kamera|charger|kabel|earphone|mouse|keyboard|tws|powerbank|casing|iphone|samsung|android)/.test(lowerTitle)) return 'Gadget Sultan';
  if (/(skincare|makeup|lipstik|serum|wajah|kulit|sunscreen|toner|sabun|masker|lotion|bedak)/.test(lowerTitle)) return 'Skincare';
  if (/(meja|kursi|lampu|dekorasi|sprei|bantal|rak|lemari|dapur|aesthetic|kamar|hiasan|dinding)/.test(lowerTitle)) return 'Kamar Estetik';
  if (/(makan|snack|minum|kopi|susu|basreng|keripik|cimol|pedas|mie|coklat|roti)/.test(lowerTitle)) return 'Jajanan';
  if (/(buku|lukis|gambar|game|mainan|koleksi|diy|kpop|album|pc|photocard)/.test(lowerTitle)) return 'Hobi Gabut';
  if (/(kado|hadiah|gift|hampers|buket)/.test(lowerTitle)) return 'Kado Unik';
  
  return 'Racun Shopee';
};

// IMPROVED: Extract REAL product name from URL slug
export const extractInfoFromUrl = (url: string) => {
  let rawTitle = "";
  
  try {
    const urlObj = new URL(url);
    const path = urlObj.pathname;
    const hostname = urlObj.hostname;

    // --- Shopee Logic ---
    if (hostname.includes('shopee') || hostname.includes('shp.ee')) {
        const match = path.match(/\/([^\/]+)-i\./);
        if (match && match[1]) {
            rawTitle = match[1];
        } else {
            const segments = path.split('/').filter(s => s.length > 5 && s.includes('-'));
            if (segments.length > 0) rawTitle = segments[0];
        }
    }
    // --- Tokopedia Logic ---
    else if (hostname.includes('tokopedia')) {
        const segments = path.split('/').filter(s => s);
        const candidate = segments[segments.length - 1];
        if (candidate && !['product', 'etalase', 'review', 'info', 'feed'].includes(candidate)) {
            rawTitle = candidate;
        }
    }
    // --- Lazada Logic ---
    else if (hostname.includes('lazada')) {
        const match = path.match(/\/products\/([^\/]+)-i/);
        if (match && match[1]) {
            rawTitle = match[1];
        } else {
             const segments = path.split('/').filter(s => s.includes('-'));
             if(segments.length > 0) rawTitle = segments[segments.length - 1];
        }
    }
    // --- TikTok Shop / Generic ---
    else {
        const segments = path.split('/').filter(s => s);
        const lastPart = segments[segments.length - 1];
        if (lastPart) {
            rawTitle = lastPart.split('?')[0].replace(/\.html|\.php|\.htm/g, '');
        }
    }

    // --- CLEANUP PROCESS ---
    if (rawTitle) {
        try { rawTitle = decodeURIComponent(rawTitle); } catch(e) {}
        rawTitle = rawTitle.replace(/[-_+]/g, ' ');
        rawTitle = rawTitle.replace(/\s\d+$/, ''); 
        rawTitle = rawTitle.replace(/[^\w\s\u00C0-\u00FF]/g, '');
        rawTitle = rawTitle.replace(/\s+/g, ' ').trim();
    }

  } catch (e) {
    console.log("URL parse error:", e);
  }

  // --- GENERATE CONTENT ---
  if (!rawTitle || rawTitle.length < 3) {
      const platform = getPlatformFromUrl(url);
      rawTitle = `Racun ${platform} Misterius`;
  }

  let prettyTitle = rawTitle.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  
  if (prettyTitle.length > 40) {
      prettyTitle = prettyTitle.substring(0, 40).trim() + "...";
  }

  const randomSuffix = SLANG_SUFFIXES[Math.floor(Math.random() * SLANG_SUFFIXES.length)];
  const finalTitle = `${prettyTitle} ${randomSuffix}`;

  let descTitle = rawTitle.length > 50 ? rawTitle.substring(0, 50) + "..." : rawTitle;
  descTitle = descTitle.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

  const randomDescTemplate = CAT_DESCRIPTIONS[Math.floor(Math.random() * CAT_DESCRIPTIONS.length)];
  const finalDesc = randomDescTemplate.replace('{item}', descTitle);

  return { 
      title: finalTitle, 
      description: finalDesc,
      originalTitle: rawTitle 
  };
};

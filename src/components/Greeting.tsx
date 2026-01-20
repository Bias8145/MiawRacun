import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Sun, Moon, CloudRain, Clock, Cat, Coffee, Sparkles, Zap, DollarSign, Heart } from 'lucide-react';

// --- THE ULTIMATE CAT SLANG DICTIONARY ---
const RANDOM_PHRASES = [
  // Shopping Motivation (The "Racun")
  "Dompet aman? Gak yakin sih miaw 😹",
  "Awas kalap, racunnya kenceng banget!",
  "Gass checkout sekarang, keburu abis!",
  "Barang ini lucu parah, fix no debat!",
  "Voucher gratis ongkir udah diklaim belum?",
  "Hidup cuma sekali, checkout berkali-kali miaw.",
  "Keranjang masih muat kan? Tambah lagi dong!",
  "Miaw miaw... (Artinya: Belanja itu healing)",
  "Lagi gabut? Cuci mata dulu sini.",
  "Semoga rejeki lancar biar bisa belanja terus ✨",
  "Uang bisa dicari, barang lucu limited edition miaw!",
  "Definisi 'Butuh' vs 'Ingin' itu beda tipis ya bestie.",
  "Sedekah ke diri sendiri itu penting, checkout sekarang!",
  "Manusia kerja keras bagai kuda, kucing belanja bagai sultan.",
  "Jangan nunggu kaya buat beli barang lucu. Beli dulu, kaya kemudian.",
  "Self reward itu wajib, tagihan itu nanti dulu miaw.",
  "Barang ini bisa bikin mantan nyesel putusin kamu. Serius.",
  "Kata mama kucing: Kalau suka, langsung bungkus!",
  "Obat pusing paling ampuh ya paket dateng ke rumah.",
  "Cita-cita: Rich Cat. Hobi: Checkout Shopee.",
  
  // Sarcastic / Funny
  "Info loker jadi kucing piaraan orang kaya dong miaw...",
  "Kamu kerja, aku yang abisin uangnya. Deal? 🤝",
  "Lagi pantau harga atau pantau jodoh nih?",
  "Scroll terus sampe jempol kriting, checkout kagak.",
  "Misi paket! (Suara paling indah di dunia)",
  "Duit tidak dibawa mati, tapi dibawa belanja miaw.",
  "Saldo ATM aman? Atau udah teriak minta tolong?",
  "Kenapa harus nabung kalau bisa belanja? (Sesat miaw 😹)",
  "Aku bukan boros, aku cuma mengapresiasi karya seni (barang).",
  "Diet wacana, belanja laksana.",
  
  // Cat Life
  "Majikan (Kucing) butuh upeti baru nih.",
  "Jangan lupa kasih makan kucing sebelum belanja!",
  "Pusat resolusi kegalauan: Keranjang Belanja.",
  "Miaw... (Lagi judging selera belanja kamu)",
  "Kucing tetangga pasti iri liat barang ini.",
];

const TIME_PHRASES = {
  morning: [
    "Pagi Hooman! Udah kasih makan kucing belum?",
    "Sarapan bubur apa sarapan racun shopee?",
    "Awali pagi dengan checkout, biar semangat!",
    "Matahari udah terbit, diskon juga udah terbit.",
    "Semangat cari cuan buat beli Whiskas (dan barang ini)!"
  ],
  afternoon: [
    "Siang Bestie! Jam rawan ngantuk, mending checkout.",
    "Panas gini enaknya ngadem sambil scroll racun.",
    "Udah makan siang? Jangan lupa dessert-nya belanja.",
    "Kerja terus, kapan belanjanya? Yuk istirahat bentar.",
    "Siang bolong, dompet juga jangan sampe bolong ya."
  ],
  evening: [
    "Sore Santuy! Ngeteh sore sambil nunggu paket.",
    "Langit senja kalah indah sama barang ini miaw.",
    "Pulang kerja, langsung buka aplikasi keranjang oren.",
    "Sore-sore galau? Mending check out barang lucu.",
    "Rebahan time! Saatnya scroll sampe ketiduran."
  ],
  night: [
    "Malem Guys! Begadang jangan, belanja boleh.",
    "Jam-jam overthinking... mending overshopping.",
    "Awas, checkout tengah malem biasanya khilaf.",
    "Mimpi indah itu kalau paketnya gratis ongkir.",
    "Tidur woy! Tapi checkout dulu satu barang deh."
  ]
};

export const Greeting = () => {
  const [greeting, setGreeting] = useState({
    period: '',
    timeText: '',
    icon: Sun,
    subText: ''
  });

  useEffect(() => {
    const updateContent = () => {
      const now = new Date();
      const hours = now.getHours();
      let period = '';
      let timeText = '';
      let icon = Sun;
      let timeSpecificPhrases: string[] = [];

      // Time Logic
      if (hours >= 4 && hours < 11) {
        period = 'Pagi Hooman!';
        timeSpecificPhrases = TIME_PHRASES.morning;
        icon = Coffee;
      } else if (hours >= 11 && hours < 15) {
        period = 'Siang Bestie!';
        timeSpecificPhrases = TIME_PHRASES.afternoon;
        icon = Sun;
      } else if (hours >= 15 && hours < 18) {
        period = 'Sore Santuy!';
        timeSpecificPhrases = TIME_PHRASES.evening;
        icon = Cloud;
      } else {
        period = 'Malem Guys!';
        timeSpecificPhrases = TIME_PHRASES.night;
        icon = Moon;
      }

      // Randomizer Logic
      // 30% chance of time-specific phrase, 70% chance of random slang
      const randomBase = Math.random();
      let subText = '';
      
      if (randomBase < 0.3) {
        timeText = timeSpecificPhrases[Math.floor(Math.random() * timeSpecificPhrases.length)];
        subText = RANDOM_PHRASES[Math.floor(Math.random() * RANDOM_PHRASES.length)];
      } else {
        // Swap them for variety
        timeText = RANDOM_PHRASES[Math.floor(Math.random() * RANDOM_PHRASES.length)];
        subText = timeSpecificPhrases[Math.floor(Math.random() * timeSpecificPhrases.length)];
      }

      setGreeting({ period, timeText, icon, subText });
    };

    updateContent();
    const interval = setInterval(updateContent, 8000); // Change every 8 seconds for dynamic feel

    return () => clearInterval(interval);
  }, []);

  const Icon = greeting.icon;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-cat-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-cat-200/50 transition-all duration-500"
      >
        {/* Decorative Background Elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cat-200/30 rounded-full blur-2xl group-hover:bg-cat-300/30 transition-colors duration-700 animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl group-hover:bg-pink-300/30 transition-colors duration-700 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-3 flex items-center justify-center gap-2 tracking-tight">
            {greeting.period} 
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
            >
              <Cat className="w-8 h-8 text-cat-500" />
            </motion.div>
          </h1>
          
          <div className="flex flex-col items-center gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={greeting.timeText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 text-cat-600 dark:text-cat-300 font-bold bg-cat-50 dark:bg-gray-800/50 px-5 py-2 rounded-full text-sm shadow-sm border border-cat-100 dark:border-gray-700"
              >
                <Icon className="w-4 h-4" />
                <span>{greeting.timeText}</span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={greeting.subText}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="text-gray-500 dark:text-gray-400 text-xs md:text-sm italic font-medium px-4"
              >
                "{greeting.subText}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

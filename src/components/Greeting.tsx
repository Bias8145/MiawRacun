import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Sun, Moon, CloudRain, Clock, Cat, Coffee, Sparkles } from 'lucide-react';

// Updated with "Miaw Racun" slang vibe
const RANDOM_PHRASES = [
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
];

const WEATHER_PHRASES = [
  "Cuaca enak buat scrolling shopee nih.",
  "Mendung gini enaknya selimutan sambil belanja.",
  "Panas? Ngadem dulu liat yang seger-seger.",
  "Hujan? Tenang, kurir tetep anter paket kok.",
];

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

      // Time Logic
      if (hours >= 4 && hours < 11) {
        period = 'Pagi Hooman!';
        timeText = 'Sarapan dulu, terus belanja deh.';
        icon = Coffee;
      } else if (hours >= 11 && hours < 15) {
        period = 'Siang Bestie!';
        timeText = 'Jam rawan ngantuk, mending checkout.';
        icon = Sun;
      } else if (hours >= 15 && hours < 18) {
        period = 'Sore Santuy!';
        timeText = 'Ngeteh sore sambil nunggu paket.';
        icon = Cloud;
      } else {
        period = 'Malem Guys!';
        timeText = 'Begadang jangan, belanja boleh.';
        icon = Moon;
      }

      // Randomizer Logic
      const randomBase = Math.random();
      let subText = '';
      
      if (randomBase < 0.4) {
        subText = RANDOM_PHRASES[Math.floor(Math.random() * RANDOM_PHRASES.length)];
      } else if (randomBase < 0.7) {
        subText = WEATHER_PHRASES[Math.floor(Math.random() * WEATHER_PHRASES.length)];
      } else {
        subText = "Miaw Racun is real... 😽";
      }

      setGreeting({ period, timeText, icon, subText });
    };

    updateContent();
    const interval = setInterval(updateContent, 10000); 

    return () => clearInterval(interval);
  }, []);

  const Icon = greeting.icon;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-cat-100 dark:border-gray-700 relative overflow-hidden group"
      >
        {/* Decorative Background Elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cat-200/30 rounded-full blur-2xl group-hover:bg-cat-300/30 transition-colors duration-700" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl group-hover:bg-pink-300/30 transition-colors duration-700" />

        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 flex items-center justify-center gap-2">
            {greeting.period} <Cat className="w-8 h-8 text-cat-500 animate-bounce-slow" />
          </h1>
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-cat-600 dark:text-cat-300 font-medium bg-cat-50 dark:bg-gray-800/50 px-4 py-1.5 rounded-full text-sm shadow-sm">
              <Icon className="w-4 h-4" />
              <span>{greeting.timeText}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={greeting.subText}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300 text-sm md:text-base italic mt-2 font-medium"
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

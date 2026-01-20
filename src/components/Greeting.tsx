import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Sun, Moon, Coffee, Cat } from 'lucide-react';
import { GREETINGS_ID, GREETINGS_JV, GREETINGS_SU, GREETINGS_EN, Language } from '../utils/translations';

interface GreetingProps {
  lang: Language;
}

export const Greeting: React.FC<GreetingProps> = ({ lang }) => {
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
      
      // Select Dictionary based on Language
      let DICT;
      switch (lang) {
        case 'jv': DICT = GREETINGS_JV; break;
        case 'su': DICT = GREETINGS_SU; break;
        case 'en': DICT = GREETINGS_EN; break;
        default: DICT = GREETINGS_ID;
      }

      // Time Logic
      let timeSpecificPhrases: string[] = [];

      if (hours >= 4 && hours < 11) {
        if (lang === 'jv') period = 'Sugeng Enjang!';
        else if (lang === 'su') period = 'Wilujeng Enjing!';
        else if (lang === 'en') period = 'Good Morning!';
        else period = 'Pagi Hooman!';
        
        timeSpecificPhrases = DICT.morning;
        icon = Coffee;
      } else if (hours >= 11 && hours < 15) {
        if (lang === 'jv') period = 'Sugeng Siyang!';
        else if (lang === 'su') period = 'Wilujeng Siang!';
        else if (lang === 'en') period = 'Good Afternoon!';
        else period = 'Siang Bestie!';

        timeSpecificPhrases = DICT.afternoon;
        icon = Sun;
      } else if (hours >= 15 && hours < 18) {
        if (lang === 'jv') period = 'Sugeng Sonten!';
        else if (lang === 'su') period = 'Wilujeng Sonten!';
        else if (lang === 'en') period = 'Good Evening!';
        else period = 'Sore Santuy!';

        timeSpecificPhrases = DICT.evening;
        icon = Cloud;
      } else {
        if (lang === 'jv') period = 'Sugeng Dalu!';
        else if (lang === 'su') period = 'Wilujeng Wengi!';
        else if (lang === 'en') period = 'Good Night!';
        else period = 'Malem Guys!';

        timeSpecificPhrases = DICT.night;
        icon = Moon;
      }

      // Randomizer Logic
      const randomBase = Math.random();
      let subText = '';
      
      if (randomBase < 0.3) {
        timeText = timeSpecificPhrases[Math.floor(Math.random() * timeSpecificPhrases.length)];
        subText = DICT.random[Math.floor(Math.random() * DICT.random.length)];
      } else {
        timeText = DICT.random[Math.floor(Math.random() * DICT.random.length)];
        subText = timeSpecificPhrases[Math.floor(Math.random() * timeSpecificPhrases.length)];
      }

      setGreeting({ period, timeText, icon, subText });
    };

    updateContent();
    const interval = setInterval(updateContent, 8000); 

    return () => clearInterval(interval);
  }, [lang]); // Re-run when language changes

  const Icon = greeting.icon;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-cat-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-cat-200/50 transition-all duration-500"
      >
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

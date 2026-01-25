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
        else period = 'Pagi Bestie!';
        
        timeSpecificPhrases = DICT.morning;
        icon = Coffee;
      } else if (hours >= 11 && hours < 15) {
        if (lang === 'jv') period = 'Sugeng Siyang!';
        else if (lang === 'su') period = 'Wilujeng Siang!';
        else if (lang === 'en') period = 'Good Afternoon!';
        else period = 'Siang Guys!';

        timeSpecificPhrases = DICT.afternoon;
        icon = Sun;
      } else if (hours >= 15 && hours < 18) {
        if (lang === 'jv') period = 'Sugeng Sonten!';
        else if (lang === 'su') period = 'Wilujeng Sonten!';
        else if (lang === 'en') period = 'Good Evening!';
        else period = 'Sore Vibes!';

        timeSpecificPhrases = DICT.evening;
        icon = Cloud;
      } else {
        if (lang === 'jv') period = 'Sugeng Dalu!';
        else if (lang === 'su') period = 'Wilujeng Wengi!';
        else if (lang === 'en') period = 'Good Night!';
        else period = 'Malem Bestie!';

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
    <div className="w-full mb-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-dark-surface rounded-[2rem] p-4 shadow-sm border border-cat-50 dark:border-gray-700 relative overflow-hidden group"
      >
        <div className="relative z-10">
          <h1 className="text-xl font-black text-gray-800 dark:text-white mb-2 flex items-center justify-center gap-2 tracking-tight">
            {greeting.period} 
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
            >
              <Cat className="w-6 h-6 text-cat-500" />
            </motion.div>
          </h1>
          
          <div className="flex flex-col items-center gap-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={greeting.timeText}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center gap-1.5 text-cat-600 dark:text-cat-300 font-bold bg-cat-50 dark:bg-gray-800/50 px-3 py-1 rounded-full text-xs"
              >
                <Icon className="w-3 h-3" />
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
                className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs italic font-medium px-4 mt-1"
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

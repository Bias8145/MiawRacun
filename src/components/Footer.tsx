import React from 'react';
import { Cat, Heart } from 'lucide-react';
import { QUOTES_ID, QUOTES_JV, QUOTES_SU, QUOTES_EN, Language } from '../utils/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  let QUOTES;
  switch (lang) {
    case 'jv': QUOTES = QUOTES_JV; break;
    case 'su': QUOTES = QUOTES_SU; break;
    case 'en': QUOTES = QUOTES_EN; break;
    default: QUOTES = QUOTES_ID;
  }

  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  const getMadeByText = () => {
    switch(lang) {
      case 'jv': return 'Damelanipun';
      case 'su': return 'Damelan';
      case 'en': return 'Made with';
      default: return 'Dibuat dengan';
    }
  };

  const getByText = () => {
    switch(lang) {
      case 'jv': return 'dening Ndoro';
      case 'su': return 'ku Majikan';
      case 'en': return 'by the Master';
      default: return 'oleh Majikan';
    }
  };

  return (
    <footer className="mt-12 pb-8 px-4 text-center">
      <div className="max-w-2xl mx-auto border-t border-gray-100 dark:border-gray-800 pt-8">
        <div className="flex justify-center mb-4">
          <div className="bg-cat-50 dark:bg-gray-800 p-3 rounded-full animate-bounce-slow">
            <Cat className="w-6 h-6 text-cat-500" />
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 font-medium italic mb-2">
          "{randomQuote}"
        </p>
        
        <p className="text-xs text-gray-400 flex items-center justify-center gap-1 mt-4">
          {getMadeByText()} <Heart className="w-3 h-3 text-red-400 fill-current animate-pulse" /> dan 🐾 {getByText()}
        </p>
        <p className="text-[10px] text-gray-300 mt-1">
          © {new Date().getFullYear()} Miaw Racun. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

import React from 'react';
import { Heart } from 'lucide-react';
import { Language } from '../utils/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
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
      case 'jv': return 'kagem Ndoro';
      case 'su': return 'kanggo Juragan';
      case 'en': return 'for the Master';
      default: return 'untuk Majikan';
    }
  };

  return (
    <footer className="mt-12 pb-8 px-4 text-center">
      <div className="max-w-2xl mx-auto border-t border-gray-100 dark:border-gray-800 pt-8">
        
        {/* Minimalist Branding - No Redundant Cat Icon */}
        <p className="text-gray-400 dark:text-gray-500 font-bold tracking-widest uppercase text-[10px] mb-2">
          Miaw Racun Official
        </p>
        
        <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
          {getMadeByText()} <Heart className="w-3 h-3 text-red-400 fill-current animate-pulse" /> {getByText()}
        </p>
        <p className="text-[10px] text-gray-300 mt-1">
          © {new Date().getFullYear()} Miaw Racun. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

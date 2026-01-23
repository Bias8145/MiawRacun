import React from 'react';
import { Heart } from 'lucide-react';
import { Language } from '../utils/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-8 mb-4">
      <div className="max-w-xs mx-auto">
          <div className="bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm rounded-full py-1.5 px-4 text-center border border-white/20 dark:border-gray-700 shadow-sm">
            <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                Made with <Heart className="w-2.5 h-2.5 text-red-400 fill-current" /> © {new Date().getFullYear()} MeowTree
            </p>
          </div>
      </div>
    </footer>
  );
};

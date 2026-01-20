import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ChevronDown, Check, Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '../utils/translations';
import { cn } from '../utils/helpers';

interface LanguageSelectorProps {
  currentLang: Language;
  onSelect: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[currentLang];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Removed Emoji Flags, using Text Badges
  const languages: { code: Language; label: string; badge: string }[] = [
    { code: 'id', label: t.langId, badge: 'ID' },
    { code: 'jv', label: t.langJv, badge: 'JV' },
    { code: 'su', label: t.langSu, badge: 'SU' },
    { code: 'en', label: t.langEn, badge: 'EN' },
  ];

  const currentLangLabel = languages.find(l => l.code === currentLang)?.label.split(' ')[1] || 'Indo';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 md:py-2.5 rounded-full bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-700 hover:border-cat-300 dark:hover:border-cat-700 transition-all shadow-sm hover:shadow-md active:scale-95 group"
      >
        <div className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded-full text-orange-500 group-hover:rotate-12 transition-transform">
          <Globe className="w-4 h-4" />
        </div>
        <span className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-200 hidden md:inline">
          {currentLangLabel}
        </span>
        <ChevronDown className={cn("w-3 h-3 text-gray-400 transition-transform duration-300", isOpen ? "rotate-180" : "")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-dark-surface rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
          >
            <div className="p-2 space-y-1">
              <div className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {t.langLabel}
              </div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onSelect(lang.code);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-colors",
                    currentLang === lang.code
                      ? "bg-cat-50 dark:bg-cat-900/20 text-cat-600 dark:text-cat-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] font-black bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-gray-500">{lang.badge}</span>
                    {lang.label.split(' ').slice(1).join(' ')}
                  </span>
                  {currentLang === lang.code && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, ShoppingBag, Tag, Edit2, Trash2, ShoppingCart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Link } from '../lib/supabase';
import { cn } from '../utils/helpers';

interface LinkCardProps {
  link: Link;
  isAdmin: boolean;
  onEdit: (link: Link) => void;
  onDelete: (id: string) => void;
  onTrackClick: (id: string) => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, isAdmin, onEdit, onDelete, onTrackClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onTrackClick(link.id);
    
    // Mini confetti for user engagement
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#0ea5e9', '#f472b6'],
      disableForReducedMotion: true,
      scalar: 0.8
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "bg-white dark:bg-dark-surface rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800",
        isExpanded ? "ring-2 ring-cat-300 dark:ring-cat-700" : ""
      )}
    >
      <div 
        onClick={handleCardClick}
        className="p-3 md:p-4 cursor-pointer relative"
      >
        <div className="flex items-center gap-3 md:gap-4">
          {/* Aesthetic Icon Box */}
          <div className={cn(
            "w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all shadow-sm",
            link.platform === 'Shopee' ? "bg-orange-50 text-orange-500" :
            link.platform === 'Tokopedia' ? "bg-green-50 text-green-500" :
            "bg-blue-50 text-blue-500"
          )}>
            <ShoppingBag className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-800 dark:text-white truncate text-[13px] md:text-[18px] leading-tight">
              {link.title}
            </h3>
            <div className="flex items-center gap-2 text-[11px] md:text-sm text-gray-500 dark:text-gray-400 mt-1.5">
              <span className="bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-medium">
                <Tag className="w-3 h-3" /> {link.category.replace(/ .*/, '')} {/* Show only text part */}
              </span>
              <span className="text-gray-300">•</span>
              <span className="font-medium">{link.platform}</span>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-gray-300 hover:text-cat-500 transition-colors"
          >
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-3 pb-3 md:px-4 md:pb-4 bg-gray-50/50 dark:bg-gray-800/20"
          >
            <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
              <div className="bg-white dark:bg-dark-surface p-3 rounded-xl mb-3 border border-gray-100 dark:border-gray-700">
                 <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  "{link.description || "Barang bagus nih, rekomendasi banget buat kamu! Cek detailnya langsung ya."}"
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex-1 bg-cat-500 hover:bg-cat-600 text-white font-bold text-xs md:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cat-500/20 active:scale-95"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Beli Sekarang
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                {isAdmin && (
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); onEdit(link); }}
                      className="p-3 bg-yellow-100 text-yellow-600 rounded-xl hover:bg-yellow-200 transition-colors"
                      title="Edit Link"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onDelete(link.id); }}
                      className="p-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors"
                      title="Hapus Link"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

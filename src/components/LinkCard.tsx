import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Heart, Edit2, Trash2, 
  ExternalLink, ShoppingBag, Store, PlayCircle, Layers,
  Flame, Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { toast } from 'react-hot-toast';
import { Link } from '../lib/supabase';
import { cn } from '../utils/helpers';
import { TRANSLATIONS, Language } from '../utils/translations';

interface LinkCardProps {
  link: Link;
  isAdmin: boolean;
  onEdit: (link: Link) => void;
  onDelete: (id: string) => void;
  onTrackClick: (id: string) => void;
  lang: Language;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({ 
  link, 
  isAdmin, 
  onEdit, 
  onDelete, 
  onTrackClick, 
  lang,
  isWishlisted,
  onToggleWishlist
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onTrackClick(link.id);
    
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#36b2fa', '#f43f5e', '#fbbf24'],
      disableForReducedMotion: true,
      scalar: 0.8
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(link.id);
    if (!isWishlisted) {
      toast.success(t.wishlistAdded, { icon: '🧺' });
    } else {
      toast(t.wishlistRemoved, { icon: '🍃' });
    }
  };

  // Platform Icons & Colors
  const getPlatformInfo = (platform: string) => {
    switch(platform) {
      case 'Shopee': return { icon: ShoppingBag, color: 'text-orange-500 bg-orange-50' };
      case 'Tokopedia': return { icon: Store, color: 'text-green-500 bg-green-50' };
      case 'Lazada': return { icon: Heart, color: 'text-blue-500 bg-blue-50' };
      case 'TikTok Shop': return { icon: PlayCircle, color: 'text-black bg-gray-100' };
      default: return { icon: Layers, color: 'text-purple-500 bg-purple-50' };
    }
  };

  const { icon: PlatformIcon, color: platformClass } = getPlatformInfo(link.platform);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.01 }}
      className={cn(
        "bg-white dark:bg-dark-surface rounded-[1.5rem] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-2 relative group",
        isExpanded ? "border-cat-300 dark:border-cat-700" : "border-gray-50 dark:border-gray-800"
      )}
    >
      {/* Main Clickable Area */}
      <div 
        onClick={handleCardClick}
        className="p-3 cursor-pointer relative z-10 flex items-center gap-3"
      >
        {/* Left: Platform Icon (Compact) */}
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", platformClass)}>
            <PlatformIcon className="w-5 h-5" />
        </div>

        {/* Center: Title & Badges */}
        <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-800 dark:text-white text-sm leading-tight mb-0.5 truncate pr-2">
                {link.title}
            </h3>
            <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-400">
                <span className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                    {link.category.replace(/ .*/, '')}
                </span>
                {link.clicks > 20 && (
                    <span className="text-red-400 flex items-center gap-0.5">
                        <Flame className="w-3 h-3 fill-current" /> {t.hotBadge}
                    </span>
                )}
            </div>
        </div>

        {/* Right: Expand Icon */}
        <div className="text-gray-300 group-hover:text-cat-400 transition-colors">
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isExpanded ? "rotate-180" : "")} />
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-cat-50/50 dark:bg-dark-surface2/30 border-t border-gray-100 dark:border-gray-800"
          >
            <div className="p-3 pt-2">
                {/* Description Bubble */}
                <div className="bg-white dark:bg-dark-surface p-2.5 rounded-2xl mb-3 border border-gray-100 dark:border-gray-700 shadow-sm text-center relative">
                    <p className="text-xs text-gray-600 dark:text-gray-300 italic leading-relaxed">
                        "{link.description || t.defaultDesc}"
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <button 
                        onClick={handleWishlist}
                        className={cn(
                            "p-2.5 rounded-2xl transition-all border-2 active:scale-95",
                            isWishlisted 
                                ? "bg-pink-50 border-pink-200 text-pink-500" 
                                : "bg-white dark:bg-dark-surface border-gray-100 dark:border-gray-700 text-gray-400 hover:border-pink-200 hover:text-pink-400"
                        )}
                    >
                        <Heart className={cn("w-4 h-4", isWishlisted ? "fill-current" : "")} />
                    </button>

                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        className="flex-1 bg-cat-500 hover:bg-cat-600 text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 border-b-4 border-cat-600 hover:border-cat-700 py-2.5"
                    >
                        {t.buyBtn} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>

                {/* Admin Actions */}
                {isAdmin && (
                    <div className="flex gap-2 justify-center pt-3 mt-2 border-t border-dashed border-gray-200 dark:border-gray-700">
                        <button
                            onClick={(e) => { e.stopPropagation(); onEdit(link); }}
                            className="flex items-center gap-1 px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors text-[10px] font-bold"
                        >
                            <Edit2 className="w-3 h-3" /> {t.editBtn}
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); onDelete(link.id); }}
                            className="flex items-center gap-1 px-2.5 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-[10px] font-bold"
                        >
                            <Trash2 className="w-3 h-3" /> {t.deleteBtn}
                        </button>
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-[10px] font-bold ml-auto">
                            <Eye className="w-3 h-3" /> {link.clicks}
                        </div>
                    </div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

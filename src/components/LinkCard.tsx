import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, ShoppingBag, Tag, Edit2, Trash2, ShoppingCart, Share2, Flame, Eye, Heart, Store, PlayCircle } from 'lucide-react';
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
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#0ea5e9', '#f472b6'],
      disableForReducedMotion: true,
      scalar: 0.8
    });
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareData = {
      title: `Miaw Racun: ${link.title}`,
      text: `Cek barang gemoy ini: ${link.title} 😻`,
      url: link.url
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success(t.saved); // Reuse saved message or create new share message
      } else {
        await navigator.clipboard.writeText(link.url);
        toast.success(t.copied);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(link.id);
    if (!isWishlisted) {
      toast.success(t.wishlistAdded, { icon: '💖' });
    } else {
      toast(t.wishlistRemoved, { icon: '💔' });
    }
  };

  // Helper for Platform Styles (GLOSSY PILL / JELLY BEAN STYLE)
  const getPlatformConfig = (platform: string) => {
    switch(platform) {
      case 'Shopee': 
        return {
          className: 'bg-orange-500 text-white shadow-orange-500/40',
          icon: ShoppingBag
        };
      case 'Tokopedia': 
        return {
          className: 'bg-green-500 text-white shadow-green-500/40',
          icon: Store
        };
      case 'Lazada': 
        return {
          className: 'bg-blue-600 text-white shadow-blue-600/40',
          icon: Heart
        };
      case 'TikTok Shop': 
        return {
          className: 'bg-black text-white shadow-gray-900/40',
          icon: PlayCircle
        };
      default: 
        return {
          className: 'bg-purple-500 text-white shadow-purple-500/40',
          icon: ExternalLink
        };
    }
  };

  const platformConfig = getPlatformConfig(link.platform);
  const PlatformIcon = platformConfig.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "bg-white dark:bg-dark-surface rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 group",
        isExpanded ? "ring-2 ring-cat-300 dark:ring-cat-700 shadow-cat-200/50" : ""
      )}
    >
      <div 
        onClick={handleCardClick}
        className="p-3 md:p-4 cursor-pointer relative"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className={cn(
            "w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all shadow-sm relative overflow-hidden",
            link.platform === 'Shopee' ? "bg-orange-50 text-orange-500" :
            link.platform === 'Tokopedia' ? "bg-green-50 text-green-500" :
            "bg-blue-50 text-blue-500"
          )}>
             {link.clicks > 10 && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-bl-lg font-bold z-10 flex items-center gap-0.5 animate-pulse">
                    <Flame className="w-2 h-2 fill-current" /> {t.hotBadge}
                </div>
             )}
            <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-800 dark:text-white truncate text-[13px] md:text-[18px] leading-tight group-hover:text-cat-600 dark:group-hover:text-cat-400 transition-colors">
              {link.title}
            </h3>
            <div className="flex items-center gap-2 text-[11px] md:text-sm text-gray-500 dark:text-gray-400 mt-2 flex-wrap">
              <span className="bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-lg flex items-center gap-1.5 font-medium">
                <Tag className="w-3 h-3" /> {link.category.replace(/ .*/, '')}
              </span>
              
              {/* Aesthetic Platform Badge - GLOSSY PILL STYLE */}
              <span className={cn(
                "px-3 py-1 rounded-full text-[10px] font-bold shadow-lg transform active:scale-95 transition-all flex items-center gap-1.5 tracking-wide relative overflow-hidden",
                platformConfig.className
              )}>
                {/* Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/30 to-transparent" />
                
                <PlatformIcon className="w-3 h-3 fill-white/20 relative z-10" />
                <span className="relative z-10">{link.platform}</span>
              </span>
              
              {isAdmin && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1 text-xs text-orange-500 font-bold bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded-md">
                        <Eye className="w-3 h-3" /> {link.clicks}
                    </span>
                  </>
              )}

              {!isAdmin && link.clicks > 20 && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1 text-xs text-red-400 font-bold italic">
                        <Flame className="w-3 h-3 fill-current" /> {t.hotBadge}
                    </span>
                  </>
              )}
            </div>
          </div>

          {/* Wishlist Button */}
          <button 
            onClick={handleWishlist}
            className={cn(
              "p-2 rounded-full transition-colors z-20",
              isWishlisted ? "text-pink-500 bg-pink-50 dark:bg-pink-900/20" : "text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
          >
            <Heart className={cn("w-5 h-5 md:w-6 md:h-6", isWishlisted ? "fill-current" : "")} />
          </button>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-gray-300 hover:text-cat-500 transition-colors bg-gray-50 dark:bg-gray-800 p-1.5 rounded-full"
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
              <div className="bg-white dark:bg-dark-surface p-3 rounded-xl mb-3 border border-gray-100 dark:border-gray-700 relative">
                 <div className="absolute -left-1 top-4 w-1 h-8 bg-cat-400 rounded-r-full"></div>
                 <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic pl-2">
                  "{link.description || t.defaultDesc}"
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex-1 bg-cat-500 hover:bg-cat-600 text-white font-bold text-xs md:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-cat-500/20 active:scale-95 hover:-translate-y-0.5"
                    >
                    <ShoppingCart className="w-4 h-4" />
                    {t.buyBtn}
                    <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>

                    <button
                        onClick={handleShare}
                        className="px-4 py-3 bg-white dark:bg-dark-surface border-2 border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active:scale-95 flex items-center justify-center"
                        title={t.shareBtn}
                    >
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>

                {isAdmin && (
                  <div className="flex gap-2 justify-end pt-2 border-t border-gray-100 dark:border-gray-800 border-dashed">
                    <span className="text-[10px] text-gray-400 self-center mr-auto">{t.adminControls}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); onEdit(link); }}
                      className="flex items-center gap-1 px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors text-xs font-bold"
                    >
                      <Edit2 className="w-3 h-3" /> {t.editBtn}
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onDelete(link.id); }}
                      className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-xs font-bold"
                    >
                      <Trash2 className="w-3 h-3" /> {t.deleteBtn}
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

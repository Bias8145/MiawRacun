import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Edit2, Trash2, 
  ExternalLink, ShoppingBag, Store, PlayCircle, Layers,
  Flame, Eye, HeartCrack, Share2, Pin, PinOff, PawPrint
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
  onShare: (link: Link) => void;
  onTogglePin?: (id: string, currentStatus: boolean) => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({ 
  link, 
  isAdmin, 
  onEdit, 
  onDelete, 
  onTrackClick, 
  lang,
  isWishlisted,
  onToggleWishlist,
  onShare,
  onTogglePin
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
      toast.success(t.wishlistAdded, { 
        icon: <Heart className="w-5 h-5 text-pink-500 fill-current" /> 
      });
    } else {
      toast(t.wishlistRemoved, { 
        icon: <HeartCrack className="w-5 h-5 text-gray-400" /> 
      });
    }
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShare(link);
  };

  const handlePinClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onTogglePin) {
        onTogglePin(link.id, link.is_pinned || false);
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
        isExpanded ? "border-cat-300 dark:border-cat-700" : "border-gray-50 dark:border-gray-800",
        // Pinned Styling: Rose Tint & Border
        link.is_pinned ? "border-rose-200 dark:border-rose-900/50 bg-rose-50/30 dark:bg-rose-900/10" : ""
      )}
    >
      {/* Pinned Indicator Badge - Sticker Style */}
      {link.is_pinned && (
        <div className="absolute top-0 right-0 z-20 pointer-events-none">
            <div className="bg-rose-400 text-white px-3 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1">
                <Pin className="w-3 h-3 fill-white" />
                <span className="text-[9px] font-black uppercase tracking-wider">{t.pinnedLabel}</span>
            </div>
        </div>
      )}

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
        <div className={cn(
            "flex-1 min-w-0 transition-all",
            // Add extra padding to the right if pinned to prevent overlap with the badge
            link.is_pinned ? "pr-20" : "pr-2"
        )}>
            <h3 className={cn(
                "font-bold text-gray-800 dark:text-white text-sm leading-tight mb-1 truncate",
                link.is_pinned ? "text-rose-600 dark:text-rose-400" : ""
            )}>
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

        {/* Right: Cute Expand Icon (Paw) */}
        {!link.is_pinned && ( // Only show expand icon here if NOT pinned (to avoid clutter), OR we can adjust layout
             <div className="shrink-0 text-cat-300 group-hover:text-cat-500 transition-colors">
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    isExpanded ? "bg-cat-100 text-cat-500 rotate-180" : "bg-gray-50 dark:bg-gray-800"
                )}>
                    <PawPrint className="w-4 h-4" />
                </div>
            </div>
        )}
        {/* If pinned, we might want to push the expand icon down or hide it in collapsed view if it conflicts, 
            but with pr-20 on title, we have space. Let's keep it consistent but maybe move it slightly.
            Actually, let's keep it simple: The badge is absolute top-right. 
            The expand icon is flex-end. 
            If pinned, the badge takes the top-right corner. 
            So the expand icon might overlap if we are not careful.
            Let's wrap the expand icon in a container that pushes it down if needed? 
            Or just rely on the padding.
            
            Better approach: If pinned, the badge is there. The expand icon should probably be visible.
            Let's just ensure the badge doesn't cover the expand icon.
        */}
         {link.is_pinned && (
             <div className="shrink-0 text-cat-300 group-hover:text-cat-500 transition-colors mt-8">
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    isExpanded ? "bg-rose-100 text-rose-500 rotate-180" : "bg-rose-50 dark:bg-rose-900/20"
                )}>
                    <PawPrint className="w-4 h-4" />
                </div>
            </div>
         )}
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
                        title={t.wishlistLabel}
                    >
                        <Heart className={cn("w-4 h-4", isWishlisted ? "fill-current" : "")} />
                    </button>

                    <button 
                        onClick={handleShareClick}
                        className="p-2.5 rounded-2xl transition-all border-2 active:scale-95 bg-white dark:bg-dark-surface border-gray-100 dark:border-gray-700 text-gray-400 hover:border-cat-200 hover:text-cat-500"
                        title={t.shareBtn}
                    >
                        <Share2 className="w-4 h-4" />
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
                            onClick={handlePinClick}
                            className={cn(
                                "flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors text-[10px] font-bold",
                                link.is_pinned 
                                    ? "bg-rose-100 text-rose-700 hover:bg-rose-200" 
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            )}
                        >
                            {link.is_pinned ? <PinOff className="w-3 h-3" /> : <Pin className="w-3 h-3" />}
                            {link.is_pinned ? t.unpinBtn : t.pinBtn}
                        </button>
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

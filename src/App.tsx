import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { 
  LogIn, LogOut, Moon, Sun, Settings, 
  Wand2, Loader2, 
  ArrowUp, Heart, Gem, Wallet, HeartCrack, Smile,
  ListFilter, CheckCircle2, LayoutGrid,
  ShoppingBag, Store, PlayCircle, ExternalLink, Layers,
  Flame, Clock, HeartHandshake, Plus, Cat, Image as ImageIcon, AlertCircle, Search,
  PawPrint, TreeDeciduous
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

import { supabase, Link } from './lib/supabase';
import { Greeting } from './components/Greeting';
import { LinkCard } from './components/LinkCard';
import { Modal } from './components/Modal';
import { AdminStats } from './components/AdminStats';
import { Footer } from './components/Footer';
import { LanguageSelector } from './components/LanguageSelector';
import { 
  cn, 
  CATEGORIES, 
  PLATFORMS, 
  getCategoryFromTitle, 
  getPlatformFromUrl,
  generateContentFromTitle
} from './utils/helpers';
import { TRANSLATIONS, Language } from './utils/translations';

function App() {
  // State
  const [links, setLinks] = useState<Link[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Initialize Theme from LocalStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('miawTheme');
    return savedTheme === 'dark';
  });

  // Initialize Language from LocalStorage
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('miawLang');
    return (saved as Language) || 'id';
  });

  const [wishlist, setWishlist] = useState<string[]>([]);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);
  
  const [mood, setMood] = useState<'all' | 'sultan' | 'bokek' | 'galau' | 'bucin'>('all');
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false); // Default collapsed

  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedPlatform, setSelectedPlatform] = useState('Semua Platform');
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('newest');

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState<{type: string, id?: string} | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const [password, setPassword] = useState('');
  const [linkForm, setLinkForm] = useState<Partial<Link>>({});
  const [isAutoFilling, setIsAutoFilling] = useState(false);
  const [previewImgError, setPreviewImgError] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    fetchLinks();
    const storedAdmin = localStorage.getItem('isAdmin');
    if (storedAdmin === 'true') setIsAdmin(true);

    const storedWishlist = localStorage.getItem('miawWishlist');
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist));

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save Language Preference
  useEffect(() => {
    localStorage.setItem('miawLang', lang);
  }, [lang]);

  // Save Theme Preference
  useEffect(() => {
    localStorage.setItem('miawTheme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('miawWishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    let result = [...links];

    if (showWishlistOnly) {
      result = result.filter(link => wishlist.includes(link.id));
    }

    if (mood !== 'all') {
      if (mood === 'sultan') {
        result = result.filter(link => 
          link.category.includes('Gadget') || 
          link.category.includes('Kamar') ||
          link.title.toLowerCase().includes('mahal') ||
          link.title.toLowerCase().includes('iphone')
        );
      } else if (mood === 'bokek') {
        result = result.filter(link => 
          link.category.includes('Jajanan') || 
          link.category.includes('Hobi') ||
          link.title.toLowerCase().includes('murah') ||
          link.platform === 'Shopee'
        );
      } else if (mood === 'galau') {
        result = result.filter(link => 
          link.category.includes('Jajanan') || 
          link.category.includes('Anabul') ||
          link.title.toLowerCase().includes('coklat')
        );
      } else if (mood === 'bucin') {
        result = result.filter(link => 
          link.category.includes('Kado') || 
          link.category.includes('OOTD') ||
          link.title.toLowerCase().includes('couple')
        );
      }
    }

    if (selectedCategory !== 'Semua') {
      result = result.filter(link => link.category.includes(selectedCategory) || selectedCategory.includes(link.category));
    }

    if (selectedPlatform !== 'Semua Platform') {
      result = result.filter(link => link.platform === selectedPlatform);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(link => 
        link.title.toLowerCase().includes(query) || 
        link.description?.toLowerCase().includes(query) ||
        link.platform.toLowerCase().includes(query)
      );
    }

    if (sortBy === 'popular') {
        result.sort((a, b) => b.clicks - a.clicks);
    } else {
        result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    setFilteredLinks(result);
  }, [links, searchQuery, selectedCategory, selectedPlatform, sortBy, showWishlistOnly, wishlist, mood]);

  // Auto-hide categories when searching
  useEffect(() => {
    if (searchQuery) {
      setIsCategoriesExpanded(false);
    }
  }, [searchQuery]);

  const fetchLinks = async () => {
    try {
      const { data, error } = await supabase
        .from('links')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLinks(data || []);
    } catch (error) {
      console.error('Error fetching links:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmModal({ type: 'login' });
  };

  const confirmLogin = () => {
    if (password === 'ichabias') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      setShowLoginModal(false);
      setPassword('');
      setShowConfirmModal(null);
      toast.success(t.welcomeBack);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0ea5e9', '#f472b6', '#fbbf24']
      });
    } else {
      toast.error(t.wrongPass);
      setShowConfirmModal(null);
    }
  };

  const handleLogout = () => {
    setShowConfirmModal({ type: 'logout' });
  };

  const confirmLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
    setShowConfirmModal(null);
    toast.success(t.bye);
  };

  const handleSaveLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmModal({ type: 'save_link' });
  };

  const confirmSaveLink = async () => {
    setIsSaving(true);
    try {
      if (!linkForm.title || !linkForm.url) {
          toast.error("Judul & Link wajib diisi meow!");
          setIsSaving(false);
          return;
      }

      const category = linkForm.category || getCategoryFromTitle(linkForm.title);
      const platform = linkForm.platform || getPlatformFromUrl(linkForm.url);

      const payload = {
        title: linkForm.title,
        url: linkForm.url,
        description: linkForm.description || '',
        image_url: linkForm.image_url || null,
        category,
        platform,
        clicks: linkForm.clicks || 0,
        is_active: true
      };

      if (linkForm.id) {
        const { error } = await supabase
          .from('links')
          .update(payload)
          .eq('id', linkForm.id);
        if (error) throw error;
        toast.success(t.updated);
      } else {
        const { error } = await supabase
          .from('links')
          .insert([payload]);
        if (error) throw error;
        toast.success(t.saved);
      }

      fetchLinks();
      setShowLinkModal(false);
      setLinkForm({});
      setShowConfirmModal(null);
    } catch (error: any) {
      console.error('Error saving link:', error);
      toast.error(`Gagal simpan meow: ${error.message}`);
      setShowConfirmModal(null);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = (id: string) => {
    setShowConfirmModal({ type: 'delete', id });
  };

  const confirmDelete = async () => {
    if (!showConfirmModal?.id) return;
    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from('links')
        .delete()
        .eq('id', showConfirmModal.id);
      
      if (error) throw error;
      
      setLinks(links.filter(l => l.id !== showConfirmModal.id));
      toast.success(t.deleted);
      setShowConfirmModal(null);
    } catch (error) {
      console.error('Error deleting:', error);
      toast.error('Gagal hapus meow');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleTrackClick = async (id: string) => {
    setLinks(prev => prev.map(l => l.id === id ? { ...l, clicks: l.clicks + 1 } : l));
    try {
      await supabase.rpc('increment_clicks', { row_id: id });
    } catch (err) {
      console.error("Tracking error", err);
    }
  };

  const handleToggleWishlist = (id: string) => {
    setWishlist(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleUrlBlur = () => {
    if (!linkForm.url) return;
    const platform = getPlatformFromUrl(linkForm.url);
    setLinkForm(prev => ({ ...prev, platform }));
  };

  const handleAutoContent = () => {
    if (!linkForm.title || linkForm.title.trim().length < 3) {
      toast.error("Isi nama barang dulu meow!", { icon: '😿' });
      return;
    }

    setIsAutoFilling(true);
    
    setTimeout(() => {
      const generated = generateContentFromTitle(linkForm.title!);
      
      if (generated) {
        setLinkForm(prev => ({
          ...prev,
          title: generated.title,
          description: generated.description,
          category: getCategoryFromTitle(generated.title)
        }));
        toast.success("Judul & Deskripsi berhasil disulap meow!", { icon: '✨' });
      }
      
      setIsAutoFilling(false);
    }, 800);
  };

  const openEditModal = (link: Link) => {
    setLinkForm(link);
    setPreviewImgError(false);
    setShowLinkModal(true);
  };

  const openAddModal = () => {
    setLinkForm({});
    setPreviewImgError(false);
    setShowLinkModal(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
      setMood('all');
      setSelectedPlatform('Semua Platform');
      setSortBy('newest');
      setShowFilterModal(false);
  };

  const totalClicks = links.reduce((acc, link) => acc + (link.clicks || 0), 0);

  const MOODS = [
    { id: 'all', label: t.moodAll, icon: LayoutGrid, color: 'bg-gray-100 text-gray-600 border-gray-200' },
    { id: 'sultan', label: t.moodSultan, icon: Gem, color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    { id: 'bokek', label: t.moodBokek, icon: Wallet, color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { id: 'galau', label: t.moodGalau, icon: HeartCrack, color: 'bg-slate-50 text-slate-600 border-slate-200' },
    { id: 'bucin', label: t.moodBucin, icon: HeartHandshake, color: 'bg-rose-50 text-rose-600 border-rose-200' },
  ];

  const getPlatformStyle = (p: string) => {
    switch(p) {
        case 'Shopee': return { icon: ShoppingBag, color: 'bg-orange-100 border-orange-200 text-orange-600' };
        case 'Tokopedia': return { icon: Store, color: 'bg-green-100 border-green-200 text-green-600' };
        case 'Lazada': return { icon: Heart, color: 'bg-blue-100 border-blue-200 text-blue-600' };
        case 'TikTok Shop': return { icon: PlayCircle, color: 'bg-gray-100 border-gray-200 text-gray-800' };
        case 'Semua Platform': return { icon: Layers, color: 'bg-cat-100 border-cat-200 text-cat-600' };
        default: return { icon: ExternalLink, color: 'bg-purple-100 border-purple-200 text-purple-600' };
    }
  };

  const activeFiltersCount = (mood !== 'all' ? 1 : 0) + (selectedPlatform !== 'Semua Platform' ? 1 : 0) + (sortBy !== 'newest' ? 1 : 0);

  // Helper to get active category object
  const activeCategory = CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-cat-50 dark:bg-dark-bg transition-colors duration-300 font-sans text-gray-800 dark:text-dark-text pb-12">
      <Toaster position="top-center" toastOptions={{
        style: {
          borderRadius: '50px',
          background: darkMode ? '#334155' : '#fff',
          color: darkMode ? '#fff' : '#333',
          fontFamily: 'Fredoka, sans-serif',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          padding: '8px 16px',
          fontSize: '14px',
        }
      }} />

      {/* HEADER & FLOATING CONTROLS - REFACTORED FOR COMPACTNESS */}
      <nav className="sticky top-2 z-40 px-4 mb-4">
        <div className="max-w-xl mx-auto flex justify-between items-center gap-2">
          {/* LOGO - COMPACT & RESPONSIVE */}
          <div className="bg-white dark:bg-dark-surface rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 px-3 py-1.5 flex items-center gap-x-2 transition-all hover:shadow-md cursor-default group relative overflow-hidden shrink min-w-0">
            {/* Paw Icon: Compact size */}
            <PawPrint 
                className="w-6 h-6 text-pink-400 stroke-[2.5px] fill-transparent -rotate-12 shrink-0" 
            />
            
            <div className="flex flex-col justify-center relative z-10 min-w-0">
                <div className="flex items-baseline">
                    <h1 className="font-black text-lg tracking-tighter leading-none flex items-baseline truncate">
                        <span className="text-cat-400">Meow</span>
                        <span className="text-pink-400">Tree</span>
                        {/* Tree Icon: Inline */}
                        <TreeDeciduous className="w-4 h-4 text-emerald-500 fill-emerald-100 dark:fill-emerald-900/30 stroke-[2.5px] ml-0.5 self-center transform translate-y-0.5 shrink-0" />
                    </h1>
                </div>
                <span className="text-[8px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none mt-0.5 truncate">
                    {t.appTagline}
                </span>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="bg-white dark:bg-dark-surface rounded-full shadow-sm border border-gray-100 dark:border-gray-700 p-1 flex items-center gap-1 transition-all shrink-0">
            <LanguageSelector currentLang={lang} onSelect={setLang} />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-cat-50 dark:bg-dark-surface2 text-cat-500 dark:text-cat-300 hover:bg-cat-100 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            {isAdmin ? (
              <div className="flex items-center gap-1 pl-1 border-l border-gray-100 dark:border-gray-700">
                <button
                  onClick={openAddModal}
                  className="bg-cat-500 hover:bg-cat-600 text-white p-2 rounded-full shadow-sm active:scale-95 transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-full text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="p-2 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Settings className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-xl mx-auto px-4">
        <Greeting lang={lang} />

        {isAdmin && (
            <AdminStats totalLinks={links.length} totalClicks={totalClicks} />
        )}

        <div className="space-y-4 mb-6">
          {/* SEARCH BAR & FILTER TOGGLE */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-cat-300 group-focus-within:text-cat-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-14 py-3 bg-white dark:bg-dark-surface rounded-full border-2 border-transparent focus:border-cat-200 dark:focus:border-cat-800 shadow-sm outline-none text-gray-700 dark:text-gray-200 font-medium transition-all placeholder-gray-300 text-sm"
            />
            <div className="absolute inset-y-0 right-1.5 flex items-center">
                 <button 
                    onClick={() => setShowFilterModal(true)}
                    className={cn(
                        "p-2 rounded-full transition-all active:scale-95",
                        activeFiltersCount > 0 
                            ? "bg-cat-500 text-white shadow-sm" 
                            : "bg-gray-100 dark:bg-dark-surface2 text-gray-400 hover:bg-gray-200"
                    )}
                >
                    <ListFilter className="w-4 h-4" />
                </button>
            </div>
          </div>

          {/* CUTE CATEGORY SECTION - REFINED */}
          {!searchQuery && (
            <div className="bg-white dark:bg-dark-surface rounded-[2rem] p-3 border border-cat-50 dark:border-gray-800 shadow-sm transition-all duration-300">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 px-1">
                   <div className="flex items-center gap-2">
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.categoryTitle}</span>
                       <AnimatePresence mode="wait">
                         <motion.span
                           key={activeCategory?.id || 'default'}
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.9 }}
                           className={cn(
                             "text-xs font-black px-3 py-1 rounded-full truncate max-w-[140px] transition-colors",
                             activeCategory 
                               ? cn(activeCategory.activeBg, "text-white shadow-sm") // Solid vibrant badge
                               : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                           )}
                         >
                           {activeCategory?.label || selectedCategory}
                         </motion.span>
                       </AnimatePresence>
                   </div>
                   
                   <button 
                      onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all active:scale-95",
                        isCategoriesExpanded 
                          ? "bg-pink-100 text-pink-500" 
                          : "bg-cat-100 text-cat-500"
                      )}
                   >
                      {isCategoriesExpanded ? 'Tutup' : 'Buka'}
                      <PawPrint className={cn("w-3 h-3 transition-transform", isCategoriesExpanded ? "rotate-180" : "")} />
                   </button>
                </div>

                {/* Content Area - Smooth Height Transition */}
                <motion.div 
                  layout
                  className="relative overflow-hidden"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {!isCategoriesExpanded ? (
                      /* Collapsed Preview (Horizontal Scroll) */
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1 px-1"
                      >
                        {CATEGORIES.slice(0, 6).map((cat) => {
                           const Icon = cat.icon;
                           const isSelected = selectedCategory === cat.id;
                           return (
                             <button 
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={cn(
                                  "w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300", 
                                  isSelected 
                                    ? cn(cat.activeBg, "text-white shadow-md scale-110") // Solid vibrant bg, white icon
                                    : cn(cat.bg, cat.color, "hover:opacity-80 active:scale-95")
                                )}
                                title={cat.label}
                             >
                                <Icon className="w-5 h-5" />
                             </button>
                           )
                        })}
                        <button 
                          onClick={() => setIsCategoriesExpanded(true)}
                          className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 text-[10px] font-bold shrink-0 hover:bg-gray-100 transition-colors"
                        >
                          +{CATEGORIES.length - 6}
                        </button>
                      </motion.div>
                    ) : (
                      /* Expanded Grid (3 Columns) */
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-3 gap-2 pt-1 pb-1"
                      >
                          {CATEGORIES.map((cat) => {
                              const Icon = cat.icon;
                              const isSelected = selectedCategory === cat.id;
                              
                              return (
                                  <button
                                      key={cat.id}
                                      onClick={() => { setSelectedCategory(cat.id); setIsCategoriesExpanded(false); }}
                                      className={cn(
                                          "px-2 py-3 rounded-2xl text-[10px] font-bold transition-all flex flex-col items-center gap-2 text-center relative overflow-hidden",
                                          isSelected 
                                            ? cn(cat.activeBg, "text-white shadow-md") // Solid vibrant bg when selected in grid too
                                            : "bg-gray-50 dark:bg-dark-surface2/30 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
                                      )}
                                  >
                                      <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                                        isSelected 
                                            ? "bg-white/20 text-white" // Semi-transparent white bg for icon
                                            : cn("bg-white dark:bg-dark-surface", cat.color)
                                      )}>
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <span className="truncate w-full z-10 leading-tight px-1">
                                        {cat.label}
                                      </span>
                                  </button>
                              );
                          })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
            </div>
          )}

          {/* SORT & WISHLIST BAR */}
          {!searchQuery && (
              <div className="flex gap-2">
                  <div className="flex-1 bg-white dark:bg-dark-surface p-1 rounded-full shadow-sm border border-cat-50 dark:border-gray-800 flex">
                      <button
                          onClick={() => setSortBy('newest')}
                          className={cn(
                              "flex-1 py-2 rounded-full text-[10px] font-bold transition-all flex items-center justify-center gap-1",
                              sortBy === 'newest' ? "bg-cat-100 text-cat-600 dark:bg-cat-900/30 dark:text-cat-400" : "text-gray-400"
                          )}
                      >
                          <Clock className="w-3 h-3" /> {t.sortNewest}
                      </button>
                      <button
                          onClick={() => setSortBy('popular')}
                          className={cn(
                              "flex-1 py-2 rounded-full text-[10px] font-bold transition-all flex items-center justify-center gap-1",
                              sortBy === 'popular' ? "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400" : "text-gray-400"
                          )}
                      >
                          <Flame className="w-3 h-3" /> {t.sortPopular}
                      </button>
                  </div>
                  
                  <button 
                      onClick={() => setShowWishlistOnly(!showWishlistOnly)}
                      className={cn(
                          "px-4 rounded-full text-[10px] font-bold transition-all border-2 flex items-center gap-1.5 shrink-0",
                          showWishlistOnly 
                              ? "bg-pink-500 border-pink-500 text-white shadow-sm" 
                              : "bg-white dark:bg-dark-surface border-transparent text-gray-400 hover:border-pink-200"
                      )}
                  >
                      <Heart className={cn("w-3.5 h-3.5", showWishlistOnly ? "fill-white" : "")} />
                      {t.wishlistLabel}
                  </button>
              </div>
          )}
        </div>

        {/* Link Cards List */}
        <div className="space-y-3">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-4 border-cat-200 border-t-cat-500 rounded-full mx-auto mb-3" />
              <p className="text-gray-400 animate-pulse text-xs font-bold">{t.loadingBtn}</p>
            </div>
          ) : filteredLinks.length > 0 ? (
            filteredLinks.map((link) => (
              <LinkCard
                key={link.id}
                link={link}
                isAdmin={isAdmin}
                onEdit={openEditModal}
                onDelete={handleDelete}
                onTrackClick={handleTrackClick}
                lang={lang}
                isWishlisted={wishlist.includes(link.id)}
                onToggleWishlist={handleToggleWishlist}
              />
            ))
          ) : (
            <div className="text-center py-12 bg-white/50 dark:bg-dark-surface/50 rounded-[2rem] border-2 border-dashed border-gray-300 dark:border-gray-700">
              <div className="flex justify-center mb-2">
                 <Cat className="w-10 h-10 text-gray-300" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-bold text-sm">{t.emptyState}</p>
              <p className="text-xs text-gray-400 mt-0.5">{showWishlistOnly ? t.wishlistEmpty : t.emptyStateSub}</p>
            </div>
          )}
        </div>
      </main>

      <Footer lang={lang} />

      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-4 right-4 p-2.5 bg-cat-500 text-white rounded-full shadow-lg shadow-cat-500/30 transition-all duration-300 hover:bg-cat-600 hover:-translate-y-1 z-30",
          showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
        )}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* FILTER MODAL */}
      <Modal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        title={t.filterBtn}
      >
        <div className="space-y-5">
            <div>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3 h-3" /> {t.platLabel}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                    {PLATFORMS.map((platform) => {
                        const style = getPlatformStyle(platform);
                        const Icon = style.icon;
                        const isSelected = selectedPlatform === platform;
                        
                        return (
                            <button
                                key={platform}
                                onClick={() => setSelectedPlatform(platform)}
                                className={cn(
                                    "flex items-center gap-2 px-3 py-2.5 rounded-2xl text-xs font-bold transition-all border-2",
                                    isSelected
                                        ? cn(style.color, "border-opacity-100 bg-opacity-100") 
                                        : "bg-white dark:bg-dark-surface text-gray-500 border-gray-100 dark:border-gray-700 hover:border-gray-200"
                                )}
                            >
                                <Icon className={cn("w-3.5 h-3.5", isSelected ? "text-current" : "text-gray-400")} />
                                <span className="truncate">{platform}</span>
                                {isSelected && <CheckCircle2 className="w-3 h-3 ml-auto text-current" />}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Smile className="w-3 h-3" /> {t.moodTitle}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                    {MOODS.map((m) => {
                        const Icon = m.icon;
                        const isActive = mood === m.id;
                        return (
                            <button
                                key={m.id}
                                onClick={() => setMood(m.id as any)}
                                className={cn(
                                    "flex items-center gap-2 px-3 py-2.5 rounded-2xl text-xs font-bold transition-all border-2",
                                    isActive
                                        ? cn(m.color, "border-opacity-100 bg-opacity-100")
                                        : "bg-white dark:bg-dark-surface text-gray-500 border-gray-100 dark:border-gray-700 hover:border-gray-200"
                                )}
                            >
                                <Icon className={cn("w-3.5 h-3.5", isActive ? "text-current" : "text-gray-400")} />
                                {m.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <button
                onClick={resetFilters}
                className="w-full py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-500 font-bold text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                {t.resetBtn}
            </button>
        </div>
      </Modal>

      {/* Login Modal */}
      <Modal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title={t.loginTitle}
      >
        <form onSubmit={handleLogin} className="space-y-3">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-2xl text-xs text-blue-600 dark:text-blue-300 mb-3 flex gap-2">
            <LogIn className="w-4 h-4 shrink-0" />
            {t.loginDesc}
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">{t.passwordLabel}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-cat-500 outline-none transition-all text-sm"
              placeholder={t.passwordPlaceholder}
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cat-500 hover:bg-cat-600 text-white font-bold py-3 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95 text-sm"
          >
            <LogIn className="w-4 h-4" /> {t.loginBtn}
          </button>
        </form>
      </Modal>

      {/* Add/Edit Link Modal */}
      <Modal
        isOpen={showLinkModal}
        onClose={() => setShowLinkModal(false)}
        title={linkForm.id ? t.editTitle : t.addTitle}
      >
        <form onSubmit={handleSaveLink} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
              {t.urlLabel}
            </label>
            <input
              type="url"
              value={linkForm.url || ''}
              onChange={(e) => setLinkForm({...linkForm, url: e.target.value})}
              onBlur={handleUrlBlur}
              className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none text-sm"
              placeholder={t.urlPlaceholder}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
              {t.titleLabel}
              {isAutoFilling && <span className="ml-2 text-cat-500 text-[10px] animate-pulse flex items-center gap-1 inline-flex"><Wand2 className="w-3 h-3"/> Lagi mikir meow...</span>}
            </label>
            <div className="relative">
              <input
                type="text"
                value={linkForm.title || ''}
                onChange={(e) => setLinkForm({...linkForm, title: e.target.value})}
                className="w-full pl-4 pr-10 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none text-sm"
                placeholder={t.titlePlaceholder}
                required
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                <button 
                  type="button"
                  onClick={handleAutoContent}
                  disabled={isAutoFilling}
                  className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors disabled:opacity-50"
                  title="Auto Generate"
                >
                  <Wand2 className={cn("w-4 h-4", isAutoFilling ? "text-cat-500 animate-spin" : "")} />
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">{t.descLabel}</label>
            <textarea
              value={linkForm.description || ''}
              onChange={(e) => setLinkForm({...linkForm, description: e.target.value})}
              className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none h-20 resize-none text-sm"
              placeholder={t.descPlaceholder}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-2">
              <ImageIcon className="w-3 h-3" /> {t.imgLabel}
            </label>
            <input
              type="url"
              value={linkForm.image_url || ''}
              onChange={(e) => {
                  setLinkForm({...linkForm, image_url: e.target.value});
                  setPreviewImgError(false);
              }}
              className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none text-sm"
              placeholder={t.imgPlaceholder}
            />
            {linkForm.image_url && (
              <div className="mt-2 relative w-full h-24 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
                {previewImgError ? (
                    <div className="text-gray-400 flex flex-col items-center">
                        <AlertCircle className="w-5 h-5 mb-1" />
                        <span className="text-[8px]">Error Meow</span>
                    </div>
                ) : (
                    <img 
                        src={linkForm.image_url} 
                        alt="Preview" 
                        onError={() => setPreviewImgError(true)}
                        className="w-full h-full object-cover" 
                    />
                )}
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">{t.catLabel}</label>
              <select
                value={linkForm.category || ''}
                onChange={(e) => setLinkForm({...linkForm, category: e.target.value})}
                className="w-full px-3 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none text-xs"
              >
                <option value="">{t.autoOption}</option>
                {CATEGORIES.filter(c => c.id !== 'Semua').map(c => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">{t.platLabel}</label>
              <select
                value={linkForm.platform || ''}
                onChange={(e) => setLinkForm({...linkForm, platform: e.target.value})}
                className="w-full px-3 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none text-xs"
              >
                 <option value="">{t.autoOption}</option>
                 {PLATFORMS.filter(p => p !== 'Semua Platform').map(p => (
                   <option key={p} value={p}>{p}</option>
                 ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-cat-500 hover:bg-cat-600 text-white font-bold py-3 rounded-2xl transition-all shadow-sm mt-2 active:scale-95 text-sm"
          >
            {linkForm.id ? t.updateBtn : t.saveBtn}
          </button>
        </form>
      </Modal>

      {/* Confirmation Modal - FIXED: No Bouncing, No Shape */}
      <Modal
        isOpen={!!showConfirmModal}
        onClose={() => !isSaving && !isDeleting && setShowConfirmModal(null)}
        title={t.confirmTitle}
        zIndex={60}
        isConfirmation={true}
      >
        <div className="text-center pt-4">
          {/* Simple, Static Icon */}
          <div className="flex justify-center mb-4">
            <Cat className="w-16 h-16 text-cat-500 dark:text-cat-400" />
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm font-medium leading-relaxed px-4">
            {showConfirmModal?.type === 'login' && t.confirmLogin}
            {showConfirmModal?.type === 'logout' && t.confirmLogout}
            {showConfirmModal?.type === 'delete' && t.confirmDelete}
            {showConfirmModal?.type === 'save_link' && t.confirmSave}
          </p>
          
          <div className="flex gap-2">
            <button
              onClick={() => setShowConfirmModal(null)}
              disabled={isSaving || isDeleting}
              className="flex-1 px-4 py-3 rounded-2xl border-2 border-gray-100 dark:border-gray-700 font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 text-sm"
            >
              {t.cancelBtn}
            </button>
            <button
              onClick={() => {
                if (showConfirmModal?.type === 'login') confirmLogin();
                if (showConfirmModal?.type === 'logout') confirmLogout();
                if (showConfirmModal?.type === 'delete') confirmDelete();
                if (showConfirmModal?.type === 'save_link') confirmSaveLink();
              }}
              disabled={isSaving || isDeleting}
              className="flex-1 px-4 py-3 rounded-2xl bg-cat-500 text-white font-bold hover:bg-cat-600 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
            >
              {(isSaving || isDeleting) ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>...</span>
                </>
              ) : (
                t.confirmBtn
              )}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;

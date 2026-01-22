import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { 
  LogIn, LogOut, Moon, Sun, Settings, 
  Wand2, Sparkles, Loader2, ArrowUpDown, Dices, 
  ArrowUp, Heart, Gem, Wallet, HeartCrack, Smile,
  ListFilter, CheckCircle2, PawPrint, LayoutGrid, ChevronDown, ChevronUp,
  ShoppingBag, ChevronRight, Ticket, Store, PlayCircle, ExternalLink, Layers,
  Flame, Clock, HeartHandshake, Plus, Cat, Image as ImageIcon, AlertCircle
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
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Initialize Language from LocalStorage
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('miawLang');
    return (saved as Language) || 'id';
  });

  const [wishlist, setWishlist] = useState<string[]>([]);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);
  
  const [mood, setMood] = useState<'all' | 'sultan' | 'bokek' | 'galau' | 'bucin'>('all');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

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
  const [previewImgError, setPreviewImgError] = useState(false); // Track preview error

  // Random Gacha CTA State
  const [gachaCta, setGachaCta] = useState('');

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

  // Update Gacha CTA when language changes
  useEffect(() => {
    const ctas = t.gachaCta;
    setGachaCta(ctas[Math.floor(Math.random() * ctas.length)]);
  }, [lang, t.gachaCta]);

  // Save Language Preference
  useEffect(() => {
    localStorage.setItem('miawLang', lang);
  }, [lang]);

  useEffect(() => {
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
      setIsCategoriesOpen(false);
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
          toast.error("Judul & Link wajib diisi!");
          setIsSaving(false);
          return;
      }

      const category = linkForm.category || getCategoryFromTitle(linkForm.title);
      const platform = linkForm.platform || getPlatformFromUrl(linkForm.url);

      const payload = {
        title: linkForm.title,
        url: linkForm.url,
        description: linkForm.description || '',
        image_url: linkForm.image_url || null, // Added image_url
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
      toast.error(`Gagal simpan: ${error.message}`);
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
      toast.error('Gagal hapus');
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
      toast.error("Isi nama barang dulu miaw!", { icon: '😿' });
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
        toast.success("Judul & Deskripsi berhasil disulap!", { icon: '✨' });
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

  const handleGacha = () => {
      if (links.length === 0) return;
      const randomLink = links[Math.floor(Math.random() * links.length)];
      setSearchQuery(randomLink.title);
      
      const toasts = t.gachaToasts;
      const randomMsg = toasts[Math.floor(Math.random() * toasts.length)];
      
      toast.success(randomMsg, { icon: '🎲' });
      window.scrollTo({ top: 400, behavior: 'smooth' });
      
      const ctas = t.gachaCta;
      setGachaCta(ctas[Math.floor(Math.random() * ctas.length)]);
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

  return (
    <div className="min-h-screen bg-cat-50 dark:bg-dark-bg transition-colors duration-300 font-sans text-gray-800 dark:text-gray-200 pb-20">
      <Toaster position="top-center" toastOptions={{
        style: {
          borderRadius: '20px',
          background: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#333',
          fontFamily: 'Nunito, sans-serif'
        }
      }} />

      {/* Navbar */}
      <nav className="sticky top-0 z-30 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 px-4 py-3 md:py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="relative transform transition-transform group-hover:scale-110 duration-300">
              <div className="bg-cat-100 dark:bg-cat-900/30 p-2 rounded-xl">
                 <PawPrint className="w-5 h-5 md:w-6 md:h-6 text-cat-500" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl md:text-2xl tracking-tighter text-cat-500 drop-shadow-sm group-hover:text-cat-600 transition-colors">
                Miaw<span className="text-gray-800 dark:text-white">Racun</span>
              </span>
              <span className="text-[9px] md:text-[10px] font-bold text-gray-400 tracking-widest uppercase ml-0.5">
                {lang === 'jv' ? 'Pusat Barang Sae' : 'Pusat Barang Gemoy'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSelector currentLang={lang} onSelect={setLang} />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 md:p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {isAdmin ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={openAddModal}
                  className="flex items-center gap-1 bg-cat-500 hover:bg-cat-600 text-white px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg shadow-cat-500/30 active:scale-95"
                >
                  <Plus className="w-4 h-4" /> <span className="hidden md:inline">{t.addBtn}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 md:p-2.5 rounded-full hover:bg-red-100 text-red-500 transition-colors"
                  title={t.logoutBtn}
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="p-2 md:p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 transition-colors"
                title="Login"
              >
                <Settings className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-6 md:py-8 min-h-[80vh]">
        <Greeting lang={lang} />

        {isAdmin && (
            <AdminStats totalLinks={links.length} totalClicks={totalClicks} />
        )}

        <div className="mb-8 space-y-6">
          {/* SEARCH BAR */}
          <div className="relative pt-3">
             <div className="absolute top-0 left-6 flex gap-12 pointer-events-none z-0">
                <div className="w-8 h-6 bg-white dark:bg-dark-surface rounded-t-full transform -rotate-12 border-t border-l border-gray-100 dark:border-gray-700 shadow-sm" />
                <div className="w-8 h-6 bg-white dark:bg-dark-surface rounded-t-full transform rotate-12 border-t border-r border-gray-100 dark:border-gray-700 shadow-sm" />
             </div>

            <div className="relative z-10 flex items-center bg-white dark:bg-dark-surface rounded-3xl border-2 border-transparent focus-within:border-cat-300 dark:focus-within:border-cat-700 shadow-sm focus-within:shadow-lg focus-within:shadow-cat-500/10 transition-all">
                <div className="pl-5 pr-3 text-cat-400">
                    <PawPrint className="w-5 h-5 transform -rotate-12" />
                </div>
                <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3.5 md:py-4 bg-transparent outline-none text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 placeholder-gray-400"
                />
                <div className="pr-2 pl-2 border-l border-gray-100 dark:border-gray-700 h-8 flex items-center">
                    <button 
                        onClick={() => setShowFilterModal(true)}
                        className={cn(
                            "h-9 px-3 rounded-xl transition-all flex items-center gap-2 font-bold text-xs relative active:scale-95",
                            activeFiltersCount > 0 
                                ? "bg-cat-500 text-white shadow-md shadow-cat-500/20" 
                                : "bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                        )}
                    >
                        <ListFilter className="w-4 h-4" />
                        <span className="hidden sm:inline">{t.filterBtn}</span>
                        {activeFiltersCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] flex items-center justify-center rounded-full shadow-sm border border-white dark:border-dark-surface">
                                {activeFiltersCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
          </div>

          {/* COLLAPSIBLE CATEGORIES */}
          {!searchQuery && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 bg-white dark:bg-dark-surface rounded-3xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
              <div 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex justify-between items-center cursor-pointer select-none group"
              >
                <div className="flex items-center gap-3">
                    <h3 className="text-sm font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <LayoutGrid className="w-4 h-4 text-cat-500"/> 
                        {t.categoryTitle}
                    </h3>
                    
                    {!isCategoriesOpen && (
                        <div className="flex items-center -space-x-2 opacity-60 group-hover:opacity-100 transition-opacity">
                            {CATEGORIES.slice(1, 5).map((cat) => {
                                const Icon = cat.icon;
                                return (
                                    <div key={cat.id} className={cn("w-7 h-7 rounded-full border-2 border-white dark:border-dark-surface flex items-center justify-center", cat.color)}>
                                        <Icon className="w-3.5 h-3.5 text-current" />
                                    </div>
                                );
                            })}
                             <div className="w-7 h-7 rounded-full border-2 border-white dark:border-dark-surface flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-[9px] font-bold text-gray-500">
                                +4
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-1.5 rounded-full text-gray-400 group-hover:bg-cat-100 group-hover:text-cat-500 transition-colors">
                    {isCategoriesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              <AnimatePresence>
                {isCategoriesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 pt-4">
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = selectedCategory === cat.id;
                        
                        return (
                          <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className="flex flex-col items-center gap-2 group"
                          >
                            <div className={cn(
                              "w-12 h-12 md:w-14 md:h-14 rounded-[18px] flex items-center justify-center transition-all duration-300 shadow-sm border-[1.5px]",
                              isSelected 
                                ? "bg-cat-500 text-white shadow-cat-500/40 scale-105 border-cat-500 rotate-3" 
                                : "bg-gray-50 dark:bg-dark-surface2 border-transparent hover:border-cat-200 hover:scale-105",
                              !isSelected && cat.color.replace('bg-', 'text-')
                            )}>
                              <Icon className={cn("w-5 h-5 md:w-6 md:h-6", isSelected ? "text-white" : "")} />
                            </div>
                            <span className={cn(
                              "text-[9px] md:text-[10px] font-bold text-center leading-tight max-w-[60px]",
                              isSelected ? "text-cat-600 dark:text-cat-400" : "text-gray-400"
                            )}>
                              {cat.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* GACHA & WISHLIST ROW */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex gap-3 h-[72px]"
        >
            <button 
                onClick={() => setShowWishlistOnly(!showWishlistOnly)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-3 md:px-4 rounded-2xl font-bold text-[10px] transition-all active:scale-95 border-b-4 relative overflow-hidden group min-w-[70px] md:min-w-[76px]",
                  showWishlistOnly 
                    ? "bg-pink-50 text-pink-600 border-pink-300" 
                    : "bg-white dark:bg-dark-surface text-gray-500 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
            >
                <Heart className={cn("w-6 h-6", showWishlistOnly ? "fill-pink-500 text-pink-500 animate-bounce" : "text-gray-300 group-hover:text-pink-400")} />
                <span>{t.wishlistLabel}</span>
            </button>

            <button
                onClick={handleGacha}
                className="flex-1 relative group active:scale-[0.98] transition-transform min-w-0"
            >
                <div className="w-full h-full bg-indigo-500 rounded-2xl flex items-center p-1 relative overflow-hidden shadow-lg shadow-indigo-200 dark:shadow-none">
                    <div className="w-full h-full border-2 border-dashed border-white/30 rounded-xl flex items-center relative">
                        <div className="w-14 md:w-16 h-full flex items-center justify-center border-r-2 border-dashed border-white/30 relative shrink-0">
                            <Dices className="text-white w-6 h-6 md:w-7 md:h-7 group-hover:rotate-180 transition-transform duration-500" />
                            <div className="absolute -top-3 -right-2.5 w-5 h-5 bg-cat-50 dark:bg-dark-bg rounded-full z-10" />
                            <div className="absolute -bottom-3 -right-2.5 w-5 h-5 bg-cat-50 dark:bg-dark-bg rounded-full z-10" />
                        </div>
                        <div className="flex-1 px-3 md:px-4 flex flex-col justify-center text-left overflow-hidden">
                            <div className="flex items-center gap-1 mb-0.5">
                                <Ticket className="w-3 h-3 text-indigo-200 shrink-0" />
                                <span className="text-[8px] md:text-[9px] font-black tracking-widest text-indigo-200 uppercase truncate">{t.gachaTicketLabel}</span>
                            </div>
                            <p className="text-xs md:text-sm font-bold text-white italic truncate pr-2">
                                "{gachaCta}"
                            </p>
                        </div>
                        <div className="pr-3 md:pr-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all hidden sm:block">
                             <ChevronRight className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>
            </button>
        </motion.div>

        {/* Link Cards List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-10 h-10 border-4 border-cat-200 border-t-cat-500 rounded-full mx-auto mb-4" />
              <p className="text-gray-400 animate-pulse font-medium">{t.loadingBtn}</p>
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
            <div className="text-center py-16 bg-white/50 dark:bg-dark-surface/50 rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-700">
              <div className="flex justify-center mb-3">
                 <Cat className="w-12 h-12 text-gray-300" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{t.emptyState}</p>
              <p className="text-sm text-gray-400 mt-1">{showWishlistOnly ? t.wishlistEmpty : t.emptyStateSub}</p>
            </div>
          )}
        </div>
      </main>

      <Footer lang={lang} />

      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 p-3 bg-cat-500 text-white rounded-full shadow-lg shadow-cat-500/30 transition-all duration-300 hover:bg-cat-600 hover:-translate-y-1 z-40",
          showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
        )}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* FILTER MODAL */}
      <Modal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        title="Control Panel Babu"
      >
        <div className="space-y-6">
            <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ArrowUpDown className="w-3 h-3" /> Urutkan
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setSortBy('newest')}
                        className={cn(
                            "px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all flex items-center justify-center gap-2",
                            sortBy === 'newest' 
                                ? "border-cat-500 bg-cat-50 text-cat-600" 
                                : "border-gray-100 text-gray-500 hover:border-cat-200"
                        )}
                    >
                        <Clock className="w-4 h-4" />
                        {t.sortNewest}
                    </button>
                    <button
                        onClick={() => setSortBy('popular')}
                        className={cn(
                            "px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all flex items-center justify-center gap-2",
                            sortBy === 'popular' 
                                ? "border-purple-500 bg-purple-50 text-purple-600" 
                                : "border-gray-100 text-gray-500 hover:border-purple-200"
                        )}
                    >
                        <Flame className="w-4 h-4" />
                        {t.sortPopular}
                    </button>
                </div>
            </div>

            <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
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
                                    "flex items-center gap-2 px-3 py-3 rounded-xl text-xs font-bold transition-all border-2",
                                    isSelected
                                        ? cn(style.color, "border-opacity-100 bg-opacity-100") 
                                        : "bg-white dark:bg-dark-surface text-gray-500 border-gray-100 dark:border-gray-700 hover:border-gray-200"
                                )}
                            >
                                <Icon className={cn("w-3.5 h-3.5", isSelected ? "text-current" : "text-gray-400")} />
                                <span>{platform}</span>
                                {isSelected && <CheckCircle2 className="w-3 h-3 ml-auto text-current" />}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
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
                                    "flex items-center gap-2 px-3 py-3 rounded-xl text-xs font-bold transition-all border-2",
                                    isActive
                                        ? cn(m.color, "border-opacity-100 bg-opacity-100")
                                        : "bg-white dark:bg-dark-surface text-gray-500 border-gray-100 dark:border-gray-700 hover:border-gray-200"
                                )}
                            >
                                <Icon className={cn("w-4 h-4", isActive ? "text-current" : "text-gray-400")} />
                                {m.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <button
                onClick={resetFilters}
                className="w-full py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 font-bold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-sm text-blue-600 dark:text-blue-300 mb-4 flex gap-2">
            <LogIn className="w-5 h-5 shrink-0" />
            {t.loginDesc}
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.passwordLabel}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-cat-500 outline-none transition-all"
              placeholder={t.passwordPlaceholder}
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cat-500 hover:bg-cat-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-cat-500/30 flex items-center justify-center gap-2 active:scale-95"
          >
            <LogIn className="w-5 h-5" /> {t.loginBtn}
          </button>
        </form>
      </Modal>

      {/* Add/Edit Link Modal (UPDATED: Auto Content Logic) */}
      <Modal
        isOpen={showLinkModal}
        onClose={() => setShowLinkModal(false)}
        title={linkForm.id ? t.editTitle : t.addTitle}
      >
        <form onSubmit={handleSaveLink} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              {t.urlLabel}
            </label>
            <input
              type="url"
              value={linkForm.url || ''}
              onChange={(e) => setLinkForm({...linkForm, url: e.target.value})}
              onBlur={handleUrlBlur}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none"
              placeholder={t.urlPlaceholder}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              {t.titleLabel}
              {isAutoFilling && <span className="ml-2 text-cat-500 text-xs animate-pulse flex items-center gap-1 inline-flex"><Sparkles className="w-3 h-3"/> Lagi mikir...</span>}
            </label>
            <div className="relative">
              <input
                type="text"
                value={linkForm.title || ''}
                onChange={(e) => setLinkForm({...linkForm, title: e.target.value})}
                className="w-full pl-4 pr-10 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none"
                placeholder={t.titlePlaceholder}
                required
              />
              {/* Wand Button Moved Here */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <button 
                  type="button"
                  onClick={handleAutoContent}
                  disabled={isAutoFilling}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors disabled:opacity-50"
                  title="Auto Generate Title & Description"
                >
                  <Wand2 className={cn("w-5 h-5", isAutoFilling ? "text-cat-500 animate-spin" : "")} />
                </button>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">{t.urlHelp}</p>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.descLabel}</label>
            <textarea
              value={linkForm.description || ''}
              onChange={(e) => setLinkForm({...linkForm, description: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none h-24 resize-none"
              placeholder={t.descPlaceholder}
            />
          </div>

          {/* NEW: Image URL Input with Error Handling */}
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              <ImageIcon className="w-4 h-4" /> {t.imgLabel}
            </label>
            <input
              type="url"
              value={linkForm.image_url || ''}
              onChange={(e) => {
                  setLinkForm({...linkForm, image_url: e.target.value});
                  setPreviewImgError(false); // Reset error on change
              }}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none"
              placeholder={t.imgPlaceholder}
            />
            {linkForm.image_url && (
              <div className="mt-2 relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
                {previewImgError ? (
                    <div className="text-gray-400 flex flex-col items-center">
                        <AlertCircle className="w-6 h-6 mb-1" />
                        <span className="text-[8px]">Error</span>
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
            <p className="text-[10px] text-gray-400 mt-1">{t.imgHelper}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.catLabel}</label>
              <select
                value={linkForm.category || ''}
                onChange={(e) => setLinkForm({...linkForm, category: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none"
              >
                <option value="">{t.autoOption}</option>
                {CATEGORIES.filter(c => c.id !== 'Semua').map(c => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{t.platLabel}</label>
              <select
                value={linkForm.platform || ''}
                onChange={(e) => setLinkForm({...linkForm, platform: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none"
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
            className="w-full bg-cat-500 hover:bg-cat-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-cat-500/30 mt-4 active:scale-95"
          >
            {linkForm.id ? t.updateBtn : t.saveBtn}
          </button>
        </form>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={!!showConfirmModal}
        onClose={() => !isSaving && !isDeleting && setShowConfirmModal(null)}
        title={t.confirmTitle}
        zIndex={60}
        isConfirmation={true}
      >
        <div className="text-center">
          <div className="bg-cat-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-cat-500 animate-bounce">
            <Cat className="w-10 h-10" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg font-medium leading-relaxed">
            {showConfirmModal?.type === 'login' && t.confirmLogin}
            {showConfirmModal?.type === 'logout' && t.confirmLogout}
            {showConfirmModal?.type === 'delete' && t.confirmDelete}
            {showConfirmModal?.type === 'save_link' && t.confirmSave}
          </p>
          
          <div className="flex gap-3">
            <button
              onClick={() => setShowConfirmModal(null)}
              disabled={isSaving || isDeleting}
              className="flex-1 px-4 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
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
              className="flex-1 px-4 py-3.5 rounded-xl bg-cat-500 text-white font-bold hover:bg-cat-600 transition-all shadow-lg shadow-cat-500/30 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {(isSaving || isDeleting) ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t.loadingBtn}</span>
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

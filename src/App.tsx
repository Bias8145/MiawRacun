import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Search, Plus, LogIn, LogOut, Moon, Sun, Cat, Settings, Wand2, Sparkles, Loader2, ArrowUpDown, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

import { supabase, Link } from './lib/supabase';
import { Greeting } from './components/Greeting';
import { LinkCard } from './components/LinkCard';
import { Modal } from './components/Modal';
import { 
  cn, 
  CATEGORIES, 
  PLATFORMS, 
  getCategoryFromTitle, 
  getPlatformFromUrl,
  extractInfoFromUrl 
} from './utils/helpers';

function App() {
  // State
  const [links, setLinks] = useState<Link[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Loading States for Actions
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Filters & Sorting
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedPlatform, setSelectedPlatform] = useState('Semua Platform');
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('newest');

  // Modals
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState<{type: string, id?: string} | null>(null);

  // Form State
  const [password, setPassword] = useState('');
  const [linkForm, setLinkForm] = useState<Partial<Link>>({});
  const [isAutoFilling, setIsAutoFilling] = useState(false);

  // Initial Load
  useEffect(() => {
    fetchLinks();
    const storedAdmin = localStorage.getItem('isAdmin');
    if (storedAdmin === 'true') setIsAdmin(true);
  }, []);

  // Theme Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Filter & Sort Logic
  useEffect(() => {
    let result = [...links]; // Create a copy

    if (selectedCategory !== 'Semua') {
      result = result.filter(link => link.category === selectedCategory);
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

    // Sorting
    if (sortBy === 'popular') {
        result.sort((a, b) => b.clicks - a.clicks);
    } else {
        // Default newest (based on created_at string comparison usually works for ISO dates, 
        // but assuming list is already fetched in order, we might just rely on index or re-sort)
        result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    setFilteredLinks(result);
  }, [links, searchQuery, selectedCategory, selectedPlatform, sortBy]);

  // Actions
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
      toast.success('Welcome back Majikan! 😻');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0ea5e9', '#f472b6', '#fbbf24']
      });
    } else {
      toast.error('Sandi salah! Kamu siapa? 😾');
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
    toast.success('Babay! Jangan lupa kasih makan kucing 👋');
  };

  const handleSaveLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmModal({ type: 'save_link' });
  };

  const confirmSaveLink = async () => {
    setIsSaving(true);
    try {
      if (!linkForm.title || !linkForm.url) {
          toast.error("Judul sama Link wajib diisi miaw!");
          setIsSaving(false);
          return;
      }

      const category = linkForm.category || getCategoryFromTitle(linkForm.title);
      const platform = linkForm.platform || getPlatformFromUrl(linkForm.url);

      const payload = {
        title: linkForm.title,
        url: linkForm.url,
        description: linkForm.description || '',
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
        toast.success('Racun berhasil diupdate miaw!');
      } else {
        const { error } = await supabase
          .from('links')
          .insert([payload]);
        if (error) throw error;
        toast.success('Racun baru ditambahkan miaw!');
      }

      fetchLinks();
      setShowLinkModal(false);
      setLinkForm({});
      setShowConfirmModal(null);
    } catch (error: any) {
      console.error('Error saving link:', error);
      toast.error(`Gagal nyimpen: ${error.message || 'Cek koneksi atau database ya miaw.'}`);
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
      toast.success('Link berhasil dibuang ke kotak pasir!');
      setShowConfirmModal(null);
    } catch (error) {
      console.error('Error deleting:', error);
      toast.error('Gagal ngehapus link');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleTrackClick = async (id: string) => {
    // Optimistic update locally
    setLinks(prev => prev.map(l => l.id === id ? { ...l, clicks: l.clicks + 1 } : l));
    
    try {
      await supabase.rpc('increment_clicks', { row_id: id });
    } catch (err) {
      // ignore
    }
  };

  // Auto-Fill Logic
  const handleUrlBlur = () => {
    if (!linkForm.url) return;
    
    setIsAutoFilling(true);
    
    // 1. Detect Platform
    const platform = getPlatformFromUrl(linkForm.url);
    
    // 2. Try to extract info
    const extracted = extractInfoFromUrl(linkForm.url);
    
    setLinkForm(prev => ({
      ...prev,
      platform,
      ...(extracted?.title ? { title: extracted.title } : {}),
      ...(extracted?.description ? { description: extracted.description } : {})
    }));

    // If we extracted a title, we can also guess category
    if (extracted?.title) {
      const category = getCategoryFromTitle(extracted.title);
      setLinkForm(prev => ({ ...prev, category }));
    }

    setTimeout(() => setIsAutoFilling(false), 800);
  };

  const openEditModal = (link: Link) => {
    setLinkForm(link);
    setShowLinkModal(true);
  };

  const openAddModal = () => {
    setLinkForm({});
    setShowLinkModal(true);
  };

  const handleShareApp = async () => {
    const shareData = {
        title: 'Miaw Racun 🐱',
        text: 'Pusat barang gemoy & racun shopee pilihan kucing! Awas kalap miaw.',
        url: window.location.href
    };
    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Link web udah dicopy! Sebarin gih.");
        }
    } catch (e) { console.log(e); }
  };

  return (
    <div className="min-h-screen bg-cat-50 dark:bg-dark-bg transition-colors duration-300 font-sans text-gray-800 dark:text-gray-200">
      <Toaster position="top-center" toastOptions={{
        style: {
          borderRadius: '20px',
          background: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#333',
          fontFamily: 'Nunito, sans-serif'
        }
      }} />

      {/* Navbar - Optimized for Mobile */}
      <nav className="sticky top-0 z-30 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 px-4 py-3 md:py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            {/* Header Icon */}
            <div className="relative transform transition-transform group-hover:scale-110 duration-300">
              <Cat className="w-8 h-8 md:w-12 md:h-12 text-cat-500 drop-shadow-md" strokeWidth={2.5} />
              <div className="absolute -top-1 -right-1 text-pink-400 animate-bounce-slow">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl md:text-3xl tracking-tighter text-cat-500 drop-shadow-sm group-hover:text-cat-600 transition-colors">
                Miaw<span className="text-gray-800 dark:text-white">Racun</span>
              </span>
              <span className="text-[9px] md:text-[11px] font-bold text-gray-400 tracking-[0.1em] md:tracking-[0.2em] uppercase ml-0.5">
                Pusat Barang Gemoy
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
                onClick={handleShareApp}
                className="p-2 md:p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
                title="Sebar Web Ini"
            >
                <Share2 className="w-5 h-5" />
            </button>

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
                  <Plus className="w-4 h-4" /> <span className="hidden md:inline">Nambah</span> Racun
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 md:p-2.5 rounded-full hover:bg-red-100 text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="p-2 md:p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 transition-colors"
                title="Login Majikan"
              >
                <Settings className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-6 md:py-8 pb-32">
        <Greeting />

        {/* Search & Filter Section */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-cat-500 transition-colors" />
            <input
              type="text"
              placeholder="Cari racun apa hari ini miaw?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-3.5 md:py-4 bg-white dark:bg-dark-surface rounded-3xl border-2 border-transparent focus:border-cat-300 dark:focus:border-cat-700 shadow-sm focus:shadow-lg focus:shadow-cat-500/10 outline-none transition-all text-sm md:text-base font-medium"
            />
          </div>

          {/* Platform Filter - Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
             {PLATFORMS.map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border",
                  selectedPlatform === platform
                    ? "bg-gray-800 text-white border-gray-800 dark:bg-white dark:text-gray-900"
                    : "bg-white dark:bg-dark-surface text-gray-500 border-gray-200 dark:border-gray-700 hover:border-gray-400"
                )}
              >
                {platform}
              </button>
            ))}
          </div>

          {/* Category Filter - Aesthetic Icons */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 px-1 flex justify-between items-center">
                <span>Kategori Gemoy</span>
                
                {/* Sorting Toggle */}
                <button 
                    onClick={() => setSortBy(prev => prev === 'newest' ? 'popular' : 'newest')}
                    className="flex items-center gap-1 text-xs bg-white dark:bg-dark-surface px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-cat-500 transition-colors"
                >
                    <ArrowUpDown className="w-3 h-3" />
                    {sortBy === 'newest' ? 'Paling Baru' : 'Paling Hype 🔥'}
                </button>
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
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
                      "w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm border-2",
                      isSelected 
                        ? "bg-cat-500 text-white shadow-cat-500/40 scale-110 border-cat-500" 
                        : "bg-white dark:bg-dark-surface border-transparent hover:border-cat-200 hover:scale-105",
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
          </div>
        </div>

        {/* Links List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin w-10 h-10 border-4 border-cat-200 border-t-cat-500 rounded-full mx-auto mb-4" />
              <p className="text-gray-400 animate-pulse font-medium">Lagi ngendus barang-barang lucu...</p>
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
              />
            ))
          ) : (
            <div className="text-center py-16 bg-white/50 dark:bg-dark-surface/50 rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-700">
              <div className="text-4xl mb-3">😿</div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Yah, racunnya gak ketemu miaw...</p>
              <p className="text-sm text-gray-400 mt-1">Coba cari kata kunci lain atau ganti filter ya!</p>
            </div>
          )}
        </div>
      </main>

      {/* Login Modal */}
      <Modal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Masuk Kandang Admin"
      >
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-sm text-blue-600 dark:text-blue-300 mb-4">
            ℹ️ Ini area khusus majikan (admin). Kamu kucing liar (pengunjung) gak perlu login miaw.
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Sandi Rahasia</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-cat-500 outline-none transition-all"
              placeholder="Ssstt... masukin sini"
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cat-500 hover:bg-cat-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-cat-500/30 flex items-center justify-center gap-2 active:scale-95"
          >
            <LogIn className="w-5 h-5" /> Gass Masuk
          </button>
        </form>
      </Modal>

      {/* Add/Edit Link Modal */}
      <Modal
        isOpen={showLinkModal}
        onClose={() => setShowLinkModal(false)}
        title={linkForm.id ? "Edit Racun" : "Tambah Racun Baru"}
      >
        <form onSubmit={handleSaveLink} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
              Link Affiliate
              {isAutoFilling && <span className="ml-2 text-cat-500 text-xs animate-pulse">✨ Lagi mikir...</span>}
            </label>
            <div className="relative">
              <input
                type="url"
                value={linkForm.url || ''}
                onChange={(e) => setLinkForm({...linkForm, url: e.target.value})}
                onBlur={handleUrlBlur}
                className="w-full pl-4 pr-10 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none"
                placeholder="Paste link Shopee/Tokped disini..."
                required
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <button 
                  type="button"
                  onClick={handleUrlBlur}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                  title="Auto Fill Manual"
                >
                  <Wand2 className={cn("w-5 h-5", isAutoFilling ? "text-cat-500 animate-spin" : "")} />
                </button>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Paste link, klik ikon tongkat ajaib kalau gak muncul otomatis miaw!</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Judul Barang</label>
            <input
              type="text"
              value={linkForm.title || ''}
              onChange={(e) => setLinkForm({...linkForm, title: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none"
              placeholder="Contoh: Baju Kucing Gemoy"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Deskripsi (Opsional)</label>
            <textarea
              value={linkForm.description || ''}
              onChange={(e) => setLinkForm({...linkForm, description: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none h-24 resize-none"
              placeholder="Spill dikit kenapa ini wajib dibeli..."
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Kategori</label>
              <select
                value={linkForm.category || ''}
                onChange={(e) => setLinkForm({...linkForm, category: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none"
              >
                <option value="">✨ Otomatis</option>
                {CATEGORIES.filter(c => c.id !== 'Semua').map(c => (
                  <option key={c.id} value={c.id}>{c.id}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Platform</label>
              <select
                value={linkForm.platform || ''}
                onChange={(e) => setLinkForm({...linkForm, platform: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-cat-500 outline-none"
              >
                 <option value="">✨ Otomatis</option>
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
            {linkForm.id ? 'Simpan Perubahan' : 'Sebar Racun'}
          </button>
        </form>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={!!showConfirmModal}
        onClose={() => !isSaving && !isDeleting && setShowConfirmModal(null)}
        title="Konfirmasi Dulu Miaw"
        zIndex={60} // Higher z-index to sit on top
        isConfirmation={true} // Special styling
      >
        <div className="text-center">
          <div className="bg-cat-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl animate-bounce">
            🐱
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg font-medium leading-relaxed">
            {showConfirmModal?.type === 'login' && "Yakin sandinya bener? Jangan ngasal ya!"}
            {showConfirmModal?.type === 'logout' && "Mau pergi? Nanti siapa yang ngurusin link? 😿"}
            {showConfirmModal?.type === 'delete' && "Beneran mau hapus racun ini? Sayang loh..."}
            {showConfirmModal?.type === 'save_link' && "Udah mantep datanya? Gass upload!"}
          </p>
          
          <div className="flex gap-3">
            <button
              onClick={() => setShowConfirmModal(null)}
              disabled={isSaving || isDeleting}
              className="flex-1 px-4 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              Gak Jadi
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
                  <span>Sabar...</span>
                </>
              ) : (
                "Gasskeun!"
              )}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;

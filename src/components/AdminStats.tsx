import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MousePointer2, FlaskConical, Sparkles } from 'lucide-react';

interface AdminStatsProps {
  totalLinks: number;
  totalClicks: number;
}

export const AdminStats: React.FC<AdminStatsProps> = ({ totalLinks, totalClicks }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 grid grid-cols-2 gap-3 md:gap-4"
    >
      {/* Total Racun Card - Cuter & Softer */}
      <div className="bg-sky-100/80 dark:bg-sky-900/20 p-4 rounded-[2rem] border-2 border-sky-200 dark:border-sky-800 shadow-sm relative overflow-hidden group hover:scale-[1.02] transition-transform">
         <div className="absolute -right-3 -bottom-3 text-sky-200 dark:text-sky-800 opacity-50 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <FlaskConical className="w-16 h-16" />
         </div>
         <div className="relative z-10 flex flex-col items-center text-center">
            <p className="text-[10px] text-sky-600 dark:text-sky-300 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" /> Total Racun
            </p>
            <h3 className="text-3xl font-black text-sky-600 dark:text-sky-400 tracking-tight mt-1">{totalLinks}</h3>
         </div>
      </div>

      {/* Total Khilaf Card - Cuter & Softer */}
      <div className="bg-pink-100/80 dark:bg-pink-900/20 p-4 rounded-[2rem] border-2 border-pink-200 dark:border-pink-800 shadow-sm relative overflow-hidden group hover:scale-[1.02] transition-transform">
         <div className="absolute -right-3 -bottom-3 text-pink-200 dark:text-pink-800 opacity-50 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <TrendingUp className="w-16 h-16" />
         </div>
         <div className="relative z-10 flex flex-col items-center text-center">
            <p className="text-[10px] text-pink-600 dark:text-pink-300 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded-full">
                <MousePointer2 className="w-3 h-3" /> Total Khilaf
            </p>
            <h3 className="text-3xl font-black text-pink-600 dark:text-pink-400 tracking-tight mt-1">{totalClicks}</h3>
         </div>
      </div>
    </motion.div>
  );
};

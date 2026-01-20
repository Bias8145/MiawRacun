import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Package, MousePointer2 } from 'lucide-react';

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
      <div className="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-cat-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
         <div className="absolute -right-2 -bottom-2 text-cat-50 dark:text-gray-800">
            <Package className="w-16 h-16" />
         </div>
         <div className="relative z-10">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                <Package className="w-3 h-3" /> Total Racun
            </p>
            <h3 className="text-2xl font-black text-gray-800 dark:text-white">{totalLinks}</h3>
         </div>
      </div>

      <div className="bg-white dark:bg-dark-surface p-4 rounded-2xl border border-cat-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
         <div className="absolute -right-2 -bottom-2 text-orange-50 dark:text-gray-800">
            <TrendingUp className="w-16 h-16" />
         </div>
         <div className="relative z-10">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                <MousePointer2 className="w-3 h-3" /> Total Khilaf
            </p>
            <h3 className="text-2xl font-black text-orange-500">{totalClicks}</h3>
         </div>
      </div>
    </motion.div>
  );
};

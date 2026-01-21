import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../utils/helpers';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  zIndex?: number; // Added prop to control stacking
  isConfirmation?: boolean; // Special style for confirmation
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  zIndex = 50,
  isConfirmation = false
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ zIndex: zIndex }}
            className={cn(
              "fixed inset-0 transition-all duration-500",
              // Improved blur and opacity for better separation
              isConfirmation 
                ? "bg-white/40 dark:bg-black/60 backdrop-blur-xl" 
                : "bg-black/40 backdrop-blur-sm"
            )}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{ zIndex: zIndex + 1 }}
            className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className={cn(
              "w-full rounded-3xl shadow-2xl pointer-events-auto flex flex-col max-h-[90vh] border border-white/20",
              isConfirmation 
                ? "max-w-sm bg-white/95 dark:bg-dark-surface/95 backdrop-blur-2xl shadow-cat-500/20" 
                : "max-w-md bg-white dark:bg-dark-surface"
            )}>
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 relative">
                <h2 className={cn(
                  "font-bold text-gray-800 dark:text-white",
                  isConfirmation ? "text-lg text-center w-full" : "text-xl"
                )}>
                  {title}
                </h2>
                {!isConfirmation && (
                  <button 
                    onClick={onClose}
                    className="absolute right-4 top-4 group"
                    title="Gulung Balik (Tutup)"
                  >
                    {/* Yarn Ball Style Close Button */}
                    <div className="w-10 h-10 bg-rose-50 dark:bg-rose-900/20 rounded-full border-2 border-dashed border-rose-300 dark:border-rose-700 flex items-center justify-center text-rose-400 group-hover:rotate-180 transition-transform duration-700 ease-in-out shadow-sm group-hover:bg-rose-100 dark:group-hover:bg-rose-900/40">
                      <X className="w-5 h-5" />
                    </div>
                  </button>
                )}
              </div>
              <div className="p-6 overflow-y-auto custom-scrollbar">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

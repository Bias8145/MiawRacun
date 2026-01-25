import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PawPrint } from 'lucide-react';
import { cn } from '../utils/helpers';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  zIndex?: number;
  isConfirmation?: boolean;
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ zIndex: zIndex }}
            className="fixed inset-0 bg-cat-900/20 dark:bg-black/60 backdrop-blur-sm transition-all"
          />
          
          <div 
            style={{ zIndex: zIndex + 1 }}
            className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none"
          >
             {/* Wrapper to prevent clipping of scaled children */}
             <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={cn(
                  "w-full pointer-events-auto relative",
                  isConfirmation ? "max-w-xs" : "max-w-md"
                )}
             >
                <div className={cn(
                  "bg-white dark:bg-dark-surface rounded-[2rem] shadow-2xl border-4 border-white dark:border-dark-surface overflow-hidden flex flex-col max-h-[85vh]",
                  isConfirmation ? "" : ""
                )}>
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 pt-5 pb-2 shrink-0">
                    <h2 className={cn(
                      "font-black text-gray-800 dark:text-white text-base tracking-tight",
                      isConfirmation ? "text-center w-full" : ""
                    )}>
                      {title}
                    </h2>
                    {!isConfirmation && (
                      <button 
                        onClick={onClose}
                        className="group flex items-center justify-center w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/20 text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all active:scale-90"
                        title="Tutup"
                      >
                        <PawPrint className="w-4 h-4 transition-transform group-hover:rotate-12" />
                      </button>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="px-5 pb-5 overflow-y-auto custom-scrollbar">
                    {children}
                  </div>
                </div>
             </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

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
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                <h2 className={cn(
                  "font-bold text-gray-800 dark:text-white",
                  isConfirmation ? "text-lg text-center w-full" : "text-xl"
                )}>
                  {title}
                </h2>
                {!isConfirmation && (
                  <button 
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors absolute right-4"
                  >
                    <X className="w-5 h-5 text-gray-500" />
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

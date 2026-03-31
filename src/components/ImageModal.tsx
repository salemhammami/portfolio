import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc }) => {
  return (
    <AnimatePresence>
      {isOpen && imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-brand-950/90 backdrop-blur-sm cursor-zoom-out"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X size={24} />
          </motion.button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            src={imageSrc}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

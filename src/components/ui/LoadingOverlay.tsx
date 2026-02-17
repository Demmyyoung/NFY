"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function LoadingOverlay({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Phase 1 (Fade In/Scale Up): 0.8s
    // Phase 2 (Hold): 0.5s
    // Total wait before exit: 1.3s
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-concrete"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }} // Phase 3
        >
          <motion.div
            className="bg-white-pure border border-black-solid px-10 py-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0, // "smooth spring", bounce might be too bouncy, use 0 or low stiffness
            }}
          >
            <div className="relative w-48 h-16">
              <Image
                src="/images/logo1.jpg"
                alt="nyf"
                fill
                className="object-fill"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

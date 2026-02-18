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
            className="w-[500px] h-40 relative px-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0,
            }}
          >
            <Image
              src="/images/nfy_new_logo.png"
              alt="nyf"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

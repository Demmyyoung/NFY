"use client";
import { ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { toggleCart, cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 w-full md:w-[80%] h-24 bg-gray-concrete border-b border-black-solid flex items-center justify-between px-6 z-30">
        {/* Spacer for centering logic */}
        <div className="w-6 md:hidden"></div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="block relative w-64 h-16 cursor-pointer">
            <Image
              src="/images/nfy_new_logo.png"
              alt="nyf"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 ml-auto">
          <button aria-label="Cart" onClick={toggleCart} className="relative">
            <ShoppingCart strokeWidth={1} className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-black-solid text-white-pure text-[10px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu strokeWidth={1} className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-gray-concrete flex flex-col items-center justify-center md:hidden"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-6"
              aria-label="Close menu"
            >
              <X strokeWidth={1} className="w-8 h-8" />
            </button>

            <nav className="flex flex-col gap-8 text-2xl tracking-widest lowercase text-center">
              <Link
                href="/about"
                className="hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                about
              </Link>
              <Link
                href="/"
                className="hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                tees
              </Link>
              <Link
                href="/"
                className="hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                bottoms
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

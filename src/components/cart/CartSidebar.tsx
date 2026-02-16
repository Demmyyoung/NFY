"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartSidebar() {
  const { isCartOpen, toggleCart, items, removeFromCart, cartTotal } =
    useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white-pure border-l border-black-solid z-50 flex flex-col"
          >
            <div className="h-24 border-b border-black-solid flex items-center justify-between px-6 bg-gray-concrete">
              <h2 className="text-xl font-bold lowercase tracking-tighter">
                Cart ({items.length})
              </h2>
              <button
                onClick={toggleCart}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X className="w-6 h-6" strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex-1 flex items-center justify-center text-gray-400 lowercase tracking-widest">
                  Cart is empty
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start">
                    <div className="w-20 h-24 bg-gray-concrete border border-black-solid flex items-center justify-center shrink-0">
                      <span className="text-xs text-gray-400">img</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg leading-none lowercase tracking-wide">
                          {item.name}
                        </h3>
                        <span className="text-lg leading-none tracking-widest">
                          {item.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs underline hover:text-red-500 transition-colors lowercase"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-black-solid p-6 bg-gray-concrete">
              <div className="flex justify-between items-end mb-6">
                <span className="text-sm uppercase tracking-widest text-gray-500">
                  Subtotal
                </span>
                <span className="text-2xl font-bold tracking-widest">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <button className="w-full h-14 bg-black-solid text-white-pure hover:bg-white-pure hover:text-black-solid border border-black-solid transition-all uppercase tracking-[0.2em] text-sm font-bold">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

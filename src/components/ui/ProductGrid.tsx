"use client";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";

const products = [
  { id: 1, name: "tee 001", price: "$40" },
  { id: 2, name: "bottom 001", price: "$80" },
  { id: 3, name: "cap 001", price: "$30" },
  { id: 4, name: "hoodie 001", price: "$90" },
  { id: 5, name: "sock 001", price: "$15" },
  { id: 6, name: "bag 001", price: "$120" },
];

export function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black-solid">
      {products.map((product) => (
        <div
          key={product.id}
          className="min-h-[400px] bg-gray-concrete border-r border-b border-black-solid p-8 flex flex-col justify-between relative group hover:bg-white-pure transition-colors duration-300"
        >
          {/* Add to Cart Overlay Button - Visible on Hover (Desktop) / Always (Mobile logic could be added) */}
          <button
            onClick={() => addToCart(product)}
            className="absolute top-4 right-4 p-2 border border-black-solid bg-white-pure opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black-solid hover:text-white-pure z-10"
            aria-label="Add to cart"
          >
            <Plus strokeWidth={1} className="w-6 h-6" />
          </button>

          <div className="flex-1 flex items-center justify-center mb-6">
            <div className="w-full aspect-[3/4] bg-white-pure border border-black-solid flex items-center justify-center">
              <span className="text-sm tracking-widest text-gray-400 lowercase">
                img-{product.id}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-black-solid pt-4">
            <span className="text-xl font-medium tracking-wide lowercase">
              {product.name}
            </span>
            <span className="text-lg tracking-widest">{product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

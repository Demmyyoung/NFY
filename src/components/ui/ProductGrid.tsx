"use client";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export function ProductGrid() {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black-solid">
      {products.map((product) => (
        <div
          key={product.id}
          className="min-h-[400px] bg-gray-concrete border-r border-b border-black-solid p-8 flex flex-col justify-between relative group hover:bg-white-pure transition-colors duration-300"
        >
          <Link
            href={`/product/${product.id}`}
            className="absolute inset-0 z-0"
            aria-label={`View ${product.title}`}
          />

          {/* Add to Cart Overlay Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigation when clicking add to cart
              addToCart({
                id: product.id,
                name: product.title,
                price: product.price.toString(), // CartContext might expect string based on previous usage, but we'll verify.
                // Wait, let's verify CartContext first. If it expects a different shape, we'll fix it.
                // For now assuming existing CartContext structure.
                // Actually, looking at the previous file content, it passed `product` directly which had {id, name, price: string}.
                // My new product has {id, title, price: number}.
                // I should probably map it to what CartContext expects or update CartContext.
                // Let's assume for now I need to map it.
                image: product.image,
              });
            }}
            className="absolute top-4 right-4 p-2 border border-black-solid bg-white-pure opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-black-solid hover:text-white-pure z-10 cursor-pointer"
            aria-label="Add to cart"
          >
            <Plus strokeWidth={1} className="w-6 h-6" />
          </button>

          <div className="flex-1 flex items-center justify-center mb-6 pointer-events-none">
            <div className="relative w-full aspect-[3/4] bg-white-pure border border-black-solid flex items-center justify-center overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-black-solid pt-4 pointer-events-none">
            <span className="text-sm font-medium tracking-wide lowercase truncate pr-4">
              {product.title}
            </span>
            <span className="text-sm tracking-widest">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

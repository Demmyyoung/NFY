"use client";

import { useParams } from "next/navigation"; // Use useParams instead of props.params for client component compatibility in Next.js 15+ if needed, but params prop is standard for pages.
// Actually, in Next.js 13+ app dir, params is a prop. But since I might use "use client" for interactivity (addToCart), I can direct access params or use the hook.
// Let's stick effectively to the page structure.
// However, since `products` are local, I can just find it.

import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";
import { notFound } from "next/navigation";
import { use, useState, useEffect } from "react"; // For unwrap params

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();

  // Initialize state with first available options if they exist
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.sizes?.[0] || "",
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors?.[0] || "",
  );

  // Update state when product loads or changes (though product is synchronous here, good practice)
  useEffect(() => {
    if (product) {
      if (product.sizes?.length && !selectedSize)
        setSelectedSize(product.sizes[0]);
      if (product.colors?.length && !selectedColor)
        setSelectedColor(product.colors[0]);
    }
  }, [product, selectedSize, selectedColor]);

  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-concrete text-black-solid font-orbitron pt-32 pb-20 px-6 md:px-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-8 text-sm tracking-widest hover:opacity-60 transition-opacity"
      >
        <ArrowLeft size={16} />
        back
      </Link>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {/* Image Section */}
        <div className="relative aspect-[3/4] bg-white-pure border border-black-solid">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
            {product.title}
          </h1>
          <p className="text-2xl md:text-3xl mb-8 tracking-widest">
            {formatPrice(product.price)}
          </p>

          <div className="mb-8 space-y-4 text-sm md:text-base opacity-80 leading-relaxed font-sans">
            <p>{product.description}</p>
            <p>
              Premium materials. Designed for durability and comfort. Limited
              release.
            </p>
          </div>

          {/* Variants Selection */}
          <div className="space-y-6 mb-12">
            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center border border-black-solid transition-colors
                                    ${selectedSize === size ? "bg-black-solid text-white-pure" : "bg-transparent text-black-solid hover:bg-gray-200"}
                                `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-widest mb-3">
                  Color
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border border-black-solid transition-colors text-sm uppercase tracking-wider
                                    ${selectedColor === color ? "bg-black-solid text-white-pure" : "bg-transparent text-black-solid hover:bg-gray-200"}
                                `}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.title,
                price: product.price.toString(),
                image: product.image,
                size: selectedSize,
                color: selectedColor,
              })
            }
            className="w-full py-4 bg-black-solid text-white-pure uppercase tracking-widest hover:bg-white-pure hover:text-black-solid border border-black-solid transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

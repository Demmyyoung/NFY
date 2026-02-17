"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: {
    id: number;
    name: string;
    price: string;
    image: string;
    size?: string;
    color?: string;
  }) => void;
  removeFromCart: (id: number, size?: string, color?: string) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addToCart = (product: {
    id: number;
    name: string;
    price: string;
    image: string;
    size?: string;
    color?: string;
  }) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color,
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Open cart when adding
  };

  const removeFromCart = (id: number, size?: string, color?: string) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color),
      ),
    );
  };

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const cartTotal = items.reduce((acc, item) => {
    // Remove non-numeric characters (except dots) to parse "₦40,000" -> 40000
    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        toggleCart,
        addToCart,
        removeFromCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

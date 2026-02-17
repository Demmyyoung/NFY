"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();

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
        continue shopping
      </Link>

      <h1 className="text-4xl font-bold mb-12 uppercase tracking-tighter border-b border-black-solid pb-4">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
        {/* Left Column: Form Placeholders */}
        <div className="space-y-12">
          {/* Shipping */}
          <section>
            <h2 className="text-xl mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 bg-black-solid text-white-pure flex items-center justify-center text-xs rounded-full">
                1
              </span>
              Shipping Information
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-transparent border border-black-solid p-4 placeholder:text-gray-500 focus:outline-none focus:bg-white-pure transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border border-black-solid p-4 placeholder:text-gray-500 focus:outline-none focus:bg-white-pure transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border border-black-solid p-4 placeholder:text-gray-500 focus:outline-none focus:bg-white-pure transition-colors"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full bg-transparent border border-black-solid p-4 placeholder:text-gray-500 focus:outline-none focus:bg-white-pure transition-colors"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full bg-transparent border border-black-solid p-4 placeholder:text-gray-500 focus:outline-none focus:bg-white-pure transition-colors"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full bg-transparent border border-black-solid p-4 placeholder:text-gray-500 focus:outline-none focus:bg-white-pure transition-colors"
                />
              </div>
            </div>
          </section>

          {/* Payment */}
          <section>
            <h2 className="text-xl mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 bg-black-solid text-white-pure flex items-center justify-center text-xs rounded-full">
                2
              </span>
              Payment Details
            </h2>
            <div className="p-8 border border-black-solid bg-white-pure opacity-50 flex flex-col items-center justify-center text-center gap-4">
              <p className="max-w-xs">
                Payment gateway integration (Paystack/Stripe) will be
                implemented here.
              </p>
              <button
                disabled
                className="px-8 py-3 bg-black-solid text-white-pure opacity-50 cursor-not-allowed"
              >
                Pay Now
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:pl-12">
          <div className="bg-white-pure border border-black-solid p-8 sticky top-32">
            <h2 className="text-xl mb-8 uppercase tracking-widest border-b border-black-solid pb-4">
              Order Summary
            </h2>

            {items.length === 0 ? (
              <p className="text-gray-500 italic">Your cart is empty.</p>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start"
                  >
                    <div>
                      <p className="uppercase tracking-wide text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="tracking-widest text-sm">
                      {formatPrice(
                        parseFloat(item.price.replace(/[^\d.]/g, "")) *
                          item.quantity,
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-black-solid flex justify-between items-center text-xl font-bold">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>

            <button className="w-full mt-8 py-4 bg-black-solid text-white-pure uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

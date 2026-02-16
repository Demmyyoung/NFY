import { ShoppingCart, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 right-0 w-full md:w-[80%] h-24 bg-gray-concrete border-b border-black-solid flex items-center justify-between px-6 z-30">
      {/* Spacer for centering logic */}
      <div className="w-6 md:hidden"></div>

      {/* Center Logo Box */}
      <div className="bg-white-pure border border-black-solid px-10 py-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl font-bold tracking-tighter lowercase">nyf</h1>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 ml-auto">
        <button aria-label="Cart">
          <ShoppingCart strokeWidth={1} className="w-6 h-6" />
        </button>
        <button aria-label="Menu" className="md:hidden">
          <Menu strokeWidth={1} className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

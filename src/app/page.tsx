"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";
import { ProductGrid } from "@/components/ui/ProductGrid";
import { useState } from "react";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-gray-concrete text-black-solid font-orbitron selection:bg-black-solid selection:text-white-pure">
      <LoadingOverlay onComplete={() => setLoadingComplete(true)} />

      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar />

        <div className="flex-1 w-full md:w-[80%] md:ml-[20%] flex flex-col relative z-0">
          <Header />
          <main className="pt-24 min-h-screen">
            <ProductGrid />

            {/* Footer Placeholder to fill space if needed */}
            <div className="p-12 text-center border-t border-black-solid">
              <p className="text-sm opacity-50">nyf © 2026</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

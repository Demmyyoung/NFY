"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-concrete text-black-solid font-orbitron selection:bg-black-solid selection:text-white-pure">
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar />

        <div className="flex-1 w-full md:w-[80%] md:ml-[20%] flex flex-col relative z-0">
          <Header />
          <main className="pt-24 min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Text Content */}
            <div className="border-r border-black-solid p-8 md:p-16 flex flex-col justify-between">
              <div>
                <h1 className="text-6xl md:text-8xl font-bold lowercase tracking-tighter mb-12 slide-in-bottom">
                  about
                </h1>

                <div className="space-y-8 text-lg leading-relaxed tracking-wide lowercase">
                  <p>
                    nyf is a conceptual exploration of brutalism in digital
                    commerce. stripped of excess. defined by raw structure.
                  </p>
                  <p>
                    we believe in the beauty of the wireframe. the skeleton is
                    the soul. no distractions. just form and function.
                  </p>
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-black-solid pb-2 inline-block">
                  Manifesto
                </h2>
                <ul className="space-y-2 text-sm uppercase tracking-wider">
                  <li>01. precision over decoration.</li>
                  <li>02. function over fluff.</li>
                  <li>03. 0.5px borders.</li>
                  <li>04. grayscale only.</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Visuals / technical specs */}
            <div className="border-t md:border-t-0 bg-white-pure p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative background grid line */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="border border-black-solid"></div>
                ))}
              </div>

              <div className="relative z-10 border border-black-solid p-8 bg-gray-concrete shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-black-solid pb-4">
                  technical specs
                </h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-black-solid border-opacity-20 pb-2">
                    <span>ESTABLISHED</span>
                    <span>2025</span>
                  </div>
                  <div className="flex justify-between border-b border-black-solid border-opacity-20 pb-2">
                    <span>ORIGIN</span>
                    <span>DIGITAL SPACE</span>
                  </div>
                  <div className="flex justify-between border-b border-black-solid border-opacity-20 pb-2">
                    <span>AESTHETIC</span>
                    <span>NEO-BRUTALISM</span>
                  </div>
                  <div className="flex justify-between border-b border-black-solid border-opacity-20 pb-2">
                    <span>VERSION</span>
                    <span>1.0.4-BETA</span>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-black-solid text-xs text-center opacity-60">
                  // SYSTEM STATUS: OPERATIONAL
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

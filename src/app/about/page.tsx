"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-concrete pt-32 pb-20 px-6 md:px-20 text-black-solid font-orbitron">
      <div className="max-w-4xl mx-auto border-l border-black-solid pl-8 md:pl-16 slide-in-bottom">
        <h1 className="text-6xl md:text-8xl font-bold lowercase tracking-tighter mb-12">
          about
        </h1>

        <div className="space-y-12 text-lg md:text-xl leading-relaxed tracking-wide lowercase">
          <p>
            nyf is a conceptual exploration of brutalism in digital commerce.
            stripped of excess. defined by raw structure.
          </p>

          <p>
            we believe in the beauty of the wireframe. the skeleton is the soul.
            no distractions. just form and function.
          </p>

          <div className="border border-black-solid p-8 mt-12 w-full md:w-2/3 bg-white-pure">
            <h2 className="text-2xl font-bold mb-4">manifesto</h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-black-solid">
              <li>precision over decoration.</li>
              <li>function over fluff.</li>
              <li>0.5px borders.</li>
              <li>grayscale only.</li>
            </ul>
          </div>

          <p className="pt-12 opacity-50 text-sm tracking-widest uppercase">
            established 2026. digital brutalism.
          </p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-[20%] bg-gray-concrete border-r border-black-solid hidden md:flex flex-col justify-center items-center z-40">
      <nav className="flex flex-col gap-6 text-xl tracking-widest lowercase">
        <Link href="/about" className="hover:text-gray-600 transition-colors">
          about
        </Link>
        <Link href="/" className="hover:text-gray-600 transition-colors">
          tees
        </Link>
        <Link href="/" className="hover:text-gray-600 transition-colors">
          bottoms
        </Link>
      </nav>
    </aside>
  );
}

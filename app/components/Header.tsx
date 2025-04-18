// app/components/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-3xl font-bold text-white">DUMP25</span>
        </Link>

        <nav className="space-x-6 text-lg">
          <Link href="/#about" className="hover:text-zinc-400 transition">About</Link>
          <Link href="/#intro" className="hover:text-zinc-400 transition">History</Link>
          <a href="/whitepaper.pdf" target="_blank" className="hover:text-zinc-400 transition">Whitepaper</a>
          <Link href="/#contact" className="hover:text-zinc-400 transition">Contact</Link>
        </nav>

      </div>
    </header>
  );
}

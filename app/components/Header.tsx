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
        <footer className="py-12 bg-black text-center text-gray-400 text-sm space-y-4">
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <a href="https://twitter.com/Thedump25" className="hover:text-white">X (Twitter)</a>
          <a href="https://t.me/+kdThjHWnV-JjZDY8" className="hover:text-white">Telegram</a>
          <a href="https://github.com/PAKmeme" className="hover:text-white">GitHub</a>
          <a href="mailto:contact@dump25.io" className="hover:text-white">contact@dump25.io</a>
        </div>
     </div>
    </header>
  );
}

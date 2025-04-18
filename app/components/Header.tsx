// ✅ Navigation Header for DUMP25 site
// Updated: 'Contact' link points to the footer

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
          <Link href="/#footer" className="hover:text-zinc-400 transition">Contact</Link>
        </nav>

        <div className="flex space-x-4 text-sm">
          <a href="https://x.com/Thedump25" target="_blank" className="hover:text-zinc-400">X</a>
          <a href="https://t.me/+kdThjHWnV-JjZDY8" target="_blank" className="hover:text-zinc-400">Telegram</a>
          <a href="https://github.com/PAKmeme" target="_blank" className="hover:text-zinc-400">GitHub</a>
        </div>
      </div>
    </header>
  );
}

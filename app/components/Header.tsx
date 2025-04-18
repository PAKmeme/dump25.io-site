"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-3xl font-bold">DUMP</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/#about" className="hover:text-zinc-400 transition">About</Link>
          <Link href="/#intro" className="hover:text-zinc-400 transition">History</Link>
          <Link href="/whitepaper" className="hover:text-zinc-400 transition">Whitepaper</Link>
          <Link href="/#footer" className="hover:text-zinc-400 transition">Contact</Link>
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-xl">
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="bg-zinc-900 px-6 pb-4 md:hidden">
          <nav className="flex flex-col space-y-3 text-lg pt-4">
            <Link href="/#about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/#intro" onClick={() => setMobileOpen(false)}>History</Link>
            <Link href="/whitepaper" onClick={() => setMobileOpen(false)}>Whitepaper</Link>
            <Link href="/#footer" onClick={() => setMobileOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

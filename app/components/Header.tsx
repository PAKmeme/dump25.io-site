import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-3xl font-bold">DUMP25</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/#about" className="hover:text-zinc-400 transition">About</Link>
          <Link href="/#intro" className="hover:text-zinc-400 transition">History</Link>
          <Link href="/whitepaper" className="hover:text-zinc-400 transition">Whitepaper</Link>
          <Link href="/#footer" className="hover:text-zinc-400 transition">Contact</Link>
        </nav>


        {/* Burger Icon for Mobile */}
        <button onClick={toggleMobile} className="md:hidden">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />} {/* 3-bar icon */}
        </button>
      </div>

      {/* Mobile Nav Animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-zinc-900 px-6 pb-4 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col space-y-3 text-lg pt-4">
              <Link href="/#about" onClick={toggleMobile}>About</Link>
              <Link href="/#intro" onClick={toggleMobile}>History</Link>
              <Link href="/whitepaper" onClick={toggleMobile}>Whitepaper</Link>
              <Link href="/#footer" onClick={toggleMobile}>Contact</Link>
            </nav>
        )}
      </AnimatePresence>
    </header>
  );
}

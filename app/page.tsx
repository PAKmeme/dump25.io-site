import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <Image
          src="/logo.png"
          alt="DUMP25 Logo"
          width={192}
          height={192}
          className="mb-8"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          THE REVENGE IS HERE
        </h1>
        <p className="text-xl text-gray-300 mb-8">Join the movement.</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="/whitepaper.pdf"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg shadow-xl"
            target="_blank"
          >
            Whitepaper
          </a>
          <a
            href="#buy"
            className="border border-red-600 hover:bg-red-600 hover:text-white text-red-600 px-6 py-3 rounded-xl text-lg"
          >
            Buy Now
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 bg-zinc-900">
        <h2 className="text-4xl font-bold mb-6 text-center">What is DUMP25?</h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          DUMP25 is the revenge of the liquidated. A memecoin created for all those who got rekt by the market: liquidated, manipulated, or forced to sell at a loss. Like GameStop, DUMP25 is a movement — a symbol of fightback and power to the people.
        </p>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 px-6 bg-zinc-800">
        <h2 className="text-4xl font-bold mb-6 text-center">Tokenomics</h2>
        <ul className="text-gray-300 max-w-xl mx-auto text-lg space-y-2"> 
       </ul>
       <div className="flex justify-center py-8">
  <img src="/tokenomics.png" alt="Tokenomics Chart" className="w-full max-w-2xl" />
</div>
 
      </section>

      {/* Vesting */}
      <section id="vesting" className="py-20 px-6 bg-zinc-900">
        <h2 className="text-4xl font-bold mb-6 text-center">Vesting</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto">
          8.6M tokens already in circulation.<br />
          25M tokens unlocked every 1st of the month for 12 months (starting May).<br />
          Final unlock: 95.7M over the last 2 months.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zinc-800">
        <h2 className="text-4xl font-bold mb-6 text-center">About</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto">
          I’m <strong>Pak</strong>, a degenerate builder who turned frustration into fuel. This is for everyone who ever got dumped on. DUMP25 isn't just a token. It's our answer.
        </p>
      </section>

      {/* Contact & Socials */}
      <footer className="py-12 bg-black text-center text-gray-400 text-sm space-y-4">
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <a href="https://twitter.com/Thedump25" className="hover:text-white">X (Twitter)</a>
          <a href="https://t.me/+kdThjHWnV-JjZDY8" className="hover:text-white">Telegram</a>
          <a href="https://github.com/PAKmeme" className="hover:text-white">GitHub</a>
          <a href="mailto:contact@dump25.io" className="hover:text-white">contact@dump25.io</a>
        </div>
        <p>© 2025 DUMP25. Built by the liquidated. For the liquidated.</p>
      </footer>
    </main>
  );
}

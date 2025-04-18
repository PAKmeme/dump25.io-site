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

      {/* History / Revolution Section */}
      <section id="intro" className="bg-black text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10">The Revolution Begins</h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            In a market ruled by whales, manipulators, and short-sellers, millions of retail investors have been left behind. Liquidated. Shaken out. Forgotten.
            <br /><br />
            <strong>DUMP25</strong> was born out of this injustice — a decentralized symbol of resistance. This is not just a token. It's a movement.
            <br /><br />
            It represents every trader who got stopped out by engineered volatility. Every degen forced to sell low, just to watch the price moon without them.
            <br /><br />
            <em className="block text-2xl font-semibold text-white mt-6">We are done playing by their rules. Now, we write our own.</em>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">About the Founder — Pak</h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            DUMP25 was not created by a VC, a hedge fund, or a tech conglomerate. It was created by one of us.
            <br /><br />
            <strong>Pak</strong>, a retail trader who faced the harshest sides of the market — forced liquidations, fake pumps, rugpulls, and manipulation.
            <br /><br />
            <em className="block text-2xl text-white">"I didn’t want to play their game anymore — I wanted to flip the board."</em>
            <br /><br />
            With DUMP25, Pak isn’t just launching a token — he’s launching a war cry. A symbol of unity for those wrecked by the system.
            <br /><br />
            <strong>No VC allocations. No private sales. No manipulation. Just pure community.</strong>
          </p>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 px-6 bg-zinc-800">
        <h2 className="text-4xl font-bold mb-6 text-center">Tokenomics</h2>
        <div className="flex justify-center py-8">
          <img src="/tokenomics.png" alt="Tokenomics Chart" className="w-full max-w-7xl object-cover" />
        </div>
      </section>

      {/* Vesting */}
      <section id="vesting" className="py-20 px-6 bg-zinc-900 text-white">
        <h2 className="text-4xl font-bold mb-10 text-center">Vesting Schedule</h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-zinc-300 mb-12">
          DUMP25 will be released gradually to ensure healthy supply and long-term sustainability. 
          Starting in May: 25M tokens per month for 12 months, then the final 95.7M over the last 2 months.
        </p>
        <div className="flex justify-center">
          <img
            src="/vesting.png"
            alt="Vesting Schedule"
            className="w-full max-w-6xl rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Footer */}
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

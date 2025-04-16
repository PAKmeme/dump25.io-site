import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <img
          src="/logo.png"
          alt="DUMP25 Logo"
          className="w-48 h-48 mb-8"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4">\          THE REVENGE IS HERE
        </h1>
        <p className="text-xl text-gray-300 mb-8">Join the movement.</p>
        <div className="flex gap-4">
          <a
            href="#tokenomics"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg shadow-xl"
          >
            Explore Tokenomics
          </a>
          <a
            href="#buy"
            className="border border-red-600 hover:bg-red-600 hover:text-white text-red-600 px-6 py-3 rounded-xl text-lg"
          >
            Buy Now
          </a>
        </div>
      </section>

      {/* Placeholder for Tokenomics / Vesting / Info sections */}
      <section id="tokenomics" className="py-20 px-6 bg-zinc-900">
        <h2 className="text-4xl font-bold mb-6 text-center">Tokenomics</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          {/* Add tokenomics content here later */}
          Coming soon: distribution details, supply breakdown, and more.
        </p>
      </section>

      <section id="buy" className="py-20 px-6 bg-zinc-800">
        <h2 className="text-4xl font-bold mb-6 text-center">How to Buy</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          {/* Add step-by-step instructions or link to DEX */}
          You'll be able to purchase DUMP25 on leading decentralized exchanges.
        </p>
      </section>

      <footer className="py-12 text-center text-sm text-gray-500 bg-black">
        © 2025 DUMP25. Built by the liquidated. For the liquidated.
      </footer>
    </main>
  );
}

export default function Whitepaper() {
  return (
    <main className="bg-black text-white py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-5xl font-bold text-center">DUMP25 Whitepaper</h1>

        <section>
          <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
          <p className="text-zinc-300 text-lg">
            In a market ruled by whales, manipulators, and short-sellers, millions of retail investors have been left behind. Liquidated. Shaken out. Forgotten.
            <br /><br />
            <strong>DUMP25 (dump)</strong> was born out of this injustice — a decentralized symbol of resistance. It represents every trader who got stopped out by engineered volatility. Every liquidation caused not by bad trades — but by a broken, rigged system.
            <br /><br />
            This is not just a token. It's a movement.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">2. About the Founder</h2>
          <p className="text-zinc-300 text-lg">
            <strong>Pak</strong>, a retail trader and builder, founded DUMP25 after experiencing the dark side of crypto firsthand — forced liquidations, rugpulls, and orchestrated dumps.
            <br /><br />
            Instead of quitting, he launched DUMP25 as a tool of retaliation — built by the liquidated, for the liquidated.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">3. Tokenomics</h2>
          <ul className="text-zinc-300 text-lg space-y-2 list-disc list-inside">
            <li>💧 50% Liquidity</li>
            <li>🎁 5% Airdrop — 25B</li>
            <li>👥 15% Team — 75B</li>
            <li>🏦 20% Reserve — 100B</li>
            <li>📣 10% Marketing — 50B</li>
          </ul>
        </section>

        {/* ✅ Graphique en dehors et proprement intégré */}
        <section className="py-16 text-white px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Token Allocation</h2>
          <div className="flex justify-center">
            <img
              src="/tokenomics.png"
              alt="Tokenomics Chart"
              className="w-full max-w-5xl object-contain"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">4. Vesting</h2>
          <p className="text-zinc-300 text-lg mb-6">
            Initial circulating supply: 8.6M tokens.<br />
            Starting May, 25M tokens will unlock every 1st of the month for 12 months. Final release: 95.7M over the last 2 months.
          </p>
          <div>
            <img
              src="/vesting.png"
              alt="Vesting Schedule"
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">5. Vision</h2>
          <p className="text-zinc-300 text-lg">
            DUMP25 is not a product. It’s a protest.
            <br /><br />
            There are no private sales. No VC manipulation. No centralized control.
            <br /><br />
            This is a movement built to empower those left behind, to reunite the wrecked, and flip the script on those who rig the system.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">6. Contact</h2>
          <p className="text-zinc-300 text-lg">
            Email: <a href="mailto:contact@dump25.io" className="underline">contact@dump25.io</a>
            <br />
            X: <a href="https://x.com/Thedump25" className="underline" target="_blank">@Thedump25</a>
            <br />
            Telegram: <a href="https://t.me/+kdThjHWnV-JjZDY8" className="underline" target="_blank">t.me/+kdThjHWnV-JjZDY8</a>
            <br />
            GitHub: <a href="https://github.com/PAKmeme" className="underline" target="_blank">github.com/PAKmeme</a>
          </p>
        </section>
      </div>
    </main>
  );
}

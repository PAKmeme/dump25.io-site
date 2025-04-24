export default function Whitepaper() {
  return (
    <main className="bg-black text-white py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-5xl font-bold text-center">DUMP25 Whitepaper</h1>
        <a
  href="/whitepaper.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-lg shadow-md"
>
  Download PDF
</a>

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
            <strong>Pak</strong>, is an independent developer and retail trader who has spent years navigating the highs and lows of crypto.
He’s seen the game from the ground level — the forced liquidations, the engineered volatility, the rugpulls masked as innovation.
            <br /><br />
            Disillusioned by a system designed to exploit the individual investor, Pak chose not to exit — but to respond.
            DUMP25 is that response.
            A symbolic stand against manipulation.
            <br /><br />
            The token contract is named TheDump25 on BscScan, while the project is branded as “DUMP25” for clarity and consistency.
          </p>
        </section>
        
       <section>
  <h2 className="text-3xl font-bold mb-4">3. Token Information / Tokenomics</h2>
  <div className="text-zinc-300 text-lg space-y-2">
    <p><strong>Token Name:</strong> DUMP25</p>
    <p><strong>Token Symbol:</strong> $DUMP</p>
    <p><strong>Total Supply:</strong> 1,000,000,000</p>
    <p><strong>Smart Contract Name:</strong> TheDump25</p>
    <p>
      <strong>Smart Contract Address:</strong>{" "}
      <a
        href="https://bscscan.com/address/0xe70894aa930BB5E43505867b05C28523CE66D347"
        className="underline hover:text-white break-words"
        target="_blank"
        rel="noopener noreferrer"
      >
        0xe70894aa930BB5E43505867b05C28523CE66D347
      </a>
    </p>
    <p><strong>Distribution:</strong></p>
    <ul className="list-disc list-inside ml-4">
      <li>50% – Market Liquidity</li>
      <li>5% – Airdrop (25M)</li>
      <li>15% – Team (75M)</li>
      <li>20% – Reserve (100M)</li>
      <li>10% – Marketing (50M)</li>
    </ul>
    <p>
      <strong>Vesting:</strong> 8.6M in circulation at launch, 25M released monthly for 12 months, remaining 95.7M unlocked in the final 2 months.
    </p>
  </div>
</section>


        <section>
          <ul className="text-zinc-300 text-lg space-y-2 list-disc list-inside">
          </ul>
        </section>

        {/* ✅ Graphique en dehors et proprement intégré */}
        <section className="py-16 text-white px-4">
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
            X: <a href="https://x.com/Dump25_io" className="underline" target="_blank">@Dump25_io</a>
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

import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50 text-center flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-orange-600 mb-6">DUMP25</h1>
      <p className="text-lg max-w-xl text-gray-700 mb-8">
        Born from wreckage. Fueled by revenge. DUMP25 is the memecoin for the liquidated, the betrayed, and the relentless.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-6 py-3 rounded-xl shadow-xl">
          Buy Now
        </Button>
        <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-100 text-lg px-6 py-3 rounded-xl">
          Read Whitepaper
        </Button>
      </div>

      <div className="mt-12 text-gray-600">
        <p>📍 Contract: 0xe70894aa930BB5E43505867b05C28523CE66D347</p>
        <p>💬 Follow us on <a href="https://twitter.com/Thedump25" className="text-orange-500 underline">@Thedump25</a></p>
      </div>
    </div>
  );
}

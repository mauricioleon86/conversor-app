import { useState } from "react";

export default function CurrencyConverter() {
  const [bob, setBob] = useState(0);
  const [rateBobToArs, setRateBobToArs] = useState(5); // 1 BOB = 5 ARS
  const [rateArsToUsdt, setRateArsToUsdt] = useState(0.0012); // 1 ARS = 0.0012 USDT

  const ars = bob * rateBobToArs;
  const usdt = ars * rateArsToUsdt;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Conversor BOB → ARS → USDT</h1>

        <label className="block mb-2 font-medium">Monto en Bolivianos (BOB)</label>
        <input
          type="number"
          value={bob}
          onChange={(e) => setBob(parseFloat(e.target.value) || 0)}
          className="w-full p-2 mb-4 border rounded-xl"
        />

        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Tasa BOB → ARS</label>
            <input
              type="number"
              step="0.0001"
              value={rateBobToArs}
              onChange={(e) => setRateBobToArs(parseFloat(e.target.value) || 0)}
              className="w-full p-2 border rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Tasa ARS → USDT</label>
            <input
              type="number"
              step="0.00001"
              value={rateArsToUsdt}
              onChange={(e) => setRateArsToUsdt(parseFloat(e.target.value) || 0)}
              className="w-full p-2 border rounded-xl"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
          <p className="text-lg">🔁 <strong>{bob}</strong> BOB equivalen a:</p>
          <p className="text-green-600 font-bold text-xl mt-2">{ars.toFixed(2)} ARS</p>
          <p className="text-blue-600 font-bold text-xl">{usdt.toFixed(2)} USDT</p>
        </div>
      </div>
    </div>
  );
}

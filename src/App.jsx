import { useState } from "react";

export default function CurrencyConverter() {
  const [bob, setBob] = useState("");
  const [rateBobToArs, setRateBobToArs] = useState("5"); // 1 BOB = 5 ARS
  const [rateArsToUsdt, setRateArsToUsdt] = useState("0.0012"); // 1 ARS = 0.0012 USDT
  const [usdtPriceBob, setUsdtPriceBob] = useState(""); // precio manual del USDT en BOB

  const parsedBob = parseFloat(bob) || 0;
  const parsedRateBobToArs = parseFloat(rateBobToArs) || 0;
  const parsedRateArsToUsdt = parseFloat(rateArsToUsdt) || 0;
  const parsedUsdtPriceBob = parseFloat(usdtPriceBob) || 0;

  const ars = parsedBob * parsedRateBobToArs;
  const usdt = ars * parsedRateArsToUsdt;
  const bsGenerados = usdt * parsedUsdtPriceBob;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-4">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Conversor BOB → ARS → USDT</h1>

          <label className="block mb-2 font-medium">Monto en Bolivianos (BOB)</label>
          <input
            type="number"
            inputMode="decimal"
            value={bob}
            placeholder="Ingresa el monto"
            onChange={(e) => setBob(e.target.value)}
            className="w-full p-2 mb-4 border rounded-xl"
          />

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium">Tasa BOB → ARS</label>
              <input
                type="number"
                step="0.0001"
                inputMode="decimal"
                value={rateBobToArs}
                onChange={(e) => setRateBobToArs(e.target.value)}
                className="w-full p-2 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Tasa ARS → USDT</label>
              <input
                type="number"
                step="0.00001"
                inputMode="decimal"
                value={rateArsToUsdt}
                onChange={(e) => setRateArsToUsdt(e.target.value)}
                className="w-full p-2 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Precio del USDT en Bolivia (BOB)</label>
              <input
                type="number"
                step="0.01"
                inputMode="decimal"
                value={usdtPriceBob}
                onChange={(e) => setUsdtPriceBob(e.target.value)}
                className="w-full p-2 border rounded-xl"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
            <p className="text-lg">🔁 <strong>{parsedBob}</strong> BOB equivalen a:</p>
            <p className="text-green-600 font-bold text-xl mt-2">{ars.toFixed(2)} ARS</p>
            <p className="text-blue-600 font-bold text-xl">{usdt.toFixed(2)} USDT</p>
            {parsedUsdtPriceBob > 0 && (
              <p className="text-purple-600 font-bold text-xl">{bsGenerados.toFixed(2)} Bs. Generados</p>
            )}
          </div>
        </div>
      </div>

      <footer className="text-center text-gray-500 text-sm mt-4">
        Desarrollado por Mauricio Leon
      </footer>
    </div>
  );
}

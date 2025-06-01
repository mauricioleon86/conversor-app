import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

export default function CurrencyConverter() {
  const [bob, setBob] = useState("");
  const [rateBobToArs, setRateBobToArs] = useState("5");
  const [usdtPriceBob, setUsdtPriceBob] = useState("");
  const [copied, setCopied] = useState(null);

  const normalizeInput = (value) => value.replace(",", ".");

  const parsedBob = parseFloat(bob) || 0;
  const parsedRateBobToArs = parseFloat(normalizeInput(rateBobToArs)) || 0;
  const parsedUsdtPriceBob = parseFloat(normalizeInput(usdtPriceBob)) || 0;

  const ars = parsedBob * parsedRateBobToArs;
  const arsPerUsdt = 1210.67;
  const usdt = ars / arsPerUsdt;
  const bsGenerados = usdt * parsedUsdtPriceBob;

  const copyToClipboard = (value, label) => {
    navigator.clipboard.writeText(value.toFixed(2));
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-4 font-sans">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/style_converter_logo_cropped.png"
              alt="Style Converter Logo"
              className="w-24 h-24 mb-2"
            />
            <h1 className="text-3xl font-extrabold text-center text-indigo-700 tracking-tight">
              Calculadora de Divisas
            </h1>
          </div>

          <label className="block mb-2 font-semibold text-gray-700">Monto en Bolivianos (BOB)</label>
          <input
            type="text"
            inputMode="decimal"
            value={bob}
            placeholder="Ingresa el monto"
            onChange={(e) => setBob(e.target.value)}
            className="w-full p-3 mb-4 border rounded-xl text-lg"
          />

          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">Tasa BOB → ARS</label>
              <input
                type="text"
                inputMode="decimal"
                value={rateBobToArs}
                onChange={(e) => setRateBobToArs(e.target.value)}
                className="w-full p-2 border rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Precio del USDT en Bolivia (BOB)</label>
              <input
                type="text"
                inputMode="decimal"
                value={usdtPriceBob}
                onChange={(e) => setUsdtPriceBob(e.target.value)}
                className="w-full p-2 border rounded-xl"
              />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-2xl shadow-inner"
          >
            <div className="mb-3">
              <p className="text-gray-600">🔁 <strong>{parsedBob}</strong> BOB equivalen a:</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-green-600 font-bold text-xl">{ars.toFixed(2)} ARS</p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-gray-600">💱 Monto estimado en USDT:</p>
              <div className="flex justify-between items-center">
                <p className="text-blue-600 font-bold text-xl">{usdt.toFixed(2)} USDT</p>
                <button onClick={() => copyToClipboard(usdt, "usdt")} className="ml-2">
                  {copied === "usdt" ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {parsedUsdtPriceBob > 0 && (
              <div>
                <p className="text-gray-600">💵 Bs. Generados:</p>
                <div className="flex justify-between items-center">
                  <p className="text-purple-600 font-bold text-xl">{bsGenerados.toFixed(2)} BOB</p>
                  <button onClick={() => copyToClipboard(bsGenerados, "bs")} className="ml-2">
                    {copied === "bs" ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <footer className="text-center text-gray-400 text-sm mt-4">
        Desarrollado por Mauricio Leon
      </footer>
    </div>
  );
}

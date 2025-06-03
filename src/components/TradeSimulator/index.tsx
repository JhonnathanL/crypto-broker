import { useEffect, useState } from "react";
import "./styles.css";

const TradeSimulator: React.FC = () => {
  const [usdBalance, setUsdBalance] = useState<number>(1000);
  const [balances, setBalances] = useState<{ bitcoin: number; ethereum: number }>({
    bitcoin: 0,
    ethereum: 0,
  });
  const [amount, setAmount] = useState<string>("");
  const [selectedCoin, setSelectedCoin] = useState<"bitcoin" | "ethereum">(
    "bitcoin"
  );
  const [prices, setPrices] = useState<{ bitcoin: number; ethereum: number }>({
    bitcoin: 0,
    ethereum: 0,
  });

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
    )
      .then((res) => res.json())
      .then((data) => {
        setPrices({
          bitcoin: data.bitcoin.usd,
          ethereum: data.ethereum.usd,
        });
      })
      .catch(() => {
        // ignore fetch errors
      });
  }, []);

  const buy = () => {
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) return;
    const price = prices[selectedCoin];
    const cost = amountNum * price;
    if (cost > usdBalance) {
      alert("Saldo insuficiente");
      return;
    }
    setUsdBalance(usdBalance - cost);
    setBalances({
      ...balances,
      [selectedCoin]: balances[selectedCoin] + amountNum,
    });
    setAmount("");
  };

  const sell = () => {
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) return;
    if (amountNum > balances[selectedCoin]) {
      alert("Você não possui essa quantidade de " + selectedCoin.toUpperCase());
      return;
    }
    const price = prices[selectedCoin];
    setUsdBalance(usdBalance + amountNum * price);
    setBalances({
      ...balances,
      [selectedCoin]: balances[selectedCoin] - amountNum,
    });
    setAmount("");
  };

  return (
    <div className="trade-simulator mt-8">
      <h2 className="text-xl font-semibold mb-2">Simulador de Operações</h2>
      <p>Saldo em USD: ${usdBalance.toFixed(2)}</p>
      <p>
        BTC: {balances.bitcoin.toFixed(8)} | ETH: {balances.ethereum.toFixed(8)}
      </p>
      <p>
        Preço atual {selectedCoin.toUpperCase()}: $
        {prices[selectedCoin] ? prices[selectedCoin].toFixed(2) : "..."}
      </p>
      <div className="flex gap-2 mt-4">
        <select
          value={selectedCoin}
          onChange={(e) => setSelectedCoin(e.target.value as "bitcoin" | "ethereum")}
          className="text-black border p-1"
        >
          <option value="bitcoin">BTC</option>
          <option value="ethereum">ETH</option>
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`Quantidade de ${selectedCoin.toUpperCase()}`}
          className="border p-1 text-black"
        />
        <button onClick={buy} className="bg-green-600 px-2 py-1 rounded">Comprar</button>
        <button onClick={sell} className="bg-red-600 px-2 py-1 rounded">Vender</button>
      </div>
    </div>
  );
};

export default TradeSimulator;

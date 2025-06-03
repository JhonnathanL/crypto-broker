import { useEffect, useState } from "react";
import CryptoCharts from "../CryptoCharts";
import "./styles.css"

const CryptoCard: React.FC = () => {
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

  return (
    <div>
      <img
        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
        alt="bitcoin chart"
      />
      <h1 className="text-[2rem] font-semibold">Preço do Bitcoin (BTC)</h1>
      <p>
        BTC para USD: 1 Bitcoin é igual a $
        {prices.bitcoin ? prices.bitcoin.toFixed(2) : "..."} USD
      </p>
      <h1 className="text-[2rem] font-semibold mt-4">Preço do Ethereum (ETH)</h1>
      <p>
        ETH para USD: 1 Ethereum é igual a $
        {prices.ethereum ? prices.ethereum.toFixed(2) : "..."} USD
      </p>
      <CryptoCharts />
    </div>
  );
}

export default CryptoCard;
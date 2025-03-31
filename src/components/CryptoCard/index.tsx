import CryptoCharts from "../CryptoCharts";
import "./styles.css"

const CryptoCard:React.FC = () => {
    return (
    <div >
        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="bitcoin chart" />
        <h1 className="text-[2rem] font-semibold">Preço do Bitcoin (BTC)</h1>
        <p>BTC para USD: 1 Bitcoin é igual a $83,716.48 USD+0.9%</p>
        <CryptoCharts />
    </div>
    )
}

export default CryptoCard;
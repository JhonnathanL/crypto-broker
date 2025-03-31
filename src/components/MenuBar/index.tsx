import "./styles.css";
const MenuBar: React.FC = () => {
  return (
    <>
      <ul className="flex space">
        <li>
            <img src="./src/assets/binance.png" alt="" className="w-45 h-30" />
        </li>
        <li className="w-45 h-30 mt-12 ml-10">
            <a href="#" className="hover:text-yellow-400">Compre Cripto</a>
        </li>
        <li className="w-45 h-30 mt-12 ml-2">
            <a href="#" className="hover:text-yellow-400">Portifolio</a>
        </li>
      </ul>
    </>
  );
};

export default MenuBar;
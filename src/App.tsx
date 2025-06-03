import './App.css'
import MenuBar from './components/MenuBar'
import CryptoCard from './components/CryptoCard'
import TradeSimulator from './components/TradeSimulator'

function App() {

  return (
    <>  
      <MenuBar />
      <div className="ml-[10%] mr-[10%]">
       <CryptoCard />
       <TradeSimulator />
      </div>
    </>
  )
}

export default App

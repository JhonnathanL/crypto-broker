import './App.css'
import MenuBar from './components/MenuBar'
import CryptoCard from './components/CryptoCard'

function App() {

  return (
    <>  
      <MenuBar />
      <div className="ml-[10%] mr-[10%]">
       <CryptoCard />
      </div>
    </>
  )
}

export default App

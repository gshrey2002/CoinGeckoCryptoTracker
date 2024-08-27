import { useState } from 'react'

import './App.css'
import CoinTable from './component/cointable/CoinTable'
import NavBar from './component/navbar/NavBar'
import Banner from './component/banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar />
        <Banner/>
        
        <CoinTable/>
       </div>
    </>
  )
}

export default App

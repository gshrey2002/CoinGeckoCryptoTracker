import { useState } from 'react'

import './App.css'
import CoinTable from './component/cointable/CoinTable'
import NavBar from './component/navbar/NavBar'
import Banner from './component/banner/Banner'
import Home from './Pages/Home'
import { CurrencyContext } from './Context/CoinContext'

function App() {
  const [currency, setCurrency] = useState('usd')


  return (
    <>
    {currency}
    <CurrencyContext.Provider value={{currency, setCurrency}}>
    <Home />
    </CurrencyContext.Provider>
    </>
  )
}

export default App

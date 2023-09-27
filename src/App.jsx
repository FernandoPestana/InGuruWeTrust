import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Principal from './pages/Principal'
import Cart from './components/Cart'
import Thanks from './components/Thanks'

const App = () => {
  return (
    <main className="app">
      <Routes>
        <Route path='/' element={<Principal />}/>
        <Route path='/checkout/*' element={<Cart />}/>
        <Route path='/confirmPurchase=COMPLETED' element={<Thanks />}/>
      </Routes> 
    </main>
  )
}

export default App

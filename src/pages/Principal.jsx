import React from 'react'
import Header from '../layouts/Header'
import Home from '../components/Home'
import About from '../components/About'
import Footer from '../layouts/Footer'

const Principal = () => {
  return (
    <main className="principal">
        <Header />
        <Home />
        <About />
        <Footer />
    </main>
  )
}

export default Principal

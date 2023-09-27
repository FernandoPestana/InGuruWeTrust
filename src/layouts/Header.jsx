import React from 'react'
import './styles/Header.scss'

const Header = () => {
  return (
    <section className="header">
        <div className="header__img-container">
            <img className='header__img' src="public/images/logo2.png" alt="Logo El Guru" />
        </div>
    </section>
  )
}

export default Header

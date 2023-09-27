import React from 'react'
import './styles/Cart.scss'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import FormInfo from './FormInfo'
import FormSend from './FormSend'
import FormPay from './FormPay'

const Cart = () => {

  const navigate = useNavigate(); // Obtiene la función de navegación

  return (
    <main className="cart">
      <div className="cart__container">
        <div className="cart__info-content">
          <div className="cart__logo-container">
            <img src="public/images/image2.png" alt="In guru we trust" />
          </div>
          <nav className="cart__nav">
            <ul className="cart__nav-tier">
              <li className="cart__nav-item"><NavLink>Información</NavLink></li>
              <em className='bx bx-chevron-right'></em>
              <li className="cart__nav-item"><NavLink>Envíos</NavLink></li>
              <em className='bx bx-chevron-right'></em>
              <li className="cart__nav-item"><NavLink>Pagos</NavLink></li>
            </ul> 
          </nav>
          <Routes>
            <Route path='information' element={<FormInfo navigate={navigate} />}/>
            <Route path='shipping' element={<FormSend navigate={navigate} />}/>
            <Route path='payment' element={<FormPay navigate={navigate} />}/>
          </Routes> 
        </div>
        <div className="cart__content">
          <div className="cart__content-container">
            <div className="cart__content-img-container">
              <img src="public/images/image.png" alt="In guru we trust" />
            </div>
            <div className="cart__content-price-container">
              <div className="cart__content-price"><span>Subtotal</span><span>$10000</span></div>
              <div className="cart__content-price"><span>Envío</span><span>$0</span></div>
              <div className="cart__content-price-1"><span>Total</span><span>$10000</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
 )
}

export default Cart

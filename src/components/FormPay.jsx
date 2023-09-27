import React, { useEffect, useState } from 'react'
import './styles/FormPay.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { saveDataToLocalStorage } from '../store/slices/data.slice';

const FormPay = () => {

  const [ checkbox, setCheckbox ] = useState(true)
  const [isLoading, setIsLoading] = useState(false);
  const data = useSelector((state) => state.data);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChancheBox = () => {
    setCheckbox(false)
  }
  
  const handleChancheBox1 = () => {
    setCheckbox(true)
  }

  const handleGoInfo = () => {
    navigate('/checkout/information')
  }

  const handleGoShipping = () => {
    navigate('/checkout/shipping')
  }

  const handlePayNowClick = async () => {
    dispatch(saveDataToLocalStorage());
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:3000/create-order');
      //https://paypalcheckout.onrender.com/
      const paypalURL = response.data.links[1].href;
      window.location.href = paypalURL 
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  };

  const handleApplePay = async () => {
    dispatch(saveDataToLocalStorage());
    setIsLoading(true)
    try {
      const response = await axios.post('https://stripecheckout.onrender.com/create-checkout-session');
      const paypalURL = response.data.url;
      window.location.href = paypalURL 
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  }

  return (
    <main className="formpay">
      <div className="formpay__container">
        <div className="formpay__confirm">
          <div className="formpay__confirm-email">
            <h5 className="formpay__confirm-email-title-container"><span>Contacto</span></h5>
            <p className="formpay__confirm-email-span-container"><span>{data.email}</span></p>
            <div className="formpay__confirm-email-btn-container"><button onClick={handleGoInfo}>cambiar</button></div>
          </div>
          <div className="formpay__confirm-email">
            <h5 className="formpay__confirm-email-title-container"><span>Enviar a</span></h5>
            <p className="formpay__confirm-email-span-container"><span>{data.adress}, {data.city}, {data.country}</span></p>
            <div className="formpay__confirm-email-btn-container"><button onClick={handleGoInfo}>cambiar</button></div>
          </div>
          <div className="formpay__confirm-email">
            <h5 className="formpay__confirm-email-title-container"><span>Método</span></h5>
            <p className="formpay__confirm-email-span-container"><span>Envío - $0.0</span></p>
            <div className="formpay__confirm-email-btn-container"><button></button></div>
          </div>
        </div>
        <div className="formpay__payment">
          <h3 className="formpay__payment-title"><span>Pagos</span></h3>
          <p className="formpay__payment-p">Todos los pagos son seguros y están encriptados</p>
          <div className="formpay__payment-method-container"> 
            <label onClick={handleChancheBox1} className='formpay__payment-method-label'>
              <div className="formpay__payment-method-circle">
                {checkbox ? (
                  <em className='bx bx-radio-circle-marked'></em>
                ) : (
                  <em className='bx bx-radio-circle'></em>
                )}
              </div>    
              <div className="formpay__payment-method-title">
                <span>Checkout Paypal</span>
              </div>
              <div className="formpay__payment-method-card-container">
                <div className="formpay__payment-method-card"><img src="public/images/visa.svg" alt="Visa" /></div>
                <div className="formpay__payment-method-card"><img src="public/images/mastercard.svg" alt="Mastercard" /></div>
                <div className="formpay__payment-method-card"><img src="public/images/americanexpress.svg" alt="American Express" /></div>
              </div>
            </label>
          </div>
          <div className="formpay__payment-method-container">
            <label onClick={handleChancheBox} className="formpay__payment-method-label">
              <div className="formpay__payment-method-circle">
                {checkbox ? (
                  <em  className='bx bx-radio-circle'></em>
                ) : (
                  <em className='bx bx-radio-circle-marked'></em>
                )}
              </div>
              <div className="formpay__payment-method-title">
                <span>Checkout Stripe</span>
              </div>
              <div className="formpay__payment-method-card-container">
                <div className="formpay__payment-method-card"><em className='bx bxl-google' ></em></div>
                <div className="formpay__payment-method-card"><em className='bx bxl-apple'></em></div>
                <div className="formpay__payment-method-card"><img src="public/images/visa.svg" alt="Visa" /></div>
                <div className="formpay__payment-method-card"><img src="public/images/mastercard.svg" alt="Mastercard" /></div>
                <div className="formpay__payment-method-card"><img src="public/images/americanexpress.svg" alt="American Express" /></div>
              </div>
            </label>
          </div>
        </div>
        <div className="formpay__btn-container">
          <div onClick={handleGoShipping} className="formpay__btn-back-container">
            <em className='bx bx-chevron-left'></em>
            <span>Volver a Envíos</span>
          </div>
          {
            checkbox ? (
              <button onClick={handlePayNowClick} className={`formpay__btn ${ isLoading ? 'disabled' : ''}`}><span>{ isLoading ? 'Redirigiendo...' : 'Pagar ahora' }</span></button>
            ):
              <button onClick={handleApplePay} className={`formpay__btn ${ isLoading ? 'disabled' : ''}`}><span>{ isLoading ? 'Redirigiendo...' : 'Pagar ahora' }</span></button>
          }
          
        </div>
      </div>
    </main>
  )
}

export default FormPay

import React from 'react'
import './styles/FormSend.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const FormSend = () => {

  const navigate = useNavigate()
  const data = useSelector((state) => state.data);

  const handleGoInfo = () => {
    navigate('/checkout/information')
  }

  const handleGoPayment = () => {
    navigate('/checkout/payment')
  }

  return (
    <form className="formsend">
      <div className="formsend__container">
        <div className="formsend__confirm">
          <div className="formsend__confirm-email">
            <h5 className="formsend__confirm-email-title-container"><span>Contacto</span></h5>
            <p className="formsend__confirm-email-span-container"><span>{data.email}</span></p>
            <div className="formsend__confirm-email-btn-container"><button onClick={handleGoInfo}>cambiar</button></div>
          </div>
          <div className="formsend__confirm-email">
            <h5 className="formsend__confirm-email-title-container"><span>Enviar a</span></h5>
            <p className="formsend__confirm-email-span-container"><span>{data.adress}, {data.city}, {data.country}</span></p>
            <div className="formsend__confirm-email-btn-container"><button onClick={handleGoInfo}>cambiar</button></div>
          </div>
        </div>
        <div className="formsend__send-container">
          <h5 className="formsend__send-title-container"><span>Envíos</span></h5>
          <div className="formsend__send-price-container">
            <div className="formsend__send-price-name"><span>Envío </span></div>
            <div className="formsend__send-price"><span>$0.0</span></div>
          </div>
        </div>
        <div className="formsend__btn-container">
          <div onClick={handleGoInfo} className="formsend__btn-back-container">
            <em className='bx bx-chevron-left'></em>
            <span>Volver a informacion</span>
          </div>
          <button onClick={handleGoPayment} className="formsend__btn">Continuar con el pago</button>
        </div>
      </div>
    </form>
  )
}

export default FormSend

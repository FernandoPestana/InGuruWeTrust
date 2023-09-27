import React from 'react'
import './styles/Home.scss'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  const handleButton = () => {
    navigate('checkout/information')
    window.scrollTo(0, 0)
  }

  return (
    <main className="home">
      <div className="home__container">
        <div className="home__img-content">
          <div className="home__img-container">
            <img src="public/images/mockup.png" alt="In guru we trust" className="home__img" />
            <img src="public/images/mockupmovil.png" alt="In guru we trust" className="home__img1" />
          </div>
        </div>
        <div className="home__info-container">
          <div className="home__info-content">  
            <h1 className="home__info-title-container">
              <p className="home__info-title">Tu camino al éxito en la era <span>digital</span></p>
            </h1>
            <p className="home__info-p-container">
              <span className="home__info-p">Aprovecha esta oportunidad y transforma tu futuro</span>
            </p>
            <div className="home__info-btn-container">
              <button onClick={handleButton} className="home__info-btn">Lo quiero</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home__div-absolute">
        <div className="home__div"></div>
      </div>
    </main>
  )
}

export default Home

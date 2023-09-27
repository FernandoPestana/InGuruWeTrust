import React from 'react'
import './styles/Footer.scss'

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <img src="public/images/image2.png" alt="El Guru" />
          <div className="footer__legal-container">
            <p className="footer__legal">
              © 2023 - El Guru. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

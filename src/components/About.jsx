import React from 'react'
import './styles/About.scss'

const About = () => {
return (
  <main className="about">
    <div className="about__container">
      <div className="about__img-container">
        <img src="public/images/guru.png" alt="El Guru" />
      </div>
      <div className="about__about-container">
        <h3 className="about__about-title-container">
          <span className="about__about-title">Acerca del libro</span>
        </h3>
        <div className="about__about-p-container">
          <p className="about__about-p">
            En in guru we trust, Angel 'El guru' Vera ofrece una nueva
            interpretación de la autoayuda, dirigida especialmente a los creativos y
            emprendedores de la generación millennial y gen z. 'El guru'
            transforma frases de motivación en leyes que resonarán con aquellos
            inmersos en la era de la tecnología y las redes sociales.
            Este libro es mucho más que un simple manual de frases motivacionales.
            Es una guía de navegación audaz e innovadora para quienes se
            encuentran en la vanguardia de la revolución digital. Cada mandamiento
            y ley habla directamente a los desafíos y oportunidades que enfrentan
            los emprendedores y creativos de hoy, desde la construcción de
            marcas en línea hasta la gestión de la presión constante de la
            innovación. <br /> <br />
            Con su enfoque único, In guru we trust reconoce que la creatividad y
            el emprendimiento en el siglo xxi no se parecen a nada de lo que hemos
            visto antes. Las palabras de Angel 'el guru' Vera proporcionan tanto
            una brújula como un espejo, ayudando a los lectores a entender su
            camino y a sí mismos en este emocionante y a veces desconcertante
            nuevo mundo.
            In guru we trust es un manual imprescindible para los líderes del
            mañana. Emprendedores y creativos, aquí encontrarán no solo
            inspiración, sino también un entendimiento más profundo de lo que
            significa triunfar en la era digital. En manos de angel 'el guru' vera.
          </p>
        </div>
      </div>
    </div>
  </main>
)
}

export default About

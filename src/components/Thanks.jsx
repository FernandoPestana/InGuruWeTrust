import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Thanks = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  }

  useEffect(() => {
    // Continuar con la solicitud POST
    const localStorageData = localStorage.getItem('formData');
    const requestData = JSON.parse(localStorageData);

    console.log('Datos:', requestData);
    const hash = window.location.hash;

    if (hash.includes('confirmPurchase=COMPLETED')) {
      console.log('La URL contiene la palabra "COMPLETED".');
      // Realiza la solicitud POST aquí con los datos de requestData
      axios.post('https://fernandopestana.site/book', requestData)
        .then((response) => {
          console.log('Respuesta del servidor:', response.data);
        })
        .catch((error) => {
          console.error('Error al enviar la solicitud POST:', error);
        });
    }
  }, []);

  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '2em 0 0 0'}}>
        <h1 style={{textAlign: 'center', fontSize: '3em'}}>Gracias por la compra</h1>
      </div>
      <div style={{ padding: '2em 0 80vh 0',display: 'flex', justifyContent: 'center'}}>
        <span style={{color: 'blue', textDecoration: 'underline'}} onClick={handleGoHome}>Volver a home</span>
      </div>
    </>
  );
};

export default Thanks;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MiComponente() {
  /* const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paypalConfirm = searchParams.get('paypalConfirm');

  useEffect(() => {
    if (paypalConfirm) {
      // Si paypalConfirm está presente en la URL, puedes utilizarlo aquí
      console.log('Estado de PayPal:', paypalConfirm);
    }
  }, [paypalConfirm]); */

  return (
    <>
        <h1>Gracias por tu compra</h1>
    </>
  );
}

export default MiComponente;
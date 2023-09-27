import React, { useEffect, useState } from 'react'
import './styles/FormInfo.scss'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setDataGlobal } from '../store/slices/data.slice'
import { useSelector } from 'react-redux';

const FormInfo = () => {

  const { register, handleSubmit, formState: { errors }} = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  
  const onSubmit = (data) => {
    dispatch(setDataGlobal(data));
    navigate('/checkout/shipping');
  }

  const handleGoHome = () => {
    window.scrollTo(0,0)
    navigate('/')
  }

  return (
    <form className="forminfo" onSubmit={handleSubmit(onSubmit)}>
      <div className="forminfo__container">
        <div className="forminfo__contact-content">
          <h2 className="forminfo__contact-title">Contacto</h2>
          <div className="forminfo__contact-container input-container">
            <input placeholder=' ' className='forminfo__input' type="text" {...register('email', {
                  required:true,
                  pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Ingresa un correo electrónico válido',
                  },
                  })}
                  defaultValue={data.email || ''}/>
              {errors.email?.type === 'required' && <small className='fail'>Ingresa un correo electrónico</small>}
              {errors.email?.type === 'pattern' && <small className='fail'>El correo no es valido</small>}
            <label className='forminfo__label'>Correo electrónico</label>
          </div>
        </div>
        <div className="forminfo__info-container">
          <h2 className="forminfo__contact-title">Dirección de envío</h2>
          <div className="forminfo__info-flex">
            <div className="forminfo__contact-container">
              <input placeholder=' ' className='forminfo__input' type="text" {...register('country', {
                    required:true })}
                    defaultValue={data.country || ''}/>
                {errors.country?.type === 'required' && <small className='fail'>Ingresa tu país o región</small>}
              <label className='forminfo__label'>País / Región</label>
            </div>
            <div className="forminfo__info-content-container">
              <div className="forminfo__info-content">
                <input placeholder=' ' className='forminfo__input' type="text" {...register('name', {
                      required:true })}
                      defaultValue={data.name || ''}/>
                  {errors.name?.type === 'required' && <small className='fail'>Ingresa tu nombre</small>}
                <label className='forminfo__label'>Nombre</label>
              </div>
              <div className="forminfo__info-content">
                <input placeholder=' ' className='forminfo__input' type="text" {...register('lastname', {
                      required:true })}
                      defaultValue={data.lastname || ''}/>
                  {errors.lastname?.type === 'required' && <small className='fail'>Ingresa tu Apellido</small>}
                <label className='forminfo__label'>Apellidos</label>
              </div>
            </div>
            <div className="forminfo__contact-container">
              <input placeholder=' ' className='forminfo__input' type="text" {...register('id')}
                defaultValue={data.id || ''}/>
              <label className='forminfo__label'>Documento de identidad</label>
            </div>
            <div className="forminfo__contact-container">
              <input placeholder=' ' className='forminfo__input' type="text" {...register('adress', {
                    required:true })}
                    defaultValue={data.adress || ''}/>
                {errors.adress?.type === 'required' && <small className='fail'>Ingresa tu dirección</small>}
              <label className='forminfo__label'>Dirección</label>
            </div>
            <div className="forminfo__contact-container">
              <input placeholder=' ' className='forminfo__input' type="text" {...register('reference')}
                defaultValue={data.reference || ''}/>
              <label className='forminfo__label'>¿Algún lugar de referencia? Ejemplo: Al lado de, frente a...</label>
            </div>
            <div className="forminfo__info-content-container">
              <div className="forminfo__info-content">
                <input placeholder=' ' className='forminfo__input' type="text" {...register('city', {
                      required:true })}
                      defaultValue={data.city || ''}/>
                  {errors.city?.type === 'required' && <small className='fail'>Ingresa tu ciudad</small>}
                <label className='forminfo__label'>Ciudad</label>
              </div>
              <div className="forminfo__info-content">
                <input placeholder=' ' className='forminfo__input' type="text" {...register('state', {
                      required:true })}
                      defaultValue={data.state || ''}/>
                  {errors.state?.type === 'required' && <small className='fail'>Ingresa tu Departamento</small>}
                <label className='forminfo__label'>Departamento</label>
              </div>
              <div className="forminfo__info-content">
                <input placeholder=' ' className='forminfo__input' type="number" {...register('zipcode')}
                  defaultValue={data.zipcode || ''}/>
                <label className='forminfo__label'>Código postal</label>
              </div>
            </div>
            <div className="forminfo__contact-container">
              <input placeholder=' ' className='forminfo__input' type="tel" {...register('phone')}
                defaultValue={data.phone || ''}/>
              <label className='forminfo__label'>Teléfono</label>
            </div>
          </div>
        </div>
        <div className="forminfo__btn-container">
          <div onClick={handleGoHome} className="forminfo__btn-back-container">
            <em className='bx bx-chevron-left'></em>
            <span>Volver a inicio</span>
          </div>
          <button className="forminfo__btn">Continuar a envíos</button>
        </div>
      </div>
    </form>
  )
}

export default FormInfo

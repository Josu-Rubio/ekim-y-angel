import React, { useState } from 'react';
import { useCountdown } from '../../utils/countdown';
import './header.css';

export default function Header() {
  const [days, hours, minutes, seconds] = useCountdown(1664013600000);
  return (
    <div className='header'>
      <div className='main-text'>
        <div className='info'>Nos casamos!</div>
        <div className='name'>Ekim y Ángel</div>
        <div className='info'>Sábado 24 de Septiembre</div>
      </div>
      {days + hours + minutes + seconds <= 0 ? (
        <div>Que nos casamos, señores!</div>
      ) : (
        <div className='counter'>
          <div className='time'>
            <p className='number'>{days}</p> días
          </div>
          <div className='time'>
            <p className='number'>{hours}</p> horas
          </div>
          <div className='time'>
            <p className='number'>{minutes}</p> minutos
          </div>
          <div className='time'>
            <p className='number'>{seconds}</p> segundos
          </div>
        </div>
      )}
    </div>
  );
}

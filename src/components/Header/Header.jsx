import React, { useState } from 'react';
import { useCountdown } from '../../utils/countdown';
import './header.css';

export default function Header() {
  const [days, hours, minutes, seconds] = useCountdown(1664013600000);
  return (
    <div className='header'>
      <div className='main-text'>
        <div>Nos casamos!</div>
        <div className='name'>Ekim y Ángel</div>
        <div>Sábado 24 de Septiembre</div>
      </div>
      {days + hours + minutes + seconds <= 0 ? (
        <div>Que nos casamos, señores!</div>
      ) : (
        <div className='counter'>
          <p className='time'>{days} días</p>
          <p className='time'>{hours} horas</p>
          <p className='time'>{minutes} minutos</p>
          <p className='time'>{seconds} segundos</p>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import './confirm.css';

export default function Confirm() {
  return (
    <div className='confirm'>
      <h2 className='title'>Confirmar Asistencia</h2>
      <p className='info'>Confirmar antes del 10 de Agosto</p>
      <a
        target='_blank'
        href='https://docs.google.com/forms/d/e/1FAIpQLSe2DiU2Ddmy6Ck53cR5WKxaFYPu07eBn01F0q_j1TgFXVDOPQ/viewform?usp=sf_link'
      >
        <button class='btn'>Confirmar</button>
      </a>
    </div>
  );
}

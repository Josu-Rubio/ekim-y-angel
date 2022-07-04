import React from 'react';
import './confirm.css';

export default function Confirm() {
  return (
    <div className='confirm'>
      <h2 className='title'>Confirmar la NO Asistencia</h2>
      <p className='info'>Confirmar antes del 10 de Agosto</p>
      <a target='_blank' href='https://forms.gle/HeAR5Sng4RAdYW446'>
        <button class='btn'>Confirmar</button>
      </a>
    </div>
  );
}

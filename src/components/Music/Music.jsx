import React from 'react';
import './music.css';

export default function Music() {
  return (
    <div className='music'>
      <h2 className='title'>¿Canciones que no pueden faltar?</h2>
      <p className='info'>
        Puedes recomendar canciones o artistas que no pueden faltar en la boda
      </p>
      <a target='_blank' href='https://forms.gle/L71omYPXeE3ufDPz6'>
        <button class='btn'>Sugerir Música</button>
      </a>
    </div>
  );
}

import React from 'react';
import './location.css';

export default function Location() {
  return (
    <div className='location'>
      <h1 className='head-title'>¡Te esperamos en nuestro enlace!</h1>
      <div className='card'>
        <img className='logo' src='/wedding.svg' alt='wedding' />
        <div className='title'>Ceremonia</div>
        <p className='desc'>
          La ceremonia será el sábado 24 de septiembre de 2022 a las 12:30h en
          el Catering La Gran Familia.
        </p>

        <a target='_blank' href='https://g.page/cateringlagranfamilia?share'>
          <button className='btn'> Ver Mapa</button>
        </a>
      </div>
      <div className='card'>
        <img className='logo' src='/party.svg' alt='party' />
        <div className='title'>Fiesta</div>
        <p className='desc'>
          La fiesta será en el mismo lugar que la ceremonia.
        </p>

        <a target='_blank' href='https://g.page/cateringlagranfamilia?share'>
          <button className='btn'>Ver Mapa</button>
        </a>
      </div>
    </div>
  );
}

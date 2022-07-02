import React from 'react';
import './location.css';

export default function Location() {
  return (
    <div className='location'>
      <div className='card'>
        <img className='logo' src='/wedding.svg' alt='wedding' />
        <div className='title'>Ceremonia</div>
        <p className='desc'>
          La ceremonia será el sábado 20 de mayo de 2023 a las 12:00 hs en la
          Parroquia Nuestra Señora de Los Ángeles, Av. El Golf 155, Las Condes,
          Región Metropolitana.
        </p>

        <a target='_blank' href='https://goo.gl/maps/i8FpujfyeZwyVKrLA'>
          <button className='btn'> Ver Mapa</button>
        </a>
      </div>
      <div className='card'>
        <img className='logo' src='/party.svg' alt='party' />
        <div className='title'>Fiesta</div>
        <p className='desc'>
          La fiesta será el sábado 20 de mayo a las 21:00 hs en el Restaurante
          La Gran Familia <br /> Ubicado en Pol. Ind. los Varales, Fontaneros,
          3.
        </p>

        <a target='_blank' href='https://g.page/cateringlagranfamilia?share'>
          <button className='btn'>Ver Mapa</button>
        </a>
      </div>
    </div>
  );
}

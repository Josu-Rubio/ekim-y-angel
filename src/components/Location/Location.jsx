import React from 'react';
import './location.css';

export default function Location() {
  return (
    <div className='location'>
      <div className='card'>
        <img className='logo' src='/wedding.png' alt='wedding' />
        <div className='title'>Ceremonia</div>
        <p className='desc'>
          La ceremonia será el sábado 20 de mayo de 2023 a las 18:00 hs en la
          Parroquia Nuestra Señora de Los Ángeles, Av. El Golf 155, Las Condes,
          Región Metropolitana.
        </p>

        <a target='_blank' href='https://goo.gl/maps/i8FpujfyeZwyVKrLA'>
          <button className='btn'> Ver Mapa</button>
        </a>
      </div>
      <div className='card'>
        <img className='logo' src='/party.png' alt='wedding' />
        <div className='title'>Ceremonia</div>
        <p className='desc'>
          La fiesta será el día sábado 20 de mayo. Los esperamos a las 21:00 hs
          en Club Manquehue, ubicado en Av Vitacura 5841, Vitacura, Región
          Metropolitana.
        </p>

        <a target='_blank' href='https://goo.gl/maps/MCsTHPaR1LHwSW599'>
          <button className='btn'>Ver Mapa</button>
        </a>
      </div>
    </div>
  );
}

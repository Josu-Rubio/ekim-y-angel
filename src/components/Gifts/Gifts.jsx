import React, { useState } from 'react';
import './gifts.css';

export default function Gifts() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    console.log('my pop up');
    setShow(!show);
  };

  return (
    <div className='gift'>
      <div className='card'>
        <img className='logo' src='/gift.svg' alt='gift' />
        <div className='title'>Regalo</div>
        <p className='desc'>
          Si quieres, puedes hacernos un regalo para nuestra boda o luna de
          miel. Hace clic para ver nuestros datos bancarios y hacer una
          transferencia o un depósito
        </p>

        <button className='btn' onClick={handleClick}>
          Ver datos
        </button>
      </div>{' '}
      {show === true ? (
        <div className='data' onClick={handleClick}>
          <div className='card' onClick={console.log('nothing')}>
            <h5>Banco Macro</h5>
            <h5>Caja de ahorro: XXXXXXXX</h5>
            <h5>CBU: XXXXXXXXXXX</h5>
            <h5>Titular: XXXXXXXXX</h5>
            <h5>CUIT / CUIL: XXXXXXXX</h5>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

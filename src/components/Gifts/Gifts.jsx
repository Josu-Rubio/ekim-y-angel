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
          miel.
        </p>

        <button className='btn' onClick={handleClick}>
          Ver datos
        </button>
      </div>{' '}
      {show === true ? (
        <div className='data' onClick={handleClick}>
          <div className='card' onClick={console.log('nothing')}>
            <h2 style={{ fontStyle: 'italic' }}>
              El mejor regalo es que vengáis a nuestro enlace.
            </h2>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

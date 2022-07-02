import React from 'react';
import './story.css';

export default function Story() {
  return (
    <div className='story'>
      <img className='logo' src='/history.svg' alt='history' />
      <div className='title'>Nuestra Historia</div>
      <p className='desc'>
        Nos conocimos en Italia, una cosa llevó a la otra y aquí estamos.
      </p>
      <div className='images'>
        <img src='/images/angelyekim5.jpeg' alt='' />
        <img src='/images/angelyekim2.jpeg' alt='' />
        <img src='/images/angelyekim4.jpeg' alt='' />
      </div>
    </div>
  );
}

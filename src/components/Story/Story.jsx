import React from 'react';
import './story.css';

export default function Story() {
  return (
    <div className='story'>
      <img className='logo' src='/history.svg' alt='history' />
      <div className='title'>Nuestra Historia</div>
      <p className='desc'>
        Nos conocimos en Italia dónde hicimos la Erasmus, siendo amigos. En 2016
        retomamos el contacto: Primero Ángel viajo a Turquía, luego Ekim llegó a
        España. Pese a la barrera lingüística, nuestro amor y cariño, nos ha
        traído hasta aquí y seguirá creciendo. Pero todos vosotros formáis parte
        de esta historia.
      </p>
      <div className='images'>
        <img src='/images/angelyekim5.jpeg' alt='' />
        <img src='/images/angelyekim2.jpeg' alt='' />
        <img src='/images/angelyekim4.jpeg' alt='' />
      </div>
    </div>
  );
}

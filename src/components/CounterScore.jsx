import React from 'react';

const CounterScore = ({ score }) => {
   return (
      <div className='score-counter'>
         <p className='counter-number'>{score}</p>
      </div>
   );
};

export default CounterScore;

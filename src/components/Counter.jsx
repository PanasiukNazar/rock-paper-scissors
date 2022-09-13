import React from 'react';
import CounterLogo from './CounterLogo.jsx';
import CounterScore from './CounterScore.jsx';

const Counter = ({ score }) => {
   return (
      <div className='header-score'>
         <CounterLogo />
         <CounterScore score={score} />
      </div>
   );
};

export default Counter;

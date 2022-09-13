import React from 'react';
import { AVAILABLE_ITEMS } from '../app/items.js';

const ChoiceUp = () => {
  return (
    <div className='choice-up'>
      <div className='up-paper'>
        <img
          className='paper-img'
          src={`./assets/${AVAILABLE_ITEMS.PAPER}.png`}
          data-item={AVAILABLE_ITEMS.PAPER}
        />
      </div>
      <div className='bettwen'></div>
      <div className='up-scissors'>
        <img
          className='paper-img'
          src={`./assets/${AVAILABLE_ITEMS.SCISSORS}.png`}
          data-item={AVAILABLE_ITEMS.SCISSORS}
        />
        ;
      </div>
    </div>
  );
};

export default ChoiceUp;

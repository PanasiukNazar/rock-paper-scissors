import React from 'react';
import { AVAILABLE_ITEMS } from '../app/items.js';

const ChoiceDown = () => {
   return (
      <div className='choice-down'>
         <div className='before'></div>
         <div className='down-rock'>
            <img
               className='rock-img'
               src={`../assets/${AVAILABLE_ITEMS.ROCK}.png`}
               data-item={AVAILABLE_ITEMS.ROCK}
            />
         </div>
         <div className='after'></div>
      </div>
   );
};

export default ChoiceDown;

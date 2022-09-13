import React from 'react';
import CommonResult from './CommonResult.jsx';

const ResultPage = ({ playerItem, computerItem, winner }) => {
   return [
      <div className='player' key={1}>
         <CommonResult
            item={playerItem}
            isWinner={winner === playerItem}
            title='YOU PICKED'
         />
      </div>,

      <div className='computer' key={2}>
         <CommonResult
            item={computerItem}
            isWinner={winner === computerItem}
            title='THE HOUSE PICKED'
         />
      </div>,
   ];
};

export default ResultPage;

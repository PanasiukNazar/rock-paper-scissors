import React from 'react';

const FinalyResult = ({ winner, loser, setNewGame }) => {
   return (
      <div className='result-finish active'>
         <p className={`finish-winner ${winner !== '' ? 'active' : ''}`}>
            YOU WIN
         </p>
         <p
            className={`finish-tie ${
               winner === '' && loser === '' ? 'active' : ''
            }`}
         >
            It's a tie!
         </p>
         <p className={`finish-loser ${loser !== '' ? 'active' : ''}`}>
            YOU LOSE
         </p>
         <button className='start-again' onClick={setNewGame}>
            PLAY AGAIN
         </button>
      </div>
   );
};

export default FinalyResult;

import React from 'react';
import FinalyResult from './FinalyResult.jsx';
import ResultPage from './ResultPage.jsx';
import classNames from 'classnames';

const Result = ({
   playerItem,
   computerItem,
   winner,
   loser,
   setNewGame,
   screen,
}) => {
   return (
      <div
         className={classNames('result', { 'active-section': screen !== null })}
      >
         <ResultPage
            playerItem={playerItem}
            computerItem={computerItem}
            winner={winner}
         />

         <FinalyResult winner={winner} loser={loser} setNewGame={setNewGame} />
      </div>
   );
};

export default Result;

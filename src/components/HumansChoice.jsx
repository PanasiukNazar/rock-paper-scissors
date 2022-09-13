import React from 'react';

const HumansChoice = ({ playerItem }) => {
  return (
    <div className='first-user'>
      <p className='first-user-choice'>YOU PICKED</p>
      <div className='firts-user-choice-item'>
        <img className='first-chosen-item' src={`./assets/${playerItem}.png`} />
      </div>
    </div>
  );
};

export default HumansChoice;

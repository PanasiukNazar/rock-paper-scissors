import React from 'react';

const CommonResult = ({ item, title, isWinner }) => {
  return (
    <div className='common-result'>
      <p className='common-result-choice'>{title}</p>
      <div className={`common-result-choice-item ${isWinner ? 'winner' : ''}`}>
        <img
          className={`common-result-chosen-item ${
            isWinner ? 'winner-item' : ''
          }`}
          src={`./assets/${item}.png`}
        />
      </div>
    </div>
  );
};

export default CommonResult;

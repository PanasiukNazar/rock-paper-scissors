import React from 'react';
import ComputersChoice from './ComputersChoice.jsx';
import HumansChoice from './HumansChoice.jsx';
import classNames from 'classnames';

const Pending = ({ playerItem, screen }) => {
   return (
      <div
         className={classNames('batle', { 'active-section': screen !== null })}
      >
         <HumansChoice playerItem={playerItem} />
         <ComputersChoice />
      </div>
   );
};

export default Pending;

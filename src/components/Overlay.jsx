import React from 'react';
import classNames from 'classnames';

const Overlay = ({ areRulesVisible }) => {
   return (
      <div className={classNames('overlay', { active: areRulesVisible })}></div>
   );
};

export default Overlay;

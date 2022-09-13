import React from 'react';
import ChoiceDown from './ChoiceDown.jsx';
import ChoiceUp from './ChoiceUp.jsx';
import classNames from 'classnames';

const Select = ({ screen, onChangeSection }) => {
   return (
      <div
         className={classNames('container', { active: screen !== null })}
         onClick={onChangeSection}
      >
         <ChoiceUp />
         <ChoiceDown />
      </div>
   );
};

export default Select;

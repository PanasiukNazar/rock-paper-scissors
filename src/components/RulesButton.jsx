import React from 'react';

const RulesButton = ({ toggleRules }) => {
   return (
      <div className='show-rules' onClick={toggleRules}>
         <p className='rules-logo'>RULES</p>
      </div>
   );
};

export default RulesButton;

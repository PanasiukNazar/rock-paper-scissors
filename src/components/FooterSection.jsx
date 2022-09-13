import React from 'react';
import Modal from './Modal.jsx';
import RulesButton from './RulesButton.jsx';

const FooterSection = ({ toggleRules, areRulesVisible }) => {
   return (
      <footer>
         <RulesButton toggleRules={toggleRules} />
         <Modal areRulesVisible={areRulesVisible} toggleRules={toggleRules} />
      </footer>
   );
};

export default FooterSection;

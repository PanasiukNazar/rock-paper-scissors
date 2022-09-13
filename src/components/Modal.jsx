import React from 'react';
import ModalLogo from './ModalLogo.jsx';
import ModalClose from './ModalClose.jsx';
import ModalGuide from './ModalGuide.jsx';
import classNames from 'classnames';

const Modal = ({ areRulesVisible, toggleRules }) => {
   return (
      <div
         className={classNames('rules', { 'active-section': areRulesVisible })}
      >
         <div className='rules-modal'>
            <ModalLogo />
            <ModalClose toggleRules={toggleRules} />
            <ModalGuide />
         </div>
      </div>
   );
};

export default Modal;

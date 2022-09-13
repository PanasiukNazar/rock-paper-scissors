import React from 'react';

const ModalClose = ({ toggleRules }) => {
   return (
      <div className='cap-close'>
         <img
            className='close-modal'
            src='/assets/close-rules.svg'
            onClick={toggleRules}
         />
      </div>
   );
};

export default ModalClose;

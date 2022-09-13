import React from 'react';
import Counter from './Counter.jsx';
import Logo from './Logo.jsx';

const Header = ({ score }) => {
   return (
      <div className='header-section'>
         <Logo />
         <Counter score={score} />
      </div>
   );
};

export default Header;

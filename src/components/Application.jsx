import React, { useState, useMemo, useEffect } from 'react';
import Select from './Select.jsx';
import FooterSection from './FooterSection.jsx';
import Header from './Header.jsx';
import Pending from './Pending.jsx';
import Result from './Result.jsx';
import Overlay from './Overlay.jsx';
import { AVAILABLE_ITEMS } from '../app/items.js';
import { AVAILABLE_STEPS } from '../app/steps.js';

const Application = () => {
   const [playerItem, setPlayerItem] = useState('');
   const [screen, setScreen] = useState(AVAILABLE_STEPS.SELECT);
   const [areRulesVisible, setRulesVisible] = useState(false);
   const [score, setScore] = useState(0);

   const computerItem = useMemo(() => {
      if (!playerItem) {
         return '';
      }

      const values = Object.values(AVAILABLE_ITEMS);

      return values[Math.floor(Math.random() * values.length)];
   }, [playerItem]);

   const [winner, loser] = useMemo(() => {
      if (!playerItem || !computerItem || playerItem === computerItem) {
         return ['', ''];
      }

      const isPlayerVictory =
         (playerItem === AVAILABLE_ITEMS.SCISSORS &&
            computerItem === AVAILABLE_ITEMS.PAPER) ||
         (playerItem === AVAILABLE_ITEMS.PAPER &&
            computerItem === AVAILABLE_ITEMS.ROCK) ||
         (playerItem === AVAILABLE_ITEMS.ROCK &&
            computerItem === AVAILABLE_ITEMS.SCISSORS);

      return isPlayerVictory ? [playerItem, ''] : ['', playerItem];
   }, [playerItem, computerItem]);

   const changeSection = (event) => {
      if (!event.target.hasAttribute('data-item')) {
         return;
      }

      setPlayerItem(event.target.getAttribute('data-item'));
      setScreen(AVAILABLE_STEPS.PENDING);
      setTimeout(() => {
         setScreen(AVAILABLE_STEPS.RESULT);
      }, 1000);
   };

   const setNewGame = () => {
      setPlayerItem('');
      setScreen(AVAILABLE_STEPS.SELECT);
   };

   const toggleRules = () => {
      setRulesVisible(!areRulesVisible);
   };

   useEffect(() => {
      if (winner !== '') {
         setScore(score + 1);
      }
   }, [screen === AVAILABLE_STEPS.RESULT]);

   useEffect(() => {
      if (loser !== '') {
         setScore(score !== 0 ? score - 1 : 0);
      }
   }, [screen === AVAILABLE_STEPS.RESULT]);

   return [
      <div className='main' key={1}>
         <Header score={score} />
         {screen === AVAILABLE_STEPS.SELECT ? (
            <Select onChangeSection={changeSection} screen={screen} />
         ) : null}
         {screen === AVAILABLE_STEPS.PENDING ? (
            <Pending playerItem={playerItem} screen={screen} />
         ) : null}
         {screen === AVAILABLE_STEPS.RESULT ? (
            <Result
               setNewGame={setNewGame}
               playerItem={playerItem}
               computerItem={computerItem}
               winner={winner}
               loser={loser}
               screen={screen}
            />
         ) : null}
         <FooterSection
            toggleRules={toggleRules}
            areRulesVisible={areRulesVisible}
         />
      </div>,
      <Overlay key={2} areRulesVisible={areRulesVisible} />,
   ];
};

export default Application;

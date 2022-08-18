import '../styles/main.scss';

// DOM elements

const $container = document.querySelector('.container');
const $humasChoice = document.querySelector('.first-user');
const $batle = document.querySelector('.batle');
const $result = document.querySelector('.result');
const $score = document.querySelector('.score-counter');
const $showRules = document.querySelector('.show-rules');
const $rules = document.querySelector('.rules');
const $closeRules = document.querySelector('.close-modal');

// State

const AVAILABLE_ITEMS = {
   PAPER: 'paper',
   SCISSORS: 'scissors',
   ROCK: 'rock',
};

const state = {
   current: {
      humansItem: '',
      computersItem: '',
      winner: '',
      loser: '',
      score: 0,
   },

   _listeners: [],

   onChange(listener) {
      this._listeners.push(listener);
   },

   changed() {
      this._listeners.forEach((listener) => listener(this));
   },

   setHumansItem(item) {
      this.current.humansItem = item;
      this.changed();
   },

   setComputersItem() {
      const values = Object.values(AVAILABLE_ITEMS);
      this.current.computersItem =
         values[Math.floor(Math.random() * values.length)];
      this.changed();
   },

   setWinner() {
      if (
         this.current.humansItem.includes(AVAILABLE_ITEMS.SCISSORS) &&
         this.current.computersItem.includes(AVAILABLE_ITEMS.PAPER)
      ) {
         this.current.winner = this.current.humansItem;
      }

      if (
         this.current.humansItem.includes(AVAILABLE_ITEMS.PAPER) &&
         this.current.computersItem.includes(AVAILABLE_ITEMS.ROCK)
      ) {
         this.current.winner = this.current.humansItem;
      }

      if (
         this.current.humansItem.includes(AVAILABLE_ITEMS.ROCK) &&
         this.current.computersItem.includes(AVAILABLE_ITEMS.SCISSORS)
      ) {
         this.current.winner = this.current.humansItem;
      }

      this.scoreAddition();
      this.changed();
   },

   setLoser() {
      if (
         this.current.humansItem.includes(AVAILABLE_ITEMS.PAPER) &&
         this.current.computersItem.includes(AVAILABLE_ITEMS.SCISSORS)
      ) {
         this.current.loser = this.current.humansItem;
      }

      if (
         this.current.humansItem.includes(AVAILABLE_ITEMS.ROCK) &&
         this.current.computersItem.includes(AVAILABLE_ITEMS.PAPER)
      ) {
         this.current.loser = this.current.humansItem;
      }

      if (
         this.current.humansItem.includes(AVAILABLE_ITEMS.SCISSORS) &&
         this.current.computersItem.includes(AVAILABLE_ITEMS.ROCK)
      ) {
         this.current.loser = this.current.humansItem;
      }

      this.scoreSubtraction();
      this.changed();
   },

   setTie() {
      if (this.current.humansItem === this.current.computersItem) {
         this.winner = '';
         this.loser = '';
      }
      this.changed();
   },

   setNewGame() {
      this.current.humansItem = '';
      this.current.computersItem = '';
      this.current.winner = '';
      this.current.loser = '';
      this.changed();
   },

   scoreAddition() {
      if (this.current.winner !== '') {
         this.current.score += 1;
      }
   },

   scoreSubtraction() {
      if (this.current.loser !== '' && this.current.score !== 0) {
         this.current.score -= 1;
      }
   },
};

// Listeners

$container.addEventListener('click', (event) => {
   if (event.target.hasAttribute('data-item')) {
      state.setHumansItem(event.target.getAttribute('src'));
      $container.classList.add('inactive');
      $batle.classList.add('active-section');
   }

   if ($batle.classList.contains('active-section')) {
      setTimeout(() => {
         $batle.classList.remove('active-section');
         state.setComputersItem();
         $result.classList.add('active-section');
         state.setWinner();
         state.setLoser();
         state.setTie();
      }, 1000);
   }
});

$result.addEventListener('click', (event) => {
   if (event.target.classList.contains('start-again')) {
      state.setNewGame();
      $result.classList.remove('active-section');
      $container.classList.remove('inactive');
   }
});

$showRules.addEventListener('click', () => {
   $rules.classList.add('active-section');
});

$closeRules.addEventListener('click', () => {
   $rules.classList.remove('active-section');
});

state.onChange(renderHumasItem);
state.onChange(renderComputersItem);
state.onChange(renderScore);
// Renderers

function renderHumasItem() {
   $humasChoice.innerHTML = `
      <p class="first-user-choice">YOU PICKED</p>
      <div class="firts-user-choice-item">
         <img class="first-chosen-item" src="${state.current.humansItem}" alt="humans choice" />
      </div>
    `;
}

function renderComputersItem() {
   $result.innerHTML = ` 
   <!-- First choice humans block -->

   <div class="result-first-user">
      <p class="result-first-user-choice">YOU PICKED</p>
      <div class="result-firts-user-choice-item ${
         state.current.winner !== '' ? 'winner' : ''
      }">
         <img
            class="result-first-chosen-item ${
               state.current.winner !== '' ? 'winner-item' : ''
            }"
            src="${state.current.humansItem}"
            alt=""
         />
      </div>
   </div>

   <!-- First choice humans block was finished-->

   <!-- Middle block set winner and loser -->

   <div class="result-finish ${
      state.current.winner || state.current.computersItem !== '' ? 'active' : ''
   }"> 
      <p class="finish-winner ${
         state.current.winner !== '' ? 'active' : ''
      }">YOU WIN</p>
      <p class="finish-tie ${
         state.current.winner == '' && state.current.loser == '' ? 'active' : ''
      }">It's a tie!</p>
      <p class="finish-loser ${
         state.current.loser !== '' ? 'active' : ''
      }">YOU LOSE</p>
         <button class="start-again">PLAY AGAIN</button>
   </div>

   <!-- Middle block set winner and loser was finished -->

   <!-- Second choice computer block -->

   <div class="result-second-user">
      <p class="result-second-user-choice">THE HOUSE PICKED</p>
      <div class="result-second-user-choice-item ${
         state.current.loser !== '' ? 'winner' : ''
      }">
         <img class="result-second-chosen-item ${
            state.current.loser !== '' ? 'winner-item' : ''
         }" src="/assets/${state.current.computersItem}.png" />
   </div>
   
   <!-- Second choice computer block was finished -->

   <!-- Result summary was finished -->
   `;
}

function renderScore() {
   $score.innerHTML = ` 
   <p class="counter-number">${state.current.score}</p>
   `;
}

state.changed();

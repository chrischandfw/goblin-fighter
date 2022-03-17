// import functions and grab DOM elements
import { renderGoblin } from './render-utils';

const defeatCounterEl = document.querySelector('#defeat-counter');
const playerHPEl = document.querySelector('#player-hp');
const playerImgEl = document.querySelector('player-img');
const form = document.querySelector('form');
const goblinsListEl = document.querySelector('.goblins');

// let state
let defeatedGoblins = 0;
let playerHP = 75;
let goblins = [
    { name: 'Reincarnated Loki', hp: 3 },
    { name: 'Young Thanos', hp: 9 },
];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const goblinName = data.get('goblin-name');
    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 10),
    };
    goblins.push(newGoblin);

});

function displayGoblins() {
    goblinsListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        if (goblin.hp > 0) {
            goblinEl.addEventListener('click', () => {
                
                if (Math.random() < .33) {
                    goblin.hp--;
                    alert('you hit ' + goblin.name);
                } else {
                    alert('you tried to hit ' + goblin.name + ' but missed!');
                }

                if (goblin.hp === 0) {
                    defeatedGoblins++;
                }
				
                if (playerHP === 0) {
                    playerImgEl.classList.add('game-over');
                    alert('GAME OVER!!!');
                }
				
                playerHPEl.textContent = playerHP;
                defeatCounterEl.textContent = defeatedGoblins;

                displayGoblins();
            });
        }
        goblinsListEl.append(goblinEl);
    }
}

displayGoblins();


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

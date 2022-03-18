// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const defeatCounterEl = document.querySelector('#defeat-counter');
const playerHPEl = document.querySelector('#player-hp');
const playerImgEl = document.querySelector('player-img');
const form = document.querySelector('form');
const goblinsListEl = document.querySelector('.goblins');

// let state
let defeatedGoblins = 0;
let playerHP = 15;
let goblins = [
    { name: 'Loki', hp: 3, strength: 1 },
    { name: 'Young Thanos', hp: 9, strength: 5 },
];

// set event listeners 
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    //const goblinName = data.get('goblin-name');
    const newGoblin = {
        name: data.get('goblin-name'),
        hp: Math.ceil(Math.random() * 10),
    };
    goblins.unshift(newGoblin);

    displayGoblins();

});

function displayGoblins() {
    goblinsListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinsListEl.append(goblinEl);

        if (goblin.hp > 0) {
            goblinEl.addEventListener('click', () => {

                if (playerHP <= 0) {
                    playerImgEl.classList.add('game-over');
                    alert('GAME OVER!');
                    return;
                }
                
                if (Math.random() < .33) {
                    goblin.hp--;
                    alert('Hanuman: Eat this ' + goblin.name + ' !');
                } else {
                    alert(goblin.name + ' : Hahaha! You missed, you weak fool!');
                }

                if (Math.random() < .5) {
                    playerHP--;
                    alert(goblin.name + ' : Taste my wrath!');
                } else {
                    alert(' Hanuman: Cant catch me!');
                }

                if (goblin.hp === 0) {
                    defeatedGoblins++;
                } else if (playerHP <= 0) {
                    playerImgEl.classList.add('game-over');
                    alert('GAME OVER!');
                    return;
                }

                playerHPEl.textContent = playerHP;
                defeatCounterEl.textContent = defeatedGoblins;

                displayGoblins();
            });
        }
        //goblinsListEl.append(goblinEl);
    }
}

displayGoblins();
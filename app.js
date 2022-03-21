import { retainers } from './retainersData';
import { renderRetainers } from './renderRetainers';

const selectEl = document.querySelector = ('.rets-dropdown');
const defeatedMonsterEl = document.querySelector = ('defeated-number');
const errorElement = document.querySelector('#error-message');
const list = document.querySelector('#list');

let defeatedMonsterCount = 0;
let monsters = [
    { id: 0, name: 'Goblin', health: 3, attack: 1 },
    { id: 1, name: 'Flying Goblin', health: 5, attack: 2 }
];

selectEl.addEventListener('change', (e) => {
    const selected = e.target.value;
	
    if (selected === 'none') {
        list.innerHTML = '';
        errorElement.innerHTML = '';
        p.textContent = 'PLEASE SELECT A RETAINER';
        errorElement.appendChild(p);
    } else if (selected === 'hanuman') {
        renderRetainers(0);
    } else if (selected === 'naren') {
		renderRetainers(1);
	} else if (selected === 'gomin') {
		renderRetainers(2);
	} else if (selected === 'anothai') {
		renderRetainers(3);
	} else (selected === 'bounrak') {
		renderRetainers(4);
	}
	
});

function renderRetainers(index) {
	
}
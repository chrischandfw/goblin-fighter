import { retainers } from './retainersData';

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
    } else if ()
	
});
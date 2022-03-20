import { retainers } from './retainersData';

const selectEl = document.querySelector = ('.rets-dropdown');
const defeatedMonsterEl = document.querySelector = ('defeated-number');

let defeatedMonsterCount = 0;
let monsters = [
    { id: 0, name: 'Goblin', health: 3, attack: 1 },
    { id: 1, name: 'Flying Goblin', health: 5, attack: 2 }
];

selectEl.addEventListener('change', (e) => {
    const selected = e.target.value;
	
	
});
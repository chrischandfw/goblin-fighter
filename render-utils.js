export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('img');
	
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');


    nameEl.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    faceEl.src = goblinData.hp > 0 ? './assets/goblinX.png' : './assets/fire.png';
   /* if (goblinData.hp > 0) {
        faceEl.src = './assets/goblinX.png'; 
    } else {
        faceEl.src = './assets/fire.png';
    }*/

    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');
    }

    goblinEl.append(faceEl, nameEl, hpEl);

    return goblinEl;
}
//These are my backup emojis in case images don't show.
//😈
//🔥

//('./assets/goblinX.png')
//('.assets/fire.png')
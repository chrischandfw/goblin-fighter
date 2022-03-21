import { retainers } from './retainersData';

export function renderRetainers() {
    const retainersCard = document.createElement('div');
    retainersCard.classList.add('playerCard', 'flex-column');
    retainersCard.id = retainers.id;

    const retainerName = document.createElement('h4');
    retainerName.textContent = retainers.name;

    const retainerLevel = document.createElement('h4');
    retainerLevel.textContent = retainers.level;

    const retsImage = document.createElement('img');
    retsImage.src = `assets/${retainers.name}-rets.png`;
    retsImage.classList.add('selectRetsImage');

    const retainerStrength = document.createElement('h4');
    retainerStrength.textContent = retainers.strength;

    const retainerAttack = document.createElement('h4');
    retainerAttack.textContent = retainers.attack;

    retainersCard.append(retainerName, retainerLevel, retsImage, retainerStrength, retainerAttack);

    retainersCard.addEventListener('mouseover', function(){retainersCard.classList.add('button-hover');});
    retainersCard.addEventListener('mouseout', function(){retainersCard.classList.remove('button-hover');});

    return retainersCard;
}
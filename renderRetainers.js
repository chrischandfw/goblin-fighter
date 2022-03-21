import { retainers } from './retainersData';

export function renderRetainers() {
    const retainersCard = document.createElement('div');
    const retName = document.createElement('h4');
    const retLevel = document.createElement('h4');
    const retsImage = document.createElement('img');
    const retStrength = document.createElement('h4');
    const retAttack = document.createElement('h4');

    retainersCard.classList.add('playerCard', 'flex-column');
    retainersCard.id = retainers.id;

    retName.textContent = retainers.name;
    retLevel.textContent = retainers.level;

    retsImage.src = `assets/${retainers.name}-rets.png`;
    retsImage.classList.add('selectRetsImage');

    retStrength.textContent = retainers.strength;
    retAttack.textContent = retainers.attack;

    retainersCard.append(retName, retLevel, retsImage, retStrength, retAttack);

    return retainersCard;
}
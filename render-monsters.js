export function renderMonster(monsters) {
    const opponentCardDiv = document.createElement('div');
    opponentCardDiv.classList.add('opponentCard');

    const opponentInfoDiv = document.createElement('div');
    opponentInfoDiv.classList.add('flex-column', 'flex-start');

    const opponentName = document.createElement('p');
    opponentName.textContent = `Name: ${opponent.name}`;

    const opponentHealth = document.createElement('p');
    opponentHealth.textContent = getHealthText(opponent.health);
    opponentHealth.id = `health${opponent.id}`;

    const opponentImage = document.createElement('img');
    opponentImage.src = `assets/${opponent.shortname}-small.png`;
    opponentImage.classList.add('smallImg');

    opponentInfoDiv.append(opponentName, opponentHealth);
    opponentCardDiv.append(opponentInfoDiv, opponentImage);

    return opponentCardDiv;
}

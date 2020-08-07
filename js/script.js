document.addEventListener('DOMContentLoaded', () => {
	// select DOMS:
	const winDeclare = document.querySelector('h2');
	const grid = document.querySelector('.grid');
	let result = document.querySelector('#result');
	let chosenCards = [];
	let chosenCardsId = [];
	let winningCards = [];
	// all card options:
	const cardArray = [
		{
			name    : 'cheeseburger',
			imgCard : 'images/cheeseburger.png',
		},
		{
			name    : 'fries',
			imgCard : 'images/fries.png',
		},
		{
			name    : 'hotdog',
			imgCard : 'images/hotdog.png',
		},
		{
			name    : 'ice-cream',
			imgCard : 'images/ice-cream.png',
		},
		{
			name    : 'milkshake',
			imgCard : 'images/milkshake.png',
		},
		{
			name    : 'pizza',
			imgCard : 'images/pizza.png',
		},
		{
			name    : 'cheeseburger',
			imgCard : 'images/cheeseburger.png',
		},
		{
			name    : 'fries',
			imgCard : 'images/fries.png',
		},
		{
			name    : 'hotdog',
			imgCard : 'images/hotdog.png',
		},
		{
			name    : 'ice-cream',
			imgCard : 'images/ice-cream.png',
		},
		{
			name    : 'milkshake',
			imgCard : 'images/milkshake.png',
		},
		{
			name    : 'pizza',
			imgCard : 'images/pizza.png',
		},
	];

	// sorts the cardArray randomly for each time
	cardArray.sort(() => 1 - Math.floor(Math.random() * cardArray.length));

	// creates game board using cover image
	function createImgCard () {
		for (let i = 0; i < cardArray.length; i++) {
			let imgTag = document.createElement('img');

			imgTag.src = 'images/coverImg.jpg';
			imgTag.setAttribute('data-id', i);

			grid.appendChild(imgTag);

			imgTag.addEventListener('click', flipCard);
		}
	}

	// flips the card that is being clicked
	function flipCard () {
		let imgTagId = this.getAttribute('data-id');

		chosenCards.push(cardArray[imgTagId].name);
		chosenCardsId.push(imgTagId);

		this.src = `${cardArray[imgTagId].imgCard}`;

		if (chosenCards.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	// checks whether selecting cards matches or not
	function checkForMatch () {
		const allImages = document.querySelectorAll('img');
		const chosenCardsIdOne = chosenCardsId[0];
		const chosenCardsIdTwo = chosenCardsId[1];
		if (chosenCards[0] === chosenCards[1]) {
			allImages[chosenCardsIdOne].src = 'images/blank.png';
			allImages[chosenCardsIdTwo].src = 'images/blank.png';
			allImages[chosenCardsIdOne].removeEventListener('click', flipCard);
			allImages[chosenCardsIdTwo].removeEventListener('click', flipCard);
			winningCards.push(chosenCards);
			result.textContent = winningCards.length * 10;
		} else {
			allImages[chosenCardsIdOne].src = 'images/coverImg.jpg';
			allImages[chosenCardsIdTwo].src = 'images/coverImg.jpg';
			alert('Not Matched! Try Again!');
		}
		chosenCards = [];
		chosenCardsId = [];
		if (winningCards.length === cardArray.length / 2) {
			winDeclare.textContent = "Congratulations! You've won the game!";
		}
	}
	createImgCard();
});

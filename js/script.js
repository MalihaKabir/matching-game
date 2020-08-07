document.addEventListener('DOMContentLoaded', () => {
	// select DOMS:
	const result = document.querySelector('#result');
	const winDeclare = document.querySelector('h2');
	const grid = document.querySelector('.grid');
	let chosenCard = [];
	let chosenCardId = [];
	let winningCards = [];
	// all card options:
	const cardArray = [
		{
			name : 'cheeseburger',
			img  : 'images/cheeseburger.png',
		},
		{
			name : 'fries',
			img  : 'images/fries.png',
		},
		{
			name : 'hotdog',
			img  : 'images/hotdog.png',
		},
		{
			name : 'ice-cream',
			img  : 'images/ice-cream.png',
		},
		{
			name : 'pizza',
			img  : 'images/pizza.png',
		},
		{
			name : 'milkshake',
			img  : 'images/milkshake.png',
		},
		{
			name : 'cheeseburger',
			img  : 'images/cheeseburger.png',
		},
		{
			name : 'fries',
			img  : 'images/fries.png',
		},
		{
			name : 'hotdog',
			img  : 'images/hotdog.png',
		},
		{
			name : 'ice-cream',
			img  : 'images/ice-cream.png',
		},
		{
			name : 'pizza',
			img  : 'images/pizza.png',
		},
		{
			name : 'milkshake',
			img  : 'images/milkshake.png',
		},
	];

	// sorts the cardArray randomly for each time
	cardArray.sort(() => 1 - Math.floor(Math.random() * cardArray.length - 1));

	// creates game board using cover image
	function showCoverImg () {
		for (let i = 0; i < cardArray.length; i++) {
			const coverImg = document.createElement('img');

			coverImg.src = 'images/coverImg.jpg';
			coverImg.setAttribute('data-id', i);

			grid.appendChild(coverImg);
			coverImg.addEventListener('click', flipCard);
		}
	}

	// flips the card that is being clicked
	function flipCard () {
		let imgId = this.getAttribute('data-id');
		this.src = cardArray[imgId].img;

		chosenCard.push(cardArray[imgId].name);
		chosenCardId.push(imgId);

		if (chosenCard.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	// checks whether selecting cards matches or not
	function checkForMatch () {
		let cardIdOne = chosenCardId[0];
		let cardIdTwo = chosenCardId[1];
		const imgFromDOM = document.querySelectorAll('img');
		if (chosenCard[0] === chosenCard[1]) {
			imgFromDOM[cardIdOne].src = 'images/blank.png';
			imgFromDOM[cardIdTwo].src = 'images/blank.png';
			imgFromDOM[cardIdOne].removeEventListener('click', flipCard);
			imgFromDOM[cardIdTwo].removeEventListener('click', flipCard);
			winningCards.push(chosenCard);
			result.textContent = winningCards.length * 10;
		} else {
			imgFromDOM[cardIdOne].src = 'images/coverImg.jpg';
			imgFromDOM[cardIdTwo].src = 'images/coverImg.jpg';
			alert('Not matched! Try again!');
		}

		// make these arrays empty again
		chosenCard = [];
		chosenCardId = [];

		if (winningCards.length === cardArray.length / 2) {
			winDeclare.textContent = "Congratulations! You've won the game!";
		}
	}

	showCoverImg();
});

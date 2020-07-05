document.addEventListener('DOMContentLoaded', () => {
	// all card options
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
			name : 'milkshake',
			img  : 'images/milkshake.png',
		},
		{
			name : 'pizza',
			img  : 'images/pizza.png',
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
			name : 'milkshake',
			img  : 'images/milkshake.png',
		},
		{
			name : 'pizza',
			img  : 'images/pizza.png',
		},
	];

	// finally, sort the game randomly!
	cardArray.sort(() => 0.5 - Math.random());

	// select DOMS:
	const grid = document.querySelector('.grid'); // grab div element with class grid
	const resultDisplay = document.querySelector('#result'); // grab the span element for result
	let cardsChosen = []; // make an array of chosen card that is initially empty
	let cardschosenId = []; // for card id
	let winningCards = []; // for winning cards

	// create game board
	function createBoard () {
		for (let i = 0; i < cardArray.length; i++) {
			// create an img element for each card
			let card = document.createElement('img');

			// set attributes for each card
			card.setAttribute('src', 'images/blank.jpg');
			card.setAttribute('data-id', i);

			// add an eventLister for if the cards have been clicked on
			card.addEventListener('click', flipCard);

			// put all the cards/imgs into the grid element
			grid.appendChild(card);
		}
	}

	// check for match
	function checkForMatch () {
		const cards = document.querySelectorAll('img');
		// we've two values now in our cardChosen array as well as our card chosenID
		const optionOneId = cardschosenId[0];
		const optionTwoId = cardschosenId[1];

		if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match!');
			// also assign both of them a white.png for styling
			cards[optionOneId].setAttribute('src', 'images/white.png');
			cards[optionTwoId].setAttribute('src', 'images/white.png');
			cards[optionOneId].removeEventListener('click', flipCard);
			cards[optionTwoId].removeEventListener('click', flipCard);
			winningCards.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.jpg');
			cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
			alert('Sorry, try again');
		}
		// either way, clear the cardChosen and cardchosenId arrays So, it becomes ready to flip again
		cardsChosen = [];
		cardschosenId = [];
		// store how many times the player won
		resultDisplay.textContent = winningCards.length;
		// show the winning massage
		if (winningCards.length === cardArray.length / 2) {
			resultDisplay.textContent = 'Congratulations! You found them all!';
		}
	}

	// flip your card
	function flipCard () {
		// to get data-id attribute from the function above, set a variable of card id
		let cardId = this.getAttribute('data-id');
		// we'll push the card from the card array based on the selected cardId
		cardsChosen.push(cardArray[cardId].name); // after locate the card, we'll get it's name
		// do the same but this time only for card id
		cardschosenId.push(cardId);
		// since flipCard is already in a func, we take it already have a card picked.
		// this setattribute will let us add an img to the square based on the card id it holds.
		this.setAttribute('src', cardArray[cardId].img);
		// if two cards are selected, check for match
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500); // take time to check (500mlsec)
		}
	}

	createBoard();
});

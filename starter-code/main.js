var cards = ["queen", "queen","king","king"];
var cardsInPlay = [];
var wins=0;
var losses=0;



var isMatch = function(cardsInPlay)
{
	if (cardsInPlay[0] == cardsInPlay[1])
	{
		alert ("You have found a match!")
		wins++;
	}
	else 
	{
		alert ("Sorry, try again")
		losses++;
	}
	alert(wins+" wins and "+losses+" losses");
	reset();
}

var isTwoCards = function()
{
	cardsInPlay.push(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') == "king")
	{
		this.innerHTML = "<img src='king.png' alt = 'King'/>";
	}
	else 
	{
		this.innerHTML = "<img src='queen.png' alt = 'Queen'/>";
	}


	if (cardsInPlay.length == 2)
	{
		isMatch(cardsInPlay);
	}
}

var createCards = function()
{
	for (i=0; i<cards.length;i++)
	{
		var newCard = document.createElement('div');
		newCard.className='card';
		gameBoard.appendChild(newCard);
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
	}
}

var reset = function()
{
	for (var i=0; i<cards.length;i++)
	{
		document.getElementsByClassName('card')[i].innerHTML = "";

	}
	cardsInPlay = [];
}

var gameBoard = document.getElementById('game-board');
createCards();

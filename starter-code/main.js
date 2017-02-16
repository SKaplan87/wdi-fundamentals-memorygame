/*console.log("JS file is connected to HTML! Woo!")
var cardOne="Queen";
var cardTwo="Queen";
var cardThree="King";
var cardFour="King";



if (cardOne == cardTwo){
	alert ("You have found a match!")
}
else {
	alert ("Sorry, try again")
}*/

var createCards = function()
{
	var numCards = 4;

	for (i=0; i<numCards;i++)
	{
		var newCard = document.createElement('div');
		newCard.className='card';
		gameBoard.appendChild('newCard');
	}
}

var gameBoard = document.getElementById('game-board');
createCards();

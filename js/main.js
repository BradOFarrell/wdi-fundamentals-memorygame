var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = new Array();

function checkForMatch(){
		if(cardsInPlay.length == 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again!");
		}
	}
}

function flipCard(){
	var cardID = this.getAttribute('id');
	document.getElementById(cardID).setAttribute('src',cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	console.log("You flipped "+cards[cardID].rank);
	setTimeout(checkForMatch,100);
}

function createBoard(){
 for (var i = cards.length - 1; i >= 0; i--) {
	 var cardElement = document.createElement('img');
	 var lineBreak = document.createElement('br');
 	cardElement.setAttribute('src','images/back.png');
 	cardElement.setAttribute('id',i);
	cardElement.addEventListener('click',flipCard);
	cardElement.appendChild(document.createElement('br'));
	document.getElementById("game-board").appendChild(cardElement);
	if(i == 2){
		document.getElementById("game-board").appendChild(lineBreak);
	}
}
}

createBoard();
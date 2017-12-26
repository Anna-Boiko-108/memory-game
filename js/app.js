window.onload = function () {

	var cardDeck = [
		"images/1.jpg", 
		"images/2.jpg", 
		"images/3.jpg", 
		"images/4.jpg", 
		"images/5.jpg", 
		"images/6.jpg", 
		"images/1.jpg", 
		"images/2.jpg", 
		"images/3.jpg", 
		"images/4.jpg", 
		"images/5.jpg", 
		"images/6.jpg"
	];

class Card {
	constructor(frontImagePath){
		this. frontImagePath = frontImagePath;
		this. backImagePath = "images/back.jpg";
	};
};

Card.prototype.drawCard = function(){
	var section = document.getElementById('cardDeck');
	var div = document.createElement("div");
	var frontImage = document.createElement("img");
	var backImage = document.createElement("img");

	section.insertBefore(div, section.firstChild);
	// section.appendChild(div);
	div.appendChild(frontImage);
	div.appendChild(backImage);

	div.className = "card";
	frontImage.src = this.frontImagePath;
	frontImage.className = "front";
	backImage.src = this.backImagePath;
	backImage.className = "back";
};
	
function drawDeck(){
	cardDeck.forEach(function(card, index, cardDeck){
		var card = new Card(card);
		card.drawCard();
	})
};		
	
drawDeck();
}
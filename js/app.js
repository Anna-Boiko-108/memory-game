window.onload = function () {
	var deck = new CardDeck(cardDeck);
	deck.drawDeck();
}	

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

class CardDeck {
	constructor(cardDeck){
		this.cardDeck = this.shuffle(cardDeck);
	};
};

CardDeck.prototype.shuffle = function (d) {
	for(var j, x, i = d.length; i; j = parseInt(Math.random() * i), x = d[--i], d[i] = d[j], d[j] = x);
	return d;
};

CardDeck.prototype.drawDeck = function (){
	cardDeck.forEach(function(card, index, cardDeck){
		var card = new Card(card);
		card.drawCard();
	})
};		

class Card {
	constructor(frontImagePath){
		this.frontImagePath = frontImagePath;
		this.backImagePath = "images/back.jpg";
	};
};

Card.prototype.drawCard = function(){
	var section = document.getElementById('cardDeck');
	var div = document.createElement("div");
	var frontImage = document.createElement("img");
	var backImage = document.createElement("img");

	// section.insertBefore(div, section.firstChild);
	section.appendChild(div);
	div.appendChild(frontImage);
	div.appendChild(backImage);

	div.addEventListener("click", function(){
		div.classList.toggle("flipped");
	});

	div.classList.add("card");
	frontImage.src = this.frontImagePath;
	frontImage.classList.add("front");
	backImage.src = this.backImagePath;
	backImage.classList.add("back");
};
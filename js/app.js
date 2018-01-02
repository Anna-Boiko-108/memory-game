window.onload = function () {
	let cardDeck = [
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
	let cardsNumber = cardDeck.length;

	let deck = new CardDeck(cardDeck);
	deck.drawDeck();

	let pairsCounter = 0;
	let flipped = [];

	document.addEventListener("click", function(){
		// Click only on cards not on other elements
		if (event.target.className == "back") {
			// Dont't click on cards which are already hiden
			if (event.target.parentElement.className != "card flipped hiden") {
				flipCard(event.target);
				saveClickedCards(event.target);
				
				if (flipped.length == 2) {
					checkIdentity();
				}
				// Flip back if not identical
				if (flipped.length == 3) {
					flip();
				}

				if (pairsCounter == cardsNumber / 2) {
					youWon();
				}
			} 
		}	
	})

	function flipCard(card){
		card.parentElement.classList.toggle("flipped");
	}

	function saveClickedCards(card){
		flipped.push(card.previousSibling);
	}

	function checkIdentity(){
		if (flipped[0].src == flipped[1].src) {
			hide();
			pairsCounter += 1;
		}
	}

	function flip(){
		let flipped1 = flipped.shift();
		let flipped2 = flipped.shift();
		flipped1.parentElement.classList.toggle("flipped");
		flipped2.parentElement.classList.toggle("flipped");
	}

	function hide(){
		let hiden1 = flipped.shift();
		let hiden2 = flipped.shift();
		setTimeout(function(){ 
			hiden1.parentElement.classList.toggle("hiden");
			hiden2.parentElement.classList.toggle("hiden");}, 800);
	}

	function youWon(){
		setTimeout(function (){alert("You won!")}, 2000);
	}
}

class CardDeck {
	constructor(cardDeck){
		this.cardDeck = CardDeck.shuffle(cardDeck);
	}
	static shuffle(d) {
		for(let j, x, i = d.length; i; j = parseInt(Math.random() * i), x = d[--i], d[i] = d[j], d[j] = x);
		return d;
	}
	drawDeck(){
		this.cardDeck.forEach(function(item, index, cardDeck){
			let card = new Card(item);
			card.drawCard();
		})
	}		
}

class Card {
	constructor(frontImagePath){
		this.frontImagePath = frontImagePath;
		this.backImagePath = "images/back.jpg";
	}
	drawCard(){
		let section = document.getElementById('cardDeck');
		let div = document.createElement("div");
		let frontImage = document.createElement("img");
		let backImage = document.createElement("img");

		section.appendChild(div);
		div.appendChild(frontImage);
		div.appendChild(backImage);

		div.classList.add("card");
		frontImage.src = this.frontImagePath;
		frontImage.classList.add("front");
		backImage.src = this.backImagePath;
		backImage.classList.add("back");
	}
}
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
					flipOrHide("flipped");
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
			setTimeout(function (){ flipOrHide("hiden");}, 800);
			pairsCounter += 1;
		}
	}

	// Toggles classname (hiden or flipped) of 2 clicked cards and deletes them from flipped array
	function flipOrHide(className){
		flipped[0].parentElement.classList.toggle(className);
		flipped[1].parentElement.classList.toggle(className);
		flipped.splice(0, 2);
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
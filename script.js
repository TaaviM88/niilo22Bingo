var usedNums = new Array(76);

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	do {
		newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
  newNum = newNum.replace(/[0-9]/g,'');
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
  var bingo_elements = ["sää boosaus",
"thumbnail vanha Niilo22",
"lopussa: kiitos kun katsoit videon",
"kahvin kokovartalon pumppaus",
"suun naksuttelu",
"aihe jatkuu kun se on lopetettu",
"video alkaa: no niin",
"lällätys-ääni(katsojien imitoiminen)",
"liikunta boosaus",
"ääniraidan vittuilu",
"yhdellä kädellä taitelu ja sen tuskailu",
"random suuttuminen",
"painovoiman vittuilu",
"luetaan väärin",
"pidetään lippu korkealla",
"tietyistä asoista puhuminen",
"pyykit tulessa",
"suihkuun meno",
"zoomauksen epäonnistuminen",
"ajasta puhuminen",
"tekninen ongelma",
"ongelmia laskemisen kanssa",
"videon lopettaminen useaan otteeseen",
"videolla sikailu",
"lahjoituksena: bengalin tiiker/makaroni"];

var randomItem = bingo_elements[Math.floor(Math.random()*bingo_elements.length)];

	return randomItem; //Math.floor(Math.random() * 75);
	
}

function anotherCard() {
	/*for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	*/
	newCard();
}
function game() {    
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var FPS = 30;
    setInterval(function() {
		movement();
		drawEverything();
    }, 1000/FPS);

    
}

function win() {
	if(scoreL == 11) {
		ballSpeedX = 10;
		player = 1;
		wine=1;
		return 1;
	} else if(scoreR == 11) {
		ballSpeedX = 10;
		player = 2;
		wine=1;
		return 2;
	} else return 0;
}

function startscreen() {

}

function winscreen(player) {
	//pozadina
	colorRect(0,0,canvas.width,canvas.height,'black');
		//text
	canvasContext.fillStyle = '#fff';
	canvasContext.font = '30px Arial';
	var printaj = "";
	if(player == 1) printaj = "You won!";
	else printaj = "The computer won!";
	canvasContext.fillText(printaj, 250, 280);
	player = 0;
	canvasContext.fillText("Click anywhere to go again!", 200, 360);
	canvas.addEventListener('mousedown',levklik,false);
}


function loading() {
	colorRect(0, 0, canvas.width, canvas.height, 'black');
	canvasContext.font = '30px Arial';

}

function levklik(evt) {
	if(wine) {
		game();
		wine=0;
	}
}
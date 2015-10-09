function colorRect(leftx, topy, wd, hg, color) {
	canvasContext.fillStyle = color;
    canvasContext.fillRect(leftx,topy,wd,hg);
}
function topche(xoska, yoska, radius, boja) {
	canvasContext.fillStyle = boja;
	canvasContext.beginPath();
	canvasContext.arc(xoska,yoska, 10, 0, Math.PI*2, true);
	canvasContext.fill();
}

function drawEverything() {
	//pozadina
	colorRect(0,0,canvas.width,canvas.height,'black');
	win();
	if(wine) {
		winscreen(win());
		ball.Speed.X=10;
		ball.Speed.Y=5;
		return;
	}
	//leva palka
	colorRect(palka.l.X,palka.l.Y,10,PADDLE_HEIGHT,'white');
	
	//desna palka
	colorRect(palka.r.X,palka.r.Y,10,PADDLE_HEIGHT,'white');
	
	//topche
	topche(ball.X, ball.Y, 10, 'red');

	//rezultat
	canvasContext.fillStyle = '#fff';
	canvasContext.fillText("Player 1: " + scoreL, canvas.width/4, canvas.height/4);//player1
	canvasContext.fillText("Player 2 : " + scoreR, 3*canvas.width/4, canvas.height/4);//player2
	
}
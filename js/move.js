canvas.addEventListener('mousemove',
    	function(evt) {
    		var mousePos = calculateMousePos(evt);
    		if(mousePos.y >= 50 && mousePos.y <= 550) {
    			palkalY = mousePos.y - PADDLE_HEIGHT/2;
    		}
    		
    	});

function calculateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
	return {
		x:mouseX,
		y:mouseY
	};
}

function ballReset() {
	ball.X = canvas.width/2 -10;
	ball.Y = canvas.height/2 -10;
	ball.Speed.Y = 5;
	ball.Speed.X = 10;
	level = 10;
}

function aiMovement() {
	if(ball.Y < palka.r.Y + (PADDLE_HEIGHT/4)) {
		palka.r.Y -= botLevel;
	}
	if(ball.Y > palka.r.Y + (3 * PADDLE_HEIGHT/4)) {
		palka.r.Y += botLevel;
	}
}

function movement() {
	/*ballX += ballSpeedX;
	ballY += ballSpeedY;*/
	if(ball.X >= canvas.width-10-10) {
		if(ball.Y > palka.r.Y && ball.Y < palka.r.Y + PADDLE_HEIGHT) {
			ball.Speed.X = -ball.Speed.X;
			if(ball.Speed.X > 0) ball.Speed.X += level;
			else ball.Speed.X += -level;
			var deltaY = ball.Y - (palka.r.Y + PADDLE_HEIGHT/2);
			ball.Speed.Y = deltaY * 0.34;
		} else {
			ballReset();
			scoreL++;
		}

	}

	if(ball.X <= 10+10) {
		if(ball.Y > palka.l.Y && ball.Y < palka.l.Y+PADDLE_HEIGHT){
			ball.Speed.X =  -ball.Speed.X;
			var deltaY = ball.Y - (palka.l.Y + PADDLE_HEIGHT/2);
			ball.Speed.Y = deltaY * 0.34;
		} else {
			ballReset();
			scoreR++;
		}
		
	}
	if(ball.Y >= canvas.height-10 || ball.Y <= 10) {
		ball.Speed.Y = -ball.Speed.Y;
	}
	ball.X += ball.Speed.X;
	ball.Y += ball.Speed.Y;
	aiMovement();
}
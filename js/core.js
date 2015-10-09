var canvas;
var canvasContext;
var ball = {
	X: 50,
	Y: 50,
	Speed: {
		X:10,
		Y:5
	}
};

// var ballX = 50;
// var ballY = 50;
// var ballSpeedX = 10;
// var ballSpeedY = 5;

var player = 0;

var level = 10;

var scoreL = 0;
var scoreR = 0;

var wine=0;
var botLevel = 8; //kazhuva kolku se dvizhi botot

var palka = {
	l:{
		Y:250,
		X:5
	},
	r:{
		X:250,
		Y:758
	}
};
// var palkalY = 250;
// var palkalX = 5;
// var palkarY = 250;
// var palkarX = 785;

const PADDLE_HEIGHT = 100;


window.onload = function() {
	game();
}
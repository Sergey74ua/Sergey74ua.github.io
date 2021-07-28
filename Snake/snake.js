/**
 * Игра "Змейка"
 * Автор: Сергей Покидько
 * 24 ‎ноября ‎2019 ‎г.
 */

var	snake=document.getElementById("snake"), ctx=snake.getContext("2d"), xS=snake.width, yS=snake.height,
	qS=25, xZ=xS/2-qS, yZ=yS/2-qS, vK, tK, xK=0, yK=0, xZarr=[], yZarr=[], arr, xF, yF, rS=0, rSmax=rS,
	imgS=new Image(), imgF=new Image(), audFruit=new Audio(), audFeil=new Audio();

imgS.src="imgSnake_01.png";
imgF.src="imgSnake_02.png";
audFruit.src="audSnake_01.ogg";
audFeil.src="audSnake_02.ogg";

ctx.shadowBlur=10;
ctx.shadowColor="MidnightBlue";

ctx.textBaseline="middle";
ctx.textAlign="center";

fruit();

function fruit() {
	xF=Math.round((xS/qS-1)*Math.random())*qS;
	yF=Math.round((yS/qS-1)*Math.random())*qS;
	for (arr=0; arr<=rS; arr++) if (xZarr[arr]==xF && yZarr[arr]==yF) fruit();
};

onkeydown=function(event) {
	event.preventDefault();
	switch(event.keyCode) {
		case 38: case 87: if (vK!=1) {xK=0; yK=-1; tK=1}; break;
		case 39: case 68: if (vK!=2) {xK=1; yK=0; tK=2}; break;
		case 40: case 83: if (vK!=1) {xK=0; yK=1; tK=1}; break;
		case 37: case 65: if (vK!=2) {xK=-1; yK=0; tK=2}; break;
	}
};

function feil() {
	ctx.fillStyle="White";
	ctx.fillRect(0, 0, xS, yS);
	audFeil.play();
	xZarr.length=1;
	yZarr.length=1;
	if (rS>rSmax) rSmax=rS;
	rS=0;
};
//Синхронизация canvas с кадрами экрана
window.requestAnimationFrame=( function() {
	return	window.requestAnimationFrame		||
			window.webkitRequestAnimationFrame	||
			window.mozRequestAnimationFrame		||
			window.oRequestAnimationFrame		||
			window.msRequestAnimationFrame		||
			function (callback) {
				window.setTimeout(callback, 1000/15);
			}
})();

setInterval(function() {
	
	ctx.fillStyle=ctx.createPattern(imgS, "repeat");
	ctx.fillRect(0, 0, xS, yS);
	
	ctx.drawImage(imgF, xF-qS*0.3, yF-qS*0.35);
	
	vK = tK;
	xZ=xZ+xK*qS;
	if (xZ>=xS) xZ=0;
	if (xZ<0) xZ=xS-qS;
	yZ=yZ+yK*qS;
	if (yZ>=yS) yZ=0;
	if (yZ<0) yZ=yS-qS;
	
	for (arr=0; arr<=(rS); arr++) if (xZarr[arr]==xZ && yZarr[arr]==yZ) feil();
	
	xZarr.unshift(xZ);
	yZarr.unshift(yZ);
	
	ctx.fillStyle="Blue";
	for (arr=0; arr<=(rS); arr++) ctx.fillRect(xZarr[arr]+1, yZarr[arr]+1, qS-2, qS-2);
	
	if (xF==xZ && yF==yZ) {
		audFruit.play();
		fruit();
		rS++;
		if (rSmax<rS) rSmax=rS;
	} else {
		xZarr.pop();
		yZarr.pop();
	};
	
	ctx.fillStyle="Black";
	ctx.font="bold 13pt Arial";
	ctx.fillText(rS+1, xF+qS/2, yF+qS/2);
	
	ctx.fillStyle="Yellow";
	ctx.font="10pt Arial";
	ctx.fillText(rSmax, xZ+qS/2, yZ+qS/2);
	
}, 1000/15);
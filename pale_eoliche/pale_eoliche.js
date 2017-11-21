var PI = Math.PI;

var angPale = 0;
var rpm = 1;
var vang = (rpm * PI) / 60;
var ang = 0;
var framePerSec = 30;
var ultimoTempo = performance.now();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.translate(300, 300);

function draw() {

	var t1 =  performance.now();
	var dt = (t1 - ultimoTempo) / 1000;
	ultimoTempo = t1;
	ang += vang * dt;

    ctx.save();
    clear();
    ctx.restore();

    ctx.save();
    pilottino();
    ctx.restore();

    ctx.save();
    pala();
    ctx.restore();

    ctx.save();
    centro();
    ctx.restore();

    window.requestAnimationFrame(draw);
}

function centro() {
    ctx.beginPath();
    ctx.strokeStyle = "#6f6f6f";
    ctx.fillStyle = "#6f6f6f";
    ctx.arc(0, 0, 20, 0, 2 * PI);
    ctx.fill();
    ctx.stroke();
}

function pala() {
    ctx.rotate(ang);
    ctx.fillStyle = "#c3c3c3";
    ctx.strokeStyle = "#c3c3c3";
    for (var i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.ellipse(0, -110, 17, 100, 0, 0, 2 * PI);
        ctx.rotate(2 * PI / 3);
        ctx.fill();
        ctx.stroke();
    }
}

function pilottino() {
    ctx.beginPath();
    ctx.strokeStyle = "#545454";
    ctx.fillStyle = "#545454";
    ctx.rect(-5, 0, 10, 300);
    ctx.fill();
    ctx.stroke();
}

function clear() {
    ctx.fillStyle = "white";
    ctx.fillRect(-300, -300, 600, 600);
    ctx.stroke();
}

window.requestAnimationFrame(draw);

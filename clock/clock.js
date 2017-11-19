var secondsAngle, minutesAngle, hoursAngle;

var PI = Math.PI;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.textBaseline = "middle";
ctx.textAlign = "center";
ctx.font = 20 + "px arial";

ctx.translate(canvas.width / 2, canvas.height / 2);

setInterval(clock, 1000 / 60);

function clock() {

    ctx.save();
    clear();
    ctx.restore();

    ctx.save();
    drawClock();
    ctx.restore();

    ctx.save();
    getAngles();
    ctx.restore();

    ctx.save();
    hoursHand();
    ctx.restore();

    ctx.save();
    minutesHand()
    ctx.restore();

    ctx.save();
    secondsHand();
    ctx.restore();
}

function secondsHand() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(secondsAngle);
	ctx.lineWidth = 1;
    ctx.lineTo(0, -200);
    ctx.stroke();
    ctx.closePath();
}

function minutesHand() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(minutesAngle);
	ctx.lineWidth = 2;
    ctx.lineTo(0, -180);
    ctx.stroke();
    ctx.closePath();
}

function hoursHand() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(hoursAngle);
	ctx.lineWidth = 4;
    ctx.lineTo(0, -150);
    ctx.stroke();
    ctx.closePath();
}

function getAngles() {

    var d = new Date();

    millis = d.getMilliseconds();
    seconds = d.getSeconds();
    minutes = d.getMinutes();
    hours = d.getHours();

    // console.log(hours + ':' + minutes + ':' + seconds + ':' + millis);

    millisAngle = (millis * 2 * PI) / (60);
    secondsAngle = (seconds * 2 * PI) / (60) + millisAngle / 1000;
    minutesAngle = (minutes * 2 * PI) / (60) + secondsAngle / 60;
    hoursAngle = (hours * 2 * PI) / (12) + minutesAngle / 12;
}

function clear() {
    ctx.fillStyle = '#fff';
    ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
}

function drawClock() {
    ctx.beginPath();
    ctx.arc(0, 0, 250, 0, 2 * PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    for (var i = 0; i < 60; i++) {
        ctx.moveTo(0, -230);
        ctx.lineTo(0, -250);
        ctx.rotate(2 * PI / 60);
        ctx.stroke();
    }
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(0, 0, 230, 0, 2 * PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    for (var i = 12; i > 0; i--) {
        ctx.fillText(i.toString(), 0, -210);
        ctx.rotate(-2 * PI / 12);
        ctx.stroke();
    }
    ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = '#000';
	ctx.arc(0, 0, 5, 0, 2 * PI);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

}



var t = 0;
let MyObject = function () {
	this.id = "";
   this.type = "MyObject";
}
var o = new MyObject();
setInterval(onTimerTick, 40); // 33 milliseconds = ~ 30 frames per sec
document.getElementById("test").innerHTML = o.type;
function onTimerTick() {
    t=t+1;
	//document.getElementById("test").innerHTML = t;
}


document.onkeypress=function(e){
    document.getElementById("test").innerHTML = String.fromCharCode(e.keyCode);
}




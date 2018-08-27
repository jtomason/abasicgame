

var t = 0;
let MyObject = function () {
	this.id = "";
   this.type = "MyObject";
}
var o = new MyObject();
setInterval(onTimerTick, 40); // 33 milliseconds = ~ 30 frames per sec
var num = 25;
let constructTable = function (){
	var str = "";
	for (i = 0; i < num; i++) { 
		str += "<tr>";
		for (j = 0; j < num; j++) { 
			str += "<td>x</td>";
		}
		str += "</tr>";
	}
	return str;
}
let createNotification = function(notification){
	var str= '<div class="alert alert-success fade in">  <a href="#" class="close" data-dismiss="alert" aria-label="close">x</a>       <p><strong>Alert!</strong></p> '+      notification +'     </div>';
	return str;
}
document.getElementById("mappane").innerHTML = '<table cellspacing="0" style="width:100%">' + constructTable() + '</table>';


function onTimerTick() {
    t=t+1;
	//document.getElementById("test").innerHTML = t;
}


document.onkeypress=function(e){
    //document.getElementById("test").innerHTML = String.fromCharCode(e.keyCode);
	document.getElementById("notificationtab").innerHTML = createNotification(String.fromCharCode(e.keyCode));
}




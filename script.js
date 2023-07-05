var id, flag = false;
var canvas, ctx, width, height;
var Time, sesum = 0;

function checkkey() {
	var res = $("*[name='psd']").val();
	var password = "AcceleratorX";
	$("*[name='psd']").val('');
	if (res == password) {
		$("*[name='psd']").append("<style>textarea::-webkit-input-placeholder {color: #0f0;}textarea::-moz-placeholder {color: #0f0;}textarea:-moz-placeholder {color: #0f0;}textarea::-ms-input-placeholder {color: #0f0;}textarea:-ms-input-placeholder {color: #0f0;}textarea::-webkit-input-placeholder {color: #0f0;}</style>");
		$("textarea").attr("placeholder", "Accept!");
		setTimeout(function() {
			$(".pcover").css("display", "none");
		}, 500);
	} else if (res == "") {
		$("*[name='psd']").append("<style>textarea::-webkit-input-placeholder {color: #f00;}textarea::-moz-placeholder {color: #f00;}textarea:-moz-placeholder {color: #f00;}textarea::-ms-input-placeholder {color: #f00;}textarea:-ms-input-placeholder {color: #f00;}textarea::-webkit-input-placeholder {color: #f00;}</style>");
		$("textarea").attr("placeholder", "Empty Answer!");
	} else {
		$("*[name='psd']").append("<style>textarea::-webkit-input-placeholder {color: #f00;}textarea::-moz-placeholder {color: #f00;}textarea:-moz-placeholder {color: #f00;}textarea::-ms-input-placeholder {color: #f00;}textarea:-ms-input-placeholder {color: #f00;}textarea::-webkit-input-placeholder {color: #f00;}</style>");
		$("textarea").attr("placeholder", "Wrong Answer!");
	}
}

function disarm() {
	if (!flag) {
		bomb();
		return;
	}
	clearInterval(id);
	var fword = " A !clearot&$#0467@tLy.13529";
	var farr = [0, 3, 1, 4, 4, 6, 5, 6, 8, 7, 10, 9, 8, 13, 15, 17, 14, 16, 12, 24, 22, 23, 15, 23, 25, 27, 26, 16, 18, 20, 19, 21, 11];
	var fpsd = "";
	for (var i = 1; i <= 32; ++i)
		fpsd += fword[farr[i]];
	$("head").html("<meta charset='utf-8'<meta name=''viewport' content='width=device-width, initial-scale=1'><title>Success</title><style type='text/css'>body{background-image: url(img/successjpg); background-repeat: no-repeat; background-position:center 0px; background-size: 90%; background-color: green;}</style>");
	$("body").html("");
	setTimeout(function() {
		alert("Password: " + fpsd);
	}, 3000);
}

function bomb() {
	clearInterval(id);
	$("head").html("<meta charset='utf-8'<meta name=''viewport' content='width=device-width, initial-scale=1'><title>Failure</title><style type='text/css'>body{background-image: url(img/failurejpg); background-repeat: no-repeat; background-position:center 0px; background-size: 80%; background-color: red;}</style>");
	$("body").html("");
}

function stop() {
	clearInterval(id);
	setTimeout(restart, 5000);
}

var time = function(h, m, s) {
	this.h = h;
	this.m = m;
	this.s = s;
}
time.prototype.dida = function() {
	this.s--;
	if (this.s < 0) {
		this.s = 59;
		this.m--;
	}
	if (this.m < 0) {
		this.h--;
		this.m = 59;
	}
	if (this.h < 0) {
		bomb();
	}
};

function circle(x, y, r, color, fillorstroke) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2, false);
	if (fillorstroke) {
		ctx.fillStyle = color;
		ctx.fill();
	} else {
		ctx.strokeStyle = color;
		ctx.stroke();
	}
}

function listener() {
	$("html").bind("contextmenu", function(e) {   
		return false;
	})
	$("html").bind("selectstart", function(e) {   
		return false;
	})
	$("html").keydown(function(e) {
		if ((e.keyCode >= 112 && e.keyCode <= 123) || e.keyCode == 27 || e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 45 || e.keyCode == 46) {
			e.keyCode = null;
			return false;
		} else if (e.ctrlKey) {
			e.returnValue = false;
			e.preventDefault();
			return false;
		} else if (e.altKey) {
			e.returnValue = false;
			e.preventDefault();
			return false;
		}
	})
	$(".line").click(function(e) {
		if (e.target.className == "line _8") {
			stop();
			$("._8").remove();
		} else bomb();
	})
};

function start1() {
	sesum++;
	if (sesum & 1) {
		Time.dida();
		var str = "";
		if (Time.h < 10) str += "0" + Time.h + ":";
		else str += Time.h + ":";
		if (Time.m < 10) str += "0" + Time.m + ":";
		else str += Time.m + ":";
		if (Time.s < 10) str += "0" + Time.s;
		else str += Time.s;
		$("#t").html(str);
	}
	ctx.clearRect(0, 0, width, height);
	if (sesum % 8 == 0) {
		circle(50, 80, 40, "red", false);
		circle(150, 80, 40, "green", false);
		circle(250, 80, 40, "blue", false);
	} else if (sesum % 8 == 1) {
		circle(50, 80, 40, "red", true);
		circle(150, 80, 40, "green", false);
		circle(250, 80, 40, "blue", false);
	} else if (sesum % 8 == 2) {
		circle(50, 80, 40, "red", false);
		circle(150, 80, 40, "green", true);
			circle(250, 80, 40, "blue", false);
	} else if (sesum % 8 == 3) {
		circle(50, 80, 40, "red", false);
		circle(150, 80, 40, "green", false);
		circle(250, 80, 40, "blue", true);
	} else if (sesum % 8 == 4) {
		circle(50, 80, 40, "red", true);
		circle(150, 80, 40, "green", true);
		circle(250, 80, 40, "blue", false);
	} else if (sesum % 8 == 5) {
		circle(50, 80, 40, "red", false);
		circle(150, 80, 40, "green", true);
		circle(250, 80, 40, "blue", true);
	} else if (sesum % 8 == 6) {
		circle(50, 80, 40, "red", true);
		circle(150, 80, 40, "green", false);
		circle(250, 80, 40, "blue", true);
	} else if (sesum % 8 == 7) {
		circle(50, 80, 40, "red", true);
		circle(150, 80, 40, "green", true);
		circle(250, 80, 40, "blue", true);
	}
}
function start2() {
	Time.dida();
	sesum++;
	var str = "";
	if (Time.h < 10) str += "0" + Time.h + ":";
	else str += Time.h + ":";
	if (Time.m < 10) str += "0" + Time.m + ":";
	else str += Time.m + ":";
	if (Time.s < 10) str += "0" + Time.s;
	else str += Time.s;
	$("#t").html(str);
	ctx.clearRect(0, 0, width, height);
	if (sesum & 1) {
		circle(50, 80, 40, "red", false);
		circle(150, 80, 40, "green", false);
		circle(250, 80, 40, "blue", false);
	} else {
		circle(50, 80, 40, "red", true);
		circle(150, 80, 40, "green", true);
		circle(250, 80, 40, "blue", true);
	}
}

function restart() {
	flag = true;
	$("*[name='dsm']").removeAttr("disabled");
	$("*[name='dsm']").css("color", "green");
	id = setInterval(start2, 1000 / 60);
}

$(function() {
	canvas = document.getElementById('can');
	ctx = canvas.getContext("2d");
	ctx.lineWidth = 8;
	width = canvas.width;
	height = canvas.height;
	listener();
	circle(50, 80, 40, "red", false);
	circle(150, 80, 40, "green", false);
	circle(250, 80, 40, "blue", false);
	Time = new time(2, 0, 1);
	id = setInterval(start1, 500);
})
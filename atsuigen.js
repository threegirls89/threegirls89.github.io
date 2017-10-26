/*
	あつい！ジェネレーター
	2代目新潟色115系のドア下に貼られた「あつい！」ステッカー風画像を生成します。
	copyright (c) 2017 threegirls89
*/

var canvas;
var context;

function draw(){
	context.fillStyle = "#ffffff";
	context.fillRect(0,0,canvas.width, canvas.height);

	var str = document.getElementById("txtDraw").value;
	var leftMargin = 40;
	var topMargin = 40;
	var bottomMargin = 40;
	var rightMargin = 40;
	var factorialSep = 20;
		


	context.font = "bold 120px 'メイリオ'";
	var metrics = context . measureText(str);
	var strWidth = metrics.width;

	context.font = "italic bold 120px 'メイリオ'";
	metrics = context.measureText("!");
	var factorialWidth = metrics.width;
	var textWidth = strWidth + factorialSep + factorialWidth;

	var textHeight = 120 * 72 / 96;

	var strStartx = (canvas.width - leftMargin - rightMargin - textWidth) / 2 + leftMargin;
	var strStarty = (canvas.height - topMargin - bottomMargin - textHeight) / 2 + textHeight + topMargin;


	context.font = "bold 120px 'メイリオ'";
	context.fillStyle = "#ff0000";
	context.fillText(str, strStartx, strStarty);
	context.font = "italic bold 120px 'メイリオ'";
	context.fillText("!", strStartx + strWidth + factorialSep, strStarty);

	context.fillStyle = "#fdfbd4";
	context.fillRect(0, 0, canvas.width, strStarty - topMargin - textHeight);

	context.fillStyle = "#35c42e";
	context.fillRect(0, strStarty + bottomMargin, canvas.width, canvas.height - strStarty - bottomMargin);
}


window.onload = function(){
	canvas = document.getElementById("canvas0");
	context = canvas.getContext("2d");
	
//	context.beginPath();
//	context.moveTo(0, 0);
//	context.lineTo(640, 0);
//	context.lineTo(640, 320);
//	context.lineTo(0, 320);
//	context.closePath()
//	context.stroke();
};

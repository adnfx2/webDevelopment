window.onload = function () {

  // After loading the Document Object Model

  var btnPreview = document.getElementById(`previewButton`);

  btnPreview.onclick = previewHandler;

}

function previewHandler(){

  var canvas = document.getElementById("canvas");

  if (canvas.getContext) {


      var context = canvas.getContext("2d");

      resetBg(canvas, context);


      var selectObj = document.getElementById("shape");

      var shape = selectObj[selectObj.selectedIndex].value;

      var shapeDraw;

      if (shape == "squares") {
        shapeDraw = drawSquare;
      } else if (shape == "circles") {
        shapeDraw = drawCircle;
      }

      if (shapeDraw) {
        for (var i = 0; i < 20; i++) {
          shapeDraw(canvas, context);
          drawImg(canvas, context);
          drawText(canvas, context);
        }
      }
  }
}

function drawSquare(canvas, context) {

  var randX = Math.round(Math.random() * canvas.width);

  var randY = Math.round(Math.random() * canvas.height);

  var randW = Math.round(Math.random() * 40);

  console.log(`x: ${randX} y: ${randY} w: ${randW}`);

  context.fillStyle = "lightblue";

  context.fillRect(randX, randY, randW, randW);

}

function resetBg(canvas, context) {
  var backgroundColorObj = document.getElementById("backgroundColor");
  var selectedColor = backgroundColorObj[backgroundColorObj.selectedIndex].value;

  context.fillStyle = selectedColor;

  context.fillRect(0, 0, canvas.width, canvas.height);

}

function drawCircle(canvas, context){

  var randX = Math.round(Math.random() * canvas.width);

  var randY = Math.round(Math.random() * canvas.height);

  var randR = Math.round(Math.random() * 40);

  context.fillStyle = "lightblue";

  context.beginPath();
  context.arc(randX, randY, randR, 0, (2*Math.PI), false);
  context.fill();

}

function drawText(canvas, context) {

    var tweets = document.getElementById("tweets");
    var tweetSelected = tweets[tweets.selectedIndex].value;
    console.log(tweetSelected);

    var textColor = document.getElementById("foregroundColor");
    var selectedTextColor = textColor[textColor.selectedIndex].value;

    context.fillStyle = selectedTextColor;


    context.font = "bold 1em sans-serif";
    context.textAlign = "left"
    context.fillText("I saw this tweet", 20, 40);

    context.font = "italic 1.2em sans-serif";
    context.fillText(tweetSelected, 30, 100);

    context.font = "bold 1em sans-serif";
    context.textAlign = "right"
    context.fillText("all I got was this lousy t-shirt!", canvas.width-20, canvas.height-40);

    console.log(context);
    console.log(selectedTextColor);
}

function updateTweets(data){

  var tweets = document.getElementById("tweets");

  for (var i = 0; i < data.length; i++) {

    var option = document.createElement("option");

    option.text = data[i].text;
    option.value = data[i].text.replace("\"", "'");

    tweets.options.add(option);
  }
  tweets.selectedIndex = 0;
}

function drawImg(canvas, context) {
  var birdTweet = new Image();
  birdTweet.src = "../imgs/twitter-2.svg";

  birdTweet.onload = function () {
    console.log(context);
      context.drawImage(birdTweet, 20, 120, 60, 60);
  }
}






//
// function triangle() {
//
//   var canvas = document.getElementById('canvas');
//
//   var context = canvas.getContext("2d");
//
//   context.beginPath();
//   context.arc(100,100,30,0,degreeToRadian(360),true);
//   context.fillStyle = "lightblue";
//   context.fill();
//
//   // context.beginPath();
//   // context.moveTo(150, 100);
//   // context.lineTo(300, 50);
//   // context.lineTo(150, 50);
//   // context.closePath();
//   //
//   // context.lineWidth = 10;
//   // context.strokeStyle = "red";
//   // context.stroke();
//   // context.fillStyle = "blue";
//   // context.fill();
//
//   console.log(context);
//
// }
//
//
//
//
// function degreeToRadian(x){
//   console.log(x * Math.PI/180);
//   return  x * Math.PI/180;
// }

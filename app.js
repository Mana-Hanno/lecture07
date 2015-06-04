navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.webkitGetUserMedia;

//★オブジェクトリテラル★
var app = {
  preview: document.querySelector("video"),
  shoot: document.querySelector("#shoot"),
  canvas: document.querySelector("canvas"),
<<<<<<< Updated upstream
=======
  tateslider: document.querySelector("#mosaic-size-controltate > input"),
  yokoslider: document.querySelector("#mosaic-size-controlyoko > input"),


>>>>>>> Stashed changes
  stream: null
};

var MEDIA_CONSTRAINT = {
  video: true,
  audio: false
};

/*
属性値への代入
MEDIA_CONSTRAINT.video = false;
コレが実行されれば置き換わる。
*/


//webカメラからのビデオ入力を受け付ける。
//流れ続けるので、受け続けなければいけないデータ（Stream）
function streamAquired(stream){
  app.stream = stream;
  //ビデオを流すコード
  app.preview.src = window.URL.createObjectURL(stream);
  //属性値。動画は再生か停止のどちらかの状態である必要があるので、この行でplay（再生）にする。
  app.preview.play();
}


function streamAquisitionFailed(error){

}

//★課題　モザイクのサイズを変更するバーを設置する。

function updateMosaicSize(){

  givenWidth = Number(app.yokoslider.value);
  givenHeight = Number(app.tateslider.value);

}




function getPixel(x, y){
  var result = app.ctx.getImageData(x, y, 1, 1);
  return result.data;
}

<<<<<<< Updated upstream
function getPixel(x, y){
  var result = app.ctx.getImageData(x, y, 1, 1);
  return result.data;
}

=======
>>>>>>> Stashed changes
function formatColor(color){
  return "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
};

function mosaic(){
<<<<<<< Updated upstream
  var i = 0;
  var width = 40;
  var height = 40;
  while(i < app.canvas.width){
    var j = 0;
    while(j < app.canvas.height){
      var color = getPixel(i, j);
      app.ctx.fillStyle = formatColor(color);
      app.ctx.fillRect(i, j, width, height);
      j = j + height;
=======
  updateMosaicSize();
  var i = 0;

  var width = givenWidth;
  var height = givenHeight;



  while(i < app.canvas.width){
    var j = 0;

    while(j < app.canvas.height){
      var color = getPixel(i, j);
      //取得した色で塗りつぶすよ
      app.ctx.fillStyle = formatColor(color);
      app.ctx.fillRect(i, j, width, height);
      j = j + height;

>>>>>>> Stashed changes
    }
    i = i + width;
  }
}

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
function processImage(){
  mosaic();
}

<<<<<<< Updated upstream
function capture(){
=======


function capture(){      //video要素をCanvasに描画
>>>>>>> Stashed changes
  if(app.stream != null){
    app.ctx.drawImage(app.preview, 0, 0, app.canvas.width, app.canvas.height);
  }
  processImage();
}

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
function initialize(){
  app.shoot.addEventListener("click", capture);
  app.ctx = app.canvas.getContext("2d");
  navigator.getUserMedia(MEDIA_CONSTRAINT, streamAquired, streamAquisitionFailed);
}

function unload(){
  if(app.stream != null){
    app.stream.stop();
    app.stream = null;
  }
}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
window.addEventListener("load", initialize);
window.addEventListener("unload", unload);

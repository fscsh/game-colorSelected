var stage = new createjs.Stage("gameboard");
var gameboard = new createjs.Container();
stage.addChild(gameboard);
var s = new createjs.Shape();
s.graphics.beginFill("#eee");
s.graphics.drawRect(0,0,100,100);
s.graphics.endFill();

gameboard.addChild(s);
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);

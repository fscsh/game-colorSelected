var stage = new createjs.Stage("gameboard");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);
var gameboard = new createjs.Container();
stage.addChild(gameboard);



var n = 2;
function addRect() {
    var x = parseInt(Math.random() * n);
    var y = parseInt(Math.random() * n);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            color = "#f44242";
            var r = new Rect(n, color);
            gameboard.addChild(r);
            r.x = i;
            r.y = j;
            if (r.x == x && r.y == y) {
                r.setRectType(2);
            }
            r.x = i * (500 / n);
            r.y = j * (500 / n);
            if (r.getRectType() == 2) {
                r.addEventListener("click", function() {
                    if (n < 7) {
                        ++n;
                    }
                    gameboard.removeAllChildren();
                    addRect();
                })
            }
        }
    }
}
addRect();

function Rect(n, color) {
    createjs.Shape.call(this);
    this.setRectType = function(type) {
        this.RectType = type;
        switch (type) {
            case 1:
                this.setColor("#f44242");
                break;
            case 2:
                this.setColor("#4d41f4");
                break;
        }
    }
    this.setColor = function(colorString) {
        this.graphics.beginFill(colorString);
        this.graphics.drawRect(0, 0, 500 / n - 3, 500 / n - 3);
        this.graphics.endFill();
    }
    this.getRectType = function(){
        return this.RectType;
    }
    this.getRectType(1);
}

Rect.prototype = new createjs.Shape();

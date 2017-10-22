function Rect(n, color) {
    createjs.Shape.call(this);
    this.setRectType = function(type) {
        this._RectType = type;
        switch (type) {
            case 1:
                this.setColor(color);
                break;
            case 2:
                this.setColor("#ff0");
                break;
        }
    }
    this.setColor = function(colorstr) {
        this.graphics.beginFill(colorstr);
        this.graphics.drawRect(0, 0, 500 / n - 5, 500 / n - 5);
        this.graphics.endFill;
    }
    this.setRectType = function(){
        return this._RectType;
    }
    this.setRectType(1);
}

Rect.prototype = new createjs.Shape();

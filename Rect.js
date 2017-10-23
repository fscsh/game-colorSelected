function Rect(n, color,rect_color) {
    createjs.Shape.call(this);
    this.setRectType = function(type) {
        this.RectType = type;
        switch (type) {
            case 1:
                this.setColor(color);
                break;
            case 2:
                this.setColor(rect_color);
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
    this.setRectType(1);
}

Rect.prototype = new createjs.Shape();

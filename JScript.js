function Figure(name) {
    this.name = name;
}

Figure.prototype.getName = function () {
 return this.name;
};

function Triangle(name,side) {
    Figure.apply(this, arguments);
    this.side = side;
}

Triangle.prototype = Object.create(Figure.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.area = function () {
   return (Math.sqrt(3)/4*this.side*this.side);
};

function Square(name,side) {
    Figure.apply(this, arguments);
    this.side = side;
}

Square.prototype = Object.create(Figure.prototype);
Square.prototype.constructor = Square;
Square.prototype.area = function () {
   return(this.side*this.side);
};
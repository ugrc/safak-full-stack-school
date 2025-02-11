class Squre {
  width: number;
  constructor(width: number) {
    this.width = width;
  }
}

class Rectangle extends Squre {
  height: number;
  constructor(width: number, height: number) {
    super(width);
    this.height = height;
  }
}

type Shape = Squre | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

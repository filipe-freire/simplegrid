const WIDTH = 1000;
const HEIGHT = 1000;
const SQUARE_SIDE = WIDTH / 10;
let grid = [];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  let cols = floor(WIDTH / SQUARE_SIDE);
  let rows = floor(HEIGHT / SQUARE_SIDE);

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      let square = new Square(x, y);
      grid.push(square);
    }
  }
  console.log(grid);
}

function draw() {
  background('gray');
  grid.forEach(square => square.show());
}

function Square(x, y) {
  this.x = x;
  this.y = y;
  this.show = function () {
    let j = this.x * SQUARE_SIDE;
    let i = this.y * SQUARE_SIDE;
    stroke(0);

    line(j, i, j + SQUARE_SIDE, i);
    line(j + SQUARE_SIDE, i, j + SQUARE_SIDE, i + SQUARE_SIDE);
    line(j + SQUARE_SIDE, i + SQUARE_SIDE, j, i + SQUARE_SIDE);
    line(j, i + SQUARE_SIDE, j, i);
  };
}

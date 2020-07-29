const pencilColor = document.getElementById('pencil-color');
const backgroundColor = document.getElementById('background-color');
const pencilSize = document.getElementById('pencil-size');
const clearButton = document.getElementById('button-clear');
const saveButton = document.getElementById('button-save');

const paths = [];
const currentPath = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor.value);
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    const point = {
      x: mouseX,
      y: mouseY,
      color: pencilColor.value,
      size: pencilSize.value,
    };
    currentPath.push(point);
  }
  paths.forEach((path) => {
    beginShape();
    path.forEach((point) => {
      vertex(point.x, point.y);
      strokeWeight(point.size);
      stroke(point.color);
    });
    endShape();
  });
  noFill();
}

function mousePressed() {
  currentPath.length = 0;
  paths.push(currentPath);
}

backgroundColor.addEventListener('change', () => {
  background(backgroundColor.value);
});

clearButton.addEventListener('click', () => {
  clear();
});

saveButton.addEventListener('click', () => {
  save('myCanvas.jpg');
});

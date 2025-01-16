function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let center = windowWidth / 2;
  let range = 400;
  let x_val = (mouseX / windowWidth) * range;
  let y_val = (mouseY / windowHeight) * range;
  // eyes
  fill(255);
  circle(center - 200, 200, 100);
  fill(0);
  circle(center - 220 + x_val / 10, 180 + y_val/10, 50);


  // eyes
  fill(255);
  circle(center + 200, 200, 100);
  fill(0);
  circle(center + 180 + x_val / 10, 180 +y_val/10, 50);

  fill(255)
  strokeWeight(3)
  ellipse(center, 400, 200, 100);
  fill("orange")
  circle(mouseX, mouseY, 50);

  console.log(mouseX);
}

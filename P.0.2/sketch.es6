function preload() {
	// img = loadImage('test.jpg')
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(30)
}

function draw() {
	background(255, 255, 255)
	strokeWeight(3)
	// Shapes
	fill(255, 255, 0, 125)
	ellipse(100, 100, 100, 100)
	// Transformations
	translate(40, 20)
	rotate(0.5)
	scale(1.5)
	fill(0, 255, 255, 125)
	rect(200, 200, 100, 100)
	// Mouse and keyboard
	if (mouseIsPressed) {
		fill(255, 0, 255, 125)
		ellipse(200, 100, 100, 100)
	}
	fill(125, 125, 255, 125)
	ellipse(mouseX, mouseY, 100, 100)
}
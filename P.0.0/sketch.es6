const setup = () => {
	createCanvas(windowWidth, windowHeight);
	noFill();
}

const draw = () => {
	background(255,255,255);
	ellipse(mouseX, mouseY, 40, 40);
}
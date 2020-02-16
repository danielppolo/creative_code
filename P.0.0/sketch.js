"use strict";

var setup = function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
};

var draw = function draw() {
	background(255, 255, 255);
	ellipse(mouseX, mouseY, 40, 40);
};
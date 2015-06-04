var imageToCanvas = require('./..');
var baboonImageUri = require('baboon-image-uri');
var tape = require('tape');

var image = new Image();

image.onload = function() {
  tape('Convert image', function(t) {

    var canvas = imageToCanvas(image);

    t.ok(canvas instanceof HTMLCanvasElement, 'canvas was returned');
    t.equal(canvas.width, image.width, 'width was the same');
    t.equal(canvas.height, image.height, 'height was the same');
    t.end();
  });

  tape('Convert canvas', function(t) {

    var image = document.createElement('canvas');
    var canvas;

    image.width = 100;
    image.height = 150;

    canvas = imageToCanvas(image);

    t.ok(canvas instanceof HTMLCanvasElement, 'canvas was returned');
    t.equal(canvas.width, image.width, 'width was the same');
    t.equal(canvas.height, image.height, 'height was the same');
    t.end();
  });

  tape('Throw error on non convertible', function(t) {

    var image = {};

    t.throws(imageToCanvas.bind(undefined, image), /Cannot convert: \[object Object\] to an HTMLCanvasElement/, 'Error was thrown with correct message');
    t.end();
  });
};

image.src = baboonImageUri;



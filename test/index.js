var imageToCanvas = require('./..');
var baboonImageUri = require('baboon-image-uri');
var tape = require('tape');



tape('Convert image', function(t) {

  var image = new Image();

  imageToCanvas(image, function(err, canvas) {

    t.notOk(err, 'an error was not thrown');
    t.ok(canvas instanceof HTMLCanvasElement, 'canvas was returned');
    t.equal(canvas.width, image.width, 'width was the same');
    t.equal(canvas.height, image.height, 'height was the same');
    t.end();
  });

  process.nextTick( function() {

    image.src = baboonImageUri;
  });
});

tape('Convert canvas', function(t) {

  var image = document.createElement('canvas');
  image.width = 100;
  image.height = 150;

  imageToCanvas(image, function(err, canvas) {

    t.notOk(err, 'an error was not thrown');
    t.ok(canvas instanceof HTMLCanvasElement, 'canvas was returned');
    t.equal(canvas.width, image.width, 'width was the same');
    t.equal(canvas.height, image.height, 'height was the same');
    t.end();
  });
});

tape('Throw error on non convertible', function(t) {

  var image = {};

  imageToCanvas(image, function(err, canvas) {

    t.ok(err, 'an error was thrown');
    t.equal(err.message, 'Cannot convert: [object Object] to an HTMLCanvasElement', 'Error was thrown with correct message');
    t.end();
  });
});

tape('Throw error on non 404', function(t) {

  var image = new Image();

  imageToCanvas(image, function(err, canvas) {

    t.ok(err, 'an error was thrown');
    t.equal(err.message, 'Image load failed');
    t.end();
  });

  process.nextTick( function() {

    image.src = 'does not exist';
  });
});
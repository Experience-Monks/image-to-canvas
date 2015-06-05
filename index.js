module.exports = function imageToCanvas(image, cb) {

  var canvas = image;

  if(image instanceof HTMLImageElement) {
    
    // if the image has loaded it will have a width and height
    if(image.width && image.height && image.complete) {
      canvas = getCanvasFromImage(image);

      process.nextTick(cb.bind(undefined, canvas));
    } else {
      image.onload = function() {
        canvas = getCanvasFromImage(image);

        cb(null, canvas);
      };

      image.onerror = function() {

        cb(new Error('Image load failed'));
      };
    }
  } else if(image instanceof HTMLCanvasElement) {
    canvas = image;

    process.nextTick(cb.bind(undefined, null, canvas));
  } else {

    process.nextTick(cb.bind(undefined, new Error('Cannot convert: ' + Object.prototype.toString.call(image) + ' to an HTMLCanvasElement'), canvas));
  }
};

function getCanvasFromImage(image) {

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0);

  return canvas;
}
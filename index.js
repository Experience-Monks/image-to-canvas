module.exports = function imageToCanvas(image) {

  var canvas = image;
  var context;

  if(image instanceof HTMLImageElement) {
    canvas = document.createElement('canvas');
    context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
  } else if(image instanceof HTMLCanvasElement) {
    canvas = image;
  } else {
    throw new Error('Cannot convert: ' + Object.prototype.toString.call(image) + ' to an HTMLCanvasElement');
  }

  return canvas;
};
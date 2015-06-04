# image-to-canvas

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Pass an HTMLImageElement receive a Canvas back

## Usage

[![NPM](https://nodei.co/npm/image-to-canvas.png)](https://www.npmjs.com/package/image-to-canvas)

```javascript
var imageToCanvas = require('image-to-canvas');
var image = new Image();

image.src = 'some uri';

imageToCanvas(image, function(err, canvas) {

});
```


## License

MIT, see [LICENSE.md](http://github.com/Jam3/image-to-canvas/blob/master/LICENSE.md) for details.

## Simple Animated Canvas Starfield

### Usage:

`var starfield = Starfield.create(element, options)`

* `element` is an HTMLElement (the container to insert the canvas into)
* `options` is an object containing options (optional)

Examples can be found [here](https://github.com/choochburger/starfield/tree/master/example).

### Options:

Defaults explained:

```
numStars:   20,     // Number of stars used in field
speedMin:   10,     // Minimum speed
speedMax:   80,     // Maximum speed
radiusMin:  1,      // Minimum pixel radius of "stars"
radiusMax:  4,      // Maximum pixel radius of "stars"
width:      null,   // Width of the starfield
height:     null,   // Height of the starfield
bgColor:    '#000', // Background color (HEX, rgba, etc)
starColors: ['#FFF', '#DDD', '#444', '#333'], // Array of colors to randomly assign to the "stars"
frameMs:    50      // Time between frames (in milliseconds)
```

You can pass in all or none of these values to the `Starfield` constructor.

**Example:**

``` js
var fieldEl = document.getElementById('field');

Starfield.create(fieldEl, {
  starColors: ['#980000', '#FF0000', '#FF9900'] // Fiery hell stars. Ahhhhhh.
});

```
(function(window) {

  var Starfield, Star, extend;

  Star = {
    x:      0,
    y:      0,
    radius: 0,
    color:  '#FFF',
    speed:  10
  };

  Starfield = {

    timer:  undefined,

    canvas: undefined,
    ctx:    undefined,
    width:  0,
    height: 0,
    eAngle: Math.PI * 2, // ending angle for drawing circles

    stars:  [],

    options: {
      numStars:   20,
      speedMin:   10,
      speedMax:   80,
      radiusMin:  1,
      radiusMax:  4,
      width:      null,
      height:     null,
      bgColor:    '#000',
      starColors: ['#FFF', '#DDD', '#444', '#333'],
      frameMs:    50
    },

    create: function(containerEl, options) {
      var starField = extend({}, Starfield),
          options = options || {},
          self = starField;

      for (var userOpt in options) {
        self.options[userOpt] = options[userOpt];
      }

      self.setDimensions(containerEl);
      self.createStars();
      self.canvas = self.createCanvas(containerEl);

      return self;
    },

    setDimensions: function(containerEl) {
      var opts = this.options;

      this.width  = opts.width  || containerEl.clientWidth;
      this.height = opts.height || containerEl.clientHeight;
    },

    createCanvas: function(containerEl) {
      var canvas = document.createElement('canvas'),
          opts = this.options,
          ctx = canvas.getContext('2d');

      canvas.width  = this.width;
      canvas.height = this.height;

      this.ctx = ctx;

      this.drawBg();
      this.canvas = containerEl.appendChild(canvas);
    },

    createStars: function() {
      this.stars = [];

      for (var i = 0, len = this.options.numStars; i < len; i++) {
        var star = this.createStar()
        this.stars.push(star);
      }
    },

    createStar: function(star) {
      var star = star || extend({}, Star),
          opts = this.options;

      star = extend(star, {
        x:      this.getRandIntFromRange(0, this.width),
        y:      this.getRandIntFromRange(0, this.height),
        radius: this.getRandIntFromRange(opts.radiusMin, opts.radiusMax),
        speed:  this.getRandIntFromRange(opts.speedMin, opts.speedMax),
        color:  this.getRandFromArray(opts.starColors)
      });
      return star;
    },

    getRandIntFromRange: function(min, max) {
      var randInt = max - min;
      randInt = randInt * Math.random();
      randInt = randInt + min;
      randInt = randInt | 0;
      return randInt; // Round down to nearest integer
    },

    getRandFromArray: function(array) {
      var starColors = this.options.starColors,
          index = this.getRandIntFromRange(0, starColors.length);
      return starColors[index];
    },

    start: function() {
      this.animate();
    },

    animate: function() {
      var self = this,
          stars = this.stars,
          star;

      self.draw();

      for (var i = 0, len = this.stars.length; i < len; i++) {
        star = stars[i];
        star.x = star.x + star.speed;

        if (star.x > this.width) {
          star = this.createStar(star);
          star.x = -star.radius;
        }
      }

      timer = setTimeout(function() {
        self.animate();
      }, this.options.frameMs);
    },

    pause: function() {
      clearTimeout(timer);
    },

    destroy: function() {
      console.log('destroy');
    },

    draw: function() {
      var stars = this.stars,
          numStars = this.stars.length,
          ctx = this.ctx,
          star;

      this.drawBg();

      for (var i = 0; i < numStars; i++) {
        star = stars[i];
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, this.eAngle);
        ctx.closePath();
        ctx.fill();
      }
    },

    drawBg: function() {
      var ctx  = this.ctx,
          opts = this.options;

      ctx.clearRect(0, 0, this.width, this.height);
      ctx.fillStyle = opts.bgColor;
      ctx.fillRect(0, 0, this.width, this.height);
    }

  };

  extend = function(obj) {
    var args = Array.prototype.slice.call(arguments, 1),
        source;

    for (var i = 0, len = args.length; i < len; i++) {
      source = args[i];
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    }

    return obj;
  };

  // Expose Starfield globally
  window.Starfield = Starfield;

})(window);

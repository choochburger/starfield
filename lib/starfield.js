(function(window) {


  var Starfield;

  Starfield = {

    options: {
      numStars:     20,
      speedMin:     10,
      speedMax:     20,
      radiusMin:    15,
      radiusMax:    30,
      canvasWidth:  500,
      canvasHeight: 400,
      starColors:   ['#FFF', '#FF0']
    },

    create: function(containerEl, options) {
      var starField = Object.create(Starfield),
          options = options || {};

      for (var userOpt in options) {
        starField.options[userOpt] = options[userOpt];
      }

      return starField;
    },

    start: function() {
      console.log('start');
    },

    pause: function() {
      console.log('pause');
    },

    destroy: function() {
      console.log('destroy');
    }

  };

  window.Starfield = Starfield;

})(window);

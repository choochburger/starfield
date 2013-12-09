describe('Starfield', function() {
  var el, starfield;

  beforeEach(function() {
    el = document.createElement('div');
    starfield = Starfield.create(el);
    console.log(starfield.stars[0].radius);
  });

  afterEach(function() {
    el = null;
    starfield = null;
  });

  it('should start', function() {
    spyOn(starfield, 'animate');
    starfield.start();
    expect(starfield.animate).toHaveBeenCalled();
  });

  it('should pause', function() {
    spyOn(window, 'clearTimeout');
    starfield.pause();
    expect(window.clearTimeout).toHaveBeenCalledWith(starfield.timer);
  });

  it('should create a canvas in the containerEl', function() {
    var canvas = el.getElementsByTagName('canvas')[0];
    expect(canvas).toBeDefined();
  });

  it('should create an array of stars based on numStars option', function() {
    expect(starfield.stars.length).toBe(starfield.options.numStars);
  });

  it('should reset stars when they exit the canvas', function() {
    var star = starfield.stars[0];

    star.x = starfield.width + 10;
    spyOn(starfield, 'createStar').andCallThrough();
    starfield.animate();
    expect(star.x).toBe(-star.radius);
    expect(starfield.createStar).toHaveBeenCalledWith(star);
  });

});

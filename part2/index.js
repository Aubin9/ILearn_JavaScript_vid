// JavaScript is all about objects
// ES5-> var ES6->let

/*const circle0 = {
    radius: 1,
    location: {
      x: 1,
      y: 1,
    },
    draw: function () {
      console.log("draw");
    },
};
circle0.draw();
*/

// Factory Function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle0 = createCircle(1);

// Constructor Function
function Circle0(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another0 = new Circle0(10);

// Functions are objects
// Adding or removing properties
another0.location = { x: 1 }; // OR
another0["location"] = { x: 1 };
// Deleting
delete another0.location;
delete another0["location"];

// ABSTRACTION: private properties and methods
function Circle1(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function () {
    // ...
  };
  this.draw = function () {
    this.computeOptimumLocation();
    console.log("draw");
  };
}
// ----------------------------------- abstraction applied
function Circle1(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 }; // declare as a variable for abstraction
  let computeOptimumLocation = function () {
    // ...
  };
  this.draw = function () {
    let x, y;
    computeOptimumLocation();
    console.log("draw");
  };
}

// getters and setters, to better organize abstraction
function Circle2(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      //   if (!value.x || !value.y) throw new Error("Invalid location");
      //   defaultLocation = value;
    },
  });
}

const circle = new Circle2(10);
circle.defaultLocation = 1;
circle.draw();

// Stop watch project
function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
const sw = new Stopwatch();
// sw.start();
// sw.stop();
// sw.reset();
// sw.duration;

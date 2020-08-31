// Mouse config
mouse = {
  x: 0,
  y: 0,
  preDown: false,
  down: false,
  downTick: false,
  dragging: false,

  init: function () {
    $("#canvas_id").mousemove(mouse.mouseMoveHandler);
    $("#canvas_id").mousedown(mouse.mouseDownHandler);
    $("#canvas_id").mouseup(mouse.mouseUpHandler);
    $("#canvas_id").mouseout(mouse.mouseUpHandler);
  },

  update: function () {
    this.downTick = !this.preDown && this.down;
    this.preDown = this.down;
  },

  mouseMoveHandler: function (ev) {
    var offset = $("#canvas_id").offset();
    mouse.x = ev.pageX - offset.left;
    mouse.y = ev.pageY - offset.top;
    if (mouse.down) {
      mouse.dragging = true;
    }
  },
  mouseDownHandler: function (ev) {
    mouse.down = true;
    mouse.downX = mouse.x;
    mouse.downY = mouse.y;
    ev.originalEvent.preventDefault();
  },
  mouseUpHandler: function (ev) {
    mouse.down = false;
    mouse.dragging = false;
  },
};

// Game engine
var gameEngine = {
  state: {
    id: 0,
    entities: [],
  },
  canvas: document.getElementById("canvas_id"),
  context: document.getElementById("canvas_id").getContext("2d"),

  addEntity: function (entity) {
    gameEngine.state.entities.push(entity);
  },

  update: function () {
    for (entity of gameEngine.state.entities) {
      entity.update();
    }

    return gameEngine.state;
  },

  render: function () {
    for (entity of gameEngine.state.entities) {
      entity.render();
    }
  },


  play: function () {
    for (entity of gameEngine.state.entities) {
      entity.play();
    }
  },
};

class Entity {
  constructor() {
    gameEngine.addEntity(this);
  }

  update() {
    console.log("Please implement update method");
  }

  render() {
    console.log("Please implement render method");
  }

  play() {
    console.log("play...")
  }
}

// Game loop
window.requestAnimationFrame = function (callback) {
  var currTime = new Date().getTime();
  var timeToCall = Math.max(
    0,
    1000 / gameLoop.fps - (currTime - gameLoop.prevTime)
  );
  var id = window.setTimeout(function () {
    callback(currTime + timeToCall);
  }, timeToCall);
  gameLoop.prevTime = currTime + timeToCall;
  return id;
};

window.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};

var gameLoop = {
  prevTime: 0,
  fps: 24,

  main: function () {
    gameEngine.state.id = window.requestAnimationFrame(gameLoop.main);
    mouse.update();
    gameEngine.state = gameEngine.update();
    gameEngine.render();
    gameEngine.play();
  },

  init: function () {
    let ctx = gameEngine.context;
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    mouse.init();
  },
};

class Piano extends Entity {
  constructor(x, y, width, height, color) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.whiteKeys = [];
    this.blackKeys = [];
    this.keys = [];
    this.index = -1;
    this.audio = new Audio();
  }

  render() {
    let ctx = gameEngine.context;
    ctx.beginPath();
    ctx.strokeStyle = "#555";
    ctx.lineWidth = 1;
    ctx.fillStyle = this.color;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.fill();
    this.keys.forEach(item => {
      
      item.render();
    })
  }

  generateKeys() {
    this.generateWhiteKeys();
    this.generateBlackKeys();
    this.keys = [...this.whiteKeys, ...this.blackKeys];
    
  }

  generateWhiteKeys() {
    let widthKey = this.width / 12;
    let heightKey = this.height - 100;
    for (var i = 0; i < 10; i++) {
      if (i === 0) {
        let key = new Key(this.x + widthKey, marginTop + widthKey,
           widthKey, heightKey, "#FFF");
        this.whiteKeys.push(key);
      } else {
        let key = new Key(this.x + this.width / 12 + widthKey * i, marginTop + widthKey, widthKey, heightKey, "#FFF");
        this.whiteKeys.push(key);
      }
    }
  }

  generateBlackKeys() {
    let widthKey = this.width / 12;
    let heightKey = this.height - 100;
    for (let i = 0; i < 9; i++) {
        if (i === 2 || i === 6) {
        } else {
          let key = new Key(widthKey + marginLeft + (widthKey / 4) * 3 + widthKey * i,
           marginTop + widthKey, widthKey / 2, heightKey / 2, "#333");
          this.blackKeys.push(key);
        }
      }
  }

  play() {
    this.checkPlay();
    // console.log("Currentime = " + this.audio.currentTime);
    
    if (this.index >= 0) {
      this.audio.src = keyNotes[this.index].src;
      this.audio.play();
    }
  }

  setCurrenTime() {
    this.audio.currentTime = 0;
  }

  checkPlay() {
    if (mouse.down === true) {   
      this.keys.forEach((item, index) => {
        if (mouse.x >= item.x && 
          mouse.x <= item.x + item.width &&
          mouse.y >= item.y &&
          mouse.y <= item.y + item.height) {
            this.index = index;
            if (this.audio.currentTime > 0) {
              this.setCurrenTime();
            }  
          }
      });
    } else {
      this.index = - 1;
    }
  }
}

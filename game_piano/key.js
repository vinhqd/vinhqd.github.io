class Key extends Entity{
    
    constructor(x, y, width, height, color) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(){
        let ctx = gameEngine.context;
        ctx.beginPath();
        ctx.strokeStyle = "#555";
        ctx.lineWidth = 1;
        ctx.fillStyle = this.color;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.fill();
    }

    update() {
        
    }

}
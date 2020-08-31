class Game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.isOver = false;
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.querySelector('.main__content').appendChild(this.canvas);
        // Create new board
        this.board = new Board(this);
        // Create new brick
        this.brick = new Brick(this);

        // Get keyboard
        this.listenKeyBoard();

        // Start game
        this.startGame();

        this.loop();
    }

    startGame() {
        setInterval(() => {
            this.brick.fall();
        }, 500)
    }

    listenKeyBoard() {
        document.addEventListener('keydown', (event) => {
            switch(event.code) {
                case "ArrowLeft": this.brick.moveLeft(); break;
                case "ArrowRight": this.brick.moveRight(); break;
                case "ArrowUp": this.brick.rotate(); break;
                case "ArrowDown": this.brick.moveDown(); break;
            }
        });
    }

    createNewBrick() {
        this.brick = new Brick(this);
    }

    update() {

    }

    loop() {
        console.log("loop");
        this.update();
        this.draw();
        if (this.isOver) {
            document.getElementById('over_game').style.display = 'block';
        }
        setTimeout(() => this.loop(), 30);
    }

    draw() {
        this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.board.draw();
        this.brick.draw();
    }
}

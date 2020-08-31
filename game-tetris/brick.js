class Brick {
    constructor(game) {
        this.game = game;
        this.dots = [];
        this.data = [];
        this.col = 3;
        this.row = 0;
        this.createData();
        this.createDots();
    }

    createData() {
        let baseData = [
            [
                [x, x, x, x]
            ],
            [
                [x, x, x],
                [_, x, _]
            ],
            [
                [x, x],
                [x, x]
            ],
            [
                [x, x, _],
                [_, x, x]
            ],
            [
                [_, x, x],
                [x, x, _]
            ],
            [
                [x, _],
                [x, _],
                [x, x]
            ],
            [
                [_, x],
                [_, x],
                [x, x]
            ],
        ];
        let r = Math.floor(Math.random() * 7);
        this.data = baseData[r];
    }

    createDots() {
        this.dots = [];
        for (let row = 0; row < this.data.length; row++) {
            for (let col = 0; col < this.data[0].length; col++) {
                if (this.data[row][col] === x) {
                    let newDot = new Dot(this.game, row + this.row, col + this.col);
                    this.dots.push(newDot);
                }
            }
        }
        this.overGame();
    }

    canFall(){
        let brickCanFall = true;
        this.dots.forEach(dot => {
            if (!dot.canFall()) {
                brickCanFall = false;
            }
        });
        return brickCanFall;
    }

    fall() {
        this.row++;
        if (this.canFall()) {
            this.dots.forEach(dot => {
                dot.fall();
            });
        } else {
            this.appendToBoard();
            this.game.board.checkFullRow();
            if (!this.game.isOver){
                this.game.createNewBrick();
            }
            document.getElementById('score').textContent = this.game.board.score;
        }
    }

    appendToBoard() {
        this.dots.forEach(dot => {
            this.game.board.data[dot.row][dot.col] = x;
        });
    }

    moveDown() {
        while(this.canFall()) {
            this.fall();
        }
    }

    rotate() {
        let newData = [];
        for (let row = 0; row < this.data[0].length; row++) {
            let newRow = [];
            for (let col = this.data.length - 1; col >=0; col--) {
                newRow.push(this.data[col][row])
            }
            newData.push(newRow);
        }
        let isValid = true;
        for (let newRow = 0; newRow < newData.length; newRow++) {
            for (let newCol = 0; newCol < newData[0].length; newCol++) {
                if (newCol + this.col > NUM_COLS - 1) {
                    this.col -= Math.abs(newCol + this.col - NUM_COLS - 1);
                }
                if (newCol + this.col < 0) {
                    this.col += 1;
                }
                if (newData[newRow][newCol] === x &&
                    !this.game.board.isEmptyCell(newRow + this.row, newCol + this.col)){
                        isValid = false;
                    }
            }
        }
        if (isValid) {
            this.data = newData;
            this.createDots();   
        }
    }

    isOver(row) {
        if (
            !this.game.board.isEmptyCell(this.dots[row].row,  this.dots[row].col)){
            return true;
        }
        return false;
    }

    overGame() { 
        for (let row = this.dots.length - 1; row >= 0; row--) {
            if(this.isOver(row)) {
                this.game.isOver = true;
            }
        }
    }

    canMoveLeft(){
        let brickCanMoveLeft = true;
        this.dots.forEach(dot => {
            if (!dot.canLeft()) {
                brickCanMoveLeft = false;
            }
        });
        return brickCanMoveLeft;
    }

    moveLeft() {
        this.col--;
        if (this.canMoveLeft()) {
            this.dots.forEach(dot => {
                dot.moveLeft();
            });
        }
    }

    canMoveRight(){
        let brickCanMoveRight = true;
        this.dots.forEach(dot => {
            if (!dot.canRight()) {
                brickCanMoveRight = false;
            }
        });
        return brickCanMoveRight;
    }

    moveRight() {
        this.col++;
        if (this.canMoveRight()) {
            this.dots.forEach(dot => {
                dot.moveRight();
            });
        }
    }

    draw() {
        this.dots.forEach(dot => dot.draw());
    }
}
class Board {
    constructor(game) {
        this.game = game;
        this.data = [
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, _, _, _, _, _, _]
        ];
        this.score = 0;
    }

    isEmptyCell(row, col) {
        return this.data[row][col] === _;
    }

    isRowFull(row) {
        let full = true;
        for (let col = 0; col < NUM_COLS; col++) {
            if (this.isEmptyCell(row, col)) {
                full = false;
            }
        } 
        return full;
    }

    checkFullRow() {
        let rowsRemoveCount = 0;
        let row = NUM_ROWS - 1;
        while(row >= 0) {
            if (this.isRowFull(row)) {
                this.removeRow(row);
                rowsRemoveCount++;
            } else {
                row--;
            }
        }
        this.setScore(rowsRemoveCount);
    }

    setScore(rowsRemoveCount) {
        switch(rowsRemoveCount) {
            case 0: this.score = this.score; break;
            case 1: this.score += 1000; break;
            case 2: this.score += 2500; break;
            case 3: this.score += 4000; break;
            case 4: this.score += 6000; break;
        }
    }

    removeRow(row) {
        this.data.splice(row, 1);
        this.data.unshift([_, _, _, _, _, _, _, _, _, _]);
        this.createDots();
    }

    createDots() {
        this.dots.forEach(dot => dot.draw());
    }

    draw() {
        this.dots = [];
        for (let row = 0; row < NUM_ROWS; row++) {
            for (let col = 0; col < NUM_COLS; col++) {
                if (this.data[row][col] === x) {
                    let newDot = new Dot(this.game, row, col);
                    this.dots.push(newDot);
                }
            }
        }
        this.dots.forEach(dot => dot.draw());
    }
}
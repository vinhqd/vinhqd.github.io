let startGame = document.getElementById('btn');
let resetGame = document.getElementById('btnReset');

let game = new Game();

startGame.addEventListener('click', () => {
    let name = document.getElementById('txtName').value;
    document.getElementById('name').textContent = name
    document.getElementById('ingame').style.display = "none";
    game.init();
})

resetGame.addEventListener('click', () => {
    
    document.getElementById('over_game').style.display = 'none';
    game.isOver = false;
    console.log(game.isOver);
    for(let row = 0; row < game.board.data.length; row++) {
        for(let col = 0; col < game.board.data[0].length; col++) {
            game.board.data[row][col] = _;
        }
    }
    game.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
})
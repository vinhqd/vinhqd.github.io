gameLoop.init();
let widthKey = 50;
let heightKey = 200;
let marginTop = 10;
let marginLeft = 10;
let piano = new Piano(marginLeft, marginTop, widthKey * 12, heightKey + 100, "#AAA");
piano.generateKeys();
gameLoop.main();

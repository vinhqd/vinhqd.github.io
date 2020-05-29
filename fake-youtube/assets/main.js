let kBoard = document.querySelector('#keyboard');
let showMenu = document.querySelector('#showMenu');
let leftBar = document.querySelector('#leftBar');
let mainBar = document.querySelector('#mainBar');
let content = document.querySelector('#content');


let Keyboard = window.SimpleKeyboard.default;

showMenu.addEventListener('click', showMenuClicked);

function showMenuClicked() {
  if (!leftBar.style.display || leftBar.style.display === 'none'){
    leftBar.style.display = 'block';
    mainBar.style.display = 'none';
    content.style.marginLeft = '72px';
  } else {
    leftBar.style.display = 'none';
    mainBar.style.display = 'block';
    content.style.marginLeft = '250px';
  }
}

let myKeyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
});

function onChange(input) {
  document.querySelector("#input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}

function showKeyboard() {
    if (kBoard.style.display === "none") {
        kBoard.style.display = "block";
      } else {
        kBoard.style.display = "none";
      }
}
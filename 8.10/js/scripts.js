// exercise 8.10  DOM

var buttons = document.getElementsByClassName('button');
console.log(buttons);

for (var i = 0; i < buttons.length; i++) {
    window.alert(buttons[i].innerHTML);
    console.log(buttons[i].innerHTML);
}

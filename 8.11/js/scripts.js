// exercise 8.11 Events

var list = document.getElementById('List'),
    buttonElem = document.getElementById('addElem');

buttonElem.addEventListener('click', function() {
    var num = list.getElementsByTagName('li').length.toString();
    list.innerHTML += '<li>item ' + num + '</li>';
});

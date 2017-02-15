/**
 * Created by frycek on 15.02.17.
 */
var url = 'http://api.icndb.com/jokes/random',
    button = document.getElementById('get-joke'),
    paragraph = document.getElementById('joke');

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function() {
        var response = JSON.parse(xhr.response);
        paragraph.innerText = response.value.joke;
    });
    xhr.send();
}

// EVENT LISTENERS
button.addEventListener('click', function() {
    getJoke();
});

// Load joke at the start
getJoke();
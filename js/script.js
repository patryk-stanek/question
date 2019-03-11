'use strict';

var url = 'http://api.icndb.com/jokes/random'; //adres dowcipu

var button = document.getElementById('get-joke'); //przycisk dla nasluchiwania
button.addEventListener('click', function(){
    getJoke();
});

var paragraph = document.getElementById('joke'); //element wyswietlajacy dowcip

function getJoke(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}

getJoke();
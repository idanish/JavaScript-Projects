let index = 0;

function customLoop(){


    if (index < 10) {
        document.getElementById('changeNo').innerHTML += (index) + 1 + "</br>";
        index++;
    }

    customLoop();
}






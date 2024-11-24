let num = 0;
function increment() {
    document.getElementById('changeNo').innerHTML = ++num;
    document.getElementById('incr').style.color = "green";
    document.getElementById('decr').style.color = "black";
}

function decrement() {

    document.getElementById('changeNo').innerHTML = --num;
    document.getElementById('incr').style.color = "black";
    document.getElementById('decr').style.color = "red";
    if (num <= 0) {
        num = 1;
    }
}
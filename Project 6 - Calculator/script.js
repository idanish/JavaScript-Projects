let buttons = document.querySelectorAll("button");
let input = document.getElementById("display");
let newArr = Array.from(buttons);
console.log(newArr);
let string = "";

newArr.forEach(singleBtn => {

    singleBtn.addEventListener("click", (e) => {
        eventText = e.target.innerHTML

        if (eventText == "=") {
            input.value = eval(string);
        } else if (eventText == "%") {
            input.value = eval(string) / 100;
        } else if (eventText == "AC") {
            string = "";
            input.value = "";
        } else if (eventText == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += eventText;
            input.value = string;
        }




    })
});



function empty() {
    string = "";
    input.value = "";
}
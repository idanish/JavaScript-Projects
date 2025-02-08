let btn = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let players = document.querySelector(".player");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let msg = document.querySelector(".msg");
let Player = true;
let count = 0;
let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


btn.forEach(singlebox => {
    singlebox.addEventListener("click", (e) => {
        if (Player) {
            singlebox.innerText = "O";
            Player = false;
            p1.classList.add("hide");
            p2.classList.remove("hide");

        } else {
            singlebox.innerText = "X";
            Player = true;
            p2.classList.add("hide");
            p1.classList.remove("hide");
        }
        singlebox.disabled = true;
        checkWinner();

        count++;
        // let isWinner = checkWinner();
        
        if (count === 9) {
            gameDraw();
        }
        
        console.log(!checkWinner)
    })

    const disabledboxes = () => {
        for (const box of btn) {
            box.disabled = true;
        }
    }

    const enableboxes = () => {
        for (const box of btn) {
            box.disabled = false;
            box.innerText = "";
        }
    }

    const showWinner = (winner) => {
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msg.classList.remove("hide");
        player1.classList.add("hide")
        player2.classList.add("hide")
        p1.classList.add("hide");
        p1.innerHTML = "";
        p2.innerHTML = "";
        p2.classList.add("hide");
        disabledboxes();
    };

    const gameDraw = () => {
        disabledboxes();
        newGame()
        msg.innerText = "Game Draw";
        msg.classList.remove("hide");
    };

    const checkWinner = () => {
        for (const pattern of winPattern) {
            let position1 = btn[pattern[0]].innerText;
            let position2 = btn[pattern[1]].innerText;
            let position3 = btn[pattern[2]].innerText;

            if (position1 != "" && position2 != "" && position3 != "") {
                if (position1 === position2 && position2 === position3) {
                    disabledboxes();
                    reset.style = "dispaly:block";
                    if (position1 == "O") {
                        showWinner(player1.innerText);
                    } else {
                        showWinner(player2.innerText);
                    }


                }
            }
        }
    }

    const newGame = () => {
        Player = true;
        reset.style = "display:none";
        enableboxes();
        msg.classList.add("hide");
        p2.classList.add("hide");
        p1.classList.remove("hide");
        player1.classList.remove("hide");
        player2.classList.remove("hide");
        p1.innerHTML = "Your Turn";
        p2.innerHTML = "Your Turn";
        count = 0;


    }

    reset.addEventListener("click", newGame)


})





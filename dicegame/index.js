document.querySelector('button').addEventListener('click', function () {

    //player 1 
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;

    const randomDiceImage1 = "dice" + randomNumber1 + ".png";

    const randomImageSource1 = "images/" + randomDiceImage1;

    const image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource1);

    //player 2 
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const randomDiceImage2 = "dice" + randomNumber2 + ".png";

    const randomImageSource2 = "images/" + randomDiceImage2;

    const image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins";
        document.body.style.backgroundColor = "#827397";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = " 🚩 Player 2 Wins";
        document.body.style.backgroundColor = "#4D4C7D";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw";
        document.body.style.backgroundColor = "#363062";
    }

});

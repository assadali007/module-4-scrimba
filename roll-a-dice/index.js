
// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById('player2Dice')

const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')


const message = document.getElementById('message')


const  rollBtn = document.getElementById('rollBtn')

const resetBtn = document.getElementById('resetBtn')
const doubleBtn = document.getElementById('doubleBtn')

function showDisplayButton() {
    rollBtn.style.display = "none"
    doubleBtn.style.display = "none"
    resetBtn.style.display = "block"
}
function player1result( number=1)
{
    const randomNumber = Math.floor(Math.random() * 6) + 1

    player1Score += randomNumber *number
    player1Scoreboard.textContent = player1Score
    player1Dice.textContent = randomNumber
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
    message.textContent = "Player 2 Turn"


}
function  player2result(number=1)
{
    const randomNumber = Math.floor(Math.random() * 6) + 1

    player2Score += randomNumber *number
    player2Scoreboard.textContent = player2Score
    player2Dice.textContent = randomNumber
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.textContent = "Player 1 Turn"
}
function player1message()
{
    message.textContent = "Player 1 has won! 🥳"


}
function player2message()
{
    message.textContent = "Player 2 has won! 🎉"

}
/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function() {

    if (player1Turn) {
        player1result()
    }
    else {

        player2result()
    }

    // 1. Check if a player has won. If so, change the message to "Player X has won!"
    // 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block

    if (player1Score >= 20) {
        player1message()
        startConfetti()
        showDisplayButton()
    } else if (player2Score >= 20) {
        player2message()
        startConfetti()

        showDisplayButton()
    }

    player1Turn = !player1Turn
})
/*
   use for double click function

 */
doubleBtn.addEventListener("dblclick", function() {

    if (player1Turn) {

        player1result(2)

    }
    else {
        player2result(2)

    }

    // 1. Check if a player has won. If so, change the message to "Player X has won!"
    // 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block

    if (player1Score >= 20) {
        player1message()
        startConfetti()

        showDisplayButton()
    } else if (player2Score >= 20) {
        player2message()
        startConfetti()

        showDisplayButton()
    }

    player1Turn = !player1Turn
})


// 1. Hook a click event listener up with the Reset Button
// 2. Create a reset() function that resets the game
// 3. Invoke the reset() function when the Reset Button is clicked


resetBtn.addEventListener("click", function(){
    reset()
})
function resetvalue() {
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    doubleBtn.style.display = "block"

}
function reset() {
    if (player1Score > player2Score)
    {
        message.textContent = "Player 2 Turn"

        resetvalue()


        player2Dice.classList.add("active")
        player1Dice.classList.remove("active")
    }
    else {
        message.textContent = "Player 1 Turn"

        resetvalue()

        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
    }
}

//


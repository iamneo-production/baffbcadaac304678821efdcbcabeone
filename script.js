
let currentPlayer = "X"; 
let board = ["", "", "", "", "", "", "", "", ""]; 
let gameOver = false;

function makeMove(index)
{
   
    if (!gameOver && board[index] === "")
     {
       
        board[index] = currentPlayer;
        document.getElementsByClassName("btn")[index].value = currentPlayer;

        checkWin();

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin() 
{
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winCombos) 
    {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            document.querySelector(".result-text").textContent = `${currentPlayer} wins!`;
            // Enable the reset button
            document.querySelector(".reset-button").disabled = false;
        }
    }

    // Check for a draw (no empty cells left)
    if (!board.includes("") && !gameOver) {
        // Update game state and display a draw message
        gameOver = true;
        document.querySelector(".result-text").textContent = "It's a draw!";
        // Enable the reset button
        document.querySelector(".reset-button").disabled = false;
    }
}

// Function to reset the game
function resetBoard() {
    // Reset game variables and board
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;

    // Clear the board by setting button values to empty
    const buttons = document.getElementsByClassName("btn");
    for (const button of buttons) {
        button.value = "";
    }

    // Reset the result text and disable the reset button
    document.querySelector(".result-text").textContent = "Player X's turn";
    document.querySelector(".reset-button").disabled = true;
}

// Add click event listeners to all buttons
const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        makeMove(i);
    });
}

// Add click event listener to the reset button
document.querySelector(".reset-button").addEventListener("click", resetBoard);

// Initial game reset
resetBoard();

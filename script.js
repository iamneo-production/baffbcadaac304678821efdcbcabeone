// JavaScript for Tic Tac Toe game

let currentPlayer = "X"; // Initialize current player
let board = ["", "", "", "", "", "", "", "", ""]; // Initialize the game board
let gameOver = false; // Initialize game state

// Function to make a move when a cell is clicked
function makeMove(index) {
    // Check if the game is not over and the clicked cell is empty
    if (!gameOver && board[index] === "") {
        // Update the board and display the player's symbol
        board[index] = currentPlayer;
        document.getElementsByClassName("btn")[index].value = currentPlayer;

        // Check if the current player has won
        checkWin();

        // Toggle to the next player's turn
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

// Function to check if the current player has won
function checkWin() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Iterate through winCombos to check for a win
    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            // Update game state and display the winner
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

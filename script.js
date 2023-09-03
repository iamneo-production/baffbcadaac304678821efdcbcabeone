
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
        if (board[a] && board[a] === board[b] && board[a] === board[c])
         {
            gameOver = true;
            document.querySelector(".result-text").textContent = `${currentPlayer} wins!`;
            document.querySelector(".reset-button").disabled = false;
        }
    }

    if (!board.includes("") && !gameOver) {
        gameOver = true;
        document.querySelector(".result-text").textContent = "It's a draw!";
        document.querySelector(".reset-button").disabled = false;
    }
}

function resetBoard() 
{
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;

    const buttons = document.getElementsByClassName("btn");
    for (const button of buttons) {
        button.value = "";
    }

    document.querySelector(".result-text").textContent = "Player X's turn";
    document.querySelector(".reset-button").disabled = true;
}

const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) 
{
    buttons[i].addEventListener("click", function() 
    {
        makeMove(i);
    });
}

document.querySelector(".reset-button").addEventListener("click", resetBoard);

resetBoard();

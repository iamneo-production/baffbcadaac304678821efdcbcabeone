// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const ticTacToe = (element, index) => {
    
    
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

};

   
const resetGame = () => {

    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;

    const buttons = document.getElementsByClassName("btn");
    for (const button of buttons) {
        button.value = "";
    }

    document.querySelector(".result").textContent = "Player X's turn";
    document.querySelector(".reset").disabled = true;
   
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);

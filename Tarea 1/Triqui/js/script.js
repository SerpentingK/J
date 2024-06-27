const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';
let gameActive = true;

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;
        }
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return true;
        }
    }

    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true;
    }

    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true;
    }

    return false;
}

function checkTie() {
    for (let row of board) {
        for (let cell of row) {
            if (cell === '') {
                return false;
            }
        }
    }
    return true;
}

function togglePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

function makeMove(row, col) {
    if (board[row][col] === '' && gameActive) {
        board[row][col] = currentPlayer;
        document.getElementById(`cell-${row}-${col}`).innerText = currentPlayer;

        if (checkWinner()) {
            alert(`¡Jugador ${currentPlayer} ha ganado!`);
            gameActive = false;
        } else if (checkTie()) {
            alert('¡Es un empate!');
            gameActive = false;
        } else {
            togglePlayer();
            document.getElementById('turn').innerText = `Jugador ${currentPlayer}`;
        }
    }
}

function createBoard() {
    const boardElement = document.getElementById('board');

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = `cell-${i}-${j}`;
            cell.addEventListener('click', () => makeMove(i, j));
            boardElement.appendChild(cell);
        }
    }
}

function resetGame() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = '';
            document.getElementById(`cell-${i}-${j}`).innerText = '';
        }
    }

    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('turn').innerText = 'Jugador 1';
}

createBoard();  // Agrega esta línea para generar el tablero al cargar la página

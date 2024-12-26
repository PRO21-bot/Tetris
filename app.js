const gameBoard = document.getElementById('game-board');
    const cells = Array.from(gameBoard.getElementsByClassName('cell'));
    const resetButton = document.getElementById('reset');

    let currentPlayer = 'X';
    let gameOver = false;

    function drawBoard() {
      cells.forEach(cell => {
        cell.addEventListener('click', () => {
          if (gameOver) return;
          if (cell.textContent) return;

          cell.textContent = currentPlayer;
          checkWinOrDraw();
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });
      });
    }

    function checkWinOrDraw() {
      // Add win and draw conditions here
    }

    resetButton.addEventListener('click', () => {
      cells.forEach(cell => {
        cell.textContent = '';
      });
      currentPlayer = 'X';
      gameOver = false;
    });

    drawBoard();

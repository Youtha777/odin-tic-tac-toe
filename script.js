(function () {
  const gameBoard = new Array(9);

  for (let i = 0; i < 9; i++) {
    gameBoard[i] = i + 1;
  }

  alert(gameBoard);
})();

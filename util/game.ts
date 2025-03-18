export type Player = 'X' | 'O' | null | 'draw';
export type Board = Player[];

export const checkWinner = (board: Board): Player => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every((cell) => cell !== null)) {
    return 'draw';
  }

  return null;
};

export const getAvailableMoves = (board: Board): number[] => {
  return board.reduce((acc: number[], cell, index) => {
    if (cell === null) {
      acc.push(index);
    }
    return acc;
  }, []);
};

export const minimax = (board: Board, player: Player): { index: number | null; score: number } => {
  const availableMoves = getAvailableMoves(board);
  const winner = checkWinner(board);

  switch (winner) {
    case 'O':
      return { index: null, score: 1 };
    case 'X':
      return { index: null, score: -1 };
    case 'draw':
      return { index: null, score: 0 };
  }

  const moves = [];
  for (const move of availableMoves) {
    const newBoard = [...board];
    newBoard[move] = player;
    const result = minimax(newBoard, player === 'O' ? 'X' : 'O');
    moves.push({ index: move, score: result.score });
  }

  let bestMove = null;
  let bestScore = player === 'O' ? -Infinity : Infinity;

  for (const move of moves) {
    if (player === 'O') {
      if (move.score > bestScore) {
        bestScore = move.score;
        bestMove = move.index;
      }
    } else {
      if (move.score < bestScore) {
        bestScore = move.score;
        bestMove = move.index;
      }
    }
  }

  return { index: bestMove, score: bestScore };
};

export const getComputerMove = (board: Board): number | null => {
  if (getAvailableMoves(board).length === 9) {
    // If the board is empty, the computer always takes the center
    return 4;
  }
  return minimax(board, 'O').index;
};

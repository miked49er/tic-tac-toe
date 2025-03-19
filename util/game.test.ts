import { Board, checkWinner, getAvailableMoves, getComputerMove, minimax } from './game';

describe('game.ts', () => {
  describe('checkWinner', () => {
    it('should return null if there is no winner', () => {
      const board: Board = ['X', 'O', null, null, 'X', null, null, null, 'O'];
      expect(checkWinner(board)).toBeNull();
    });

    it('should return the winner if there is a horizontal win', () => {
      const board: Board = ['X', 'X', 'X', null, 'O', null, null, null, 'O'];
      expect(checkWinner(board)).toBe('X');
    });

    it('should return the winner if there is a vertical win', () => {
      const board: Board = ['X', 'O', null, 'X', null, null, 'X', null, 'O'];
      expect(checkWinner(board)).toBe('X');
    });

    it('should return the winner if there is a diagonal win', () => {
      const board: Board = ['X', 'O', null, null, 'X', null, null, null, 'X'];
      expect(checkWinner(board)).toBe('X');
    });

    it('should return draw if there is a draw', () => {
      const board: Board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
      expect(checkWinner(board)).toBe('draw');
    });
  });

  describe('getAvailableMoves', () => {
    it('should return all available moves', () => {
      const board: Board = ['X', 'O', null, null, 'X', null, null, null, 'O'];
      expect(getAvailableMoves(board)).toEqual([2, 3, 5, 6, 7]);
    });

    it('should return an empty array if there are no available moves', () => {
      const board: Board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
      expect(getAvailableMoves(board)).toEqual([]);
    });
  });

  describe('minimax', () => {
    it('should return a score of 10 for an immediate win', () => {
      const board: Board = ['O', 'O', null, 'X', 'X', null, null, null, null];
      const result = minimax(board, 'O');
      expect(result.score).toBe(10);
    });

    it('should return a score of 6 for a win in the next move', () => {
      const board: Board = ['O', null, null, 'X', null, 'X', null, null, null];
      const result = minimax(board, 'O');
      expect(result.score).toBe(6);
    });

    it('should return a score of -10 for an immediate loss', () => {
      const board: Board = ['X', 'X', null, 'O', 'O', null, null, null, null];
      const result = minimax(board, 'X');
      expect(result.score).toBe(-10);
    });

    it('should return a score of -6 for a loss in the next move', () => {
      const board: Board = ['X', null, null, 'O', null, 'O', null, null, null];
      const result = minimax(board, 'X');
      expect(result.score).toBe(-6);
    });

    it('should return a score of 0 for a draw', () => {
      const board: Board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', null];
      const result = minimax(board, 'O');
      expect(result.score).toBe(0);
    });
  });

  describe('getComputerMove', () => {
    it('should return 4 if the board is empty', () => {
      const board: Board = Array(9).fill(null);
      expect(getComputerMove(board)).toBe(4);
    });

    it('should return the winning move if there is one', () => {
      const board: Board = ['O', 'O', null, 'X', 'X', null, null, null, null];
      expect(getComputerMove(board)).toBe(2);
    });

    it('should return the blocking move if there is one', () => {
      const board: Board = ['X', 'X', null, 'O', null, null, 'O', null, null];
      expect(getComputerMove(board)).toBe(2);
    });
  });
});

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Board from '@/app/components/Board';
import { Board as BoardType, checkWinner, getComputerMove, Player } from '@/util/game';
import { COMPUTER_MOVE_DELAY, GAME_OVER_DELAY } from '@/constants/timings';

interface TicTacToeProps {
  playerFirst: boolean;
  setWinner: (player: Player) => void;
  onGameOver: () => void;
}

const TicTacToe: React.FC<TicTacToeProps> = ({ playerFirst, setWinner, onGameOver }) => {
  const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState<Player>(playerFirst ? 'X' : 'O');

  useEffect(() => {
    if (!playerFirst) {
      computerMove(board);
    }
  }, [playerFirst]);

  const handleCellPress = (index: number) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = playerTurn;
    setBoard(newBoard);
    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      onGameOver();
      return;
    }
    setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    if (playerTurn === 'X') {
      setTimeout(() => {
        computerMove(newBoard);
      }, COMPUTER_MOVE_DELAY);
    }
  };

  const computerMove = (currentBoard: BoardType) => {
    const move = getComputerMove(currentBoard);
    if (move !== null) {
      const newBoard = [...currentBoard];
      newBoard[move] = 'O';
      setBoard(newBoard);
      const result = checkWinner(newBoard);
      if (result) {
        setWinner(result);
        setTimeout(onGameOver, GAME_OVER_DELAY);
        return;
      }
      setPlayerTurn('X');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Board board={board} onCellPress={handleCellPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default TicTacToe;

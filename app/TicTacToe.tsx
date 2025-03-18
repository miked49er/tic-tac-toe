import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Board from './components/Board';
import { Board as BoardType, checkWinner, getComputerMove, Player } from '../util/game';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useRouter } from 'expo-router';

interface TicTacToeRouteParams {
  playerFirst?: string;
}

const TicTacToe = () => {
  const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState<Player>('X');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<Player>(null);
  const { playerFirst } = useLocalSearchParams() as TicTacToeRouteParams;
  const router = useRouter();

  useEffect(() => {
    if (playerFirst === 'false') {
      computerMove(board);
    }
  }, [playerFirst]);

  useEffect(() => {
    if (gameOver) {
      router.push({ pathname: '/GameOver', params: { winner: winner } });
    }
  }, [gameOver]);

  const handleCellPress = (index: number) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = playerTurn;
    setBoard(newBoard);
    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      setGameOver(true);
      return;
    }
    setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    if (playerTurn === 'X') {
      computerMove(newBoard);
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
        setGameOver(true);
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

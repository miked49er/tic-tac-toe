import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import { Board as BoardType } from '@/util/game';

interface BoardProps {
  board: BoardType;
  onCellPress: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onCellPress }) => {
  return (
    <View style={styles.board}>
      {board.map((player, index) => (
        <Cell key={index} player={player} onPress={() => onCellPress(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
});

export default Board;

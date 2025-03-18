import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Player } from '@/util/game';

interface CellProps {
  player: Player;
  onPress: () => void;
}

const Cell: React.FC<CellProps> = ({ player, onPress }) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={styles.text}>{player}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default Cell;

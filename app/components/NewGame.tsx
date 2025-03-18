import React from 'react';
import { Player } from '@/util/game';
import { StyleSheet, Text, View } from 'react-native';
import ChooseTurn from '@/app/components/ChooseTurn';

interface NewGameProps {
  winner: Player;
  setPlayerFirst: (value: boolean) => void;
}

const NewGame = ({ winner, setPlayerFirst }: NewGameProps) => {
  let message = '';
  switch (winner) {
    case 'X':
      message = 'You Won';
      break;
    case 'O':
      message = 'You Lost';
      break;
    case 'draw':
      message = 'Draw';
      break;
    default:
      message = '';
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Text>New Game?</Text>
      <ChooseTurn setPlayerFirst={setPlayerFirst} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewGame;

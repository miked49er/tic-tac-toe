import React from 'react';
import { Player } from '@/util/game';
import { StyleSheet, Text, View } from 'react-native';
import ChooseTurn from '@/app/components/ChooseTurn';
import Banner from '@/app/components/Banner';
import { GREEN, RED, YELLOW } from '@/constants/colors';

interface NewGameProps {
  winner: Player;
  setPlayerFirst: (value: boolean) => void;
}

const NewGame: React.FC<NewGameProps> = ({ winner, setPlayerFirst }) => {
  let message = '';
  let bannerColor = '';
  switch (winner) {
    case 'X':
      message = 'You Won';
      bannerColor = GREEN;
      break;
    case 'O':
      message = 'You Lost';
      bannerColor = RED;
      break;
    case 'draw':
      message = 'Draw';
      bannerColor = YELLOW;
      break;
    default:
      message = '';
  }

  return (
    <View style={styles.container}>
      {message && <Banner message={message} color="#FFF" bgColor={bannerColor} />}
      <View style={styles.newGame}>
        <Text style={styles.header}>New Game?</Text>
        <ChooseTurn setPlayerFirst={setPlayerFirst} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  newGame: {
    padding: 20,
  },
  message: {
    fontSize: 28,
    textAlign: 'center',
  },
  header: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default NewGame;

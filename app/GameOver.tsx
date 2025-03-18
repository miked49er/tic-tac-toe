import React from 'react';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { Player } from '@/util/game';
import { Text, View } from 'react-native';
import ChooseTurn from '@/app/components/ChooseTurn';

interface GameOverRouteParams {
  winner?: Player;
}

const GameOver = () => {
  const { winner } = useLocalSearchParams() as GameOverRouteParams;

  let message = '';
  if (winner === 'X') {
    message = 'You Won';
  } else if (winner === 'O') {
    message = 'You Lost';
  } else {
    message = 'Draw';
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>{message}</Text>
      <Text>New Game?</Text>
      <ChooseTurn />
    </View>
  );
};

GameOver.propTypes = {};

export default GameOver;

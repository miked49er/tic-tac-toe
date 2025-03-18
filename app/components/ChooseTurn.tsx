import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ChooseTurn = () => {
  const router = useRouter();

  const handleChooseFirst = () => {
    router.push({ pathname: '/TicTacToe', params: { playerFirst: 'true' } });
  };

  const handleChooseSecond = () => {
    router.push({ pathname: '/TicTacToe', params: { playerFirst: 'false' } });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: 'Choose Your Turn' }} />
      <Text style={styles.title}>Would you like to go first?</Text>
      <Button title="Yes" onPress={handleChooseFirst} />
      <View style={styles.spacer} />
      <Button title="No" onPress={handleChooseSecond} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  spacer: {
    height: 20,
  },
});
export default ChooseTurn;

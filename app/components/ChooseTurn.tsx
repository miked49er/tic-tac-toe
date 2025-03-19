import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/app/components/Button';
import { PURPLE } from '@/constants/colors';

interface ChooseTurnProps {
  setPlayerFirst: (value: boolean) => void;
}

const ChooseTurn: React.FC<ChooseTurnProps> = ({ setPlayerFirst }) => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: 'Choose Your Turn' }} />
      <Text style={styles.title}>Would you like to go first?</Text>
      <View style={styles.buttonContainer}>
        <Button color={PURPLE} onPress={() => setPlayerFirst(false)} title="No" outlined />
        <Button color={PURPLE} onPress={() => setPlayerFirst(true)} title="Yes" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});
export default ChooseTurn;

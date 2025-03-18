import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TicTacToe"
        options={{
          headerTitle: 'Tic Tac Toe',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="GameOver"
        options={{
          headerTitle: 'Game Over',
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, TouchableOpacity } from 'react-native';
import { Player } from '@/util/game';
import { ANIMATION_DURATION } from '@/constants/timings';

interface CellProps {
  player: Player;
  onPress: () => void;
}

const Cell: React.FC<CellProps> = ({ player, onPress }) => {
  const scale = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const [hasBeenPressed, setHasBeenPressed] = useState(false);

  const animatePress = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(rotate, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start();
  };

  useEffect(() => {
    if (player) {
      if (!hasBeenPressed) {
        animatePress();
        setHasBeenPressed(true);
      }
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start();
    }
  }, [player]);

  const animatedStyle = {
    transform: [
      { scale: scale },
      {
        rotate: rotate.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  const animatedTextStyle = {
    opacity: opacity,
  };

  return (
    <TouchableOpacity
      style={styles.cell}
      onPress={() => {
        if (!hasBeenPressed) {
          animatePress();
          setHasBeenPressed(true);
        }
        onPress();
      }}
    >
      <Animated.View style={animatedStyle}>
        <Animated.Text style={[styles.text, animatedTextStyle]}>{player}</Animated.Text>
      </Animated.View>
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

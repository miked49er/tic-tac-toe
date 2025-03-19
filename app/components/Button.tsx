import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  color: string;
  onPress: () => void;
  outlined?: boolean;
  title: string;
}

const Button = ({ color, onPress, outlined = false, title }: ButtonProps) => {
  const buttonStyles = styles(color);
  return (
    <Pressable
      onPress={onPress}
      style={[buttonStyles.button, outlined ? buttonStyles.buttonOutlined : {}]}
    >
      <Text style={[buttonStyles.buttonText, outlined ? buttonStyles.buttonOutlinedText : {}]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = (color: string) =>
  StyleSheet.create({
    button: {
      flex: 1,
      height: 50,
      backgroundColor: color,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 50,
    },
    buttonOutlined: {
      backgroundColor: 'transparent',
      borderColor: color,
      borderWidth: 2,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 24,
      lineHeight: 30,
      textAlign: 'center',
    },
    buttonOutlinedText: {
      color: color,
    },
  });

export default Button;

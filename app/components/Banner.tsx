import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BannerProps {
  bgColor: string;
  color: string;
  message: string;
}

const Banner = ({ color, message, bgColor }: BannerProps) => {
  const bannerStyles = styles(bgColor, color);
  return (
    <View style={bannerStyles.banner}>
      <Text style={bannerStyles.title}>{message}</Text>
    </View>
  );
};

const styles = (bgColor: string, color: string) =>
  StyleSheet.create({
    banner: {
      backgroundColor: bgColor,
      width: '100%',
      position: 'absolute',
      top: 0,
    },
    title: {
      color: color,
      textAlign: 'center',
      fontSize: 28,
      paddingVertical: 10,
      textTransform: 'uppercase',
    },
  });

export default Banner;

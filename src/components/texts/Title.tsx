import { useTheme } from '@hooks';
import { sizes } from '@theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextProps } from './types';

export const Title: React.FC<TextProps> = ({ content = 'Default title', style }) => {
  const { theme } = useTheme();
  return <Text style={[styles.text, { color: theme.textPrimary }, style]}>{content}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.xl,
    fontWeight: '700',
    lineHeight: sizes.xl + 5,
  },
});

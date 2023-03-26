import { useTheme } from '@hooks';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ButtonProps } from './types';

export const DefaultButton: React.FC<ButtonProps> = ({
  onPress,
  containerStyles,
  children,
  isDisabled,
}) => {
  const { theme } = useTheme();

  const localStyles = {
    container: { backgroundColor: theme.info, opacity: isDisabled ? 0.5 : 1 },
  };

  const opacity = useSharedValue(+!!isDisabled);

  useEffect(() => {
    opacity.value = withTiming(isDisabled ? 0.75 : 1, { duration: 300 });
  }, [isDisabled]);

  const rStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={rStyles}>
      <Pressable
        onPress={onPress}
        style={[styles.container, localStyles.container, containerStyles]}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 4,
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 52,
    maxHeight: 52,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

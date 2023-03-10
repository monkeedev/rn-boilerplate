/**
 * React Native Boilerplate
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Notification } from '@components/common/notification';
import { notificationRef } from '@utils';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useTheme } from './src/hooks';
import { RootNavigator } from './src/navigation';

export default function App(): JSX.Element {
  const { theme, scheme } = useTheme();
  const isDarkMode = scheme === 'dark';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.primary }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.primary}
      />

      <RootNavigator />

      <Notification ref={notificationRef} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

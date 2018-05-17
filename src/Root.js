import React from 'react';
import { StatusBar, Platform, View } from 'react-native';

// Styles.
import { globalColors } from './styles/variables';
import styles from './Root.style';

// Components.
import RouteApp from './RouteApp';

const Root = () => {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(globalColors.white);
  }

  StatusBar.setBarStyle('dark-content');

  return (
    <View style={styles.container}>
      <RouteApp />
    </View>
  );
};

export default Root;

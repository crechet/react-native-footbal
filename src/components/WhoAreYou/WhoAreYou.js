import React from 'react';
import { View, Text } from 'react-native';

// Styles.
import styles from './WhoAreYou.style';

// Components.
import HeaderBar from '../ui/HeaderBar/HeaderBar';
import ImagePanesList from '../ui/ImagePanesList/ImagePanesList';

const WhoAreYou = () => {
  return (
    <View style={styles.container}>
      <HeaderBar title={'Кем бы вы хотели быть?'} />
      <ImagePanesList />
    </View>
  )
};

export default WhoAreYou;

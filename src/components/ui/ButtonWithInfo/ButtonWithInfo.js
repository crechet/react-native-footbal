import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

// Styles.
import styles from './ButtonWithInfo.style';

const ButtonWithInfo = props => {
  const { text, additional } = props;

  return(
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.textLeft]}>{text}</Text>
        <Text style={[styles.text, styles.textRight]}>{additional}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWithInfo;

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

// Styles.
import styles from './Button.style';

const Button = props => {
  return(
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

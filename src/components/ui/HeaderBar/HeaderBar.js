import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Styles.
import { styles } from './HeaderBar.style';
import backImg from '../../../assets/images/back.png';

const HeaderBar = (props) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <View style={styles.alignLeft}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.iconContainer}>
            <Image source={backImg} />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderBar;

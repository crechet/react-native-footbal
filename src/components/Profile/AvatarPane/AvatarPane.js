import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

// Styles.
import styles from './AvatarPane.style';

import remove from '../../../assets/images/iPhotoremove.png';
import avatar from '../../../assets/images/iMenuAvatarBig.png';
import camera from '../../../assets/images/iPhotocam.png';

const AvatarPane = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Image source={remove} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Image source={avatar} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Image source={camera} />
      </TouchableOpacity>
    </View>
  )
};

export default AvatarPane;

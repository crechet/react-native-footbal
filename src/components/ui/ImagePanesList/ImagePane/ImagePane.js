import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Styles.
import { styles } from './ImagePane.style';

const ImagePane = (props) => {
  const paneStyles = [styles.content];
  if (props.topPane) paneStyles.push(styles.topPane);
  if (props.bottomPane) paneStyles.push(styles.bottomPane);

  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <View style={paneStyles}>
        <Image source={props.imageName} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImagePane;

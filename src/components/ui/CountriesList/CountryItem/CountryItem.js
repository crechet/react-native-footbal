import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Styles.
import styles from './CountryItem.style';

const CountryItem = (props) => {
  const { firstItem, lastItem, onItemSelect, selectedItemId, item } = props;
  const { id, name, image } = item;

  const itemStyles = [styles.container];
  if (firstItem) itemStyles.push(styles.firstItem);
  if (lastItem) itemStyles.push(styles.lastItem);
  if (id === selectedItemId) itemStyles.push(styles.itemSelected);

  const onPressHandler = () => {
    onItemSelect(props.item);
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={itemStyles}>
        <Text style={styles.title}>{name}</Text>
        <Image source={image} />
      </View>
    </TouchableOpacity>
  )
};

export default CountryItem;

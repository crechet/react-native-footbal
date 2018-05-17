import React from 'react';
import { View } from 'react-native';

// Styles.
import styles from './ImagePanesList.style';

// Components.
import ImagePane from './ImagePane/ImagePane';
import Button from '../Button/Button';

// Images.
import ball from '../../../assets/images/iStart3.png';
import foot from '../../../assets/images/iStart4.png';
import hand from '../../../assets/images/iStart1-my.png';

const WhoAreYou = () => {
  return (
    <View style={styles.container}>

      <View style={styles.panesContainer}>
        <ImagePane title={'Вратарь'} imageName={hand} topPane />
        <ImagePane title={'Защитник'} imageName={ball} />
        <ImagePane title={'Нападающий'} imageName={foot} bottomPane />
      </View>

      <Button text={'ДАЛЬШЕ'} />
    </View>
  )
};

export default WhoAreYou;

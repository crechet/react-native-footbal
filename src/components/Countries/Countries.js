import React from 'react';
import { View } from 'react-native';

// Styles.
import styles from './Countries.style';

// Components.
import HeaderBar from '../ui/HeaderBar/HeaderBar';
import SearchBar from '../ui/SearchBar/SearchBar';
import CountriesList from '../ui/CountriesList/CountriesList';

const Countries = () => {
  return (
    <View style={styles.container}>
      <HeaderBar title={'За какую страну вы болеете?'} />
      <SearchBar placeholder={'Найти страну'} />
      <CountriesList />
    </View>
  )
};

export default Countries;

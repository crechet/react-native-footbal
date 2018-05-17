import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

// Styles.
import styles from './CountriesList.style';

// Components.
import CountryItem from './CountryItem/CountryItem';
import Button from '../../ui/Button/Button';

// Images.
import rus from '../../../assets/images/ru.png';
import arg from '../../../assets/images/ar.png';
import ast from '../../../assets/images/at.png';
import aus from '../../../assets/images/au.png';
import alb from '../../../assets/images/al.png';
import bel from '../../../assets/images/by.png';

class CountriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCountry: null
    }
  }

  onItemSelectHandler = (country) => {
    this.setState({
      selectedCountry: country
    });
  };

  renderSelectButton = () => {
    const { selectedCountry } = this.state;

    let content = null;
    if (selectedCountry) {
      content = (
        <View style={styles.buttonContainer}>
          <Button text={`Выбрать ${selectedCountry.genitive}`} />
        </View>
      );
    }
    return content;
  };

  render() {
    const countries = [
      { id: 1, name: 'Россия', genitive: 'Россию', image: rus },
      { id: 2, name: 'Аргентина', genitive: 'Аргентину', image: arg },
      { id: 3, name: 'Австрия', genitive: 'Австрию', image: ast },
      { id: 4, name: 'Австралия', genitive: 'Австралию', image: aus },
      { id: 5, name: 'Албания', genitive: 'Албанию', image: alb },
      { id: 6, name: 'Беларусь', genitive: 'Белоруссию', image: bel },
      { id: 7, name: 'Австрия', genitive: 'Австрию', image: ast },
      { id: 8, name: 'Австрия', genitive: 'Австрию', image: ast },
      { id: 9, name: 'Австрия', genitive: 'Австрию', image: ast },
      { id: 10, name: 'Австрия', genitive: 'Австрию', image: ast },
      { id: 11, name: 'Австрия', genitive: 'Австрию', image: ast },
      { id: 12, name: 'Австрия', genitive: 'Австрию', image: ast },
      { id: 13, name: 'Австрия', genitive: 'Австрию', image: ast },
      { id: 14, name: 'Австрия', genitive: 'Австрию', image: ast },
      { id: 15, name: 'Австрия', genitive: 'Австрию', image: ast },
    ];

    const { selectedCountry } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          keyboardShouldPersistTaps='always'
          data={countries}
          keyExtractor={(item) => item.id.toString()}
          renderItem={
            ({ item, index }) => {
              return <CountryItem item={item}
                                  selectedItemId={selectedCountry && selectedCountry.id}
                                  firstItem={index === 0}
                                  lastItem={index === countries.length - 1}
                                  onItemSelect={this.onItemSelectHandler} />
            }
          }
        />

        {this.renderSelectButton()}
      </View>
    )
  }
}

export default CountriesList;

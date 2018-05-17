import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';

// Styles.
import styles from './SearchBar.style';

import searchImage from '../../../assets/images/convertSearch.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  render() {
    const { placeholder } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={searchImage} style={styles.image} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
                     autoCapitalize='none'
                     keyboardType='default'
                     selectTextOnFocus={false}
                     placeholder={placeholder}
                     autoCorrect={false}
                     spellCheck={false}
                     underlineColorAndroid='transparent'
                     onChangeText={(text) => this.setState({text})}/>
        </View>
      </View>
    )
  }
}

export default SearchBar;

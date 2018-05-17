import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

// Styles.
import styles from './Profile.style';

// Components.
import HeaderBar from '../ui/HeaderBar/HeaderBar';
import AvatarPane from './AvatarPane/AvatarPane';
import ButtonWithInfo from '../ui/ButtonWithInfo/ButtonWithInfo';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Иван Иванов',
      email: 'hello@gmail.com',
      password: '123456'
    };
  }

  render() {
    const { name, email, password } = this.state;

    return (
      <ScrollView style={styles.container}>
        <HeaderBar title='Ваш профиль' />
        <AvatarPane />

        <View style={styles.formContainer}>
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Ваше имя</Text>
            <TextInput style={styles.input}
                       autoCapitalize='none'
                       keyboardType='default'
                       selectTextOnFocus={false}
                       placeholder='Ваше имя'
                       value={name}
                       autoCorrect={false}
                       spellCheck={false}
                       underlineColorAndroid='transparent'
                       onChangeText={(name) => this.setState({name})}/>
          </View>

          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Email</Text>
            <TextInput style={styles.input}
                       autoCapitalize='none'
                       keyboardType='email-address'
                       selectTextOnFocus={false}
                       placeholder='Email'
                       value={email}
                       autoCorrect={false}
                       spellCheck={false}
                       underlineColorAndroid='transparent'
                       onChangeText={(email) => this.setState({email})}/>
          </View>

          <View style={[styles.formField, styles.formFieldLast]}>
            <Text style={styles.fieldLabel}>Пароль</Text>
            <TextInput style={styles.input}
                       autoCapitalize='none'
                       secureTextEntry
                       selectTextOnFocus={false}
                       placeholder='Пароль'
                       value={password}
                       autoCorrect={false}
                       spellCheck={false}
                       underlineColorAndroid='transparent'
                       onChangeText={(password) => this.setState({password})}/>
          </View>

          <TouchableOpacity style={styles.textButton} onPress={() => {}}>
            <Text style={styles.textButtonTitle}>ЗАБЫЛИ ПАРОЛЬ? ВОССТАНОВИТЬ</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <ButtonWithInfo text='ПРИГЛАСИТЬ ДРУГА' additional='+100 Мячей' />
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Profile;

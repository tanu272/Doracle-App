import React from 'react'
import { StyleSheet, View, TextInput, Text, Image } from 'react-native'
import { Button } from './Button1'

export default class Login extends React.Component {
  static navigationOptions = {  
    title: 'Hospital Login',  
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitle: (<Image
        style={{ width: 100, height: 100 }}
        source={require('../assets/DORACLE.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: {
      fontWeight: 'bold',
    },  
  };  

  state = {
    email: '',
    password: ''
  }

  handleEmailChange = email => {
    this.setState({ email })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  onLogin = async () => {
    const { email, password } = this.state
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate('Hospital')
      }
    } catch (error) {
      alert(error)
    }
  }

  goToSignup = () => this.props.navigation.navigate('HSignup')
  render() {
    const { email, password } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            name='email'
            value={email}
            placeholder='Enter Hospital ID'
            placeholderTextColor="#296306"
            autoCapitalize='none'
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            name='password'
            value={password}
            style={styles.inputText}
            placeholder='Enter password'
            placeholderTextColor="#296306"
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
        </View>
        <Button text='Login' onPress={this.onLogin} />
        <Text>{"\n"}</Text>
        <Button text='Forgot Password' onPress={this.goToSignup} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddffb0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#173604",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:2000,
    color:"white"
  },
});

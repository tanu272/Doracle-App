import React from 'react'
import { Button } from './Button1'
import { StyleSheet, View, TextInput, Text, Image, ActionSheetIOS } from 'react-native'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

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

  constructor(props) {
    super(props)
    this.checkToken();
    this.state = {
      patientID: '',
      password: ''
    }
  }

  checkToken = async() => {
    const token = await AsyncStorage.getItem("token");

    if(token)
    {
      alert("Already Logged In");
      this.props.navigation.navigate('Patient')
    }
    else
    {
      this.props.navigation.navigate('PAuth')
    }
  }

  handleIDChange = patientID => {
    this.setState({ patientID })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  goToSignup = () => this.props.navigation.navigate('PSignup')


  doLogin() {
    const {patientID, password} = this.state
    const req = {
      "patientID" : patientID,
      "password" : password
    }
    axios
      .post("https://doracle-backend.herokuapp.com/api/users/login", req)
      .then(res => {
        AsyncStorage.setItem("token", res.data.token)
          .then(
            res=> {
              alert("Login Successfulyyy !")
              this.props.navigation.navigate('Patient')
            }
          );
      }, 
      err => {
        alert("Patient ID or Password is wrong");
      }
      )

  }

  render() {
    
    const { patientID, password } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            name='patientID'
            value={patientID}
            placeholder='Enter patient ID'
            placeholderTextColor="#296306"
            autoCapitalize='none'
            onChangeText={this.handleIDChange}
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
        <Button text='Login' onPress={() => this.doLogin()} />
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

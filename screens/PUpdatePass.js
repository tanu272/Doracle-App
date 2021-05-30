import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Button } from './Button1'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ddffb0',
  },
  item: {
    fontSize: 18,
    height: 44,
    color: '#c78100',
  },

  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddffb0',
    borderWidth: 0.5,
    borderColor: '#ddffb0',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  text: {
    color: '#194002',
    fontSize: 15,
    fontFamily: 'Sanchez-Regular',
    textDecorationLine: 'underline',    
    alignItems: 'center'
  },

  inputView:{
    width:"100%",
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

function FlatListBasics({ navigation }) {
    const [password, setText] = useState('');
    const [ver_password, setText1] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.FacebookStyle} 
      onPress = {() => navigation.openDrawer()}
      activeOpacity={0.1}>
 
         <Image 
          source={require('../assets/hmb.png')} 
          style={styles.ImageIconStyle} 
          />
       </TouchableOpacity>
      <View style = {{alignContent:'center', paddingLeft: 10}}>
      <Text style={styles.text}>{"\n"}Enter Password</Text>
      </View>
      <View style={styles.inputView}>
          <TextInput
            name='Password'
            value={password}
            style={styles.inputText}
            placeholder='Password'
            placeholderTextColor="#296306"
            secureTextEntry
            onChangeText={password => setText(password)}
          />
        </View>

        <View style = {{alignContent:'center', paddingLeft: 10}}>
      <Text style={styles.text}>{"\n"}Re-enter Password</Text>
      </View>
      <View style={styles.inputView}>
          <TextInput
            name='Verify Password'
            value={ver_password}
            style={styles.inputText}
            placeholder='Verify Password'
            placeholderTextColor="#296306"
            secureTextEntry
            onChangeText={ver_password => setText1(ver_password)}
          />
        </View>
        <Text style={styles.text}>{"\n"}</Text>
      <Button
        text ="Update Password"
        />
    </View>
  );
}

export default FlatListBasics;
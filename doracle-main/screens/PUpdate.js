import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image, Button, ScrollView
} from 'react-native';


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
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',    
    alignItems: 'center'
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

function FlatListBasics({ navigation }) {
    const [first, setText] = useState('');
    const [last, setText1] = useState('');
    const [contact, setText2] = useState('');
    const [email, setText3] = useState('');
  return (
    <View style={styles.container}>
    <ScrollView>
      <TouchableOpacity style={styles.FacebookStyle} 
      onPress = {() => navigation.openDrawer()}
      activeOpacity={0.1}>
 
         <Image 
          source={require('../assets/hmb.png')} 
          style={styles.ImageIconStyle} 
          />
       </TouchableOpacity>
      <View style = {{alignContent:'center', paddingLeft: 10}}>
      <Text style={styles.text}>{"\n"}First Name</Text>
      </View>
      <View style={styles.inputView}>
          <TextInput
            name='FirstName'
            value={first}
            style={styles.inputText}
            placeholder='Enter First Name'
            placeholderTextColor="#296306"
            onChangeText={first => setText(first)}
          />
        </View>

        <View style = {{alignContent:'center', paddingLeft: 10}}>
      <Text style={styles.text}>{"\n"}Last Name</Text>
      </View>
      <View style={styles.inputView}>
          <TextInput
            name='LastName'
            value={last}
            style={styles.inputText}
            placeholder='Enter Last Name'
            placeholderTextColor="#296306"
            onChangeText={last => setText1(last)}
          />
        </View><View style = {{alignContent:'center', paddingLeft: 10}}>
      <Text style={styles.text}>{"\n"}Contact Number</Text>
      </View>
      <View style={styles.inputView}>
          <TextInput
            name='Contact'
            value={contact}
            style={styles.inputText}
            placeholder='Enter Contact'
            placeholderTextColor="#296306"
            onChangeText={contact => setText2(contact)}
          />
        </View><View style = {{alignContent:'center', paddingLeft: 10}}>
      <Text style={styles.text}>{"\n"}Email</Text>
      </View>
      <View style={styles.inputView}>
          <TextInput
            name='email'
            value={email}
            style={styles.inputText}
            placeholder='Enter Email'
            placeholderTextColor="#296306"
            onChangeText={email => setText3(email)}
          />
        </View>
        <Text style={styles.text}>{"\n"}</Text>
      <Button
        title ="Update Records"
        />
        <Text style={styles.text}>{"\n"}</Text>
    </ScrollView>
    </View>
  );
}

export default FlatListBasics;

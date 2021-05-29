import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,  ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from './Button';
import { Card } from 'react-native-elements';
import { DataTable } from 'react-native-paper';








function Update ({ navigation, route }) {

    const [id, setText2] = useState('');
      const [password, setText3] = useState('');
      const [value, onChangeText] = React.useState('');
      const [time, setText1] = React.useState('');
      const [email, setText4] = React.useState('');
      
  
    return (
  
      
      <View style={styles.containerhos}>
        
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{color:'white', fontSize:20}}>Fill up new patient details.</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
        <View style={styles.inputViewNew} >
            <TextInput  
              style={styles.inputTextNew}
              placeholder="First Name..." 
              placeholderTextColor="#003f5c"
              onChangeText={id => setText2(id)} />
          </View>
            
          
          <View style={styles.inputViewNew} >
                <TextInput  
                  numeric
                  style={styles.inputTextNew}
                  placeholder=" Last Name..." 
                  placeholderTextColor="#003f5c"
                  onChangeText={id => setText1(id)}/>
          </View>
          <View style={styles.inputViewNew} >
                <TextInput  
                  numeric
                  style={styles.inputTextNew}
                  placeholder="Contact Number..." 
                  placeholderTextColor="#003f5c"
                  onChangeText={time => setText3(time)}/>
          </View>
  
          <View style={styles.inputViewNew} >
                <TextInput  
                  numeric
                  style={styles.inputTextNew}
                  placeholder="Email..." 
                  placeholderTextColor="#003f5c"
                  onChangeText={email => setText4(email)}/>
          </View>
          
          
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity>
  
  
      </View>
    );
  }




  
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },

      
  containerhos : {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
  },

  
  inputViewNew:
  {
    width:"80%",
    backgroundColor:"lightblue",
    borderRadius:15,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },

  
  inputTextNew:{
    height:50,
    color:"black"
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },


  
  loginText:{
    color:"white"
  }
  
    
  });
  

  export default Update;
  
  
  
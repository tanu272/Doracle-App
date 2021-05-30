import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,  ScrollView } from 'react-native';
import { Button } from './Button1';

function Update ({ navigation, route }) {

    const [id, setText2] = useState('');
    const [value, onChangeText] = React.useState('');
    const [time, setText1] = React.useState('');
    const [email, setText4] = React.useState('');
      
  
    return (
  
      
      <View style={styles.containerhos}>
          <View style ={{ paddingTop: 50, paddingRight:255}}>
        <TouchableOpacity style={styles.FacebookStyle} 
        onPress = {() => navigation.openDrawer()}
        activeOpacity={0.1}>
    
            <Image 
            source={require('../assets/hmb.png')} 
            style={styles.ImageIconStyle} 
            />
        </TouchableOpacity>
        </View>
        
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{color:'#173604', fontSize:20, fontFamily: 'Inter-Black'}}>Fill up new patient details.</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
        <View style={styles.inputViewNew} >
            <TextInput  
              style={styles.inputTextNew}
              placeholder="First Name..." 
              placeholderTextColor="#ddffb0"
              onChangeText={id => setText2(id)} />
          </View>
            
          
          <View style={styles.inputViewNew} >
                <TextInput  
                  numeric
                  style={styles.inputTextNew}
                  placeholder=" Last Name..." 
                  placeholderTextColor="#ddffb0"
                  onChangeText={id => setText1(id)}/>
          </View>
          <View style={styles.inputViewNew} >
                <TextInput  
                  numeric
                  style={styles.inputTextNew}
                  placeholder="Contact Number..." 
                  placeholderTextColor="#ddffb0"
                  onChangeText={time => setText3(time)}/>
          </View>
  
          <View style={styles.inputViewNew} >
                <TextInput  
                  numeric
                  style={styles.inputTextNew}
                  placeholder="Email..." 
                  placeholderTextColor="#ddffb0"
                  onChangeText={email => setText4(email)}/>
          </View>
          
          
          <Button text="Submit"/>
  
  
      </View>
    );
  }
  
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddffb0',
        alignItems: 'center',
        justifyContent: 'center',
      },

      
  containerhos : {
    flex: 1,
    backgroundColor: '#ddffb0',
    alignItems: 'center',
  },

  
  inputViewNew:
  {
    width:"80%",
    backgroundColor:"#173604",
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
  },

  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddffb0',
    borderWidth: .5,
    borderColor: '#ddffb0',
    height: 40,
    borderRadius: 5 ,
    margin: 5,
   
  },
   
  ImageIconStyle: {
     padding: 10,
     margin: 5,
     height: 25,
     width: 25,
     resizeMode : 'stretch',
   
  },        
  });
  

  export default Update;
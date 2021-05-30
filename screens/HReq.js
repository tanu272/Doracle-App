import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,  ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';

import { Button } from './Button1';

function Requirementoldpatient ({ navigation, route }) {

    const [condition, onChangeText] = React.useState('');
    const [conditioninfo, onChangeText2] = React.useState('');
      
      
  
    return (
  <ScrollView style={styles.scrollView}>
      
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
        <Text style={{color:'#173604', fontSize:30, fontFamily: 'Inter-Black'}}>Patient Details</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{color:'#173604', fontSize:20, fontFamily:'Sanchez-Regular'}}>Name - Tanushree Bhattacharya</Text>
        <Text style={{color:'#173604', fontSize:20, fontFamily:'Sanchez-Regular'}}>Contact - 9434559724 </Text>
        <Text style={{color:'#173604', fontSize:20, fontFamily:'Sanchez-Regular'}}>Patient id - INDFueqP8</Text>
        <Text style={{color:'#173604', fontSize:20, fontFamily:'Sanchez-Regular'}}>Email - tanub922@gmail.com</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
  
        <Text style={{color:'#173604', fontSize:40, fontFamily: 'Inter-Black'}}>Requirement Log</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
  
        <DataTable style={{backgroundColor: 'white',}}>
      <DataTable.Header>
        <DataTable.Title>Requirement</DataTable.Title>
        <DataTable.Title>info</DataTable.Title>
        <DataTable.Title numeric >
          Date
        </DataTable.Title>
        <DataTable.Title numeric>Time</DataTable.Title>
        
      </DataTable.Header>
  
      <DataTable.Row>
        <DataTable.Cell>Paracetamol</DataTable.Cell>
        <DataTable.Cell>Paracetamol</DataTable.Cell>
        <DataTable.Cell numeric>15.07.19</DataTable.Cell>
        <DataTable.Cell numeric>6.00</DataTable.Cell>
        
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Paracetamol</DataTable.Cell>
        <DataTable.Cell>Paracetamol</DataTable.Cell>
        <DataTable.Cell numeric>23.07.19</DataTable.Cell>
        <DataTable.Cell numeric>8.00</DataTable.Cell>
        
      </DataTable.Row>
    </DataTable>
  
  
  
    <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
        <Text style={{color:'#173604', fontSize:20, fontFamily: 'Inter-Black'}}>Add Requirement Status</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        
          <TextInput
          multiline
          placeholder="Patient's Requirement..." 
          placeholderTextColor="#ddffb0"
        style={styles.inputViewNewfortext}
        onChangeText={text => onChangeText(text)}
        value={condition}
      />
      <TextInput
          multiline
          placeholder="Patient's Info..." 
          placeholderTextColor="#ddffb0"
        style={styles.inputViewNewfortext}
        onChangeText={text => onChangeText2(text)}
        value={conditioninfo}
      />
          
        <Button text="Submit"/>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
      </View>
  
      </ScrollView>
    );
  }



  
const styles = StyleSheet.create({
container: {
    flex:1, 
   paddingTop: 25, 
   paddingLeft: 10, 
   paddingRight: 10, 
   backgroundColor: '#ddffb0',
    },

      
  containerhos : {
    flex: 1,
    backgroundColor: '#ddffb0',
    alignItems: 'center',
  },

  
  inputViewNewfortext:{
    width:"80%",
    backgroundColor:"#173604",
    borderRadius:15,
    height:120,
    marginBottom:20,
    justifyContent:"center",
    padding:20
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
  
  
  
  
  export default Requirementoldpatient;
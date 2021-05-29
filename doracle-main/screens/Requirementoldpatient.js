import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,  ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from './Button';
import { Card } from 'react-native-elements';
import { DataTable } from 'react-native-paper';








function Requirementoldpatient ({ navigation, route }) {

    const [condition, onChangeText] = React.useState('');
    const [conditioninfo, onChangeText2] = React.useState('');
      
      
  
    return (
  <ScrollView style={styles.scrollView}>
      
      <View style={styles.containerhos}>
        
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{color:'white', fontSize:30}}>Patient Details</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{color:'white', fontSize:20}}>Name - Tanushree Bhattacharya</Text>
        <Text style={{color:'white', fontSize:20}}>Contact - 9434559724 </Text>
        <Text style={{color:'white', fontSize:20}}>Patient id - INDFueqP8</Text>
        <Text style={{color:'white', fontSize:20}}>Email - tanub922@gmail.com</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
  
        <Text style={{color:'white', fontSize:40}}>Requirement Log</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
  
        <DataTable style={{backgroundColor: 'lightblue',}}>
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
  
        <Text style={{color:'white', fontSize:20}}>Add Requirement Status</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        
          <TextInput
          multiline
          placeholder="Patient's Requirement..." 
          placeholderTextColor="#003f5c"
        style={styles.inputViewNewfortext}
        onChangeText={text => onChangeText(text)}
        value={condition}
      />
      <TextInput
          multiline
          placeholder="Patient's Info..." 
          placeholderTextColor="#003f5c"
        style={styles.inputViewNewfortext}
        onChangeText={text => onChangeText2(text)}
        value={conditioninfo}
      />
          
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity>
  
  
      </View>
  
      </ScrollView>
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

  
  inputViewNewfortext:{
    width:"80%",
    backgroundColor:"lightblue",
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
  }
  
    
  });
  
  
  
  
  export default Requirementoldpatient;
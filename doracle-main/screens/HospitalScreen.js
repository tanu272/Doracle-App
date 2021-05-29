import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,  ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from './Button';
import { Card } from 'react-native-elements';
import { DataTable } from 'react-native-paper';








function HospitalScreen ({ navigation, route }) {
    return(
  
  
      
      <ScrollView style={styles.scrollView}>
  
        
      <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
      <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
      <Text style={{backgroundColor: '#003f5c',color:'white', fontSize:30, paddingLeft:70}}>List of all patients.</Text>
      <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
      <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
      
  
      
  
      <DataTable style={{backgroundColor: 'lightblue',}}>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title  >
          Patient id
        </DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
      </DataTable.Header>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDfdbjv</DataTable.Cell>
        <DataTable.Cell >Better than before</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Ankita Mandal</DataTable.Cell>
        <DataTable.Cell >INDjfnje</DataTable.Cell>
        <DataTable.Cell>Better then before</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
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
    
  });


  export default HospitalScreen;
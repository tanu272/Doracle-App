import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,  ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';


function HospitalScreen ({ navigation, route }) {
    return(
  
  
     <View style={styles.container}> 
      <ScrollView style={styles.scrollView}>
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
    </DataTable>
      </ScrollView>
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


  export default HospitalScreen;
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ProgressBarAndroid, TouchableOpacity, ScrollView} from 'react-native';

import jwt_decode from 'jwt-decode'

class Home extends React.Component {
  

  constructor(props) {
    super(props)
    this.state = {id: "", name: "", contact: "", patientid: "", email: ""}

  }

  componentDidMount(){

    fetch(`https://doracle-backend.herokuapp.com/hospital/show/IND2Sgy59`)
    .then((response) => response.json())
    .then((data2) => { 
        const pname = data2.firstname + ' ' + data2.lastname;
        this.setState({name: pname, contact: data2.contact, patientid: data2.patientID, email: data2.email});
    });
  }

  render() {      
    const { navigation } = this.props;

      return (
        
        <View style={styles.MainContainer}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
          <TouchableOpacity style={styles.FacebookStyle} 
          onPress = {() => navigation.openDrawer()}
          activeOpacity={0.1}>
    
            <Image 
              source={require('../assets/hmb.png')} 
              style={styles.ImageIconStyle} 
              />
          </TouchableOpacity>
          <View style={{paddingLeft: 95, paddingTop: 20}}>
            <Image
            style={{ width: 150, height: 150 }}
            source={require('../assets/m.png')}
            />
          </View>
          <View style={{paddingLeft: 100}}>
        <Text style ={styles.TextStyle}>Name - {this.state.name}{"\n"}</Text>
        <Text style ={styles.TextStyle}>Patient ID - {this.state.patientid} {"\n"}</Text>
        <Text style ={styles.TextStyle}>Email - {this.state.email} {"\n"}</Text>
        <Text style ={styles.TextStyle}>Contact - {this.state.contact} {"\n"}</Text>
        </View>

            <View style={{justifyContent :"space-evenly", paddingLeft: 65, marginTop: 10}}><Text style ={{color: "#194002", fontSize: 20, fontFamily: 'Inter-Black'}}>
              Progress of the Patient</Text></View>

            <View style={styles.example}>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              color="#fcba03"
              indeterminate={false}
              progress={0.6}
            />
          </View>

          <Text style={styles.text}>{"                                            "}
          </Text>


          <View style={styles.container1}>
            
            <Text style ={{color: "#194002", fontSize: 15, fontFamily:'Sanchez-Regular'}}>
              <Image style ={{ width: 100, height: 100 }}
              source={require('../assets/doc.png')}
              />
            {" "}Doctor-in-charge: Dr. ABC {"\n                       "}Qualifications: MBBS, M.D., {"\n                       "}F.R.C.S.
            </Text>
            
            <Text style ={{color: "#194002", fontSize: 15, fontFamily:'Sanchez-Regular', textDecorationLine: 'underline' }}>
            {"\n"}Comments on Patient: None{"\n"}</Text>
            
          </View>
          </ScrollView>
        </View>
      );
    }
}

const styles = StyleSheet.create({

  contentContainer: {
    paddingVertical: 20
  },

     MainContainer: {
   flex:1, 
   paddingTop: 25, 
   paddingLeft: 10, 
   paddingRight: 10, 
   backgroundColor: '#ddffb0',
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
 
TextStyle :{
  color: "#194002",
  fontFamily : 'Sanchez-Regular'
},

container: { 
    padding: 5, 
    paddingTop: 10, 
    height: 400,
    backgroundColor: '#ffffff' 
  },
  head: { 
    height: 50, 
    backgroundColor: '#194002' 
  },
  text: {
    color: '#194002',
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline'
  },
  text1: { 
    color: '#194002',
    textAlign: 'center', 
    fontWeight: '200' 
  },
  example: {
    marginTop : 5,
    marginBottom : 20,
  },
  container1: {
    marginTop: 20,
    marginHorizontal: 10,
  },
});


export default Home;
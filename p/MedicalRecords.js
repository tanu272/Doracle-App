import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function MR ({navigation}) {
    const [text, onChangeText] = React.useState("");
  return (

    <View style={styles.MainContainer}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={styles.FacebookStyle} 
      onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
      activeOpacity={0.1}>
 
         <Image 
          source={require('./hmb.png')} 
          style={styles.ImageIconStyle} 
          />
       </TouchableOpacity>
      <Text style={styles.text}>Patient Medical Records</Text>
      <View>
      <Text style={styles.subhead}>
        {"\n"}Patient Information{"                           "}Birth Date
      </Text>
      <Text style={styles.body}>
        Mr. Name Surname{"                                                "}DD-MM-YYYY{"\n"}
      </Text>
      <Text style={styles.subhead}>
        {"\n"}Phone No.{"                                           "}Weight
      </Text>
      <Text style={styles.body}>
        +91-XXXXXXXXXX{"                                                   "}100 kg{"\n"}
      </Text>
      <Text style={styles.subhead}>
        {"\n"}Address{"                                               "}Height
      </Text>
      <Text style={styles.body}>
        4/9 ABC Avenue{"                                                      "}5' 11"{"\n"}
        Gopalpur{"\n"}
        Uttar Pradesh{"\n"}
        India
      </Text>


      <Text style={styles.text}>{"                                            "}
      </Text>


      <Text style={styles.emergency}>In Case Of Emergency Contact:{"\n"}</Text>
      <Text style={styles.body1}>
        Mr. Name1 Surname1:{"  "}+91-XXXXXXXXXX {"\n"}
        {"                                        "}+91-XXXXXXXXXX (Alternative) {"\n"}
      </Text>
      <Text style={{color: '#defeff',
    fontSize: 13,
    fontWeight: 'bold',}}>
        Address:{"  "}44/99 ABC Avenue {"\n"}
        {"                  "}Gopalpur{"\n"}
        {"                  "}Uttar Pradesh{"\n"}
        {"                  "}India
      </Text>

       <Text style={styles.text}>{"                                            "}
      </Text>

      <Text style={styles.emergency1}>General Medical History{"\n"}</Text>
      <Text style={styles.body}>
        Chicken Pox (Varicella) Vaccination{"                   "} Measles Vaccination
      </Text>
      <View style={styles.fixToText}>
      <Button
        disabled
        title = "Not Taken"/>
      <Button
        disabled
        title = "Not Taken"/>
      </View>
      <Text style={styles.body}>
        {"\n"}Hepatitis B Vaccination{"                                            "} AIDS Vaccination
      </Text>
      <View style={styles.fixToText}>
      <Button
        disabled
        title = "Taken"/>
      <Button
        disabled
        title = "Not Taken"/>
      </View>
      <Text style={styles.body}>
      {"\n"}List Any Other Medical Problems(asthma, seizure, allergies):
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder=" Other Medical Problems..."
      />
      <Button
      title = "sAVE"/>
    </View>
    </ScrollView>
    </View>
    
  );

}

const styles = StyleSheet.create({

  contentContainer: {
    paddingVertical: 10
  },

  MainContainer: {
   flex:1, 
   paddingTop: 40, 
   paddingLeft: 10, 
   paddingRight: 10, 
   backgroundColor: '#003f5c',
 },

  text: {
    color: '#f0b30c',
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline'
  },
  subhead: {
    color: '#f0b30c',
    fontSize: 15,
  },
  body: {
    color: '#defeff',
    fontSize: 11,
  },
  body1: {
    color: '#defeff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  emergency: {
    color: '#fc3f00',
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline'
  },
  emergency1: {
    color: '#f0b30c',
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline'
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    opacity: 0.8,
    height: 40,
    margin: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'white',
    color: 'white',
  },
  
  FacebookStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#003f5c',
  borderWidth: .5,
  borderColor: '#003f5c',
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

export default MR;

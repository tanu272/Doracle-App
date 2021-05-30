import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Button } from './Button1'

export default class Logout extends React.Component
{
  doLogout() {

    AsyncStorage.removeItem("token")
      .then(
        res=> {
          alert("logout successfull !")
          this.props.navigation.navigate('App')
        }
      )
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style= {{flex: 1}}>
         <View style={styles.MainContainer}>
          <TouchableOpacity style={styles.FacebookStyle} 
        onPress = {() => navigation.openDrawer()}
        activeOpacity={0.1}>

           <Image 
            source={require('../assets/hmb.png')} 
            style={styles.ImageIconStyle} 
            />
         </TouchableOpacity>
         </View>
         <View style={styles.MainContainer1}>
          <Text style={{color:"#194002", fontSize:25, alignContent:'center', fontFamily:'Inter-Black'}}>
          Are you sure you wanna logout?
          <Text>{"\n"}</Text>
          </Text>
          <Button
          text ="YES"
          onPress={() => this.doLogout()}
          />

          <Text>{"\n"}</Text>
          <Button
          text ="NO"
          onPress={() =>
            navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    paddingTop: 40, 
    paddingLeft: 10, 
    paddingRight: 10, 
    backgroundColor: '#ddffb0',
 },

  MainContainer1: {
    flex: 1,
    paddingLeft: 10, 
    paddingRight: 10, 
    paddingTop: 150,
    backgroundColor: '#ddffb0',
  },

  FacebookStyle: {
  flexDirection: 'row',
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
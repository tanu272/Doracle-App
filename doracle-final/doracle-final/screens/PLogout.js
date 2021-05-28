import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';

function Logout({navigation})
{
  return (
    <View style= {styles.MainContainer}>
      
        <Text style={{color:"#194002", fontSize:25, alignContent:'center', paddingTop: 200}}>
        Are you sure you wanna logout?
        <Text>{"\n"}</Text>
        </Text>
        <Button
        title ="YES"
        onPress={() =>
          navigation.navigate('App')
        }
        />
        <Text>{"\n"}</Text>
        <Button
        title ="NO"
        />
     </View>
  );
}

const styles = StyleSheet.create({

  MainContainer: {
   flex:1, 
   paddingTop: 40, 
   paddingLeft: 10, 
   paddingRight: 10, 
   backgroundColor: '#ddffb0',
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


export default Logout;
import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image, Button
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ddffb0',
  },
  item: {
    fontSize: 18,
    height: 44,
    color: '#c78100',
  },

  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddffb0',
    borderWidth: 0.5,
    borderColor: '#ddffb0',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  text: {
    color: '#194002',
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',    
    alignItems: 'center'
  },
});

function FlatListBasics({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.FacebookStyle} 
      onPress = {() => navigation.openDrawer()}
      activeOpacity={0.1}>
 
         <Image 
          source={require('../assets/hmb.png')} 
          style={styles.ImageIconStyle} 
          />
       </TouchableOpacity>
      <View style = {{alignContent:'center', paddingLeft: 90}}>
      <Text style={styles.text}>Lab Reports{"\n"}</Text>
       <Text style={styles.item}>No Reports Updated!{"\n\n\n"}</Text>
      </View>

      <Button
        title ="Upload New Reports"
        />
    </View>
  );
}

export default FlatListBasics;

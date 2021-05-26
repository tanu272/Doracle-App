import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image, Button
} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#003f5c',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white',
  },

  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003f5c',
    borderWidth: 0.5,
    borderColor: '#003f5c',
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
    color: '#f0b30c',
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',    
    alignItems: 'center'
  },
});

function Basics({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.FacebookStyle}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        activeOpacity={0.1}>
        <Image source={require('./hmb.png')} style={styles.ImageIconStyle} />
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

export default Basics;

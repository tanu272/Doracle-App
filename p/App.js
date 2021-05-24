import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './Home';
import MedicalRecords from './MedicalRecords'

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function Logout({navigation})
{
  return (
    <View style= {styles.MainContainer}>
      <TouchableOpacity style={styles.FacebookStyle} 
      onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
      activeOpacity={0.1}>
 
         <Image 
          source={require('./hmb.png')} 
          style={styles.ImageIconStyle} 
          />
       </TouchableOpacity>
        <Text style={{color:"white", fontSize:25, alignContent:'center', paddingTop: 200}}>
        Are you sure you wanna logout?
        <Text>{"\n"}</Text>
        </Text>
        <Button
        title ="YES"
        />
        <Text>{"\n"}</Text>
        <Button
        title ="NO"
        />
     </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return ( 
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Medical Records" component={MedicalRecords} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  MainContainer: {
   flex:1, 
   paddingTop: 40, 
   paddingLeft: 10, 
   paddingRight: 10, 
   backgroundColor: '#003f5c',
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


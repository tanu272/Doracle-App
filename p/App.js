import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, Linking, Platform } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContent
} from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import Home from './Home';
import MedicalRecords from './MedicalRecords'
import LabReports from './LabReport'
import Req from './Requirements'
import Icon from 'react-native-vector-icons/Ionicons';

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
        <Text style={{color:"#f0b30c", fontSize:25, alignContent:'center', paddingTop: 200}}>
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
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return ( 
    <Drawer.Navigator drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
    drawerStyle={{
      backgroundColor: '#ffd5ab',
      activeOpacity: 0.3,
      width: 275}}
      drawerContentOptions={{
        activeTintColor: '#003f5c',
        itemStyle: { marginTop : 50, paddingTop: 10, paddingBottom: 10,},
        alignContent: 'center',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} 
      options={{ drawerLabel: 'Home', 
                 drawerIcon: config => <Icon
                size={23}
                color="#000000"
                name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}></Icon> ,  
              }}
      />
      <Drawer.Screen name="Medical Records" 
      component={MedicalRecords} 
      options={{ drawerLabel: 'Medical Records', 
                 drawerIcon: config => <Icon
                size={23}
                color="#000000"
                name={Platform.OS === 'android' ? 'md-clipboard' : 'ios-clipboard'}></Icon> ,
      }}
      />
      <Drawer.Screen name="Pharmacy" 
      component={Req} 
      options={{ drawerLabel: 'Pharmacy Requirements', 
                 drawerIcon: config => <Icon
                size={23}
                color="#000000"
                name={Platform.OS === 'android' ? 'md-egg' : 'ios-egg'}></Icon> ,
      }}
      />
      <Drawer.Screen name="Lab Reports" 
      component={LabReports} 
      options={{ drawerLabel: 'Lab Reports', 
                 drawerIcon: config => <Icon
                size={23}
                color="#000000"
                name={Platform.OS === 'android' ? 'md-document' : 'ios-document'}></Icon> ,
      }}
      />
      <Drawer.Screen
        name="Help"
         options={{ drawerLabel: 'Complaint', 
                 drawerIcon: config => <Icon
                size={23}
                color="#000000"
                name={Platform.OS === 'android' ? 'md-help-circle' : 'ios-help-circle'}></Icon> ,
      }}
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
      <Drawer.Screen name="Logout" component={Logout} 
       options={{ drawerLabel: 'Logout', 
                 drawerIcon: config => <Icon
                size={23}
                color="#000000"
                name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}></Icon> ,
      }}
      />
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

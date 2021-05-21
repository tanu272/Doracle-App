import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from './Button';

function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Login to your required panel.{"\n"}{"\n"}
      </Text>
      <Button
        text="Login as Hospital"
        onPress={() =>
          navigation.navigate('Hospital', { name: 'XYZ' })
        }
      />
      <Text>{"\n"}</Text>
      <Button
        text="Login as Patient"
        onPress={() =>
          navigation.navigate('Patient Login')
        }
      />
    </View>
  );
}

function PLoginScreen ({navigation})  {
  const [id, setText] = useState('');
  const [password, setText1] = useState('');
  return (
    <View style={styles.container}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Patient Id..." 
            placeholderTextColor="#003f5c"
            onChangeText={id => setText(id)} />
        </View>
          
        <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Patient Password..." 
                placeholderTextColor="#003f5c"
                onChangeText={id => setText1(id)}/>
        </View>
        <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
      </View>
  );
}

function HospitalScreen ({ navigation, route }) {
  return <Text>Welcome to {route.params.name} Hospital!</Text>;
}

function PatientScreen ({ navigation, route }) {
  return <Text>Hello again Patient {route.params.name}!</Text>;
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={require('./DORACLE.png')}
    />
  );
}

const Stack = createStackNavigator();

class App extends React.Component {
  state={
    id:"",
    password:""
  }
  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} 
        />
        <Stack.Screen name="Patient Login" 
        component={PLoginScreen} 
        />
        <Stack.Screen name="Hospital" 
        component={HospitalScreen} 
        options={
          ({ route }) => ({ title: route.params.name })
          }
        />
        <Stack.Screen 
        name="Patient" 
        component={PatientScreen} 
        options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'lightblue',
    fontFamily: 'Monospace',
    fontSize: 16,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});

export default App;

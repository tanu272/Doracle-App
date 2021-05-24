import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,  ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from './Button';
import { Card } from 'react-native-elements';



function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Login to your required panel.{"\n"}{"\n"}
      </Text>
      <Button
        text="Login as Hospital"
        onPress={() =>
          navigation.navigate('Hospital Login', { name: 'XYZ' })
        }
      />
      <Text>{"\n"}</Text>
      <Button
        text="Login as Patient"
        onPress={() =>
          navigation.navigate('Patient Login')
        }
      />
      <Text>{"\n"}</Text>
      <Button
        text="Hospital 1st page"
        onPress={() =>
          navigation.navigate('Hospital', { name: 'Total Patient Details' })
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
      </View>
  );
}

function HLoginScreen ({navigation})  {
  const [id, setText2] = useState('');
  const [password, setText3] = useState('');
  return (
    <View style={styles.container}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Hospital Id..." 
            placeholderTextColor="#003f5c"
            onChangeText={id => setText2(id)} />
        </View>
          
        <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Hospital Password..." 
                placeholderTextColor="#003f5c"
                onChangeText={id => setText3(id)}/>
        </View>
        <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          
      </View>
  );
}

function HospitalScreen ({ navigation, route }) {
  return(


    
    <ScrollView style={styles.scrollView}>
    <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
    
    
    <View style={styles.containerhos}>
    <Card containerStyle={styles.cardtoday}>
      <Text>Name : Ankita Mandal</Text>
      <Text >
      Age : 20
    </Text>
    <Text style={{marginBottom: 10}}>
      Condition : Better than before.
    </Text>
    <Text style={{marginBottom: 10}}>
      Emergency Contact : 9851065457
    </Text>
      </Card>
      <Card containerStyle={styles.cardtoday}>
      <Text>Name : Ankita Mandal</Text>
      <Text >
      Age : 20
    </Text>
    <Text style={{marginBottom: 10}}>
      Condition : Better than before.
    </Text>
    <Text style={{marginBottom: 10}}>
      Emergency Contact : 9851065457
    </Text>
      </Card>
      <Card containerStyle={styles.cardtoday}>
      <Text>Name : Ankita Mandal</Text>
      <Text >
      Age : 20
    </Text>
    <Text style={{marginBottom: 10}}>
      Condition : Better than before.
    </Text>
    <Text style={{marginBottom: 10}}>
      Emergency Contact : 9851065457
    </Text>
      </Card>
      <Card containerStyle={styles.cardtoday}>
      <Text>Name : Ankita Mandal</Text>
      <Text >
      Age : 20
    </Text>
    <Text style={{marginBottom: 10}}>
      Condition : Better than before.
    </Text>
    <Text style={{marginBottom: 10}}>
      Emergency Contact : 9851065457
    </Text>
      </Card>
      <Card containerStyle={styles.cardtoday}>
      <Text>Name : Ankita Mandal</Text>
      <Text >
      Age : 20
    </Text>
    <Text style={{marginBottom: 10}}>
      Condition : Better than before.
    </Text>
    <Text style={{marginBottom: 10}}>
      Emergency Contact : 9851065457
    </Text>
      </Card>
      <Card containerStyle={styles.cardtoday}>
      <Text>Name : Ankita Mandal</Text>
      <Text >
      Age : 20
    </Text>
    <Text style={{marginBottom: 10}}>
      Condition : Better than before.
    </Text>
    <Text style={{marginBottom: 10}}>
      Emergency Contact : 9851065457
    </Text>
      </Card>
      <Card containerStyle={styles.cardtoday}>
      <Text>Name : Ankita Mandal</Text>
      <Text >
      Age : 20
    </Text>
    <Text style={{marginBottom: 10}}>
      Condition : Better than before.
    </Text>
    <Text style={{marginBottom: 10}}>
      Emergency Contact : 9851065457
    </Text>
      </Card>
      <Card containerStyle={styles.cardtoday}>
      <Text>Name : Ankita Mandal</Text>
      <Text >
      Age : 20
    </Text>
    <Text style={{marginBottom: 10}}>
      Condition : Better than before.
    </Text>
    <Text style={{marginBottom: 10}}>
      Emergency Contact : 9851065457
    </Text>
      </Card>
      <Card containerStyle={styles.cardtoday}>
      <Text>Name : Ankita Mandal</Text>
      <Text >
      Age : 20
    </Text>
    <Text style={{marginBottom: 10}}>
      Condition : Better than before.
    </Text>
    <Text style={{marginBottom: 10}}>
      Emergency Contact : 9851065457
    </Text>
      </Card>

        
    </View>
    </ScrollView>
  );

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
        <Stack.Screen name="Hospital Login" 
        component={HLoginScreen}
        options={({ route }) => ({ title: route.params.name })}
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
  cardtoday:{
    backgroundColor: 'lightblue',
    borderRadius: 20,
    paddingRight: 94,
    paddingLeft:67,
    
    
  },
  containerhos : {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
  },
  containerpatient: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
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

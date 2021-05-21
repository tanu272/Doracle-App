import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from './Button';

function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Login to your required panel.{"\n"}
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
          navigation.navigate('Patient', { name: 'XYZ!' })
        }
      />
    </View>
  );
};
function HospitalScreen ({ navigation, route }) {
  return <Text>Welcome to {route.params.name} Hospital!</Text>;
};

function PatientScreen ({ navigation, route }) {
  return <Text>Hello again Patient {route.params.name}!</Text>;
};

const Stack = createStackNavigator();

function App() {
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
        options={{
          title: 'My home'}} 
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'Monospace',
    fontSize: 16,
  },
});

export default App;

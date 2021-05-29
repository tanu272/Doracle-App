import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from './Button';

HomeScreen['navigationOptions'] = screenProps => ({
    title: 'Home',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitle: (<Image
        style={{ width: 100, height: 100 }}
        source={require('../assets/DORACLE.png')}
        resizeMode='contain'
      />
    ),
    headerTitleStyle: {
      fontWeight: 'bold',
      
    },
})

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={require('../assets/DORACLE.png')}
    />
  );
}

function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Login to your required panel.{"\n"}{"\n"}
      </Text>
      <Button
        text="Login as Hospital"
        onPress={() =>
          navigation.navigate('HAuth')
        }
      />
      <Text>{"\n"}</Text>
      <Button
        text="Login as Patient"
        onPress={() =>
          navigation.navigate('PAuth')
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddffb0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#173604',
    fontFamily: 'Monospace',
    fontSize: 16,
  },
});

export default HomeScreen;

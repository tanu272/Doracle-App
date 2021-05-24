import React from 'react';
import { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, StyleSheet, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
import Ripple from 'react-native-material-ripple';

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        elevation: 10,
    },
    text: {
        color: 'brown',
        fontSize: 20,
    },
});

export const Button = ({ text, onPress }) => {
  if(Platform.OS === 'ios') {
    return (
        <TouchableHighlight onPress={onPress} 
        style={styles.button}
        underlayColor='white'>
        <Text style={styles.text}>{text}</Text>
        </TouchableHighlight>
    );
  }

  return (
    <TouchableNativeFeedback onPress={onPress}
    background ={TouchableNativeFeedback.Ripple('white')}>
        <View style ={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableNativeFeedback>
);
}


import React from 'react';
import { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, StyleSheet, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
 

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: '#173604',
        borderRadius: 10,
        elevation: 10,
    },
    text: {
        color: '#fafcf5',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 30,
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
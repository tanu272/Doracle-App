import React from 'react';
import { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, StyleSheet, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fb5b5a',
        borderRadius: 30,
        elevation: 15,
    },
    text: {
        color: '#fafcf5',
        fontFamily: 'Sanchez-Regular',
        alignSelf: 'center',
        fontSize: 15,
    },
});

export const Button = ({ text, onPress }) => {
    let [fontsLoaded] = useFonts({
        'Sanchez-Regular': require('../assets/Sanchez-Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      } 
      else {

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
}
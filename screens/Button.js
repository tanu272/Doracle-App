import React from 'react';
import { TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, StyleSheet, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

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
        fontFamily: 'Inter-Black',
        alignSelf: 'center',
        fontSize: 30,
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
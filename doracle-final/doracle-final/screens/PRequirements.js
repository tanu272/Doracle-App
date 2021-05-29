import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ddffb0',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#194002',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#c78100',
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddffb0',
    borderWidth: 0.5,
    borderColor: '#ddffb0',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  text: {
    color: '#194002',
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',
  },
});

function FlatListBasics({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.FacebookStyle} 
      onPress = {() => navigation.openDrawer()}
      activeOpacity={0.1}>
 
         <Image 
          source={require('../assets/hmb.png')} 
          style={styles.ImageIconStyle} 
          />
       </TouchableOpacity>
      <Text style={styles.text}>Pharmacy Requirements{"\n\n"}</Text>
      <SectionList
        sections={[
            {title: 'Medicine', data: ['Paracetamol - 50 mg for 10 days', 'Paracetamol - 50 mg for 10 days', 'Paracetamol - 50 mg for 10 days']},
            {title: 'Others', data: ['Oxygen Cylinder', 'Blood Type B', 'Blood Type B', 'Blood Type B', 'Blood Type B', 'Blood Type B',]},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index
        }
      />
    </View>
  );
}

export default FlatListBasics;

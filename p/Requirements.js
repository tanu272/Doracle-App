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
    backgroundColor: '#003f5c',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003f5c',
    borderWidth: 0.5,
    borderColor: '#003f5c',
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
    color: '#f0b30c',
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',
  },
});

function FlatListBasics({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.FacebookStyle}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        activeOpacity={0.1}>
        <Image source={require('./hmb.png')} style={styles.ImageIconStyle} />
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

import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity,  ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';


function Updateoldpatient ({ navigation, route }) {

    const [condition, onChangeText] = React.useState('');
      
      
  
    return (
  <ScrollView style={styles.scrollView}>
      
      <View style={styles.containerhos}>
      <View style ={{ paddingTop: 50, paddingRight:255}}>
        <TouchableOpacity style={styles.FacebookStyle} 
        onPress = {() => navigation.openDrawer()}
        activeOpacity={0.1}>
    
            <Image 
            source={require('../assets/hmb.png')} 
            style={styles.ImageIconStyle} 
            />
        </TouchableOpacity>
        </View>
        
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{color:'white', fontSize:30}}>Patient Details</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{color:'white', fontSize:20}}>Name - Tanushree Bhattacharya</Text>
        <Text style={{color:'white', fontSize:20}}>Contact - 9434559724 </Text>
        <Text style={{color:'white', fontSize:20}}>Patient id - INDFueqP8</Text>
        <Text style={{color:'white', fontSize:20}}>Email - tanub922@gmail.com</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
  
        <Text style={{color:'white', fontSize:40}}>Patient Log</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
  
        <DataTable style={{backgroundColor: 'lightblue',}}>
      <DataTable.Header>
        <DataTable.Title>Condition</DataTable.Title>
        <DataTable.Title numeric >
          Date
        </DataTable.Title>
        <DataTable.Title numeric>Time</DataTable.Title>
      </DataTable.Header>
  
      <DataTable.Row>
        <DataTable.Cell>Better than before</DataTable.Cell>
        <DataTable.Cell numeric>15.07.19</DataTable.Cell>
        <DataTable.Cell numeric>6.00</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Better than before</DataTable.Cell>
        <DataTable.Cell numeric>23.07.19</DataTable.Cell>
        <DataTable.Cell numeric>8.00</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  
  
  
    <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
  
        <Text style={{color:'white', fontSize:40}}>Add Patient Status</Text>
        <Text style={{backgroundColor: '#003f5c',}}>{"\n"}</Text>
        
          <TextInput
          multiline
          placeholder="Patient's Conditon..." 
          placeholderTextColor="#003f5c"
        style={styles.inputViewNewfortext}
        onChangeText={text => onChangeText(text)}
        value={condition}
      />
          
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity>
  
  
      </View>
  
      </ScrollView>
    );
  }




  
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddffb0',
        alignItems: 'center',
        justifyContent: 'center',
      },

      
  containerhos : {
    flex: 1,
    backgroundColor: '#ddffb0',
    alignItems: 'center',
  },

  
  inputViewNewfortext:{
    width:"80%",
    backgroundColor:"lightblue",
    borderRadius:15,
    height:120,
    marginBottom:20,
    justifyContent:"center",
    padding:20
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
  },
  
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddffb0',
    borderWidth: .5,
    borderColor: '#ddffb0',
    height: 40,
    borderRadius: 5 ,
    margin: 5,
   
  },
   
  ImageIconStyle: {
     padding: 10,
     margin: 5,
     height: 25,
     width: 25,
     resizeMode : 'stretch',
   
  },        

  });
  
  
  export default Updateoldpatient;
  
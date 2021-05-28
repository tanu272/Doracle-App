import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ProgressBarAndroid, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Time', 'Patient Condition', 'Extra Notes(optional)'],
      widthArr: [50, 180, 105]
    }
  }
  render() {
 

  const { navigation } = this.props;
  const state = this.state;
  const data = [];
    for (let i = 0; i < 24; i += 1) {
      const dataRow = [];
      if(i+2<12)
        dataRow.push(i+2+'pm');
      else
        dataRow.push(i-10+`am`);
      if(i%2)
        dataRow.push(`Better than before`);
      else
        dataRow.push(`Slipped into Coma`);
      dataRow.push(`-`);
      
      data.push(dataRow);
    }

  return (
    
    <View style={styles.MainContainer}>
      <ScrollView contentContainerStyle={styles.contentContainer}>

       <View style={{paddingLeft: 95, paddingTop: 20}}>
        <Image
        style={{ width: 150, height: 150 }}
        source={require('../assets/m.png')}
        />
       </View>
       <View style={{paddingLeft:150}}>
        <Text style ={styles.TextStyle}>Mr. XYZ {"\n"}
        </Text>
        </View>

        <View style={{justifyContent :"space-evenly", paddingLeft: 65, marginTop: 10}}><Text style ={{color: "#194002", fontSize: 20,}}>Progress of the Patient</Text></View>

        <View style={styles.example}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          color="#fcba03"
          indeterminate={false}
          progress={0.6}
        />
      </View>

      <View style={{justifyContent :"space-evenly", paddingLeft: 80}}><Text style ={{color: "#194002", fontSize: 20,}}>{"\n"} Patient Condition</Text></View>
      <View style={styles.container}>
        
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#194002'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.head} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  data.map((dataRow, index) => (
                    <Row
                      key={index}
                      data={dataRow}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                      textStyle={styles.text1}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <View style={styles.container1}>
        
        <Text style ={{color: "#194002", fontSize: 15,}}>
          <Image style ={{ width: 100, height: 100 }}
          source={require('../assets/doc.png')}
          />
        {" "}Doctor-in-charge: Dr. ABC {"\n                          "}Qualifications: MBBS, M.D., {"\n                          "}F.R.C.S.
        </Text>
        
        <Text style ={{color: "#194002", fontSize: 20,}}>
        {"\n"}Comments on Patient: None{"\n"}</Text>
        
      </View>
      </ScrollView>
     </View>
  );
  }
}

const styles = StyleSheet.create({

  contentContainer: {
    paddingVertical: 20
  },

     MainContainer: {
   flex:1, 
   paddingTop: 25, 
   paddingLeft: 10, 
   paddingRight: 10, 
   backgroundColor: '#ddffb0',
 },
 
FacebookStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#003f5c',
  borderWidth: .5,
  borderColor: '#003f5c',
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
 
TextStyle :{
  color: "#194002",
  TextStyle: 'bold',
  
},

container: { 
    padding: 5, 
    paddingTop: 10, 
    height: 400,
    backgroundColor: '#ffffff' 
  },
  head: { 
    height: 50, 
    backgroundColor: '#194002' 
  },
  text: { 
    color: '#e9ffdb',
    textAlign: 'center', 
    fontWeight: '200' 
  },
  text1: { 
    color: '#194002',
    textAlign: 'center', 
    fontWeight: '200' 
  },
  dataWrapper: { 
    marginTop: -1 
  },
  row: { 
    height: 40, 
    backgroundColor: '#F7F8FA' 
  },
  example: {
    marginTop : 5,
    marginBottom : 20,
  },
  container1: {
    marginTop: 20,
    marginHorizontal: 10,
  },
});


export default Home;
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ProgressBarAndroid, TouchableOpacity, ScrollView} from 'react-native';
import { Table, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Date', 'Time', 'Requirements', 'Extra Notes(optional)'],
      widthArr: [60, 50, 180, 105]
    }
  }
  render() {
 

  const { navigation } = this.props;
  const state = this.state;
  const data = [];
    for (let i = 0; i < 24; i += 1) {
      const dataRow = [];
      dataRow.push(i+2+'/09/21');
      if(i%2)
        dataRow.push(`10 am`);
      else
        dataRow.push(`10 pm`);
      dataRow.push(`-`);
      dataRow.push(`-`);
      data.push(dataRow);
    }

  return (
    
    <View style={styles.MainContainer}>
      <TouchableOpacity style={styles.FacebookStyle} 
      onPress = {() => navigation.openDrawer()}
      activeOpacity={0.1}>
 
         <Image 
          source={require('../assets/hmb.png')} 
          style={styles.ImageIconStyle} 
          />
       </TouchableOpacity>


      <View style={{justifyContent :"space-evenly", paddingLeft: 15}}><Text style ={{color: "#194002", fontSize: 30,}}>{"\n"} Patient Requirements</Text></View>
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
 
TextStyle :{
  color: "#194002",
  TextStyle: 'bold',
  
},

container: { 
    padding: 5, 
    paddingTop: 10, 
    height: 600,
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
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ProgressBarAndroid, TouchableOpacity, ScrollView} from 'react-native';
import { Table, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pharmacy: [],
      tableHead: ['Date', 'Time', 'Requirements', 'Info (optional)'],
      widthArr: [60, 50, 180, 105]
    }
  }

  componentDidMount(){
    fetch(`http://https://doracle-backend.herokuapp.com/hospital/show/IND2Sgy59`)
        .then((response) => response.json())
        .then((data1) => {
          this.setState({pharmacy: data1.rqtm})
        });
  }


  render() {
 
    const { navigation } = this.props;
    const state = this.state;
      const data = [];
      var ups = state.pharmacy.map(person => {

        const dataRow = [];
        let x=person.date;
        let mod_date=x.substring(0,10);
        let mod_time=x.substring(12,19);
        dataRow.push(mod_date);
        dataRow.push(mod_time);
        dataRow.push(person.required_pharmacy);
        dataRow.push(person.info);
        data.push(dataRow);
      });

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


      <View style={{justifyContent :"space-evenly", paddingLeft: 5}}><Text style ={{color: "#194002", fontSize: 30, fontFamily:'Inter-Black'}}>{"\n"} Patient Requirements</Text></View>
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
    fontFamily: 'Sanchez-Regular'
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
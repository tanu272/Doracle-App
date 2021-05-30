import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image, ScrollView
} from 'react-native';
import { Button } from './Button1'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ddffb0',
  },
  item: {
    fontSize: 18,
    height: 44,
    color: '#c78100',
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
    fontSize: 15,
    fontFamily: 'Sanchez-Regular',
    textDecorationLine: 'underline',    
    alignItems: 'center'
  },

  inputView:{
    width:"100%",
    backgroundColor:"#173604",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:2000,
    color:"white"
  },
});

class FlatListBasics extends React.Component {

  constructor(props) {
    super(props)

    this.state = { firstname: "", lastname: "", contact: 1, email: "", id: "" }
  }

  componentDidMount(){
    fetch(`https://doracle-backend.herokuapp.com/hospital/show/IND2Sgy59`)
    .then((response) => response.json())
    .then((data2) => {
        console.log(data2);
        this.setState({firstname: data2.firstname, lastname: data2.lastname, contact: data2.contact, email: data2.email, id: data2._id});
    });
}
handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://doracle-backend.herokuapp.com/hospital/update/${this.state.id}`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, contact: this.state.contact})
        }).then((response) => response.json())
            .then((json) => {
                console.log(json);
                // alert(json);
            })

            // window.location='/patient/'
}
// handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value})
// }

  render() {
    const { navigation } = this.props;
    return(
      <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.FacebookStyle} 
        onPress = {() => navigation.openDrawer()}
        activeOpacity={0.1}>

           <Image 
            source={require('../assets/hmb.png')} 
            style={styles.ImageIconStyle} 
            />
         </TouchableOpacity>

            <View style = {{alignContent:'center', paddingLeft: 10}}>
            <Text style={styles.text}>{"\n"}First Name</Text>
        </View>
        <View style={styles.inputView}>
            <TextInput
              name='firstname'
              value={this.state.firstname}
              style={styles.inputText}
              placeholder='Enter First Name'
              placeholderTextColor="#296306"
              onChangeText={firstname => this.state({firstname})}
            />
          </View>

          <View style = {{alignContent:'center', paddingLeft: 10}}>
        <Text style={styles.text}>{"\n"}Last Name</Text>
        </View>
        <View style={styles.inputView}>
            <TextInput
              name='lastname'
              value={this.state.lastname}
              style={styles.inputText}
              placeholder='Enter Last Name'
              placeholderTextColor="#296306"
              onChangeText={lastname => this.setState({lastname})}
            />
          </View><View style = {{alignContent:'center', paddingLeft: 10}}>
        <Text style={styles.text}>{"\n"}Contact Number</Text>
        </View>
        <View style={styles.inputView}>
            <TextInput
              name='contact'
              value={this.state.contact.toString()}
              style={styles.inputText}
              keyboardType = 'numeric'
              placeholder='Enter Contact'
              placeholderTextColor="#296306"
              onChangeText={contact => this.setState({contact})}
            />
          </View><View style = {{alignContent:'center', paddingLeft: 10}}>
        <Text style={styles.text}>{"\n"}Email</Text>
        </View>
        <View style={styles.inputView}>
            <TextInput
              name='email'
              value={this.state.email}
              style={styles.inputText}
              placeholder='Enter Email'
              placeholderTextColor="#296306"
              onChangeText={email => this.state({email})}
            />
          </View>
          <Text style={styles.text}>{"\n"}</Text>
        <Button onPress={this.handleSubmit}
          text ="Update Records"
          />
          <Text style={styles.text}>{"\n"}</Text>
          </ScrollView> 
            
          </View>
      );
    }
}

export default FlatListBasics;

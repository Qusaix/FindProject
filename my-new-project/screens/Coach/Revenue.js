import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { createStackNavigator , createAppContainer } from 'react-navigation'

//import console = require('console');

 class Revenue extends React.Component {
   constructor(){
     super()
     this.state={
       Name:"",
       Email:"",
       Password:"",
       Bio:"",
       Experence:""
     }
   }
  static navigationOptions = {
    title:"RegIster",
    headerStyle:{
      backgroundColor:"red",
      height:1,
      display:"none"
    },
    headerTitleStyle:{
      color:"#fff",
      // marginLeft:48+"%",
      // marginTop: -38
    alignItems:"center",
    flex: 1,
    height:1,
    display:"none"
    }
  }
  handelChange(event = {}){
    const name = event.target && event.target.name;
    const value = event.target && event.target.value;
    console.warn("This is the Name Value ",name)
    this.setState({[name] : value})
  }
  sendUserInfo(){
    fetch('http://192.168.1.2:5000/registerCoach', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()})
  .then((data)=>{console.warn("This is the data ",data)})
  //.catch((err)=>console.warn(err))
  .done()

     

  }

    render() {
      return (
        <View>
         <Text>Soon</Text>
          </View>
 )}


};

export default Revenue;
  
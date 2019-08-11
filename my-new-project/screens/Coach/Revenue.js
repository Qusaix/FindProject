import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput
} from 'react-native';
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
    alignItems:"center",
    flex: 1,
    height:1,
    display:"none"
    }
  }

  sendUserInfo(){
    fetch('https://quiet-beyond-30221.herokuapp.com/registerCoach', {
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
  
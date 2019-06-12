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
  TextInput,
  AsyncStorage
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { createStackNavigator , createAppContainer } from 'react-navigation'

//import console = require('console');

 class SeeAllCoachs extends React.Component {
   constructor(){
     super()
     this.state={
       Name:"",
       Bio:"",
      Experence:"",
      AllCoachs:[]
     } 
   }

  static navigationOptions = {
    title:"Login as Coach",
    headerStyle:{
      backgroundColor:"#238aff",
      display:"none"
    },
    headerTitleStyle:{
      color:"#fff",
      // marginLeft:48+"%",
      // marginTop: -38
    alignItems:"center",
    flex: 1
    }
  }
  componentDidMount(){
    this.getUsers();
  }
  getUsers(){
    AsyncStorage.getItem('Name')
     .then((value)=>{
      this.setState({Name:value})
      // console.log("This is the value ",value)
      })
     .then((res)=>{})
     AsyncStorage.getItem('Bio')
     .then((value)=>{
      this.setState({Bio:value})
       //console.log("This is the value ",value)
      })
     .then((res)=>{})

     AsyncStorage.getItem('Experence')
     .then((value)=>{
      this.setState({Experence:value})
       //console.log("This is the value ",value)
      })
     .then((res)=>{})
  }

  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  
  componentWillMount(){
    fetch('http://192.168.0.24:5000/getAllCoachs', {
    method: 'post',
    headers: {
    Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()}) 
  .then((res)=>{
    console.log("Helllo",res)
    this.setState({ AllCoachs : res})
    console.log("This is the Array ",this.state.AllCoachs)
    console.log("This is The ID",res)
    //this.state.AllCoachs.map((element)=>{return (console.log("This is the Element ",element))})
    //this.TheData(res)
  })
  //.catch((err)=>console.warn(err))
  .done()
  }


    render() {
      return (
        <ScrollView>
          <Text>HIIiiiiiiii</Text>
        
            {this.state.AllCoachs.map((Coach)=>{
              return(
                <View key={Coach.id}>
              
                <Text > {Coach.Name} </Text>
              
              
              
              </View>

            )})}
          
          </ScrollView>
 )}


};

export default SeeAllCoachs;
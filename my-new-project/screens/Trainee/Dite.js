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
import { Ionicons , FontAwesome, AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';
import {Bottom } from '../HomeScreen'

//import console = require('console');

 class Dite extends React.Component {
   constructor(props){
     super(props)
     this.state={
      TheEmail:"",
      TheLoginTraineeEmail:"",
       IdCoach:"",
       Name:"",
       Bio:"",
      Experence:"",
      AllProfiles:[]
     } 
   }

  static navigationOptions = { 
    title:"Back",
    headerStyle:{
      backgroundColor:"#238aff",
     // display:"none"
    },
    headerTitleStyle:{
      color:"#fff",
    alignItems:"center",
    flex: 1,
    //display:"none"
    }
  }
  componentDidMount(){
    this.TheInfo()
    
  }
  

  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  
  componentWillMount(){
    this.TheInfo()
  }

  TheInfo(){
    AsyncStorage.getItem('ProFileName')
     .then((value)=>{
      this.setState({Name:value})
      // console.log("This the Profile Now ",value)
      })
     .then((res)=>{})
     
     AsyncStorage.getItem('ProFileBio')
     .then((value)=>{
      this.setState({Bio:value})
       //console.log("This is Bio",value)
      // console.log("This is the Name", this.state.Bio)
      })
     .then((res)=>{})

     AsyncStorage.getItem('TheEmail')
     .then((value)=>{
      this.setState({TheEmail:value})
      //console.log("Email :",value)
       console.log("State Email :", this.state.TheEmail)
      })
     .then((res)=>{})

     AsyncStorage.getItem('IdCoach')
     .then((value)=>{
      this.setState({IdCoach:value})
      //console.log("IDCouch :",value)
       console.log("State IDCouch :", this.state.IdCoach)
      })
     .then((res)=>{})

     AsyncStorage.getItem('Email')
     .then((value)=>{
      this.setState({TheLoginTraineeEmail:value})
       console.log("LoginTraineeEmail :",value)
      })

  }

  Back(){
    return this.props.navigation.navigate("SeeAllCoachsPage");
  }
  AddCoach(){
    alert("Welcome")
    fetch('http://192.168.1.103:5000/AddingCouchForTrainee', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()})
  .then((data)=>{

    console.warn("This is the data ",data)
  })
  //.catch((err)=>console.warn(err))
  .done()


  }

    render() {
      return (
        <ScrollView >
          <Text>Soon...</Text>
        </ScrollView>
 )}


};

export default Dite;
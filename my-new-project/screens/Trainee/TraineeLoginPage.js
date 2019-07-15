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
import { createStackNavigator , createAppContainer } from 'react-navigation'
import TraineeDashboard from './TraineeDashBoard'
import RegTrainee from './TraineeReg'
import SeeAllCoachs from './SeeAllCoachs'
import RegCoach from "../Coach/CoachRegPage";
import CoachDashboard from '../Coach/dashboard'
//import LoginCoach from '../Coach/CoachLogin'
//import console = require('console');
//import console = require('console');
//import console = require('console');

 class LoginTrainee extends React.Component {
   constructor(){
     super()
     this.state={
      Email:"",
      Password:"",
      userInfo:[]


     }
   }
  static navigationOptions = {
    title:"LoginTrainee",
    headerStyle:{
      backgroundColor:"#138D75",
      //display:"none"

    },
    headerTitleStyle:{
      color:"#fff",
      // marginLeft:48+"%",
      // marginTop: -38
    alignItems:"center",
    flex: 1,
    //display:"none"
    }
  }
  TheData(data){
    console.log(data)
    this.state.userInfo.push(data)
    console.log("This is the Err ",data.err)
    if(data.err === undefined){
      console.log("It's Work")

      /// Savaing Data Here -- Start 
      const saveData = async Saving =>{
        try {
          console.log("Im Inside Try ",data.id)
           AsyncStorage.setItem("TheEmail",data.Email)
           AsyncStorage.setItem("Bio",data.Bio)
           AsyncStorage.setItem("Email",data.Email)
           AsyncStorage.setItem("Experence",data.Experence)
           AsyncStorage.setItem("Goal",data.Goal)
           AsyncStorage.setItem("Height",data.Height)
           AsyncStorage.setItem("Name",data.Name)
           AsyncStorage.setItem("weight",data.Weight)

        }
        catch(error){
          console.log("This is the Error ",error)
        }
      }
      saveData();
      /// Savaing Data Here -- END
      return this.props.navigation.navigate("TraineeDashBoardPage",data)
    }else{
      alert("You Need To Sighn Up")
    }
  }
  LoginNow(){
    fetch('http://192.168.1.3:5000/LoginTrainee', {
    method: 'post',
    headers: {
    Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()}) 
  .then((res)=>{
    console.log("Helllo")
    this.TheData(res)})
  //.catch((err)=>console.warn(err))
  .done()
  }

    render() {
      return (
        <View
        style={{
          alignItems:"center",
        }}
        >
        <View
        style={{
          width: 300,
          height: 250,
          backgroundColor:"#138D75", 
          // marginLeft:90,
          marginTop:5+"%",
          marginBottom:150,
          borderRadius:10
        }}
        >
          <Image 
          style={{
            width:200,
            height:80,
            //marginBottom:3,
            marginLeft:45,
            marginTop:-1,
            marginBottom:-15
          }}
          source={{uri:"https://i.ibb.co/NKWQQnN/ffff.png"}}
          /> 
              <TextInput 
                style={{
                backgroundColor:"#fff",
                borderLeftWidth: 2,
                borderRightWidth: 2,
                borderBottomWidth:2,
                borderTopWidth:2,
                borderColor:"#fff",
                borderRadius:8,
                height: 40,
                textAlign:"center",
                marginTop:15,
                marginLeft:15,
                marginRight:15,
                padding:10,
                color:"#000",
                fontSize:15,
                textDecorationLine:"none"

        
              }}
              placeholder="Email"
              name={"Email"}
              onChangeText={(value)=>this.setState({Email:value})}

                />

              <TextInput 
                style={{
                backgroundColor:"#fff",
                borderLeftWidth: 2,
                borderRightWidth: 2,
                borderBottomWidth:2,
                borderTopWidth:2,
                borderColor:"#fff",
                borderRadius:6,
                height: 40,
                textAlign:"center",
                marginTop:15,
                marginLeft:15,
                marginRight:15,
                marginBottom:4,
                padding:10,
                color:"#000",
                fontSize:15,
                textDecorationLine:"none"

        
              }}
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
              name={"Password"}
              onChangeText={(value)=>this.setState({Password:value})}
              
                />

              <TouchableOpacity
              style={{
                backgroundColor:"green",
                padding:10,
                width:70,
                marginLeft:38+"%",
                marginTop:5,
                borderRadius:7
              }}
              onPress={this.LoginNow.bind(this)}
              >
                <Text
                style={{
                  textAlign:"center",
                  color:"#fff",
                  fontWeight:"bold"
                }}
                //onPress={this.props.navigation.navigate('TraineeDashBoardPage')}
                >Login</Text>
                </TouchableOpacity>

                <Text
                style={{
                 fontSize:12,
                 color:"#fff",
                 marginLeft:5,
                 marginTop:4

                 }}
                 onPress={()=>{this.props.navigation.navigate('RegisterTrainee')}}
                 >
                   Don't have account you can register now for free 
                 </Text>
             </View>
        </View>
 )}


};
export default LoginTrainee
  
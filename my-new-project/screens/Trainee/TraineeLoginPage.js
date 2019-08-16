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
    },
    headerTitleStyle:{
      color:"#fff",
    alignItems:"center",
    flex: 1,
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
          console.log("Im Inside Try ",data.URL)
           AsyncStorage.setItem("TheEmail",data.Email)
           AsyncStorage.setItem("Password",this.state.Password)
           AsyncStorage.setItem("Bio",data.Bio)
           AsyncStorage.setItem("Email",data.Email)
           AsyncStorage.setItem("Experence",data.Experence)
           AsyncStorage.setItem("Goal",data.Goal)
           AsyncStorage.setItem("Height",data.Height)
           AsyncStorage.setItem("Name",data.Name)
           AsyncStorage.setItem("weight",data.Weight)
           AsyncStorage.setItem("ImageURL",data.URL)
           AsyncStorage.setItem("Protein",data.Protein)
           AsyncStorage.setItem("Carb",data.Carb)
           AsyncStorage.setItem("Fat",data.Fat)
           AsyncStorage.setItem("ProteinC",data.ProteinC)
           AsyncStorage.setItem("CarbC",data.CarbC)
           AsyncStorage.setItem("FatC",data.FatC)
           AsyncStorage.setItem('Meal1',data.Meal1)
           AsyncStorage.setItem('Meal2',data.Meal2)
           AsyncStorage.setItem('Meal3',data.Meal3)
           AsyncStorage.setItem('Meal4',data.Meal4)
           AsyncStorage.setItem('Meal5',data.Meal5)
           AsyncStorage.setItem('Meal6',data.Meal6)
           AsyncStorage.setItem('TimeMeal1',data.TimeMeal1)
           AsyncStorage.setItem('TimeMeal2',data.TimeMeal2)
           AsyncStorage.setItem('TimeMeal3',data.TimeMeal4)
           AsyncStorage.setItem('TimeMeal4',data.TimeMeal5)
           AsyncStorage.setItem('TimeMeal5',data.TimeMeal5)
           AsyncStorage.setItem('TimeMeal6',data.TimeMeal6)
           AsyncStorage.setItem('Meal1C',data.Meal1C)
           AsyncStorage.setItem('Meal2C',data.Meal2C)
           AsyncStorage.setItem('Meal3C',data.Meal3C)
           AsyncStorage.setItem('Meal4C',data.Meal4C)
           AsyncStorage.setItem('Meal5C',data.Meal5C)
           AsyncStorage.setItem('Meal6C',data.Meal6C)
           AsyncStorage.setItem('TimeMeal1C',data.TimeMeal1C)
           AsyncStorage.setItem('TimeMeal2C',data.TimeMeal2C)
           AsyncStorage.setItem('TimeMeal3C',data.TimeMeal4C)
           AsyncStorage.setItem('TimeMeal4C',data.TimeMeal5C)
           AsyncStorage.setItem('TimeMeal5C',data.TimeMeal5C)
           AsyncStorage.setItem('TimeMeal6C',data.TimeMeal6C)
        }
        catch(error){
          console.log("This is the Error ",error)
        }
      }
      saveData();
      /// Savaing Data Here -- END
      return this.props.navigation.navigate("TraineeDashBoardPage",data)
    }else if(data.err == "Put Password"){
      alert("Put Password")
    }
    else if(data.err == "Wrong Password"){
      alert("Wrong Password")
    }
    else{
      alert("You Need To Sighn Up")
    }
  }
  LoginNow(){
    fetch('https://quiet-beyond-30221.herokuapp.com/LoginTrainee', {
    method: 'post',
    headers: {
    Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()}) 
  .then((res)=>{
    console.log("Login successfully")
    console.log("Data :",res)
    this.TheData(res)}
    )
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
  
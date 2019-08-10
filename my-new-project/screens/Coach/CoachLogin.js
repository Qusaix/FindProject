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
import RegCoach from "./CoachRegPage";
import CoachDashboard from './dashboard'
 
 class LoginCoach extends React.Component {
   constructor(){
     super()
     this.state={
       Email:"",
       Password:""
     }
   }
   
   TheData(data){
    console.log(data)
   console.log("This is the Err ",data.err)
    if(data.err === undefined){
      console.log("It's Work", data.Name)
      if(data.Name === ""){
        return alert("Put Your Email")
      }
      /// Savaing Data Here -- Start 
      const saveData = async Saving =>{
        try {
          console.log("Im Inside Try ",data.Email)
           AsyncStorage.setItem("Email",data.Email)
           AsyncStorage.setItem("Name",data.Name)
           AsyncStorage.setItem("Bio",data.Bio)
           AsyncStorage.setItem("Experence",data.Experence)
           AsyncStorage.setItem("URL",data.URL)
        }
        catch(error){
          console.log("This is the Error ",error)
        }
      }
      saveData();
      /// Savaing Data Here -- END
      return this.props.navigation.navigate("DashboardPage",data)
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
    fetch('https://quiet-beyond-30221.herokuapp.com/LoginCoch', {
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

  static navigationOptions = {
    tabBarVisible: false,
    title:"Coach Login",
    headerStyle:{
      backgroundColor:"#138D75",
      color:"#fff"
      // display:"none"
     // marginTop: -38,
      
    },
    headerTitleStyle:{
      color:"#fff",
      // marginLeft:48+"%",
    
    alignItems:"center",
    flex: 1,
    // display:"none"
    }
  }


  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  Coach (){
    this.props.navigation.navigate(RegCoach)
}
    render() {
      return (
        <View
        style={{
          alignItems:"center"
        }}
        >
        <View
        style={{
          width: 300,
          height: 250,
          backgroundColor:"#138D75",
         // marginLeft:90,
          marginTop:20,
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
               // onPress={()=>this.props.navigation.navigate('DashboardPage')}
                >Login</Text>
                </TouchableOpacity>

                <Text
                style={{
                 fontSize:12,
                 color:"#fff",
                 marginLeft:5,
                 marginTop:4

                 }}
                 onPress={()=>{this.props.navigation.navigate('RegCoachPage')}}
                 >
                   Don't have account you can register now for free 
                 </Text>
             </View>
             </View>
 )}


};

export default LoginCoach
  
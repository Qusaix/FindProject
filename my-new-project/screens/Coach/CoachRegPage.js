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

 class RegCoach extends React.Component {
   constructor(){
     super()
     this.state={
       Email:"",
       Password:""
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
  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  
    render() {
      return (
        <View>
          <View
          style={{
            width: 300,
            height: 400,
            backgroundColor:"#238aff",
            marginLeft:45,
            marginTop:20,
            borderRadius:10
          }}
          >
            <Image 
            style={{
              width:150,
              height:150,
              //marginBottom:3,
              marginLeft:80,
              marginTop:10
            }}
            source={{uri:"http://hqfit.com/wp-content/uploads/2018/07/Asset-1HQ_Logo_Main.png"}}
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
                onChangeText={(text)=>{this.TextFieldValue(text,"Email")}}

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
                onChangeText={(text)=>{this.TextFieldValue(text,"Password")}}
                
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
                onPress={()=>{alert("Welcome to Your Account Coach")}}
                >
                  <Text
                  style={{
                    textAlign:"center",
                    color:"#fff",
                    fontWeight:"bold"
                  }}
                  >RegIsterNow</Text>
                  </TouchableOpacity>

                  <Text
                  style={{
                   fontSize:12,
                   color:"#fff",
                   marginLeft:5,
                   marginTop:4

                   }}
                   onPress={()=>{alert("Hello")}}
                   >Don't have account you can register now for free
                   </Text>
               </View>
          </View>
 )}


};

export default RegCoach;
  
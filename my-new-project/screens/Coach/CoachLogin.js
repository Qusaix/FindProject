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
    flex: 1,
    display:"none"
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
        <View>
          <View
          style={{
            width: 300,
            height: 250,
            backgroundColor:"#238aff",
            marginLeft:90,
            marginTop:20,
            marginBottom:150,
            borderRadius:10
          }}
          >
            <Image 
            style={{
              width:50,
              height:50,
              //marginBottom:3,
              marginLeft:120,
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
                onPress={()=>{
                  this.props.navigation.navigate("DashboardPage");
                }}
                >
                  <Text
                  style={{
                    textAlign:"center",
                    color:"#fff",
                    fontWeight:"bold"
                  }}
                  
                  >Login</Text>
                  </TouchableOpacity>

                  <Text
                  style={{
                   fontSize:12,
                   color:"#fff",
                   marginLeft:5,
                   marginTop:4

                   }}
                   onPress={()=>{alert("This is the Register Page")}}
                   >
                     Don't have account you can register now for free 
                   </Text>
               </View>
          </View>
 )}


};

export default createStackNavigator({
  Home:{
    screen:LoginCoach
  },
  DashboardPage:{
    screen:CoachDashboard
  }
})
  
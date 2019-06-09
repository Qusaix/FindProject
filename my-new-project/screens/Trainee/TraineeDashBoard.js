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
//const { Height } = Dimensions.get('window');

 class TraineeDashboard extends React.Component {
   constructor(){
     super()
     this.state={
       Email:"",
       Password:"",
       ScreeenHeight:0
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



  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  
    render() {
    //const Scroll = this.state.ScreeenHeight > Height

      return (
        <ScrollView>
        <View>
            <TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#000",
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
                placeholder="Find Trainees"
                name={"Search"}
                // onChangeText={(text)=>{this.TextFieldValue(text,"Email")}}

                  />
                  <TouchableOpacity
                style={{
                  backgroundColor:"green",
                  padding:10,
                  width:70,
                  marginLeft:80+"%",
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
                  
                  >Find</Text>
                  </TouchableOpacity>

            <Image 
            style={{
                height:100,
                width:100,
                //position: 'absolute', 
                justifyContent: 'center', 
                margin:10
            }}
            source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}
            />
        <View
        style={{
            margin:10
        }}
        >
          <Text
          style={{
              fontSize:25,
              marginBottom:15
          }}
          >Your Info</Text>
          <Text>Name</Text>
          <Text>Bio</Text>
          <Text>How Many Years</Text>
          <Text>Goal</Text>
          <Text>Photos</Text>
          <Text>Weight</Text>
          <Text>Height</Text>
        </View>

          <View>
           <Text
           style={{
            fontSize:25,
            margin:10
           }}
           >
            Your Coach

            </Text>
            <View
            style={{
              fontSize:25,
              margin:10
             }}
            >
              <Text>Ahmed</Text>
            </View>
          <Text
          style={{
              fontSize:25,
              marginTop:15,
              margin:10
          }}
          >
         Your Diet</Text>
          <View
          style={{
            fontSize:25,
            margin:10
           }}
          >
          <Text>Protein: </Text>
          <Text>Carb: </Text>
          <Text>Fat: </Text>
          </View>

           <Text
           style={{
            fontSize:25,
            marginTop:15,
            margin:10
        }}
           >Goal </Text>

           <View
           style={{
            fontSize:25,
            margin:10
           }}
           >
             <Text>
               Start
             </Text>
             <Text>
               End 
             </Text>
             </View>
           

          </View>
          

          </View>
          </ScrollView>
 )}


};

export default TraineeDashboard;
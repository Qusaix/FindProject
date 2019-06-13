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

//import console = require('console');

 class CoachProfile extends React.Component {
   constructor(){
     super()
     this.state={
       Name:"",
       Bio:"",
      Experence:"",
      AllProfiles:[]
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
    alignItems:"center",
    flex: 1
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
       console.log("This the Profile Now ",value)
      })
     .then((res)=>{})
     
     AsyncStorage.getItem('ProFileBio')
     .then((value)=>{
      this.setState({Bio:value})
       console.log("This is Bio",value)
       console.log("This is the Name", this.state.Bio)
      })
     .then((res)=>{})

  }

  Back(){
    return this.props.navigation.navigate("SeeAllCoachsPage");
  }


    render() {
      return (
        <ScrollView >
          <TouchableOpacity
          onPress={()=>{return this.Back()}}
          >
            <Text
            style={{
              backgroundColor:"red",
              padding:10,
              margin:5
            }}
            >Back</Text>
          </TouchableOpacity>
          <View>
          <Image 
                          style={{
                          width:100,
                          height:100,
                          marginLeft:100,
                          marginTop:5,

                          }}
                          source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}
                        /> 
            <Text>Hello {this.state.Name}</Text>
            <Text>More About Me {this.state.Bio}</Text>
            <Text
            style={{
              backgroundColor:"green",
              borderRadius:9,
              width:150,
              fontSize:25,
              fontWeight:"bold",
              padding:10,
              margin:10,
              color:"#fff"
            }}
            >
            <MaterialCommunityIcons name="blogger" size={35} color="#fff" /> Blogs
              </Text>
            <View style={{
              backgroundColor:"#238aff",
              height:200,
              width:300,
              borderRadius:7,
              margin:10,
              color:"#fff"
            }}>
         <ScrollView>      
          <View style={{
            margin:5
          }}>
          <Text
          style={{
            fontSize:15,
            fontWeight:"bold",
            color:"#fff"
          }}
          > Blog Title </Text>
          <Text
          style={{
            fontWeight:"bold",
            color:"#fff"
          }}
          >This is the post it will The Coach Relese </Text>
            
            </View> 


            <View style={{
            margin:5
          }}>
          <Text
          style={{
            fontSize:15,
            fontWeight:"bold",
            color:"#fff"
          }}
          > Blog Title </Text>
          <Text
          style={{
            fontWeight:"bold",
            color:"#fff"
          }}
          >This is the post it will The Coach Relese </Text>
            
            </View> 



            <View style={{
            margin:5
          }}>
          <Text
          style={{
            fontSize:15,
            fontWeight:"bold",
            color:"#fff"
          }}
          > Blog Title </Text>
          <Text
          style={{
            fontWeight:"bold",
            color:"#fff"
          }}
          >This is the post it will The Coach Relese </Text>
            
            </View> 

            <View style={{
            margin:5
          }}>
          <Text
          style={{
            fontSize:15,
            fontWeight:"bold",
            color:"#fff"
          }}
          > Blog Title </Text>
          <Text
          style={{
            fontWeight:"bold",
            color:"#fff"
          }}
          >This is the post it will The Coach Relese </Text>
            
            </View> 

            <View style={{
            margin:5
          }}>
          <Text
          style={{
            fontSize:15,
            fontWeight:"bold",
            color:"#fff"
          }}
          > Blog Title </Text>
          <Text
          style={{
            fontWeight:"bold",
            color:"#fff"
          }}
          >This is the post it will The Coach Relese </Text>
            
            </View> 

            <View style={{
            margin:5
          }}>
          <Text
          style={{
            fontSize:15,
            fontWeight:"bold",
            color:"#fff"
          }}
          > Blog Title </Text>
          <Text
          style={{
            fontWeight:"bold",
            color:"#fff"
          }}
          >This is the post it will The Coach Relese </Text>
            
            </View> 




            </ScrollView> 

            </View>

            </View>
          
</ScrollView>
 )}


};

export default CoachProfile;
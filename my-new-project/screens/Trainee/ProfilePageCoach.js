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
          style={{
            width:100
          }}
          >
            <Text
            style={{
              backgroundColor:"#000",
              padding:10,
              margin:5,
              color:"#fff",
              borderRadius:9
            }}
            ><Ionicons name="ios-arrow-back" size={35} color="#fff" /> <Text style={{fontWeight:"bold",fontSize:14}}>Profile
              </Text></Text>
          </TouchableOpacity>
          <View>
          <Image 
                          style={{
                          width:100,
                          height:100,
                          marginLeft:4,
                          marginTop:5,

                          }}
                          source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}
                        /> 
            {/* This is The Start of User Info */}
      <View style={{
        backgroundColor:"#f5f5f5",
        margin:5,
        borderRadius:9,
        width:400,
        padding:10

      }}>                  
            <Text
            style={{
              marginLeft:4,
              fontSize:16
            }}
            ><Text style={{fontWeight:"bold"}}>NAME</Text> {this.state.Name}</Text>
            <Text
            style={{
              marginLeft:4,
              fontSize:16
            }}
            > <Text style={{fontWeight:"bold"}} >BIO</Text> {this.state.Bio}</Text>
            
            <View style={{alignItems:"flex-end"}}><TouchableOpacity style={{marginTop:-25,backgroundColor:"green",padding:5,borderRadius:5,width:80,}}><Text style={{color:"#fff"}}><FontAwesome name="user-plus" size={16} color="#fff" />Contect</Text></TouchableOpacity></View>

            </View>



            <Text
            style={{
              backgroundColor:"green",
              borderRadius:9,
              width:150,
              fontSize:16,
              fontWeight:"bold",
              padding:10,
              margin:10,
              color:"#fff"
            }}
            >
              
            <MaterialCommunityIcons name="blogger" size={20} color="#fff" /> Blogs
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

          {/* This is the Photos Area  */}

          <View>
          <Text
            style={{
              backgroundColor:"green",
              borderRadius:9,
              width:150,
              fontSize:14,
              fontWeight:"bold",
              padding:10,
              margin:10,
              color:"#fff"
            }}
            >
            <FontAwesome name="photo" size={16} color="#fff" /> Clients Photos
              </Text>
            {/* Hold Photos */}
            <View
            style={{flexDirection:'row', flexWrap:'wrap'}}
            >
            <Image style={{width:100,height:100,marginTop:5,margin:4}}source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}/>   
            <Image style={{width:100,height:100,marginTop:5,margin:4}}source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}/>
            <Image style={{width:100,height:100,marginTop:5,margin:4}}source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}/>
            <Image style={{width:100,height:100,marginTop:5,margin:4}}source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}/>
            </View>






            </View>  


            </View>
          
</ScrollView>
 )}


};

export default CoachProfile;
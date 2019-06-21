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
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { createStackNavigator , createAppContainer } from 'react-navigation'

//import console = require('console');

 class Blogs extends React.Component {
   constructor(){
     super()
     this.state={
       Name:"",
       Bio:"",
      Experence:"",
      Email:"",
      AllTheData:[]
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
    this.TakeAndSendData();
  }
  getUsers(){
    AsyncStorage.getItem('Name')
     .then((value)=>{
      this.setState({Name:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})
     AsyncStorage.getItem('Bio')
     .then((value)=>{
      this.setState({Bio:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})

     AsyncStorage.getItem('Experence')
     .then((value)=>{
      this.setState({Experence:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})

     AsyncStorage.getItem('Email')
     .then((value)=>{
      this.setState({Email:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})

  }

  TakeAndSendData(){


    setTimeout(() => {
      fetch('http://192.168.0.24:5000/SeeAllBlogs', {
    method: 'post',
    headers: {
    Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()}) 
  .then((res)=>{
    
    console.log("The Array : ", this.state.AllTheData)
    this.setState({ AllTheData : res})
  })
  //.catch((err)=>console.warn(err))
  .done()
    }, 10000);



  }


  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  
    render() {
      return (
        
        <ScrollView
        style={{
            flex: 1,
           // justifyContent:"center",
            flexDirection:"column",
           // display:"flex",
           // justifyContent:"center",
           // flexShrink:1
        }}>
        
  
        {this.state.AllTheData.map((Blog)=>{
            return(
    
                
                <View 
                key={Blog.id+1}
                style={{
                    flex: 1,
                    justifyContent:"center",
                    flexDirection:"column",
                   // display:"flex",
                   // justifyContent:"center",
                   // flexShrink:1
                }}>
                
        
                 <View style={{
                     width:220,
                     backgroundColor:"red",
                     margin:5,
                     borderRadius:5,
                     
                 }}>
                 <Text
                 style={{
                     padding:5,
                     color:"#fff",
                     fontSize:21,
                     fontWeight:"bold",
                 }}
                 >{Blog.TheCreater}</Text>      
                <Text
                style={{
                    padding:5,
                    color:"#fff",
                    fontSize:15,
                    fontWeight:"bold"
                }}
                > {Blog.Title} </Text>
                <Text
                style={{
                    padding:5,
                    color:"#fff",
                    fontSize:10,
                    fontWeight:"bold"
                }}
                > {Blog.content}  </Text>
                </View> 
        
        
                  

        
    
                  </View>
        
                  
    
    
    
            )
         })}  



      <View style={{
        backgroundColor:"green",
        padding:5,
        margin:5,
        borderRadius:9

      }}>

      <Text
      style={{
        fontSize:25,
        fontWeight:"bold"
      }}
      >New Tip</Text>
      <View style={{
        flexDirection:"row",
        flex:1
      }}>
        <KeyboardAvoidingView>
      <TextInput placeholder="Title" style={{
        margin:5,
        backgroundColor:"red",
        color:"#fff",
        padding:15,
        borderRadius:6,
        width:150
      }}/>
       </KeyboardAvoidingView>
      <TextInput placeholder="Content" 
      style={{
        margin:5,
        backgroundColor:"red",
        color:"#fff",
        padding:15,
        borderRadius:6,
        width:150
      }}
      />
      </View>
  <TouchableOpacity
  style={{
  width:100,
  backgroundColor:"red",
  margin:5,
  padding:5,
  borderRadius:9,
}}
>
  <Text
  style={{
    color:"#fff",
    fontWeight:"bold",
    fontSize:14
  }}
  >Add Tip</Text>
</TouchableOpacity>
      </View>

         </ScrollView>
              



      )
    
    
    
    
    
    
    
    }


};

export default Blogs;
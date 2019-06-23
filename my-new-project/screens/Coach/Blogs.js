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
import { createStackNavigator , createAppContainer , Header} from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//import console = require('console');

 class Blogs extends React.Component {
   constructor(){
     super()
     this.state={
       Name:"",
       Bio:"",
      Experence:"",
      Email:"",
      AllTheData:[],
      Content:"",
      Title:""
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
      // marginLeft:48+"%",
      // marginTop: -38,
    //alignItems:"center",
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
      fetch('http://192.168.1.103:5000/SeeAllBlogs', {
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

  AddBlog(){

    fetch('http://192.168.1.103:5000/AddBlog', {
    method: 'post',
    headers: {
    Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()}) 
  .then((res)=>{
    this.setState({AllTheData:[...this.state.AllTheData,res]})
   console.log("This is the Data ",res)
  })
  //.catch((err)=>console.warn(err))
  .done()

  

  }

  check(){
    
    if(this.state.Content.length >= 99){Alert.alert(
      'Err',
      'You Reach The Max of charerctors',
      [
        ,
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
         // style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );}else if(this.state.Title.length >= 30){
        Alert.alert(
        'Err',
        'You Reach The Max of charerctors',
        [
          ,
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
           // style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );

    }
    
  }


  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  scrollKeyBoard(){
    this.scrollKeyBoard.props.scrollToFocusedInput(reactNode)
  }
    render() {
      return (
      <KeyboardAvoidingView
      style={{
      flex:1
  
      }}
keyboardVerticalOffset={ Header.HEIGHT + 120}
behavior = "padding"
//behavior="padding"
>
        <ScrollView
        style={{
            flex: 1,
           // flexDirection:"column",
        }}>
        
  
        {this.state.AllTheData.map((Blog)=>{
            return(
    
                
                <View 
                key={Blog.id+1}
                style={{
                    flex: 1,
                    justifyContent:"flex-end",

                  //   flexDirection:"column",
                  //  // display:"flex",
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
                     fontSize:25,
                     fontWeight:"bold",
                 }}
                 >{Blog.TheCreater}</Text>      
                <Text
                style={{
                    padding:5,
                    color:"#fff",
                    fontSize:21,
                    fontWeight:"bold"
                }}
                > {Blog.Title} </Text>
                <Text
                style={{
                    padding:5,
                    color:"#fff",
                    fontSize:14,
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
        borderRadius:9,
        justifyContent:"flex-end"

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
      {/* <Text name={"Email"}></Text>  */}
      <TextInput 
      name={"Title"}
      maxLength={60}
      onChangeText={(value)=>this.setState({Title:value})}
      placeholder="Title" style={{
        margin:5,
        backgroundColor:"red",
        color:"#fff",
        padding:15,
        borderRadius:6,
        width:150
      }}/>
       
      <TextInput 
      name={"Content"}
      maxLength={100}
      onChangeText={(value)=>{this.setState({Content:value})
      this.check()
    }}
      placeholder="Content" 
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
  onPress={()=>{
    this.AddBlog();
  }}
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
    </KeyboardAvoidingView>



      )
    
    
    
    
    
    
    
    }


};

export default Blogs;
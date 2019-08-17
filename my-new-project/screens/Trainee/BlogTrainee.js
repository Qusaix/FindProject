import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button1, 
  Alert,
  TextInput,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { createStackNavigator , createAppContainer , Header} from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextField } from 'react-native-material-textfield';
//import { Button , Card } from 'react-native-material-design'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import Loading from "../Loading"


//import console = require('console');
 
 class TraineeBlog extends React.Component {
   constructor(){
     super()
     this.state={
       Name:"",
       Bio:"",
      Experence:"",
      Email:"",
      AllTheData:[],
      reversed:[],
      Content:"",
      Title:"",
      TheNewTitle:"Title",
      TheNewContent:"Content",
      Loading:true
     } 
   }

  static navigationOptions = {
    title:"Back",
    headerStyle:{
      backgroundColor:"#238aff",
     display:"none"
    },
    headerTitleStyle:{
      color:"#fff",
      // marginLeft:48+"%",
      // marginTop: -38,
    //alignItems:"center",
    flex: 1,
    display:"none"
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
      fetch('https://quiet-beyond-30221.herokuapp.com/SeeAllBlogs', {
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
    const rever = this.state.AllTheData.reverse()
    this.setState({reversed:rever}) 
    this.setState({Loading:false})
    console.log("This is the Rever Page ",rever)
  })
  //.catch((err)=>console.warn(err))
  .done()
    }, 10000);



  }

  AddBlog(){

    fetch('https://quiet-beyond-30221.herokuapp.com/AddBlog', {
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
    const rever = this.state.AllTheData.reverse();
    this.setState({reversed:rever})
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
      if(this.state.Loading === true){
        return(
          <Loading />
        )
      }else if(this.state.Loading === false){
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
        }}>
        <View style={{
        backgroundColor:"#16A085",
        padding:5,
        margin:5,
        borderRadius:9,

      }}>

      <Text
      style={{
        fontSize:25,
        fontWeight:"bold",
        color:"#fff"
      }}
      >All Tips</Text>
 
      {/* <View style={{width:250,backgroundColor:"#000",borderRadius:9,overflow:"hidden",padding:5}}>

     Avatar 
    <View>
      <Image style={{width:50,height:50,margin:5,borderRadius:5}}
       source={{uri:"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" }}/>
      
    </View>
     Avatar 


       Name 
      <Text style={{marginTop:-28,color:"#fff",fontSize:12,fontWeight:"bold",marginLeft:60}}>View Profile</Text>
      <Text style={{marginTop:-38,color:"#fff",fontSize:18,fontWeight:"bold",marginLeft:60}}>Qusai</Text>

     
      
       Name 


      Text Content
      <View style={{marginTop:25,marginRight:5}}>
        <Text style={{fontSize:18,color:"#fff"}}>How to lose weight </Text>
        <Text style={{paddingRight:5,color:"#fff",fontSize:14}}>Hello This is the conten of the tips it will be alot of text thats why im writting this paragraphasdasdasdasdasdasdasdasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      </View>
    Text Content
        


      </View>  */}


      <View style={{
        flex:1,
        
      }}>
     
      </View>
      </View>
      <View style={{flexDirection:"row",flexWrap:"wrap"}}>

          {this.state.reversed.map((Blog)=>{
            return(
    





<View  key={Blog.id+1} style={{width:45+"%",backgroundColor:"#16A085",borderRadius:9,overflow:"hidden",padding:5,margin:5}}>

    {/* Avatar */}
    <View>
      <Image style={{width:50,height:50,margin:5,borderRadius:5}}
       source={{uri:"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" }}/>
      
    </View>
    {/* Avatar */}


      {/* Name */}
      <TouchableOpacity style={{marginTop:-28,marginLeft:60}}><Text style={{color:"#fff",fontSize:12,fontWeight:"bold"}}>View Profile</Text></TouchableOpacity> 
      <Text style={{marginTop:-38,color:"#fff",fontSize:18,fontWeight:"bold",marginLeft:60}}>{Blog.TheCreater}</Text>

     
      
      {/* Name */}


      {/*Text Content*/}
      <View style={{marginTop:25,marginLeft:5}}>
        <Text style={{fontSize:18,color:"#fff",fontWeight:"bold"}}>{Blog.Title}</Text>
        <Text style={{paddingRight:5,color:"#fff",fontSize:14}}>{Blog.content}</Text>
      </View>
      {/*Text Content*/}
        


      </View>
                   )})}  
                   </View>
      </ScrollView>
    </KeyboardAvoidingView>
)}}
};

export default TraineeBlog;
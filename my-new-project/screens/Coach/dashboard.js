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

//import console = require('console');

 class CoachDashboard extends React.Component {
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
      fetch('http://192.168.0.24:5000/getAllCoachs', {
    method: 'post',
    headers: {
    Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()}) 
  .then((res)=>{
    console.log("This is the Data I Get ",res);
   this.setState({AllTheData:res})
    console.log("The Array : ", this.state.AllTheData)
    //console.log("Helllo",res)
    //this.setState({ AllCoachs : res})
    //console.log("This is the Array ",this.state.AllCoachs)
   // console.log("This is The ID",res)
    //this.state.AllCoachs.map((element)=>{return (console.log("This is the Element ",element))})
    //this.TheData(res)
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
                  this.props.navigation.navigate("LoginCoach");
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
          <Text>Name {this.state.Name}</Text>
          <Text>Bio  {this.state.Bio}</Text>
          <Text>Experence {this.state.Experence}</Text>
          <Text>Charge</Text>
          <Text>Trainees</Text>
          <Text>Review</Text>
        </View>
          <View>
           <Text
           style={{
            fontSize:25,
            margin:10
           }}
           >
            Your Trainees

            </Text>   
          <Text
          style={{
              fontSize:25,
              marginTop:15,
              margin:10
          }}
          >
         Your Revenue</Text>


         <Text
          style={{
              fontSize:25,
              marginTop:15,
              margin:10
          }}
          > 
         Photos</Text>

          </View>

          <View>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('UpdatedCoachInfo')}
            style={{
              backgroundColor:"green",
              padding:10,
              width:70,
              marginLeft:43+"%",
              marginTop:5,
              borderRadius:7,
              marginBottom:10
            }}
            >
              <Text
              style={{
                color:"#fff",
                fontSize:15,
                fontWeight:"bold",
                textAlign:"center"
              }}
              >Update Your Info</Text>
            </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate("LoginCoachTake")}
          style={{
            backgroundColor:"green",
            padding:10,
            width:70,
            marginLeft:43+"%",
            marginTop:5,
            borderRadius:7,
            marginBottom:10
          }}
          >
            <Text
            style={{
              color:"#fff",
              fontSize:15,
              fontWeight:"bold",
              textAlign:"center"
            }}
            >Logout</Text>
            </TouchableOpacity>
            </View>
          

          </View>
          </ScrollView>
 )}


};

export default CoachDashboard;
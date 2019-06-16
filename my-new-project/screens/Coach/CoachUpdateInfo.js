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

 class UpdatedCoachInfo extends React.Component {
   constructor(){
     super()
     this.state={
        Email:"",
        UpdatedName:"",
        UpdatedBio:"",
        UpdatedExperence:""
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
    AsyncStorage.getItem('Email')
     .then((value)=>{
      this.setState({Email:value})
       console.log("This is the value ",value)
      })
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
  }

  UpdatedData(){
    fetch('http://192.168.0.24:5000/UpdateCoachInfo', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
        })
      .then((res)=>{return res.json()})
      .then((data)=>{console.warn("This is the data ",data)})
      //.catch((err)=>console.warn(err))
      .done()
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
          > Update Your Info</Text>
          <Text name="Email">Email {this.state.Email}</Text>
          <Text>Name</Text>
          <TextInput name={"UpdatedName"} placeholder="Put Your Name" onChangeText={(value)=>this.setState({UpdatedName:value})}/>
          <Text >Bio</Text>
          <TextInput name={"UpdatedBio"} placeholder="Put Your Bio" onChangeText={(value)=>this.setState({UpdatedBio:value})}/>
          <Text >Experence</Text>
          <TextInput name={"UpdatedExperence"} placeholder="Put Your Experence" onChangeText={(value)=>this.setState({UpdatedExperence:value})}/>
        </View>
          <View>


          </View>

          <View>
          
            </View>
          
          <TouchableOpacity
          style={{
            backgroundColor:"green",
            padding:10,
            width:100+"%",
           // marginLeft:43+"%",
            marginTop:5,
            borderRadius:7,
            marginBottom:10
          }}
          onPress={this.UpdatedData.bind(this)}
          >
              <Text
              style={{
                color:"#fff",
                fontSize:15,
                fontWeight:"bold",
                textAlign:"center"
              }}
              >
                  Save Your Updated Info
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('DashboardPage')}
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
              >
                  Close
              </Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
 )}


};

export default UpdatedCoachInfo;
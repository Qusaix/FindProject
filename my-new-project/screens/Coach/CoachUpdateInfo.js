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
import { createStackNavigator , createAppContainer , Header } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';

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
    fetch('http://192.168.1.3:5000/UpdateCoachInfo', {
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
      alert("You Need to logout and login again To see Changes")  
      return this.props.navigation.navigate('DashboardPage')
  }
  
    render() {
      return (
        <ScrollView>
           <KeyboardAvoidingView
           style={{
            flex:1,
            justifyContent:"flex-end"
        
            }}
           keyboardVerticalOffset={ Header.HEIGHT + 5000}
           behavior = "padding"
           //behavior="padding"
      
          >
        <View
        style={{
          flex:1,
          justifyContent:"flex-end",
          width:100+"%" 
        }}
        >
        <View
        style={{
           // margin:10,
              
            // justifyContent:"center",
            // alignContent:"center"
            justifyContent:"center",
            alignItems:"center",
            padding:25
            
          
        }}
        >
          <Text
          style={{
              fontSize:25,
              marginBottom:15,
              textAlign:"center",
              fontWeight:"bold"
          }}
          > Update Your Info</Text>
          {/* <Text name="Email">Email {this.state.Email}</Text> */}
          {/* <Text>Name</Text> */}
         <View
         style={{
          width:100+"%", 
           justifyContent:"center",
            alignItems:"center"
         }}>
          <View
          style={{
            // flex:1,
            // justifyContent:"center",
            // alignItems:"center"
            backgroundColor:"#17A589",
            padding:10,
            borderRadius:9,
            width:100+"%"
          //  margin:5
          }}
          >

<TextField
            Title = "Email"
            baseColor = "#fff"
            tintColor="#000"
            labelFontSize = {18}
            label={this.state.Email}
            prefix={this.state.Email}
             multiline={false}
            // maxLength={10}
             animationDuration={350}
             editable={ false }
             lineWidth={ 2 }
            // title="The Max Number Of Characters"
            //  error="You Need To complete"
            // characterRestriction={10}
              onChangeText={(value)=>this.setState({UpdatedName:value})}
              
              />
          <TextField
           name={"UpdatedName"}
            Title = "Name"
            baseColor = "#fff"
            tintColor="#000"
            labelFontSize = {17}
            fontSize={14}
             label="Put Your Name"
             multiline={false}
             maxLength={10}
             animationDuration={350}
             editable={ true }
             inputContainerStyle={
               color="red"
             }
            // disabledLineType="This is the Error"
             lineWidth={ 2 }
             title="The Max Number Of Characters"
            //  error="You Need To complete"
             characterRestriction={10}
              onChangeText={(value)=>this.setState({UpdatedName:value})}
              
              />
          {/* <Text >Bio</Text> */}
          <TextField 
          name={"UpdatedBio"} 

             Title = "Name"
             label="Put Your Bio"
             baseColor = "#fff"
             tintColor="#000"
             multiline={true}
             maxLength={100}
             labelFontSize={17}
             fontSize={14}
             animationDuration={350}
             editable={ true }
             lineWidth={ 2 }
             title="The Max Number Of Characters"
            //  error="You Need To complete"
             characterRestriction={350} 

          onChangeText={(value)=>this.setState({UpdatedBio:value})}
          />
          {/* <Text >Experence</Text> */}
          <TextField
          style={{

          }}
           name={"UpdatedExperence"}
           Title = "Name"
           label="Put Your Experence"
           baseColor = "#fff"
           tintColor="#000"
           multiline={false}
           maxLength={100}
           fontSize={14}
           labelFontSize={17}
           Trailing icon
           animationDuration={350}
           editable={ true }
           lineWidth={ 2 }
           suffix="You Need To Put a Number"
           title="The Max Number Of Characters"
          //  error="You Need To complete"
           characterRestriction={2}  
           onChangeText={(value)=>this.setState({UpdatedExperence:value})}/>
        </View>
        </View>
          <View>
          </View>
          
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
          </KeyboardAvoidingView>
          </ScrollView>
 )}


};

export default UpdatedCoachInfo;
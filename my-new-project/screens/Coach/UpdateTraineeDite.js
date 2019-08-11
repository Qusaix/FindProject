import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import { Header } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';

//import console = require('console');

 class UpdatedTraineeDite extends React.Component {
   constructor(){
     super()
     this.state={
        Email:"",
        UpdatedProtein:"",
        UpdatedCarb:"",
        UpdatedFat:""
     } 
   }

  static navigationOptions = {
    title:"Update Trainee Dite",
    headerStyle:{
      backgroundColor:"#238aff",
      //display:"none"
    },
    headerTitleStyle:{
      color:"#fff",
    alignItems:"center",
    flex: 1
    }
  }
  componentDidMount(){
    this.getUsers();
    AsyncStorage.getItem('UpdateDiteEmail')
     .then((value)=>{
      this.setState({Email:value})
       console.log("This is the value ",value)
      })
  }
  getUsers(){
    AsyncStorage.getItem('UpdateDiteName')
     .then((value)=>{
      this.setState({UpdatedName:value})
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
    fetch('https://quiet-beyond-30221.herokuapp.com/CouchUpdateDite', {
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
      //alert("You Need to logout and login again To see Changes")  
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
          > Update {this.state.UpdatedName} Dite</Text>
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
           name={"UpdatedProtein"}
            Title = "Name"
            baseColor = "#fff"
            tintColor="#000"
            labelFontSize = {17}
            fontSize={14}
             label="Add Protein in take"
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
             characterRestriction={3}
              onChangeText={(value)=>this.setState({UpdatedProtein:value})}
              
              />
          {/* <Text >Bio</Text> */}
          <TextField 
          name={"Add Carb in take"} 

             Title = "Name"
             label="Add Carb in take"
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
             characterRestriction={3} 

          onChangeText={(value)=>this.setState({UpdatedCarb:value})}
          />
          {/* <Text >Experence</Text> */}
          <TextField
          style={{

          }}
           name={"Add Fat in take"}
           Title = "Name"
           label="Add Fat in take"
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
           characterRestriction={3}  
           onChangeText={(value)=>this.setState({UpdatedFat:value})}/>
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
                  Save The New Dite
              </Text>
          </TouchableOpacity>

          
          </View>
          </KeyboardAvoidingView>
          </ScrollView>
 )}


};

export default UpdatedTraineeDite;
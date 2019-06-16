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
import SeeAllCoachs from './SeeAllCoachs'
import { BorderlessButton } from 'react-native-gesture-handler';
import { createStackNavigator , createAppContainer } from 'react-navigation'
//import TheArray from './TraineeLoginPage'
//import console = require('console');
//const { Height } = Dimensions.get('window');

 class TraineeDashboard extends React.Component {

  static navigationOptions = {
    title:"Welcom to Your Account",
    headerStyle:{
    backgroundColor:"#000",
    //display:"none"

    },
    headerTitleStyle:{
      color:"#fff",
      // marginLeft:48+"%",
      // marginTop: -38
    alignItems:"center",
    flex: 1,
    //display:"none"
    }
  }


   constructor(){
     super()
     this.state={
      Name:"",
      Email:"",
      Password:"",
      Bio:"",
      Experence:"",
      Goal:"",
      Weight:"",
      Height:"",
      ScreeenHeight:0,
     } 
   }
   
   componentDidMount(){
   // this._loadInitialState().done(
   console.log("Thhhhhhhhhhhh",this.props.navigation.getParam('data'))
   this.getTheUser();

   }
   getTheUser(){
     AsyncStorage.getItem('Name')
     .then((value)=>{
      this.setState({Name:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{console.log("Hi is Done ",res)})
     AsyncStorage.getItem('Bio')
     .then((value)=>{
      this.setState({Bio:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{console.log("Hi is Done ",res)})

     AsyncStorage.getItem('Experence')
     .then((value)=>{
      this.setState({Experence:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{console.log("Hi is Done ",res)})

     AsyncStorage.getItem('Goal')
     .then((value)=>{
      this.setState({Goal:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{console.log("Hi is Done ",res)})

     AsyncStorage.getItem('Height')
     .then((value)=>{
      this.setState({Height:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{console.log("Hi is Done ",res)})

     AsyncStorage.getItem('weight')
     .then((value)=>{
      this.setState({Weight:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})




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
                  this.props.navigation.navigate("SeeAllCoachs"); 
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
          <Text>Bio {this.state.Bio}</Text>
          <Text>How Many Years {this.state.Experence}</Text>
          <Text>Goal {this.state.Goal}</Text>
          <Text>Photos</Text>
          <Text>Weight {this.state.Weight}KG</Text>
          <Text>Height {this.state.Height}cm</Text>
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
          <View>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate("LoginTraineeTake")}
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

            <TouchableOpacity
            style={{
              backgroundColor:"green",
              padding:10,
              width:70,
              marginLeft:43+"%",
              marginTop:5,
              borderRadius:7,
              marginBottom:10
            }}
            onPress={()=>this.props.navigation.navigate('UpdateTraineeInfo')}
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

          </View>
          </ScrollView>
 )}


};

export default TraineeDashboard;
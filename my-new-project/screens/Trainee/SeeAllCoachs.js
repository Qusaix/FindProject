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

 class SeeAllCoachs extends React.Component {
   constructor(){
     super()
     this.state={
       Name:"",
       Bio:"",
      Experence:"",
      AllCoachs:[]
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
  }
  getUsers(){
    AsyncStorage.getItem('Name')
     .then((value)=>{
      this.setState({Name:value})
      // console.log("This is the value ",value)
      })
     .then((res)=>{})
     AsyncStorage.getItem('Bio')
     .then((value)=>{
      this.setState({Bio:value})
       //console.log("This is the value ",value)
      })
     .then((res)=>{})

     AsyncStorage.getItem('Experence')
     .then((value)=>{
      this.setState({Experence:value})
       //console.log("This is the value ",value)
      })
     .then((res)=>{})
  }

  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  
  componentWillMount(){
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
    console.log("Helllo",res)
    this.setState({ AllCoachs : res})
    console.log("This is the Array ",this.state.AllCoachs)
    console.log("This is The ID",res)
    //this.state.AllCoachs.map((element)=>{return (console.log("This is the Element ",element))})
    //this.TheData(res)
  })
  //.catch((err)=>console.warn(err))
  .done()
  }


    render() {
      return (
        <ScrollView >
            {this.state.AllCoachs.map((Coach)=>{
              return(
                <View
                key={Coach.id+1}
                >
                    <View 
                    key={Coach.id}
                      style={{
                        width:300,
                        height:250,
                        backgroundColor:"#238aff",
                        marginLeft:77,
                        marginTop:10,
                        marginBottom:10,
                        borderRadius:9

                      }}
                    >
                 
                        <Image 
                          style={{
                          width:100,
                          height:100,
                          marginLeft:100,
                          marginTop:5,

                          }}
                          source={{uri:"http://hqfit.com/wp-content/uploads/2018/07/Asset-1HQ_Logo_Main.png"}}
                        /> 
                          <Text 
                            style={{
                              fontSize:18,
                              fontWeight:"bold",
                              marginTop:8,
                              color:"#fff",
                              //backgroundColor:"#fff",
                              borderRadius:8
                            }}                          
                          > Name: {Coach.Name} </Text>
                          <Text 
                          style={{
                            fontSize:18,
                            fontWeight:"bold",
                            marginTop:8,
                            color:"#fff",
                            //backgroundColor:"#fff",
                            borderRadius:8
                          }}
                          > Bio: {Coach.Bio} </Text>
                          <Text
                          style={{
                            fontSize:18,
                            fontWeight:"bold",
                            marginTop:8,
                            color:"#fff",
                            //backgroundColor:"#fff",
                            borderRadius:8
                          }}
                          
                          > Experence: {Coach.Experence} </Text>
                           <TouchableOpacity
                           style={{
                             backgroundColor:"#fff",
                             //padding:25,
                             borderRadius:7,
                             width:150,
                             marginLeft:70,
                             marginTop:5
                           }}
                           >
                             <Text
                             style={{
                               color:"#000",
                               fontWeight:"bold",
                               textAlign:"center",
                               fontSize:25
                             }}
                             >Profile</Text>
                             </TouchableOpacity> 
              
              
      
                    </View>
                 </View>

            )})}
          
</ScrollView>
 )}


};

export default SeeAllCoachs;
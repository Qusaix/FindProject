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
import { Ionicons , FontAwesome, AntDesign} from '@expo/vector-icons';


//import console = require('console');

 class SeeAllCoachs extends React.Component {
   constructor(props){
     super(props)
     this.state={
      TheEmail:"",
       id:"",
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

    //  AsyncStorage.getItem('TheEmail')
    //  .then((value)=>{
    //    console.log("This is the New Email ",value)
    //   // this.setState({id:value})
    //    //console.log("This is the value ",value)
    //   })
    //  .then((res)=>{})
  }

  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  
  componentWillMount(){
    fetch('http://192.168.1.103:5000/SeeAllUsers', {
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
   // console.log("This is The ID",res)
    //this.state.AllCoachs.map((element)=>{return (console.log("This is the Element ",element))})
    //this.TheData(res)
  })
  //.catch((err)=>console.warn(err))
  .done()
  }
  backProfile(){
    return this.props.navigation.navigate("TraineeDashBoardPage")
  }
  UpadateAllProfileData(){
    AsyncStorage.setItem("ProFileName",this.setState({Name:Coach.Name}))
    AsyncStorage.setItem("ProFileBio",Coach.Bio)
    console.log(Coach.id);
  }

    render() {
      return (
        <ScrollView >
          <TouchableOpacity
         onPress={()=> {this.backProfile()}}
         style={{
           width:110,
           
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
            {this.state.AllCoachs.map((Coach)=>{
              return(
                <View
                key={Coach.id+1}
                >
                    <View 
                    TheTest={this.state.Bio}
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
                          borderRadius:15

                          }}
                          source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}
                        /> 
                          <Text 
                            style={{
                              fontSize:16,
                              fontWeight:"bold",
                              marginTop:8,
                              color:"#fff",
                              marginLeft:3,
                              //backgroundColor:"#fff",
                              borderRadius:8
                            }}                          
                          >      
                         <FontAwesome name="user" size={20} color="#000" />
                         
                          Name: {Coach.Name} 
                          
                          </Text>

                          <Text 
                          style={{
                            fontSize:16,
                            fontWeight:"bold",
                            marginTop:8,
                            marginLeft:3,
                            color:"#fff",
                            //backgroundColor:"#fff",
                            borderRadius:8
                          }}
                          > 
                          <AntDesign name="solution1" size={20} color="#000"/>

                          Bio: {Coach.Bio} </Text>
                          <Text
                          style={{
                            fontSize:16,
                            fontWeight:"bold",
                            marginTop:8,
                            color:"#fff",
                            marginLeft:3,
                            //backgroundColor:"#fff",
                            borderRadius:8
                          }}
                          >

                          <AntDesign name="calendar" size={20} color="#000" marginRight={5}/>
                          Experence: {Coach.Experence} </Text>

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
                             onPress={()=>{
                              this.setState({Name:Coach.Name})
                              /// Here Send the Data Of The Chosing Coach
                              AsyncStorage.setItem("ProFileName",Coach.Name)
                              AsyncStorage.setItem("ProFileBio",Coach.Bio)
                              AsyncStorage.setItem("TheEmail",Coach.Email)
                              console.log("This Email Work ",Coach.Email)

                              return this.props.navigation.navigate('CoachProfilePage')
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
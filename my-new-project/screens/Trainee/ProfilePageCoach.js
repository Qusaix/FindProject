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
import { Ionicons , FontAwesome, AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';
import {Bottom } from '../HomeScreen'

//import console = require('console');

 class CoachProfile extends React.Component {
   constructor(props){
     super(props)
     this.state={
      TheEmail:"",
      TheLoginTraineeEmail:"",
       IdCoach:"",
       Name:"",
       Bio:"",
      Experence:"",
      AllProfiles:[],
      AllTheBlogs:[]
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
    alignItems:"center",
    flex: 1,
    //display:"none"
    }
  }
  componentDidMount(){
    this.TheInfo()
    var that = this;
    setTimeout(function(){that.SeeCouchBlogs()},3000);
    
  }
  

  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  
  componentWillMount(){
    this.TheInfo()
  }

  TheInfo(){
    AsyncStorage.getItem('ProFileName')
     .then((value)=>{
      this.setState({Name:value})
      // console.log("This the Profile Now ",value)
      })
     .then((res)=>{})
     
     AsyncStorage.getItem('ProFileBio')
     .then((value)=>{
      this.setState({Bio:value})
       //console.log("This is Bio",value)
      // console.log("This is the Name", this.state.Bio)
      })
     .then((res)=>{})

     AsyncStorage.getItem('TheEmail')
     .then((value)=>{
      this.setState({TheEmail:value})
      //console.log("Email :",value)
       console.log("State Email :", this.state.TheEmail)
      })
     .then((res)=>{})

     AsyncStorage.getItem('IdCoach')
     .then((value)=>{
      this.setState({IdCoach:value})
      //console.log("IDCouch :",value)
       console.log("State IDCouch :", this.state.IdCoach)
      })
     .then((res)=>{})

     AsyncStorage.getItem('Email')
     .then((value)=>{
      this.setState({TheLoginTraineeEmail:value})
       console.log("LoginTraineeEmail :",value)
      })

  }

  Back(){
    return this.props.navigation.navigate("SeeAllCoachsPage");
  }
  AddCoach(){
    alert(`Now ${this.state.Name} is Your Couch`)
    fetch('http://192.168.1.2:5000/AddingCouchForTrainee', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()})
  .then((data)=>{

    console.warn("This is the data ",data)
  })
  //.catch((err)=>console.warn(err))
  .done()


  }

  SeeCouchBlogs(){
    fetch('http://192.168.1.2:5000/SeeTheBlogsCouchHave', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(this.state)
      })
    .then((res)=>{return res.json()})
    .then((data)=>{
      //this.setState({ AllTheBlogs : data})
      this.setState({AllTheBlogs : data})
      console.warn("This is the data ",this.state.AllTheBlogs)
    })
    //.catch((err)=>console.warn(err))
    .done()  
  }

    render() {
      return (
        <ScrollView >
          <View>
      {/*Start Of User Info*/}
        <View
        style={{
          alignItems:"center",
          margin:5
        }}
        >
          <Image
          style={{
            width:100,
            height:100,
            borderRadius:45
          }}
          source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}
          />
          <Text
          style={{
            fontSize:19,
            marginTop:7,
          }}
          >{this.state.Name}</Text>
          <Text
          style={{
            fontSize:12,
            color:"#C0C0C0"
          }}
          >{this.state.Bio}</Text>

          <TouchableOpacity
          style={{
            backgroundColor:"green",
            padding:8,
            marginTop:5,
            borderRadius:9
          }}
          onPress={this.AddCoach.bind(this)}
          >
          <Text
          style={{
            color:"#fff",
            fontWeight:"bold"
          }}
          ><FontAwesome name="user-plus" size={16} color="#fff" /> Contect</Text>
          </TouchableOpacity>
        </View>

          {/*Start Of Blogs Area*/ }






          {/* <Image 
                          style={{
                          width:100,
                          height:100,
                          marginLeft:4,
                          marginTop:5,

                          }}
                          source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}
                        /> 
           
      <View style={{
        backgroundColor:"#f5f5f5",
        margin:5,
        borderRadius:9,
        width:400,
        padding:10

      }}>                  
            <Text
            style={{
              marginLeft:4,
              fontSize:16
            }}
            ><Text style={{fontWeight:"bold"}}>NAME</Text> {this.state.Name}</Text>
              
            <Text
            style={{
              marginLeft:4,
              fontSize:16
            }}
            > <Text style={{fontWeight:"bold"}} >BIO</Text> {this.state.Bio}</Text>
            
            <View style={{alignItems:"flex-end"}}><TouchableOpacity onPress={this.AddCoach.bind(this)} style={{marginTop:-25,backgroundColor:"green",padding:5,borderRadius:5,width:80,}}><Text style={{color:"#fff"}}><FontAwesome name="user-plus" size={16} color="#fff" />Contect</Text></TouchableOpacity></View>

            </View> */}
{/* <Text>This is Test For PROPS {this.props.state.TheEmail}</Text> */}
 {/* This is The Start of User Info */}

            <Text
            style={{
              backgroundColor:"green",
              borderRadius:9,
              width:150,
              fontSize:16,
              fontWeight:"bold",
              padding:10,
              margin:10,
              color:"#fff"
            }}
            >
              
            <MaterialCommunityIcons name="blogger" size={20} color="#fff" /> Blogs
              </Text>
            <View style={{
              backgroundColor:"#238aff",
              height:200,
              width:300,
              borderRadius:7,
              margin:10,
              color:"#fff"
            }}>
         <ScrollView>      
          <View style={{
            margin:5
          }}>   
          {this.state.AllTheBlogs.map((blog)=>{
            return(
           <View
           key={blog.id++}
           >
             <Text
             style={{
              fontSize:15,
              fontWeight:"bold",
              color:"#fff"
            }}
            
             >{blog.Title}</Text>
             <Text>{blog.content}</Text>
           </View> 
           
           
           
           )})}





            </View> 




            </ScrollView> 

            </View>

          {/* This is the Photos Area  */}

          <View>
          <Text
            style={{
              backgroundColor:"green",
              borderRadius:9,
              width:150,
              fontSize:14,
              fontWeight:"bold",
              padding:10,
              margin:10,
              color:"#fff"
            }}
            >
            <FontAwesome name="photo" size={16} color="#fff" /> Clients Photos
              </Text>



            {/* Hold Photos */}
            <View
            style={{flexDirection:'row', flexWrap:'wrap'}}
            >
            <Image style={{width:100,height:100,marginTop:5,margin:4}}source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}/>   
            <Image style={{width:100,height:100,marginTop:5,margin:4}}source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}/>
            <Image style={{width:100,height:100,marginTop:5,margin:4}}source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}/>
            <Image style={{width:100,height:100,marginTop:5,margin:4}}source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}/>
            </View>
            </View>  
            </View>
</ScrollView>
 )}


};

export default CoachProfile;
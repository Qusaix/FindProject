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
import { Card, ListItem , Icon } from 'react-native-elements'


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
      //display:"none"
    },
    headerTitleStyle:{
      color:"#fff",
      // marginLeft:48+"%",
      // marginTop: -38
    alignItems:"center",
    flex: 1,
    display:"none"
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
    fetch('http://192.168.1.5:5000/SeeAllUsers', {
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
            {this.state.AllCoachs.map((Coach)=>{
              return(
                 <View
                style={{
                  //flex:1,
                  //width:100+"%"
                // width:""
                }}
                key={Coach.id}
                >
                   <Card
                   title={Coach.Name+""} 
                   >
                    {/* <Card
                      title={Coach.Name}
                    //image={{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                      > */}
                      <Text style={{marginBottom: 10,textAlign:"left",fontSize:18,color:"#B3B6B7"}}>
                        Bio
                      </Text>

                      <Text style={{marginBottom: 10,textAlign:"left",fontSize:14,color:"#000"}} >
                          {Coach.Bio}
                        </Text>

                        <Text style={{marginBottom: 10,textAlign:"left",fontSize:18,color:"#000"}}>
                        Experence : {Coach.Experence}
                      </Text>

                      <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Profile'
                        onPress={()=>{
                                        this.setState({Name:Coach.Name})
                                        /// Here Send the Data Of The Chosing Coach
                                        AsyncStorage.setItem("ProFileName",Coach.Name)
                                        AsyncStorage.setItem("ProFileBio",Coach.Bio)
                                        AsyncStorage.setItem("TheEmail",Coach.Email)
                                        console.log("This Email Work ",Coach.Email)
          
                                        return this.props.navigation.navigate('CoachProfilePage')
                                      }}
                        
                        />
                        </Card>
                    {/* </Card>  */}
                    </View>
                     )})}


{/* This is the Start Of The New Design */}

{/* <View
style={{
  width:100+"%",
  flex:1,
 alignContent:"flex-start",
//flexDirection:"row"

}}
>

<View
style={{
  flex:1,
  width:50+"%"
}}
>
</View>

</View>  */}

</ScrollView>
 )}
 
};
export default SeeAllCoachs;
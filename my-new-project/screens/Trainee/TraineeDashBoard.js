import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
 // Button,
  Alert,
  TextInput,
  AsyncStorage
} from 'react-native';
import SeeAllCoachs from './SeeAllCoachs'
import { BorderlessButton } from 'react-native-gesture-handler';
import { createStackNavigator , createAppContainer } from 'react-navigation'
import { Avatar } from 'react-native-elements';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons , Foundation, AntDesign , FontAwesome , MaterialCommunityIcons , Entypo} from '@expo/vector-icons';
import { Card, ListItem, Button} from 'react-native-elements'
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import Dite from './Dite'
import TraineeBlog from './BlogTrainee'
import Loading from '../Loading'


//import TheArray from './TraineeLoginPage'
//import console = require('console');
//const { Height } = Dimensions.get('window');

 class TraineeDashboard extends React.Component {

  static navigationOptions = { 
    //title:"Back",
    headerStyle:{
      backgroundColor:"#17A589",
      display:"none"
    }
  }


   constructor(){
     super()
     this.state={
      TheEmail:"",
      Name:"",
      Email:"",
      Password:"",
      Bio:"",
      Experence:"",
      Goal:"",
      Weight:"",
      Height:"",
      URL:"",
      ScreeenHeight:0,
      YourCouch:"Loading",
      Array:[1],
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
     } 
   }
   
   
   getTheUser(){
    //  alert(1)
     AsyncStorage.getItem('Name')
     .then((value)=>{
      this.setState({Name:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{
      // console.log("Hi is Done ",res)
      })
     AsyncStorage.getItem('Bio')
     .then((value)=>{
      this.setState({Bio:value})
      // console.log("This is the value ",value)
      }) 
     .then((res)=>{
      // console.log("Hi is Done ",res)
      })

     AsyncStorage.getItem('Experence')
     .then((value)=>{
      this.setState({Experence:value})
      // console.log("This is the value ",value)
      })
     .then((res)=>{
      // console.log("Hi is Done ",res)
      })

     AsyncStorage.getItem('Goal')
     .then((value)=>{
      this.setState({Goal:value})
     //  console.log("This is the value ",value)
      })
     .then((res)=>{
     //  console.log("Hi is Done ",res)
      })

     AsyncStorage.getItem('Height')
     .then((value)=>{
      this.setState({Height:value})
     //  console.log("This is the value ",value)
      })
     .then((res)=>{
       //console.log("Hi is Done ",res)
      })

     AsyncStorage.getItem('weight')
     .then((value)=>{
      this.setState({Weight:value})
       console.log("Weight : ",value)
      })
     .then((res)=>{})


     AsyncStorage.getItem('TheEmail')
     .then((value)=>{
       console.log("EMAIL : ",value)
      this.setState({TheEmail:value})
      })
     .then((res)=>{})

     AsyncStorage.getItem('ImageURL')
     .then((value)=>{
       console.log("URL :",value)
      this.setState({URL:value})
      })
     .then((res)=>{})

   }
   
  static navigationOptions = {
    title:"Login Out",
    headerStyle:{
      backgroundColor:"#238aff",
     // display:"none"
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
  
  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }

  SeeYourCouch(){   
    // alert(2)
    setTimeout(() => {
      fetch('https://quiet-beyond-30221.herokuapp.com/SeeAlTraineesYouHave', {
    method: 'post',
    headers: {
    Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()}) 
  .then((res)=>{
    console.log(res);
    this.setState({YourCouch:res.Name})
  })
  .done()
    }, 10000);
    
  }
  

  async componentDidMount(){
   await this.getTheUser();
    await this.SeeYourCouch();
    if(this.state.URL === null){
      this.setState({URL:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"})
    }
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }



    render() {
    //const Scroll = this.state.ScreeenHeight > Height
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }else if(this.state.YourCouch === "Loading"){
      return(
       <Loading />
      )
    } 
    else {
      return (
        <ScrollView>
        <View
        style={{
          backgroundColor:"#fff",
          height:100+"%",
        }}
        >
        {/* Profile Infio */}
        <View
        style={{
          alignItems:"center"
        }}
        >
        <Image 
        source={{uri:`${this.state.URL}`}}
        style={{
          height:100,
          width:25+"%",
          marginTop:2+"%",
          borderRadius:5
        }}
        />
        <Text
        style={{
          fontSize:16
        }}
        >{this.state.Name}</Text>

      </View>

{/* To Do  */}
{/* Mother View  */}
      <View
      style={{
        flexDirection:"row",
        alignItems:"flex-start",
        margin:2+"%"
      }}
      >

        {/* This is the Weight Area */}

        <View
        style={{
          width:50+"%",
          heigh:250,
          backgroundColor:"#138D75",
          marginRight:5,
          marginLeft:5,
          borderWidth:0.5,
          borderRadius:5,
          alignItems:"center"
        }}
        >
          <Text
          style={{
            padding:15,
            color:"#fff",
            paddingBottom:-8
          }}
          
          >
            <MaterialCommunityIcons name="scale-bathroom" size={60} color="#fff" />
           
          </Text>
          <Text
          style={{
          fontWeight:"bold",
          fontSize:25,
          color:"#fff"
          }}
          > {this.state.Weight}KG</Text>
         </View>

         
{/* This is the Goal Area */}

         
<View
        style={{
          width:45+"%",
          heigh:250,
          backgroundColor:"#138D75",
          marginRight:5,
          marginLeft:5,
          borderWidth:0.5,
          borderRadius:5,
          alignItems:"center"
        }}
        >
          <Text
          style={{
            padding:15,
            color:"#fff",
            paddingBottom:-8
          }}
          
          >
            <Entypo name="blackboard" size={60} color="#fff" />
           
          </Text>
          <Text
          style={{
          fontWeight:"bold",
          fontSize:25,
          color:"#fff"
          }}
          > {this.state.Goal}</Text>
         </View>

            </View>

  {/* The Seconone  */}

<View
      style={{
        flexDirection:"row",
        alignItems:"flex-start",
        margin:2+"%"
      }}
      >

        {/* This is the Coach Area */}

        <View
        style={{
          width:50+"%",
          heigh:250,
          backgroundColor:"#138D75",
          marginRight:5,
          marginLeft:5,
          borderWidth:0.5,
          borderRadius:5,
          alignItems:"center"
        }}
        >
          <Text
          style={{
            padding:15,
            color:"#fff",
            paddingBottom:-8
          }}
          
          >
            <FontAwesome name="user" size={60} color="#fff" />
           
          </Text>
          <Text
          style={{
          fontWeight:"bold",
          fontSize:25,
          color:"#fff"
          }}
          > {this.state.YourCouch}</Text>
         </View>

         
{/* This is the Food Area */}

         
<View
        style={{
          width:45+"%",
          heigh:250,
          backgroundColor:"#138D75",
          marginRight:5,
          marginLeft:5,
          borderWidth:0.5,
          borderRadius:5,
          alignItems:"center"
        }}
        >
          <Text
          style={{
            padding:15,
            color:"#fff",
            paddingBottom:-8
          }}
          
          >
            <MaterialCommunityIcons name="food-variant" size={60} color="#fff" />
           
          </Text>
          <Text
          style={{
          fontWeight:"bold",
          fontSize:25,
          color:"#fff"
          }}
          >Soon</Text> 

         </View>
         
         {/*The therd*/ }

          
         <View
      style={{
        flexDirection:"row",
        alignItems:"flex-start",
        margin:2+"%"
      }}
      >

        {/* This is the Weight Area */}

        <View
        style={{
          width:50+"%",
          heigh:250,
          backgroundColor:"#138D75",
          marginRight:5,
          marginLeft:5,
          borderWidth:0.5,
          borderRadius:5,
          alignItems:"center"
        }}
        >
          <Text
          style={{
            padding:15,
            color:"#fff",
            paddingBottom:-8
          }}
          
          >
            <MaterialCommunityIcons name="scale-bathroom" size={60} color="#fff" />
           
          </Text>
          <Text
          style={{
          fontWeight:"bold",
          fontSize:25,
          color:"#fff"
          }}
          > {this.state.Weight}KG</Text>
         </View>

         
{/* This is the Goal Area */}

         
<View
        style={{
          width:45+"%",
          heigh:250,
          backgroundColor:"#138D75",
          marginRight:5,
          marginLeft:5,
          borderWidth:0.5,
          borderRadius:5,
          alignItems:"center"
        }}
        >
          <Text
          style={{
            padding:15,
            color:"#fff",
            paddingBottom:-8
          }}
          
          >
            <Entypo name="blackboard" size={60} color="#fff" />
           
          </Text>
          <Text
          style={{
          fontWeight:"bold",
          fontSize:25,
          color:"#fff"
          }}
          > {this.state.Goal}</Text>
         </View>

       </View>
          <TouchableOpacity
          style={{
            backgroundColor:"red",
            padding:25,
            width:100,
            height:100,
            flexDirection:"row"
          }}
          >
            <Text>This is the Update Button</Text>
          </TouchableOpacity>

            </View>


{/*Update Area*/ }
  <View
  style={{
    alignItems:"flex-end",
    margin:10,
    marginBottom:30+"%"
  }}>
         <TouchableOpacity
            style={{
              backgroundColor:"#138D75",
              padding:10,
              width:15+"%",
            //  marginBottom:35+"%",
              borderRadius:7,
              margin:5,
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
              >
              <AntDesign name="edit" size={20} color="#fff" />

              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={{
              backgroundColor:"#138D75",
              padding:10,
              width:15+"%",
             // marginBottom:35+"%",
              borderRadius:7,
              margin:5,
            }}
            onPress={()=>this.props.navigation.navigate('TakeCamera')}
            >
              <Text
              style={{
                color:"#fff",
                fontSize:15,
                fontWeight:"bold",
                textAlign:"center"
              }}
              >
              <AntDesign name="camera" size={20} color="#fff" />

              </Text>
            </TouchableOpacity>
            </View>

           
             {/* <View
             style={{
              alignItems:"center",
             }}
             >
                  <Image 
            style={{
                height:150,
                width:100+"%",
                position: 'absolute', 
                justifyContent: 'center', 
               // margin:10
            }}
            source={{uri:"https://i.imgur.com/jOZUU2B.jpg"}}
            />

            <View
            style={{
              backgroundColor:"#138D75",
              width:100+"%",
              height:60,
              position:"absolute",
              top:130,
              borderRadius:9,
              left:10,
              padding:10
            }}
            >
               <MaterialCommunityIcons name="scale-bathroom" size={20} color="#fff" />  

              <Text
              style={{
                fontSize:18,
                fontWeight:"bold",
                color:"#fff",
                textAlign:"left"
              }}
              >
             

              {this.state.Weight}KG</Text>
              
              <Text
              style={{
                fontSize:18,
                fontWeight:"bold",
                color:"#fff",
                textAlign:"right",
                marginTop:-33
              }}
              >
              <MaterialCommunityIcons name="scale-bathroom" size={20} color="#fff" />
              {this.state.Goal}</Text>
            </View>
        
        <View
        style={{
          alignItems:"center",
          width:100+"%",
          height:100,
          backgroundColor:"red"
        }}
        >
            <Image 
            style={{
                height:100,
                width:100,
                position: 'absolute', 
                justifyContent: 'center', 
               // margin:10
               left:194,
               top:100,
               borderRadius:9
              // bottom:250
            }}
            source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}
            />
</View>
</View>
<View>
 <Text
 style={{
   fontSize:25,
   position:"absolute",
   left:198,
   top:200
 }}
 >  {this.state.Name}   </Text> 

<Text
 style={{
   fontSize:18,
   position:"absolute",
   justifyContent:"center",
   textAlign:"center",
   left:83,
   top:240,
   width:67+"%",
   color:"#D0D3D4",
  // backgroundColor:"#D0D3D4"
 }}
 >  {this.state.Bio}  </Text> 



</View>

<View>

 

<View
style={{
  position:"absolute",
  top:270,
  left:215

}}
>
  <Text
  style={{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center"
  }}
  >{this.state.YourCouch}</Text>
</View>

</View>

        <View
        style={{
            margin:10,
            //position:"absolute",
            top:280,
            alignItems:"center",
            justifyContent:"center",
            //left:40,
            //width:100+"%",
            padding:15,
            //backgroundColor:"red"
        }}
        >
        </View>

          <View>
          </View>
          <View>

         <View>
         </View>

            </View> */}

          {/* Edite */}

            

          </View>
          </ScrollView>
 )}


}};
const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: { screen: TraineeDashboard,  
          navigationOptions:{  
            title:"Back",
            headerStyle:{
              backgroundColor:"#238aff",
             //display:"none"
            },
            headerTitleStyle:{
              color:"#fff",
            //  flex: 1,
             // display:"none"
            },
          //  header: null,
              tabBarLabel:'Home',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
          }


      },  
      Profile: { screen: Dite,  
          navigationOptions:{  
            title:"Back",
            headerStyle:{
              backgroundColor:"#238aff",
            // display:"none"
            },
            headerTitleStyle:{
              color:"#fff",
              flex: 1,
             //  display:"none"
            },

              tabBarLabel:'Dite',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <MaterialCommunityIcons style={[{color: tintColor}]} size={25} name={'food-variant'}/>  
                  </View>),  
              activeColor: '#f60c0d',  
              inactiveColor: '#f65a22',  
              barStyle: { backgroundColor: '#f69b31' },  
          },
          
      },  
      Image: { screen: TraineeBlog,  
          navigationOptions:{
            
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
            },

            headerStyle:{
              display:"none"
            },



              tabBarLabel:'Tips',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Foundation style={[{color: tintColor}]} size={27} name={'social-blogger'}/>  
                  </View>),  
              activeColor: '#615af6',  
              inactiveColor: '#46f6d7',  
              barStyle: { backgroundColor: '#67baf6' },  
          }  
      },  
      Cart: {  
          screen: SeeAllCoachs,  
          navigationOptions:{  
            title:"Back",
            headerStyle:{
              backgroundColor:"#238aff",
             display:"none"
            },
            headerTitleStyle:{
              color:"#fff",
              flex: 1,
              display:"none"
            },
              tabBarLabel:'Search',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <FontAwesome style={[{color: tintColor}]} size={25} name={'search'}/>  
                  </View>),  
          }  
      },  
  },  
  {  
    initialRouteName: "Home",  
    activeColor: '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: '#3BAD87' },
  },  
);  

export default createAppContainer(TabNavigator);  
export { TraineeDashboard };
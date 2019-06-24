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
import { Avatar } from 'react-native-elements';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons , Foundation, AntDesign , FontAwesome} from '@expo/vector-icons';


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
      TheEmail:"",
      Name:"",
      Email:"",
      Password:"",
      Bio:"",
      Experence:"",
      Goal:"",
      Weight:"",
      Height:"",
      ScreeenHeight:0,
      YourCouch:""
     } 
   }
   
   
   getTheUser(){
     alert(1)
     AsyncStorage.getItem('Name')
     .then((value)=>{
      this.setState({Name:value})
       //console.log("This is the value ",value)
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
       console.log("This is the WEight From Login ",value)
      })
     .then((res)=>{})


     AsyncStorage.getItem('TheEmail')
     .then((value)=>{
       console.log("This is the id from the login ",value)
      this.setState({TheEmail:value})
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

  SeeYourCouch(){   
    alert(2)
    setTimeout(() => {
      fetch('http://192.168.1.103:5000/SeeAlTraineesYouHave', {
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
  

  async componentDidMount(){
   await this.getTheUser();
    await this.SeeYourCouch();
    }



    render() {
    //const Scroll = this.state.ScreeenHeight > Height

      return (
        <ScrollView>
        <View
        style={{
          backgroundColor:"#fff"
        }}
        >
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


                  <View>

                  
                  <Image 
            style={{
                height:150,
                width:100+"%",
                position: 'absolute', 
                justifyContent: 'center', 
                margin:10
            }}
            source={{uri:"https://i.imgur.com/jOZUU2B.jpg"}}
            />



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
<View>
 <Text
 style={{
   fontSize:25,
   position:"absolute",
   left:202,
   top:200
 }}
 >  {this.state.Name}   </Text> 

<Text
 style={{
   fontSize:18,
   position:"absolute",
   justifyContent:"center",
   left:180,
   top:240,
   width:67+"%",
   color:"#D0D3D4",
  // backgroundColor:"#D0D3D4"
 }}
 >  {this.state.Bio}  </Text> 



</View>
        <View
        style={{
            margin:10
        }}
        >
















      
        <View
        style={{
        //  position:"relative"
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
              <Text>{this.state.YourCouch}</Text>
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






const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: { screen: TraineeDashboard,  
          navigationOptions:{  
            title:"Back",
            headerStyle:{
              backgroundColor:"#238aff",
             display:"none"
            },
            headerTitleStyle:{
              color:"#fff",
            //  flex: 1,
              display:"none"
            },
          //  header: null,
              tabBarLabel:'Home',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
          }


      },  
      Profile: { screen: TraineeDashboard,  
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

              tabBarLabel:'Revenue',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Foundation style={[{color: tintColor}]} size={25} name={'dollar-bill'}/>  
                  </View>),  
              activeColor: '#f60c0d',  
              inactiveColor: '#f65a22',  
              barStyle: { backgroundColor: '#f69b31' },  
          },
          
      },  
      Image: { screen: TraineeDashboard,  
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
          screen: TraineeDashboard,  
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
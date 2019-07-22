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
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons , Foundation, AntDesign , FontAwesome} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Blogs from "./Blogs"
import Revenue from './Revenue'
import Search from './Search'


//import console = require('console');

 class CoachDashboard extends React.Component {
   constructor(){
     super()
     this.state={
       Name:"",
       Bio:"",
      Experence:"",
      Email:"",
      AllTheData:[],
      Length:0
     } 
   }

  tabs = [
    {
      key: 'games',
      icon: 'gamepad-variant',
      label: 'Games',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'movies-tv',
      icon: 'movie',
      label: 'Movies & TV',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Music',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]
  
  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )
  
  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  componentDidMount(){
    this.getUsers();
    this.TakeAndSendData();
    this.Counter();
   // this.TheBar();
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

     AsyncStorage.getItem('Email')
     .then((value)=>{
      this.setState({Email:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})

  }

  TakeAndSendData(){


    setTimeout(() => {
      fetch('http://192.168.1.3:5000/SeeAllTheCustomers', {
    method: 'post',
    headers: {
    Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()}) 
  .then((res)=>{
    
    console.log("The Array : ", this.state.AllTheData)
    this.setState({ AllTheData : res})
    const Length = this.state.AllTheData.length
    this.setState({Length:Length})
  })
  //.catch((err)=>console.warn(err))
  .done()
    }, 10000);



  }
Counter(){
  const Length = this.state.AllTheData.length
  
  console.log(Length)
  return Length
}

  TextFieldValue(text , type){
    console.warn("The Change Function is Working")
  }
  
    render() {
      return (
        <ScrollView>
        <View
        style={{
          // justifyContent: "center", 
          // alignItems: "center"
          backgroundColor:"#FDFEFE",
         
        }}
        >
            <View
            style={{
              justifyContent: "center", 
              alignItems: "center",
            }}
            >    

            <Image 
            style={{
                height:100,
                width:100,
                //position: 'absolute', 
                justifyContent: "center", 
                alignItems: "center", 
                margin:10,
                
                borderRadius:40
            }}
            source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}
            />
            
        <View
        style={{
            margin:10,
            backgroundColor:"#17A589",
            borderRadius:5,
            width:80+"%",
            flexDirection:"row"
            //display:"f"
        }}
        >
          <Text
          style={{
              fontSize:25,
              marginBottom:15,
              textAlign:"center",
              color:"#fff",
              margin:5,
              fontWeight:"bold"
          }}
          >Your Info</Text>

          <View
          style={{
          margin:5,
          padding:8
          }}
          >
          <Text
          style={{
          //backgroundColor:"red",
         // padding:5
         fontSize:15,
         fontWeight:"bold",
         color:"#fff",

          }}
          >Name {this.state.Name}</Text>
          <Text
          style={{
            //backgroundColor:"red",
           // padding:5
           fontSize:15,
           fontWeight:"bold",
           color:"#fff",
           
            }}
          >Bio  {this.state.Bio}</Text>
          <Text
          style={{
            //backgroundColor:"red",
           // padding:5
           fontSize:15,
           fontWeight:"bold",
           color:"#fff",
           
            }}
          >Experence {this.state.Experence}</Text>
          <Text
          style={{
            //backgroundColor:"red",
           // padding:5
           fontSize:15,
           fontWeight:"bold",
           color:"#fff",
           
            }}
          
          >Charge 300$</Text>
          <Text
          style={{
            //backgroundColor:"red",
           // padding:5
           fontSize:15,
           fontWeight:"bold",
           color:"#fff",
           
            }}
          
          >Review Soon</Text>
          </View>

        </View>


        </View>  


          <View
          // style={{
             
          //   margin:10,
          //   backgroundColor:"#17A589",
          //   borderRadius:5,
          //   width:450,
          //   flexDirection:"row"
          //   //display:"f"
      
          // }}
          style={{
            justifyContent: "center", 
            alignItems: "center",
          }}
          >
            <View
            style={{
            margin:10,
            backgroundColor:"#17A589",
            borderRadius:5,
            width:90+"%",
             

            // flexDirection:"row"
            //display:"f"
            }}
            >
           <Text
           style={{
            fontSize:25,
            marginBottom:15,
            textAlign:"center", 
            color:"#fff",
            margin:5,
            fontWeight:"bold"
        }}
           >
           <FontAwesome style={[{color: "#0E6251"}]} size={25} name={'users'}/> Your Trainees
            </Text>
            <Text
            style={{
              margin:5,
              fontSize:16,
              color:"#fff",
              fontWeight:"bold"
            }}
            >You Have {this.state.Length} Trainees </Text>
            {this.state.AllTheData.map((Coach)=>{
              return(
                <View
                key={Coach.id+1}
                style={{
                  flex:1,
                  jsutifyContent:"center",
                  alignContent:"center"
                }}
                >
                  <View
                  style={{
                  backgroundColor:"#0E6251",
                  width:80+"%",
                  margin:5,
                  borderRadius:9,
                  color:"#fff",
                  padding:10
                  
                  }}
                  >
                     
                    <Text
                    style={{
                      color:"#fff",
                      fontSize:14
                    }}
                    > Name : {Coach.Name}</Text>
                    <Text
                    style={{
                      color:"#fff",
                      fontSize:14
                    }}
                    > Email : {Coach.Email}</Text>
                    <Text
                    style={{
                      color:"#fff",
                      fontSize:14
                    }}
                    > Experence : {Coach.Experence}</Text>
                    <Text
                    style={{
                      color:"#fff",
                      fontSize:14
                    }}
                    > Goal : {Coach.Goal} </Text>
                    <Text
                    style={{
                      color:"#fff",
                      fontSize:14
                    }}
                    > Weight : {Coach.Weight}KG</Text>
                    <Text
                    style={{
                      color:"#fff",
                      fontSize:14
                    }}
                    > Height : {Coach.Height}CM</Text>
                    {/* <Text> {Coach.Email}</Text> */}
                    </View>
                    
                 </View>

            )})}
            </View>
           <View>

</View>

      
         

          </View>

          <View>

          

            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('UpdatedCoachInfo')}
            style={{
              backgroundColor:"#0E6251",
              padding:10,
              width:150,
              margin:10,
            //  marginLeft:43+"%",
              // marginTop:5,
              borderRadius:7,
              // marginBottom:10
            }}
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
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate("LoginCoachTake")}
          style={{
            backgroundColor:"red",
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
          
         {/* //  <TabNavigator />  */}
          </View>
          </ScrollView>
 )}
};

const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: { screen: CoachDashboard,  
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
      Profile: { screen: Revenue,  
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
      Image: { screen: Blogs,  
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
          screen: Search,  
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


export { CoachDashboard};
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Header ,createStackNavigator , createAppContainer } from 'react-navigation'
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
      URL:"",
      AllTheData:[],
      Length:0,
      TraineEmail:"",
      UpdateMeals:false,
      Meal1C:"",
      Meal2C:"",
      Meal3C:"",
      Meal4C:"",
      Meal5C:"",
      Meal6C:"",
      TimeMeal1C:"",
      TimeMeal2C:"",
      TimeMeal3C:"",
      TimeMeal4C:"",
      TimeMeal5C:"",
      TimeMeal6C:"",
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

     AsyncStorage.getItem('URL')
     .then((value)=>{
      this.setState({URL:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})

  }

  TakeAndSendData(){


    setTimeout(() => {
      fetch('https://quiet-beyond-30221.herokuapp.com/SeeAllTheCustomers', {
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

UpdateMeals(){
  var seen = [];
  fetch('https://quiet-beyond-30221.herokuapp.com/CouchUpdateMeals', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state, function(key, val) {
        if (val != null && typeof val == "object") {
             if (seen.indexOf(val) >= 0) {
                 return;
             }
             seen.push(val);
         }
         return val;
     })
      })
    .then((res)=>{return res.json()})
    .then((data)=>{
  
    //  console.warn("This is the data ",data)
    })
    .catch((err)=>console.warn(err))
    .done()
}

    render() {

      if(this.state.UpdateMeals === true){
        return(
          // Main View to edite the meals
          <View style={{
            flex:1,
            alignItems:"center",
            // justifyContent:"center"
            marginTop:10
          }}>
          {/* Start Of Editing the meals*/}
            <View
            style={{
              backgroundColor:"red",
              height:400,
              width:90+"%",
              padding:10,
              borderRadius:5
            }}
            >
              <ScrollView>
              <View
              style={{
                flex:1,
                alignItems:"flex-start",
              }}
              >
              <KeyboardAvoidingView
              keyboardVerticalOffset={ Header.HEIGHT + 60}
              behavior = "padding"
              >
              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #1</Text>
              <TextInput onChangeText={(value)=>{this.setState({Meal1C:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput onChangeText={(value)=>{this.setState({TimeMeal1C:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>

              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #2</Text>
              <TextInput  onChangeText={(value)=>{this.setState({Meal2C:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput  onChangeText={(value)=>{this.setState({TimeMeal2C:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>

              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #3</Text>
              <TextInput  onChangeText={(value)=>{this.setState({Meal3C:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput  onChangeText={(value)=>{this.setState({TimeMeal3C:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>

              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #4</Text>
              <TextInput  onChangeText={(value)=>{this.setState({Meal4C:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput  onChangeText={(value)=>{this.setState({TimeMeal4C:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>

              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #5</Text>
              <TextInput  onChangeText={(value)=>{this.setState({Meal5C:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput  onChangeText={(value)=>{this.setState({TimeMeal5C:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>

              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #6</Text>
              <TextInput  onChangeText={(value)=>{this.setState({Meal6C:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput  onChangeText={(value)=>{this.setState({TimeMeal6C:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>
              </KeyboardAvoidingView>
              </View>
              </ScrollView>

            </View>
             {/*Edit Button*/}

             <TouchableOpacity onPress={()=>{
              this.UpdateMeals()  
              this.setState({UpdateMeals:false})
              }} style={{backgroundColor:"red",marginTop:5}}>
              <FontAwesome name="check" size={25} style={{backgroundColor:"green",color:"#fff"}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              this.setState({UpdateMeals:false})
              }} style={{backgroundColor:"red",marginTop:5}}>
              <Text>Back</Text>
            </TouchableOpacity>
            {/*Edit Button*/}
            </View>
        )
      }else if(this.state.UpdateMeals === false){
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
              source={{uri:`${this.state.URL}`}}
              />
                          <TouchableOpacity
              style={{
                backgroundColor:"#138D75",
                padding:10,
                width:15+"%",
               // marginBottom:35+"%",
                borderRadius:7,
                margin:5,
              }}
              onPress={()=>this.props.navigation.navigate('TakeCameraCoach')}
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
  
           fontSize:15,
           fontWeight:"bold",
           color:"#fff",
  
            }}
            >Name {this.state.Name}</Text>
            <Text
            style={{
  
             fontSize:15,
             fontWeight:"bold",
             color:"#fff",
             
              }}
            >Bio  {this.state.Bio}</Text>
            <Text
            style={{
             fontSize:15,
             fontWeight:"bold",
             color:"#fff",
             
              }}
            >Experence {this.state.Experence}</Text>
            <Text
            style={{
             fontSize:15,
             fontWeight:"bold",
             color:"#fff",
             
              }}
            
            >Charge 300$</Text>
            <Text
            style={{
             fontSize:15,
             fontWeight:"bold",
             color:"#fff",
             
              }}
            
            >Review Soon</Text>
            </View>
  
          </View>
  
  
          </View>  
  
  
            <View
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
  
                      <TouchableOpacity
                      style={{
                        backgroundColor:"#0E6251",
                        width:100,
                        borderRadius:5,
                        marginTop:3,
                        marginLeft:2
                      }}
                      onPress={()=>{
                        AsyncStorage.setItem("UpdateDiteName",Coach.Name)
                        AsyncStorage.setItem("UpdateDiteEmail",Coach.Email)
  
                        return this.props.navigation.navigate('UpdatedTraineeDite')
                      
                      }}
                      >
                        <Text
                        style={{
                          color:"#fff",
                          padding:4
                        }}
                        >Update Dite</Text>
                      </TouchableOpacity>
  
                        {/* Update Meals*/}
                      <TouchableOpacity
                      style={{
                        backgroundColor:"#0E6251",
                        width:100,
                        borderRadius:5,
                        marginTop:3,
                        marginLeft:2
                      }}
                      onPress={()=>{
                        this.setState({TraineEmail:Coach.Email})
                        return this.setState({UpdateMeals:true})
                      }}
                      >
                        <Text
                        style={{
                          color:"#fff",
                          padding:4
                        }}
                        >Update Melas</Text>
                      </TouchableOpacity>
  
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
                borderRadius:7,
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
      }


      
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
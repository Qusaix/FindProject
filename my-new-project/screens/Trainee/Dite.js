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

//import console = require('console');

 class Dite extends React.Component {
   constructor(props){
     super(props)
     this.state={
      Email:"",
      Password:"",
      TheLoginTraineeEmail:"",
       IdCoach:"",
       Name:"",
       Bio:"",
      Experence:"",
      AllProfiles:[],
      Protein:"",
      Carb:"",
      Fat:"",
      ProteinC:"No Info",
      CarbC:"No Info",
      FatC:"No Info"
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
    
    
  }
  
  componentWillMount(){
    this.TheInfo()
  }

  TheInfo(){
    AsyncStorage.getItem('Protein')
     .then((value)=>{
      this.setState({Protein:value})
      // console.warn("This the Protein Now ",value)
      })
     .then((res)=>{})
     
     AsyncStorage.getItem('Carb')
     .then((value)=>{
      this.setState({Carb:value})
      })
     .then((res)=>{})

     AsyncStorage.getItem('Fat')
     .then((value)=>{
      this.setState({Fat:value})
      })
     .then((res)=>{})

     AsyncStorage.getItem('IdCoach')
     .then((value)=>{
      this.setState({IdCoach:value})
      })
     .then((res)=>{})

     AsyncStorage.getItem('ProteinC')
     .then((value)=>{
      this.setState({ProteinC:value})
      })

      AsyncStorage.getItem('CarbC')
      .then((value)=>{
       this.setState({CarbC:value})
       })

       AsyncStorage.getItem('FatC')
      .then((value)=>{
       this.setState({FatC:value})
       })

       AsyncStorage.getItem('TheEmail')
       .then((value)=>{
         console.warn("Email ",value)
         this.setState({Email:value})
       })
       AsyncStorage.getItem('Password')
       .then((value)=>{
         console.warn("Password" , value)
         this.setState({Password:value})
       })

  }

  Back(){
    return this.props.navigation.navigate("SeeAllCoachsPage");
  }

  refreshInfo(){
  //  alert("Welcome")
    fetch('https://quiet-beyond-30221.herokuapp.com/LoginTrainee', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()})
  .then((data)=>{
    this.setState({Carb:data.Carb})
    this.setState({Protein:data.Protein})
    this.setState({Fat:data.Fat})
    console.warn(data)

  })
  //.catch((err)=>console.warn(err))
  .done()


  }

    render() {
      return (
        <ScrollView >
          {/*The Mother View */}
          <View
          style={{
            flex:1
          }}
          >
          <View
          style={{
            alignItems:"center"
          }}
          >

          {/* Your Plan Contaner*/}
          <View
          style={{
            width:90+"%",
            height:80,
            backgroundColor:"#17A589",
            marginTop:5,
            borderRadius:9
          }}
          >
            <Text
            style={{
              color:"#fff",
              fontSize:19,
              fontWeight:"bold",
              margin:3
            }}
            ><MaterialCommunityIcons name="food-apple" size={19} color="#fff" />Your Dite Plan</Text>
          
            {/*Prtoien , Carbs , Fat*/}
            <View
            style={{
              flex:1,
              flexDirection:"row",
              justifyContent:"center"
            }}
            >
              
            <Text
            style={{
              margin:5,
              fontSize:13,
              color:"#fff",
              fontWeight:"bold"
            }}
            >Prtoien :{this.state.Protein}g</Text>
            <Text
            style={{
              margin:5,
              fontSize:13,
              color:"#fff",
              fontWeight:"bold"
            }}
            >Carbs :{this.state.Carb}g</Text>
            <Text
            style={{
              margin:5,
              fontSize:13,
              color:"#fff",
              fontWeight:"bold"
            }}
            >Fat : {this.state.Fat}g</Text>

            </View>
            {/*Update dite Button*/}
            <View
            style={{
              alignItems:"flex-end",
              marginRight:3
            }}
            >
             <TouchableOpacity onPress={()=>this.props.navigation.navigate("EditDite")}>
            <FontAwesome name="edit" size={16} color="#fff" />
            </TouchableOpacity> 
            
            </View>
            
          </View>


 <TouchableOpacity onPress={()=>{this.refreshInfo()}}> 
             <FontAwesome name="refresh" size={25} color="#000" />
            </TouchableOpacity> 



 {/* Coach Plan Contaner*/}
 <View
          style={{
            width:90+"%",
            height:80,
            backgroundColor:"#17A589",
            marginTop:5,
            borderRadius:9
          }}
          >
            <Text
            style={{
              color:"#fff",
              fontSize:19,
              fontWeight:"bold",
              margin:3
            }}
            ><FontAwesome name="user-circle-o" size={19} color="#fff" /> Coach Dite Plan</Text>
          
            {/*Prtoien , Carbs , Fat*/}
            <View
            style={{
              flex:1,
              flexDirection:"row",
              justifyContent:"center"
            }}
            >
              
            <Text
            style={{
              margin:5,
              fontSize:13,
              color:"#fff",
              fontWeight:"bold"
            }}
            >Prtoien : {this.state.ProteinC}</Text>
            <Text
            style={{
              margin:5,
              fontSize:13,
              color:"#fff",
              fontWeight:"bold"
            }}
            >Carbs {this.state.CarbC}</Text>
            <Text
            style={{
              margin:5,
              fontSize:13,
              color:"#fff",
              fontWeight:"bold"
            }}
            >Fat : {this.state.FatC}</Text>

            </View>

          </View>

        

              </View>




            {/* Food Area and meals */}

            
            <View
            style={{
              flex:1,
              flexDirection:"row",
            //  justifyContent:"flex-start"
              marginLeft:8+"%",
              marginTop:5+"%",
              marginBottom:5+"%",
              //overflow:"scroll"
            }}
            >
              {/* Your Food Area*/}
              <View
              style={{
                backgroundColor:"#17A589",
                height:200,
                width:40+"%",
                marginRight:12+"%",
                padding:2
              }}
              >
              <Text
              style={{
                fontWeight:"bold",
                fontSize:18,
                color:"#ffff",
                padding:5
              }}
              >
                Your Meal Plan
                </Text>  

              {/* Added Meals*/}
              <ScrollView>
              <Text
              style={{
                fontSize:10,
                fontWeight:"bold"
              }}
              > Rice 200g and CheckBreast 200g , oil 10g</Text>
              <Text
              style={{
                fontSize:10,
                fontWeight:"bold"
              }}
              > Rice 200g and CheckBreast 200g , oil 10g</Text>
              <Text
              style={{
                fontSize:10,
                fontWeight:"bold"
              }}
              > Rice 200g and CheckBreast 200g , oil 10g</Text>
              <Text
              style={{
                fontSize:10,
                fontWeight:"bold"
              }}
              > Rice 200g and CheckBreast 200g , oil 10g</Text>

              </ScrollView>
              </View>



              {/* Coach Food Area*/}
              <View
              style={{
                backgroundColor:"#17A589",
                height:200,
                width:40+"%",
                padding:2
              }}
              >

                <Text
              style={{
                fontWeight:"bold",
                fontSize:18,
                color:"#ffff",
                padding:5
              }}
              >
                Coach Meal Plan
                </Text>  

                {/* Added Meals*/}
                <ScrollView>
              <Text
              style={{
                fontSize:10,
                fontWeight:"bold"
              }}
              > Rice 200g and CheckBreast 200g , oil 10g</Text>
              <Text
              style={{
                fontSize:10,
                fontWeight:"bold"
              }}
              > Rice 200g and CheckBreast 200g , oil 10g</Text>
              <Text
              style={{
                fontSize:10,
                fontWeight:"bold"
              }}
              > Rice 200g and CheckBreast 200g , oil 10g</Text>
              <Text
              style={{
                fontSize:10,
                fontWeight:"bold"
              }}
              > Rice 200g and CheckBreast 200g , oil 10g</Text>

              </ScrollView>

              </View>

              


            </View>








          </View>

        </ScrollView>
 )}


};

export default Dite;
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
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Header ,createStackNavigator , createAppContainer } from 'react-navigation'
import { Ionicons , FontAwesome, AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';
import {Bottom } from '../HomeScreen'
import { TextField } from 'react-native-material-textfield';

//import console = require('console');

//import console = require('console');

 class Dite extends React.Component {
   constructor(props){
     super(props)
     this.state={
      TheEmail:"",
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
      FatC:"No Info",
      EditDite:"Normal",
      Meal:false,
      Meal1:"",
      Meal2:"",
      Meal3:"",
      Meal4:"",
      Meal5:"",
      Meal6:"",
      TimeMeal1:"",
      TimeMeal2:"",
      TimeMeal3:"",
      TimeMeal4:"",
      TimeMeal5:"",
      TimeMeal6:"",
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
         this.setState({TheEmail:value})
       })
       AsyncStorage.getItem('TheEmail')
       .then((value)=>{
         this.setState({Email:value})
       })
       AsyncStorage.getItem('Password')
       .then((value)=>{
         this.setState({Password:value})
       })
       AsyncStorage.getItem('Meal1')
       .then((value)=>{
         this.setState({Meal1:value})
       })
       AsyncStorage.getItem('Meal2')
       .then((value)=>{
         this.setState({Meal2:value})
       })
       AsyncStorage.getItem('Meal3')
       .then((value)=>{
         this.setState({Meal3:value})
       })
       AsyncStorage.getItem('Meal4')
       .then((value)=>{
         this.setState({Meal4:value})
       })
       AsyncStorage.getItem('Meal5')
       .then((value)=>{
         this.setState({Meal5:value})
       })
       AsyncStorage.getItem('Meal6')
       .then((value)=>{
         this.setState({Meal6:value})
       })
       AsyncStorage.getItem('TimeMeal1')
       .then((value)=>{
         this.setState({TimeMeal1:value})
       })
       AsyncStorage.getItem('TimeMeal2')
       .then((value)=>{
         this.setState({TimeMeal2:value})
       })
       AsyncStorage.getItem('TimeMeal3')
       .then((value)=>{
         this.setState({TimeMeal3:value})
       })
       AsyncStorage.getItem('TimeMeal4')
       .then((value)=>{
         this.setState({TimeMeal4:value})
       })
       AsyncStorage.getItem('TimeMeal5')
       .then((value)=>{
         this.setState({TimeMeal5:value})
       })
       AsyncStorage.getItem('TimeMeal6')
       .then((value)=>{
         this.setState({TimeMeal6:value})
       })

       AsyncStorage.getItem('Meal1C')
       .then((value)=>{
         this.setState({Meal1C:value})
       })
       AsyncStorage.getItem('Meal2C')
       .then((value)=>{
         this.setState({Meal2C:value})
       })
       AsyncStorage.getItem('Meal3C')
       .then((value)=>{
         this.setState({Meal3C:value})
       })
       AsyncStorage.getItem('Meal4C')
       .then((value)=>{
         this.setState({Meal4C:value})
       })
       AsyncStorage.getItem('Meal5C')
       .then((value)=>{
         this.setState({Meal5C:value})
       })
       AsyncStorage.getItem('Meal6C')
       .then((value)=>{
         this.setState({Meal6C:value})
       })
       AsyncStorage.getItem('TimeMeal1C')
       .then((value)=>{
         this.setState({TimeMeal1C:value})
       })
       AsyncStorage.getItem('TimeMeal2C')
       .then((value)=>{
         this.setState({TimeMeal2C:value})
       })
       AsyncStorage.getItem('TimeMeal3C')
       .then((value)=>{
         this.setState({TimeMeal3C:value})
       })
       AsyncStorage.getItem('TimeMeal4C')
       .then((value)=>{
         this.setState({TimeMeal4C:value})
       })
       AsyncStorage.getItem('TimeMeal5C')
       .then((value)=>{
         this.setState({TimeMeal5C:value})
       })
       AsyncStorage.getItem('TimeMeal6C')
       .then((value)=>{
         this.setState({TimeMeal6C:value})
       }) 
  }

  Back(){
    return this.props.navigation.navigate("SeeAllCoachsPage");
  }

  UpdateMeals(){
    var seen = [];
    fetch('https://quiet-beyond-30221.herokuapp.com/UpdateMeals', {
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

  refreshInfo(){
  //  alert("Welcome")
    fetch('https://quiet-beyond-30221.herokuapp.com/UpdateDite', {
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

  })
  //.catch((err)=>console.warn(err))
  .done()


  }


  UpdateNutriton(){
    //     alert("Welcome")
        fetch('https://quiet-beyond-30221.herokuapp.com/UpdateDite', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
        })
      .then((res)=>{return res.json()})
      .then((data)=>{
    
      //  console.warn("This is the data ",data)
      })
      .catch((err)=>console.warn(err))
      .done()
    
    AsyncStorage.setItem("Protein",this.state.Protein)
    AsyncStorage.setItem("Carb",this.state.Carb)
    AsyncStorage.setItem("Fat",this.state.Fat)
    
    
    return this.setState({EditDite:"Normal"})
    
      }
    

    render() {
      if(this.state.EditDite === "NotNormal"){
        return(
          <ScrollView >
          {/*The Mother View */}
          <KeyboardAvoidingView
          keyboardVerticalOffset = {Header.HEIGHT + 150}
          style = {{ flex: 1 }}
          behavior = "padding" >
          
         <View
         style={{
             margin:10,
             alignItems:"center"
         }}
         >

         <View
         style={{
             width:90+"%",
             height:350,
             backgroundColor:"#17A589",
             padding:5,
             borderRadius:9
         }}
         >
        <TextField
           name="Protein"
            Title = "Name"
            baseColor = "#fff"
            tintColor="#fff"
            labelFontSize = {17}
            fontSize={14}
            label="Protein"
             multiline={false}
             maxLength={3}
             animationDuration={350}
             editable={ true }
             inputContainerStyle={
              color="red"
             }
            // disabledLineType="This is the Error"
             lineWidth={ 2 }
             title="The Max Number Of Characters"
            //  error="You Need To complete"
             characterRestriction={3}
             onChangeText={(value)=>this.setState({Protein:value})}
              
              />

<TextField
           name="Carb"
            Title = "Name"
            baseColor = "#fff"
            tintColor="#fff"
            labelFontSize = {17}
            fontSize={14}
            label="Carb"
             multiline={false}
             maxLength={3}
             animationDuration={350}
             editable={ true }
             inputContainerStyle={
              color="red"
             }
            // disabledLineType="This is the Error"
             lineWidth={ 2 }
             title="The Max Number Of Characters"
            //  error="You Need To complete"
             characterRestriction={3}
              onChangeText={(value)=>this.setState({Carb:value})}
              
              />

<TextField
           name="Fat"
            Title = "Name"
            baseColor = "#fff"
            tintColor="#fff"
            labelFontSize = {17}
            fontSize={14}
            label="Fat"
             multiline={false}
             maxLength={3}
             animationDuration={350}
             editable={ true }
             inputContainerStyle={
              color="red"
             }
            // disabledLineType="This is the Error"
             lineWidth={ 2 }
             title="The Max Number Of Characters"
            //  error="You Need To complete"
             characterRestriction={3}
             onChangeText={(value)=>this.setState({Fat:value})}
              
              />


            <TouchableOpacity
            style={{
                alignItems:"center",
                marginTop:10+"%"
            }}
            onPress={()=> this.UpdateNutriton()}
            >
                
                 <Text>Update</Text>
             </TouchableOpacity>

         </View>

             

         </View>
         </KeyboardAvoidingView>

        </ScrollView>
        )
      }else if(this.state.Meal === true){
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
              <TextInput onChangeText={(value)=>{this.setState({Meal1:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput onChangeText={(value)=>{this.setState({TimeMeal1:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>

              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #2</Text>
              <TextInput  onChangeText={(value)=>{this.setState({Meal2:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput  onChangeText={(value)=>{this.setState({TimeMeal2:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>

              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #3</Text>
              <TextInput  onChangeText={(value)=>{this.setState({Meal3:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput  onChangeText={(value)=>{this.setState({TimeMeal3:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>

              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #4</Text>
              <TextInput  onChangeText={(value)=>{this.setState({Meal4:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput  onChangeText={(value)=>{this.setState({TimeMeal4:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>

              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #5</Text>
              <TextInput  onChangeText={(value)=>{this.setState({Meal5:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput  onChangeText={(value)=>{this.setState({TimeMeal5:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>

              <Text style={{marginLeft:5,color:"#fff",fontSize:18 , width:40+"%"}}>Meal #6</Text>
              <TextInput  onChangeText={(value)=>{this.setState({Meal6:value})}} placeholder="ex. Rise200g,150gChicken breast" multiline={true} style={{backgroundColor:"#fff",width:85+"%",marginLeft:5,borderRadius:5,height:60}}/>
              <TextInput  onChangeText={(value)=>{this.setState({TimeMeal6:value})}} placeholder="Time ex. 3:00PM" style={{backgroundColor:"#fff",width:35+"%",marginLeft:5,borderRadius:5,marginTop:3}}/>
              </KeyboardAvoidingView>
              </View>

               
              </ScrollView>
            </View>

            {/*Edit Button*/}

            <TouchableOpacity onPress={()=>{
              this.UpdateMeals()  
              this.setState({Meal:false})
              }} style={{backgroundColor:"red",marginTop:5}}>
              <FontAwesome name="check" size={25} style={{backgroundColor:"green",color:"#fff"}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              this.setState({Meal:false})
              }} style={{backgroundColor:"red",marginTop:5}}>
              <Text>Back</Text>
            </TouchableOpacity>
            {/*Edit Button*/}
          </View>
        )
      }
      else if(this.state.EditDite === "Normal"){
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
          {/* <TouchableOpacity onPress={()=>{this.refreshInfo()}} style={{
            flex:1,
            justifyContent:"flex-start",
            alignItems:"flex-start"
          }}> 
             <FontAwesome name="refresh" size={25} color="#000"/>
            </TouchableOpacity>  */}
            

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
             <TouchableOpacity onPress={()=>{ return this.setState({EditDite:"NotNormal"})}}>
            <FontAwesome name="edit" size={16} color="#fff" />
            </TouchableOpacity> 
            
            </View>
            

            

          </View>


 



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
            >Prtoien : {this.state.ProteinC}g</Text>
            <Text
            style={{
              margin:5,
              fontSize:13,
              color:"#fff",
              fontWeight:"bold"
            }}
            >Carbs {this.state.CarbC}g</Text>
            <Text
            style={{
              margin:5,
              fontSize:13,
              color:"#fff",
              fontWeight:"bold"
            }}
            >Fat : {this.state.FatC}g</Text>

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
                height:350,
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
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 1# {this.state.Meal1} Time:{this.state.TimeMeal1}</Text>
              <Text
              style={{
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 2# {this.state.Meal2} Time:{this.state.TimeMeal2}</Text>
              <Text
              style={{
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 3# {this.state.Meal3} Time:{this.state.TimeMeal3}</Text>
              <Text
              style={{
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 4# {this.state.Meal4} Time:{this.state.TimeMeal4}</Text>

              <Text
              style={{
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 5# {this.state.Meal5} Time:{this.state.TimeMeal5}</Text>

            <Text
              style={{
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 6# {this.state.Meal6} Time:{this.state.TimeMeal6}</Text>

  

              {/* Add Button */}
              <TouchableOpacity onPress={()=>{this.setState({Meal:true})}}style={{width:40+"%",backgroundColor:"red",borderRadius:9,padding:5}}>
              <Text style={{fontSize:10,color:"#fff"}}>Add Meal
              </Text></TouchableOpacity>
              {/* Add Button */}
              </ScrollView>
              </View>



              {/* Coach Food Area*/}
              <View
              style={{
                backgroundColor:"#17A589",
                height:350,
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
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 1# {this.state.Meal1C} Time:{this.state.TimeMeal1C}</Text>
              <Text
              style={{
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 2# {this.state.Meal2C} Time:{this.state.TimeMeal2C}</Text>
              <Text
              style={{
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 3# {this.state.Meal3C} Time:{this.state.TimeMeal3C}</Text>
              <Text
              style={{
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 4# {this.state.Meal4C} Time:{this.state.TimeMeal4C}</Text>

              <Text
              style={{
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 5# {this.state.Meal5C} Time:{this.state.TimeMeal5C}</Text>

            <Text
              style={{
                fontSize:11,
                color:"#fff",
                marginBottom:5,
                fontWeight:"bold"
              }}
              > 6# {this.state.Meal6C} Time:{this.state.TimeMeal6C}</Text>

              </ScrollView>

              </View>

              


            </View>








          </View>

        </ScrollView>
      
 )}}


};

export default Dite;
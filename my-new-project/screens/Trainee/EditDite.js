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
import { TextField } from 'react-native-material-textfield';
import { Header } from 'react-navigation';

 class EditDite extends React.Component {
   constructor(props){
     super(props)
     this.state={
      Protein:"0",
      Carb:"0",
      Fat:"0"
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
    AsyncStorage.getItem('Name')
     .then((value)=>{
      this.setState({Name:value})
     // console.warn("This the Profile Now ",value)
      })
     .then((res)=>{})
     
     AsyncStorage.getItem('ProFileBio')
     .then((value)=>{
      this.setState({Bio:value})
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


return this.props.navigation.navigate("TraineeDashBoardPage")

  }

    render() {
      //  const {Protein} = this.state;
      return (
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
 )}


};


export default EditDite ;


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
import { TextField } from 'react-native-material-textfield';
import { Ionicons , FontAwesome, AntDesign , MaterialCommunityIcons} from '@expo/vector-icons';


//import console = require('console');

 class UpdateTraineeInfo extends React.Component {
   constructor(){
     super()
     this.state={
        Email:"",
        UpdatedName:"",
        UpdatedBio:"",
        UpdatedExperence:""
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
    //this.getUsers();
    AsyncStorage.getItem('Email')
     .then((value)=>{
      this.setState({Email:value})
       console.log("This is the value ",value)
      })
  }
  UpdatedData(){
    fetch('http://192.168.1.103:5000/UpdateTraineeInfo', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
        })
      .then((res)=>{return res.json()})
      .then((data)=>{console.warn("This is the data ",data)})
      //.catch((err)=>console.warn(err))
      .done()
      alert("You Need to logout and login again To see Changes")  
      return this.props.navigation.navigate('TraineeDashBoardPage')
  }
  
    render() {
      return (
        <ScrollView>
        <View
        style={{
          width:100+"%",
          alignItems:"center",
        }}
        >
            {/* <TextInput 
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

                  /> */}
                  {/* <TouchableOpacity
                style={{
                  backgroundColor:"green",
                  padding:10,
                  width:70,
                  marginLeft:80+"%",
                  marginTop:5,
                  borderRadius:7
                }}
                onPress={()=>{
                  this.props.navigation.navigate("LoginCoach");
                }}
                >
                  <Text
                  style={{
                    textAlign:"center",
                    color:"#fff",
                    fontWeight:"bold"
                  }}
                  
                  >Find</Text>
                  </TouchableOpacity> */}

            {/* <Image 
            style={{
                height:100,
                width:100,
                //position: 'absolute', 
                justifyContent: 'center', 
                margin:10
            }}
            source={{uri:"https://www.free-and-safe.org/wp-content/uploads/2018/01/nobody_m.original.jpg"}}
            /> */}
             <Text
          style={{
              fontSize:25,
              marginBottom:15,
              margin:5,
              
          }}
          > Update Your Info</Text>
        <View
        style={{
          backgroundColor:"#17A589",
          padding:10,
          borderRadius:9, 
          width:90+"%",
          margin:5,
          

        }}
        >
          {/* <Text name="Email">Email {this.state.Email}</Text> */}


          <TextField
           name={this.state.Email}
            Title = "Name"
            baseColor = "#fff"
            tintColor="#000"
            labelFontSize = {17}
            fontSize={14}
            label={this.state.Email}
             multiline={false}
             maxLength={10}
             animationDuration={350}
             editable={ false }
             inputContainerStyle={
              color="red"
             }
            // disabledLineType="This is the Error"
             lineWidth={ 2 }
          //   title="The Max Number Of Characters"
            //  error="You Need To complete"
           //  characterRestriction={10}
              onChangeText={(value)=>this.setState({UpdatedName:value})}
              
              />








          <TextField
           name={"UpdatedName"}
            Title = "Name"
            baseColor = "#fff"
            tintColor="#000"
            labelFontSize = {17}
            fontSize={14}
             label="Update Your Name"
             multiline={false}
             maxLength={10}
             animationDuration={350}
             editable={ true }
             inputContainerStyle={
              color="red"
             }
            // disabledLineType="This is the Error"
             lineWidth={ 2 }
             title="The Max Number Of Characters"
            //  error="You Need To complete"
             characterRestriction={10}
              onChangeText={(value)=>this.setState({UpdatedName:value})}
              
              />

<TextField
           name={"UpdatedBio"}
            Title = "Name"
            baseColor = "#fff"
            tintColor="#000"
            labelFontSize = {17}
            fontSize={14}
             label="Update Your Bio"
             multiline={true}
             maxLength={255}
             animationDuration={350}
             editable={ true }
             inputContainerStyle={
              color="red"
             }
            // disabledLineType="This is the Error"
             lineWidth={ 2 }
             title="The Max Number Of Characters"
            //  error="You Need To complete"
             characterRestriction={255}
              onChangeText={(value)=>this.setState({UpdatedBio:value})}
              
              />



<TextField
           name={"UpdatedExperence"}
            Title = "Name"
            baseColor = "#fff"
            tintColor="#000"
            labelFontSize = {17}
            fontSize={14}
             label="Update Your Experence"
             multiline={false}
             maxLength={2}
             animationDuration={350}
             editable={ true }
             inputContainerStyle={
              color="red"
             }
            // disabledLineType="This is the Error"
             lineWidth={ 2 }
             title="The Max Number Of Characters"
            //  error="You Need To complete"
             characterRestriction={10}
              onChangeText={(value)=>this.setState({UpdatedExperence:value})}
              
              />



<TextField
           name={"UpdatedGoal"}
            Title = "Name"
            baseColor = "#fff"
            tintColor="#000"
            labelFontSize = {17}
            fontSize={14}
             label="Update Your Goal"
             multiline={false}
             maxLength={10}
             animationDuration={350}
             editable={ true }
             inputContainerStyle={
              color="red"
             }
            // disabledLineType="This is the Error"
             lineWidth={ 2 }
             title="The Max Number Of Characters"
            //  error="You Need To complete"
             characterRestriction={10}
              onChangeText={(value)=>this.setState({UpdatedGoal:value})}
              
              />

<TextField
           name={"UpdatedWeight"}
            Title = "Name"
            baseColor = "#fff"
            tintColor="#000"
            labelFontSize = {17}
            fontSize={14}
             label="Update Your Weight"
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
              onChangeText={(value)=>this.setState({UpdatedWeight:value})}
              
              />


<TextField
           name={"UpdatedHeight"}
            Title = "Name"
            baseColor = "#fff"
            tintColor="#000"
            labelFontSize = {17}
            fontSize={14}
             label="Update Your Height"
             multiline={false}
             maxLength={4}
             animationDuration={350}
             editable={ true }
             inputContainerStyle={
              color="red"
             }
            // disabledLineType="This is the Error"
             lineWidth={ 2 }
             title="The Max Number Of Characters"
            //  error="You Need To complete"
             characterRestriction={4}
              onChangeText={(value)=>this.setState({UpdatedHeight:value})}
              
              />

          {/* <Text>Name</Text>
          <TextInput name={"UpdatedName"} placeholder="Put Your Name" onChangeText={(value)=>this.setState({UpdatedName:value})}/>
          <Text >Bio</Text>
          <TextInput name={"UpdatedBio"} placeholder="Put Your Bio" onChangeText={(value)=>this.setState({UpdatedBio:value})}/>
          <Text >Experence</Text>
          <TextInput name={"UpdatedExperence"} placeholder="Put Your Experence" onChangeText={(value)=>this.setState({UpdatedExperence:value})}/>
          <Text >Goal</Text>
          <TextInput name={"UpdatedGoal"} placeholder="Put Your Goal" onChangeText={(value)=>this.setState({UpdatedGoal:value})}/>
          <Text >Weight</Text>
          <TextInput name={"UpdatedWeight"} placeholder="Put Your Weight in KG" onChangeText={(value)=>this.setState({UpdatedWeight:value})}/>
          <Text >Height</Text>
          <TextInput name={"UpdatedHeight"} placeholder="Put Your Height in cm" onChangeText={(value)=>this.setState({UpdatedHeight:value})}/> */}
        </View>
          <View>


          </View>

          <View>
          
            </View>
          
          <TouchableOpacity
          style={{
            backgroundColor:"green",
            padding:10,
            width:100+"%",
           // marginLeft:43+"%",
            marginTop:5,
            borderRadius:7,
            marginBottom:10
          }}
          onPress={this.UpdatedData.bind(this)}
          >
              <Text
              style={{
                color:"#fff",
                fontSize:15,
                fontWeight:"bold",
                textAlign:"center"
              }}
              >


                  <FontAwesome name="save" size={20} color="#fff" /> 
                  Save Your Updated Info
              </Text>


              

          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('TraineeDashBoardPage')}
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
              >
                  Close
              </Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
 )}


};

export default UpdateTraineeInfo;
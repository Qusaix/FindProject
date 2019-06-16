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
  Input
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { createStackNavigator , createAppContainer } from 'react-navigation'
import ImagePicker from 'react-native-image-picker';

var options = {
  title: 'Select Avatar',
  takePhotoButtonTitle: "Upload Your Photo ",
  chooseFromLibraryButtonTitle:"Chose Your Photo",
  quality:1,

};


//import console = require('console');

 class RegTrainee extends React.Component {
   constructor(){
     super()
     this.state={
       img:null,
       Name:"",
       Email:"",
       Password:"",
       Bio:"",
       Experence:"",
       Goal:"",
       Weight:"",
       Height:""
     }
   }
  static navigationOptions = {
    title:"RegIster Trainee",
    headerStyle:{
      backgroundColor:"red",
      height:1,
      display:"none"
    },
    headerTitleStyle:{
      color:"#fff",
      // marginLeft:48+"%",
      // marginTop: -38
    alignItems:"center",
    flex: 1,
    height:1,
    display:"none"
    }
  }

  // UploadPhotos(){
  //   alert("HI")
  //   ImagePicker.showImagePicker(options, (response) => {
  //     console.log('Response = ', response);
     
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     }
  //     else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     }
  //     else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     }
  //     else {
  //       let source = { uri: response.uri };
     
  //       // You can also display the image using data:
  //       // let source = { uri: 'data:image/jpeg;base64,' + response.data };
     
  //       this.setState({
  //         avatarSource: source
  //       });
  //     }
  //   });
  // }

  TextFieldValue(type){
    this.setState({ text: type }) 
    
    ///console.warn(type)
  }
  handelChange(event = {}){
    const name = event.target && event.target.name;
    const value = event.target && event.target.value;
    console.warn("This is the Name Value ",name)
    this.setState({[name] : value})
  }
  sendUserInfo(){
    fetch('http://192.168.0.24:5000/registerTrainee', {
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
  this.props.navigation.navigate('LoginTraineeTake')
  
}

    render() {
      return (
        <ScrollView>
        <View>
          <View
          style={{
            width: 300,
            height: 600,
            backgroundColor:"#238aff",
            marginLeft:90,
            marginTop:20,
            borderRadius:10
          }}
          > 
                  {/* <TouchableOpacity
                  style={{
                    padding:25,
                    backgroundColor:"red",

                  }}
                  onPress={this.UploadPhotos.bind(this)}
                  >
                  <Text>Upload Photo</Text>
                  </TouchableOpacity> */}
                <TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Name"
                //textContentType="password"
                //secureTextEntry={true}
                name={"Name"}
                onChangeText={(value)=>this.setState({Name:value})}
                //value = {this.state.Name}
                  />

<TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Eamil"
                //textContentType="password"
               // secureTextEntry={true}
                name={"Email"}
                onChangeText={(value)=>this.setState({Email:value})}
                
                  />
                  <TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Password"
                textContentType="password"
                secureTextEntry={true}
                name={"Password"}
                onChangeText={(value)=>this.setState({Password:value})}
                
                  />
                  <TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 80,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Bio"
                //textContentType="password"
               // secureTextEntry={true}
                name={"Bio"}
                onChangeText={(value)=>this.setState({Bio:value})}
                
                  />

<TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Experence"
                //textContentType="password"
               // secureTextEntry={true}
                name={"Experence"}
               onChangeText={(value)=>this.setState({Experence:value})}
                
                  />

<TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Goal"
                //textContentType="password"
               // secureTextEntry={true}
                name={"Goal"}
               onChangeText={(value)=>this.setState({Goal:value})}
                
                  />
                  <TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Weight"
                //textContentType="password"
               // secureTextEntry={true}
                name={"Weight"}
               onChangeText={(value)=>this.setState({Weight:value})}
                
                  />
                  <TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Height"
                //textContentType="password"
               // secureTextEntry={true}
                name={"Height"}
               onChangeText={(value)=>this.setState({Height:value})}
                
                  />








                <TouchableOpacity
                style={{
                  backgroundColor:"green",
                  padding:10,
                  width:70,
                  marginLeft:38+"%",
                  marginTop:5,
                  borderRadius:7
                }}
                onPress={this.sendUserInfo.bind(this)}
                >
                  <Text
                  style={{
                    textAlign:"center",
                    color:"#fff",
                    fontWeight:"bold",
                    fontSize:12
                  }}
                  >SignUp</Text> 
                  </TouchableOpacity>
               </View>
          </View>
          </ScrollView>
 )}


};

export default RegTrainee;
  
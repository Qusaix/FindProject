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
import { Ionicons , FontAwesome, AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { ImagePicker , Constants } from 'expo';
import * as firebase from "firebase"
//import console = require('console');
 class TakeCameraCoach extends React.Component {
   constructor(props){
     super(props)
     this.state={
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        Email:"",
        URL:"",
        image:null
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
  async componentDidMount(){
    //this.TheInfo()
    this.getPermissionAsync();
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    // FireBase 

    var firebaseConfig = {
      apiKey: "AIzaSyBwo_9nOAz1INX1D95JoGGFuFOrxNTHyV0",
      authDomain: "journy-e29cf.firebaseapp.com",
      databaseURL: "https://journy-e29cf.firebaseio.com",
      projectId: "journy-e29cf",
      storageBucket: "gs://journy-e29cf.appspot.com",
      messagingSenderId: "83109435475",
      appId: "1:83109435475:web:c75edb101dc0a9d6"
    };
    firebase.initializeApp(firebaseConfig);

   firebase.auth() 
   firebase.auth().signInWithEmailAndPassword("qusaiznemat6@gmail.com", "123000").catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage); 
    }
    console.warn(error);
   // document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
  });


  }
  
  async uploadPhotos(uri,ImageName){

    const response = await fetch(uri)

    const blob =  await response.blob();

    var ref = firebase.storage().ref().child("PofileImages/"+ImageName)

   ref.put(blob);

  var that = this;
  setTimeout(function(){
    return that.DownLoadImage(ref)
  },30000) 
  
  }

   DownLoadImage(ref){

     ref.getDownloadURL().then((url)=>{
      if(url){
        this.setState({URL:url})
        fetch('http://192.168.1.5:5000/uploadImageCoach',{
          method: 'post',
          headers: {
          Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state)
        }
        )
        .then()
        .then()
        .catch()
        Alert.alert("Upload Is Done! to",this.state.Email)
        this.props.navigation.navigate('DashboardPage')
        return console.log("The Image Has Been Found :",url)
      }else{
       return console.log("There Is No Image has been found")
      }
    })
    .catch((err)=>{
     return console.log(err)
    })
  }
  
  async snapPhoto() {       
    console.log('Button Pressed');
    if (this.camera) {
       console.log('Taking photo');
       var PhotoUrl;
       var counter = 0;
       var Random = Math.random(counter)
       const options = { quality: 1, base64: true, fixOrientation: true, 
       exif: true};
       await this.camera.takePictureAsync(options).then(photo => {
          photo.exif.Orientation = 1;  

          this.uploadPhotos(photo.uri,Random)

           console.log("This is the Photo",photo.uri);            
           }); 
     }
    }
    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }
  


    _pickImage = async () => {
      var counter = 0;
      var Random = Math.random(counter)
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });
      console.warn("result ",result.uri)

      this.uploadPhotos(result.uri,Random)


    }



  componentWillMount(){
    this.TheInfo()
  }

  TheInfo(){
    AsyncStorage.getItem('Email')
     .then((value)=>{
      this.setState({Email:value})
       console.log("This the Email Now ",value)
      })
     .then((res)=>{})
  }

  Back(){
    return this.props.navigation.navigate("SeeAllCoachsPage");
  }

  render() {

            const { hasCameraPermission , image} = this.state;
            if (hasCameraPermission === null) {
              return <View />;
            } else if (hasCameraPermission === false) {
              return <Text>No access to camera</Text>;
            } else {
              return (
                <View style={{ flex: 1 }}>
                  <Camera 
                         ref={ (ref) => {this.camera = ref} }
                         type={this.state.type}
                   

                  style={{ flex: 1 }} type={this.state.type}>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                      //  flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        style={{
                          flex: 0.1,
                          alignSelf: 'flex-end',
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          this.setState({
                            type:
                              this.state.type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back,
                          });
                        }}>
                          <MaterialCommunityIcons name="camera-front" size={45} color="#fff" 
                          style={{
                            margin:5
                          }}
                          />
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={this.snapPhoto.bind(this)}
                      style={{

                     // backgroundColor:"#17A589",
                      padding:5,
                      height:55,
                      borderRadius:25,
                      margin:3,
                       marginTop:98+"%",
                       marginLeft:40+"%",
                      width:20+"%"

                      }}
                      >
                     <Text>
                     <FontAwesome name="camera" size={45} color="#fff" />  
                         </Text>        
              
            </TouchableOpacity>
            <TouchableOpacity  onPress={this._pickImage.bind(this)}
            style={{
              borderRadius:25,
              margin:3,
              width:20+"%",
              alignItems:"center",

            }}
            >
                     <Text style={{
                       padding:5,
                     }}>
                     <FontAwesome name="photo" size ={25} style={{
                       color:"#fff",
                       
                     }}/>  
                         </Text>        
              
            </TouchableOpacity>

                    </View>
                  </Camera>
                </View>
              );
            }
          }
        


};

export default TakeCameraCoach;
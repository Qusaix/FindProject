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
 class TakeCamera extends React.Component {
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
        fetch('http://192.168.1.3:5000/uploadImage',{
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
        this.props.navigation.navigate('TraineeDashBoardPage')
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
    AsyncStorage.getItem('TheEmail')
     .then((value)=>{
      this.setState({Email:value})
       console.log("This the Email Now ",value)
      })
     .then((res)=>{})
     
     AsyncStorage.getItem('ProFileBio')
     .then((value)=>{
      this.setState({Bio:value})
       //console.log("This is Bio",value)
      // console.log("This is the Name", this.state.Bio)
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
  AddCoach(){
    alert("Welcome")
    fetch('http://192.168.1.2:5000/AddingCouchForTrainee', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()})
  .then((data)=>{

    console.warn("This is the data ",data)
  })
  //.catch((err)=>console.warn(err))
  .done()
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
                        flexDirection: 'row',
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
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={this.snapPhoto.bind(this)}>
                     <Text>
                     <FontAwesome name="camera" size={60} color="#fff" />  
                         </Text>        
              
            </TouchableOpacity>
            <TouchableOpacity  onPress={this._pickImage.bind(this)}>
                     <Text>
                     <FontAwesome name="photo" size={60} color="#fff" />  
                         </Text>        
              
            </TouchableOpacity>

                    </View>
                  </Camera>
                </View>
              );
            }
          }
        


};

export default TakeCamera;
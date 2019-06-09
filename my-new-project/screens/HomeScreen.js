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
  Navigator
} from 'react-native';
import { WebBrowser } from 'expo';
import { createStackNavigator , createAppContainer } from 'react-navigation'
import { MonoText } from '../components/StyledText';
import LoginCoach from './Coach/CoachLogin';
import LoginTrainee from './Trainee/TraineeLoginPage'

class HomeScreen extends React.Component {
static navigationOptions = {
  title:"Welcome Page",
  headerStyle:{
    backgroundColor:"#238aff",
    display:"none"
  },
  headerTitleStyle:{
    color:"red",
    // marginLeft:48+"%",
    // marginTop: -38
  alignItems:"center",
  flex: 1,
  display:"none"

  }
}
  
  LoginTrainee = () => {
  this.props.navigation.navigate('LoginTraineeTake')  
}
LoginCoach = () =>{
  this.props.navigation.navigate('LoginCoachTake')
}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Image 
        style={{
          width:100,
          height:100,
          marginBottom:10,
          marginLeft:105
        }}
        source={{uri:'http://hqfit.com/wp-content/uploads/2018/07/Asset-1HQ_Logo_Main.png'}}
        />
        <Text
        style={{
          marginLeft:54,
          marginBottom:25,
          marginTop:15,
         // padding:25,
         // backgroundColor:"red",
          //borderRadius:7,
          width:200,
         // color:"#fff",
          textAlign:"center",
          fontSize:21,
          fontWeight:"bold"
        }}
        >Application Name</Text>

        <TouchableOpacity
            style={{width:250,
              backgroundColor:"#238aff",
              alignItems:"center",
              padding:10,
              marginLeft:23,
              borderRadius:7,
              marginBottom:10
            }}
            onPress={this.LoginTrainee}
       >
         <Text
         style={{
           color:"#fff",
           fontSize:16,
           fontWeight:"bold",
           textAlign:"center",
         }}> 
         Trainee 

         </Text>

       </TouchableOpacity>

      <TouchableOpacity
            style={{width:250,
              backgroundColor:"#238aff",
              alignItems:"center",
              padding:10,
              marginLeft:23,
              borderRadius:7,
              marginBottom:10
            }}
            onPress={this.LoginCoach}
       >
         <Text
         style={{
           color:"#fff",
           fontSize:16,
           fontWeight:"bold"
         }}
         > Coach </Text>
       </TouchableOpacity>

          

         

          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    marginTop:50,
    width:300,
    marginLeft:45
  },
  Button:{
    marginTop:100,
    color:"red"


  },
});

export default createStackNavigator({
  Home:{
    screen:HomeScreen
  },
  LoginCoachTake:{
    screen:LoginCoach
  },
  LoginTraineeTake:{
    screen:LoginTrainee
  }

})
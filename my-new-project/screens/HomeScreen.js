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
  Navigator,
  TabBarIOS
} from 'react-native';
import { WebBrowser } from 'expo';
import { createStackNavigator , createAppContainer } from 'react-navigation'
import { MonoText } from '../components/StyledText';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons , FontAwesome, AntDesign , MaterialCommunityIcons} from '@expo/vector-icons';
//import LoginCoach from './Coach/CoachLogin';
import LoginTrainee from './Trainee/TraineeLoginPage'
import RegTrainee from './Trainee/TraineeReg'
import SeeAllCoachs from './Trainee/SeeAllCoachs'
import RegCoach from "./Coach/CoachRegPage";
import CoachDashboard from './Coach/dashboard'
import LoginCoach from './Coach/CoachLogin'
import TraineeDashboard from './Trainee/TraineeDashBoard'
import UpdatedCoachInfo from './Coach/CoachUpdateInfo'
//import SeeAllCoachs from './Trainee/SeeAllCoachs'
import CoachProfile from './Trainee/ProfilePageCoach'
import UpdateTraineeInfo from './Trainee/UpdatedInfo'
import Blogs from './Coach/Blogs'
import Dite from './Trainee/Dite'
import EditDite from './Trainee/EditDite'
import TakeCamera from './Trainee/Camera'
import UpdatedTraineeDite from './Coach/UpdateTraineeDite'
import TakeCameraCoach from './Coach/CoachCamera'

class HomeScreen extends React.Component {
static navigationOptions = {
  tabBarVisible: false,
  title:"Welcome Page",
  headerStyle:{
    color:"#fff",
    backgroundColor:"#238aff",
    display:"none"
  },
  headerTitleStyle:{
    color:"red",
    alignItems:"center",
    flex: 1,

  }
}


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

LoginTrainee = () => {
  this.props.navigation.navigate('LoginTraineeTake')  
}
LoginCoach = () =>{
  this.props.navigation.navigate('LoginCoachTake')
}

  render() {
    return (
    <View
    style={{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
     marginTop:25+"%"
    }}
    >
        <ScrollView>
        <Image 
        style={{
          width:250,
          height:250,
          marginBottom:-75,
          marginLeft:2+"%"
        }}
        source={{uri:'https://i.ibb.co/HXbWPKL/555.png'}}
        />

        <TouchableOpacity
            style={{width:250,
              backgroundColor:"#17A589",
              alignItems:"center",
              padding:10,
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
              backgroundColor:"#17A589",
              alignItems:"center",
              padding:10,
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
       {/* // <TapBar /> */}
      </View>
    );
  }
}

export default createStackNavigator({
  // HomeScreen:{
  //   screen:HomeScreen  
  // },  
  TestePage:{
    screen:UpdatedCoachInfo
  },
  LoginCoachTake:{
   screen:LoginCoach
  },
  LoginTraineeTake:{
     screen:LoginTrainee
   },
  // Home:{
  //   screen: LoginTrainee
  // },
  TraineeDashBoardPage:{
     screen: TraineeDashboard
  },
   RegisterTrainee:{
     screen:RegTrainee
   },
  SeeAllCoachs:{
     screen: SeeAllCoachs
   },
  DashboardPage:{
     screen:CoachDashboard
   },
  RegCoachPage:{
     screen:RegCoach
   },
  // LoginCoach:{
  //   screen:LoginCoach
  // }
   SeeAllCoachsPage:{
     screen: SeeAllCoachs
   },
   CoachProfilePage:{
     screen:CoachProfile
   },
   UpdatedCoachInfo:{
     screen:UpdatedCoachInfo
   },
   UpdateTraineeInfo:{
     screen:UpdateTraineeInfo
   },
   Blogs:{
     screen:Blogs
   },
   Dite:{
     screen:Dite
   },
   TakeCamera:{
    screen:TakeCamera
  },
  EditDite:{
    screen:EditDite
  },
  UpdatedTraineeDite:{
    screen:UpdatedTraineeDite
  },
  TakeCameraCoach:{
    screen:TakeCameraCoach
  }
},{
 
  defaultNavigationOptions:{
    title:"Logout",
    headerStyle:{
      backgroundColor:"#fff",
      //display:"none"
    }
  }
}
)

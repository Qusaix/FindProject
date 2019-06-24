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
    // marginLeft:48+"%",
    // marginTop: -38
  alignItems:"center",
  flex: 1,
  //display:"none"

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





















LoginTrainee = () => {
  this.props.navigation.navigate('LoginTraineeTake')  
}
LoginCoach = () =>{
  this.props.navigation.navigate('LoginCoachTake')
}

  render() {
    return (
    <View style={styles.container}>









{/* <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {/* Your screen contents depending on current tab. */}
        {/* </View>
        <BottomNavigation
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs}
        /> */}
      {/* // </View> */}












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
       {/* // <TapBar /> */}
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
/*
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

*/
// createMaterialBottomTabNavigator(
//   createStackNavigator,
//   HomeScreen
// )



























// const TabNavigator = createMaterialBottomTabNavigator(  
//   {  
//       Home: { screen: HomeScreen,  
//           navigationOptions:{  
//               tabBarLabel:'Home',  
//               tabBarIcon: ({ tintColor }) => (  
//                   <View>  
//                       <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
//                   </View>),  
//           }  
//       },  
//       Profile: { screen: Blogs,  
//           navigationOptions:{  
//               tabBarLabel:'Profile',  
//               tabBarIcon: ({ tintColor }) => (  
//                   <View>  
//                       <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
//                   </View>),  
//               activeColor: '#f60c0d',  
//               inactiveColor: '#f65a22',  
//               barStyle: { backgroundColor: '#f69b31' },  
//           }  
//       },  
//       Image: { screen: Blogs,  
//           navigationOptions:{  
//               tabBarLabel:'History',  
//               tabBarIcon: ({ tintColor }) => (  
//                   <View>  
//                       <MaterialCommunityIcons style={[{color: tintColor}]} size={25} name={'blogger'}/>  
//                   </View>),  
//               activeColor: '#615af6',  
//               inactiveColor: '#46f6d7',  
//               barStyle: { backgroundColor: '#67baf6' },  
//           }  
//       },  
//       Cart: {  
//           screen: Blogs,  
//           navigationOptions:{  
//               tabBarLabel:'Cart',  
//               tabBarIcon: ({ tintColor }) => (  
//                   <View>  
//                       <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
//                   </View>),  
//           }  
//       },  
//   },  
//   {  
//     initialRouteName: "Home",  
//     activeColor: '#f0edf6',  
//     inactiveColor: '#226557',  
//     barStyle: { backgroundColor: '#3BAD87' },  
//   },  
// );  













export default createStackNavigator({
  // HomeScreen:{
  //   screen:HomeScreen
  // }, 
  TestePage:{
    screen:TraineeDashboard
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
})


// export default createAppContainer(TabNavigator)
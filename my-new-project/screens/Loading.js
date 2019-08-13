import React from "react";
import { Image ,View } from "react-native";


class Loading extends React.Component {

  static navigationOptions={
    headerStyle:{
      display:"none"
    }
  }

    render(){
        return(
            <View
        style={{
          flex:1,
          alignContent:"center",
          alignItems:"center",
          marginTop:42+"%"
        }}
        >

        <Image 
        source={{uri:`http://www.agsgrowthsolutions.com/assets/img/load.gif`}}
        style={{
          
          height:100,
         // width:80+"%",
         width:100,
          marginTop:2+"%",
          borderRadius:5
        }}
        />


        </View>
        )
    }

}

export default Loading
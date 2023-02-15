import React from "react";
import { View, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Splash({ navigation }) {
  const check = () => {
    navigation.navigate("main");
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        // dark-content, light-content and default
        hidden={false}
        //To hide statusBar
        backgroundColor="#ECF0F1"
        //Background color of statusBar
        translucent={false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <ImageBackground
              resizeMode="cover"
              source={require('./assets/splash.png')}  
              style={{flex:1,alignItems:'center',justifyContent:"center"}}> */}
        <Animatable.Image
          animation="zoomIn"
          onAnimationEnd={check}
          duration={3000}
          resizeMode={"contain"}
          source={require("../assets/logo.png")}
          style={{ height: 150, width: 200 }}
        />
        <Animatable.Text
          animation="zoomInUp"
          style={{ marginTop: 30, fontSize: 20 }}
        >
          ChatGPT by OpenAI
        </Animatable.Text>
        {/* </ImageBackground> */}
      </View>
    </View>
  );
}

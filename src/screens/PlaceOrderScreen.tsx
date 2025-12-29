import { Image, ImageBackground, StyleSheet, View ,Text,TouchableOpacity} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const PlaceOrderScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/Order.png")}
        style={styles.bg}
        resizeMode="cover"
      >
        <View style={styles.center}>
          <Image
            source={require("../assets/ORD.png")}
            style={styles.successImg}
            resizeMode="contain"
          />
                  <Text style={styles.text}>Your Order has been </Text>
                  <Text style={styles.text}>accepted </Text>

                  <Text style={{alignSelf:"center",fontSize:14,bottom:"27%",fontWeight:"400",color:"#7C7C7C"}}>Your items has been placcd and is on 
</Text>
 <Text style={{alignSelf:"center",fontSize:14,bottom:"27%",fontWeight:"400",color:"#7C7C7C"}}>
it’s way to being processed
</Text>

  <TouchableOpacity style={styles.button} >
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Track Order</Text>
      </TouchableOpacity>


<TouchableOpacity onPress={()=>navigation.navigate("MainTabs")} >
        <Text style={{  fontSize: 18, textAlign: 'center' ,top:height*0.11}}>Back to Home</Text>
      </TouchableOpacity>
        </View>


      </ImageBackground>
    </SafeAreaView>
  );
};

export default PlaceOrderScreen;
import {  Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  successImg: {
    width: "60%",
    height: "40%",
    bottom:"28%",
    marginRight:30
  },
  
  button: {
    position: 'absolute',
    bottom: height * 0.17,
    left: width * 0.06,
    width: width * 0.90,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#3e8c5bff',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:24,
    bottom:"30%",
    alignSelf:"center",
    fontWeight:"600"

  }
});

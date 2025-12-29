import { StyleSheet, View, ImageBackground ,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/A.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Image
        source={require('../assets/B.png')}
        style={styles.imagec}
        resizeMode="cover"
      />
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.textc}> to Our Store</Text>
        <Text style={styles.texts}>Ger your groceries in as fast as one hour</Text>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Signin")}>
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardScreen;

import {  Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  imagec: {
    width: width * 0.11,     // same 6%
    height: height * 0.07,   // same 7%
    position: 'absolute',
    marginTop: height * 0.12,
    top: height * 0.40,
    left: width * 0.50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    position: 'absolute',
    bottom: height * 0.34,
    left: width * 0.24,
    fontSize: 50,
    color: 'white',
    marginTop: height * 0.17,
    alignContent: 'center',
    justifyContent: 'center',
  },

  textc: {
    position: 'absolute',
    bottom: height * 0.28,
    left: width * 0.13,
    fontSize: 50,
    color: 'white',
    alignContent: 'center',
    justifyContent: 'center',
  },

  texts: {
    position: 'absolute',
    bottom: height * 0.23,
    marginLeft: width * 0.10,
    fontSize: 18,
    color: '#b8b4b4ff',
    alignContent: 'center',
    justifyContent: 'center',
  },

  button: {
    position: 'absolute',
    bottom: height * 0.10,
    left: width * 0.06,
    width: width * 0.90,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#3e8c5bff',
    alignContent: 'center',
    justifyContent: 'center',
  },
});


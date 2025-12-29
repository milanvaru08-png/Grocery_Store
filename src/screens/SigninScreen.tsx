import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      
      {/* Top Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/C.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Text Section */}
      <View style={styles.content}>
        <Text style={styles.text}>Get your groceries</Text>
        <Text style={styles.text}>with nectar</Text>
    <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate("Number")}>
    
        <Image
          source={require('../assets/D.png')}
          style={styles.smallImage}
          resizeMode="contain"
        />
          <Text style={{ marginTop: -32, marginLeft:50, fontSize: 16, color: '#170c0cff',fontWeight: '600' }}>
          +882
        </Text>
        </TouchableOpacity>
        
        <Text style={{ marginTop: 30,marginLeft:70, fontSize: 16, color: '#170c0cff' }}>Or connect with social media</Text>

   
        <TouchableOpacity style={styles.socialButton}>
            <Text style={{ color: '#e3dedeff', fontSize: 18, textAlign: 'center',padding:9}}>Continue with Google</Text>
            
        </TouchableOpacity>

        
           
        <TouchableOpacity style={styles.sociaButton}>
            <Text style={{ color: '#dfdcdcff', fontSize: 18, textAlign: 'center',padding:9 }}>Continue with Facebook</Text>
            
        </TouchableOpacity>

      </View>

  
      

    </SafeAreaView>
  );
};

export default SigninScreen;
import {  Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -height * 0.05, // responsive instead of top:'-5%'
  },

  image: {
    width: '100%',
    height: '100%',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: height * 0.04,
    marginTop: -height * 0.10, // responsive instead of top:'-10%'
  },

  text: {
    fontSize: 30,
    color: '#000',
    fontWeight: '600',
  },

  smallImage: {
    width: 40,
    height: 40,
    marginTop: 20,
  },

  button: {
    width: '100%',
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderColor: '#b8b4b4ff',
  },

  socialButton: {
    width: '90%',
    height: 67,
    marginTop: 25,
    marginLeft: 20,
    borderWidth: 1,
    paddingVertical: 10,
    borderColor: '#b8b4b4ff',
    borderRadius: 17,
    alignItems: 'center',
    backgroundColor: '#5383EC',
  },

  sociaButton: {
    width: '90%',
    height: 67,
    marginTop: 25,
    marginLeft: 20,
    borderWidth: 1,
    paddingVertical: 10,
    borderColor: '#b8b4b4ff',
    borderRadius: 17,
    alignItems: 'center',
    backgroundColor: '#4A66AC',
  },
});


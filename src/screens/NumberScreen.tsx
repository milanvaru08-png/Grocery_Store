import { StyleSheet, Text, TouchableOpacity, View,Image ,TextInput,Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const NumberScreen = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = React.useState('');
  return (
   <SafeAreaView style={{flex:1}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text style={{marginLeft:15,fontSize:27}}>←
</Text>
    </TouchableOpacity>

    <Text  style={styles.text}>Enter your mobile number </Text>

    <Text style={{marginLeft:15,marginTop:20,color:"#7C7C7C"}}>Mobile Number</Text>
<View style={{borderBottomWidth:1,flexDirection:'row',borderColor:'#b8b4b4ff',}}>
       <Image
          source={require('../assets/D.png')}
          style={styles.smallImage}
          resizeMode="contain"
        />
          <Text style={{ marginTop: 21, marginLeft:3, fontSize: 16, color: '#170c0cff',fontWeight: '600' }}>
          +882
        </Text>

       
        <TextInput
          placeholder="Phone number"
          placeholderTextColor="#999"
            
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
        </View>

<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Verification")}>
  <Text style={styles.buttonText}>→</Text>
</TouchableOpacity>


   </SafeAreaView>
  )
}

export default NumberScreen


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginTop: height * 0.06,   // responsive
    marginLeft: 15,
    color: '#170c0cff',
    fontWeight: '600',
  },

  smallImage: {
    width: 40,
    height: 40,
    marginTop: 12,
    marginLeft: 15,
    borderBottomWidth: 1,
  },

  input: {
    borderLeftWidth: 1,
    marginLeft: 5,
    marginTop: 14,
    width: width * 0.85,   // responsive width
    height: 40,
    fontSize: 16,
    borderColor: '#b8b4b4ff',
    fontWeight: '600',
  },

 button: {
    backgroundColor: '#3e8c5b',
    width: width*0.140,
    height:height*0.060,
    top: height * 0.35,
    marginRight: width * 0.08,
    borderRadius: 30,
    position: 'absolute',

    bottom: height * 0.08,
    right: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '600',
    textAlign: 'center',
  },
});

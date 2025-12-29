import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const VerificationScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = React.useState(['', '', '', '']);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ marginLeft: 15, fontSize: 27 }}>←</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Enter your 4-digit Code </Text>

      <Text style={{ marginLeft: 15, marginTop: 20, color: '#7C7C7C' }}>
        Code
      </Text>

      <TextInput
        placeholder="-- -- -- --"
        maxLength={4}
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={code}
        onChangeText={setCode}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Location')}
      >
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VerificationScreen;
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginTop: height * 0.06, // responsive
    marginLeft: 15,
    color: '#170c0cff',
    fontWeight: '600',
  },
  input: {
    marginLeft: 15,
    marginTop: 14,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    width: width * 0.99, // responsive width
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

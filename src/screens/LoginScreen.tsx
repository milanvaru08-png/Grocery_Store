import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secure, setSecure] = React.useState(true);
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/F.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <Image source={require('../assets/G.png')} style={styles.image}></Image>

        <Text style={styles.title}>Loging</Text>
        <Text style={styles.subTitle}>Enter your emails and password</Text>
        <Text style={styles.inputTitle}>Email</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#7C7C7C"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <Text style={styles.inputTitle}>Password</Text>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#7C7C7C"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secure}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.passwordInput}
          />

          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Image source={require('../assets/J.jpg')} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
        <Text style={{ left: '65%', marginTop: 15, color: '#181725' }}>
          Forget Password ?
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}>
          <Text
            style={{
              backgroundColor: '#3e8c5b',
              color: 'white',
              fontSize: 18,
              bottom: -40,
              textAlign: 'center',
              padding: 15,
              marginHorizontal: 15,
              borderRadius: 10,
              marginBottom: 30,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={[styles.subTitle, { marginTop: 35, alignSelf: 'center' }]}>
          Don’t have an account?{' '}
          <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
            <Text style={{ color: '#389f50ff', fontWeight: '600' }}>
              SignUp
            </Text>
          </TouchableOpacity>
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: '14%',
    height: '7%',
    alignSelf: 'center',
    position: 'absolute',
    top: '6%',
  },
  title: {
    fontSize: 25,
    marginTop: 175,
    marginLeft: 20,
    color: '#181725',
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 20,
    color: '#7C7C7C',
    fontWeight: '600',
  },
  inputTitle: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 20,
    color: '#7C7C7C',
    fontWeight: '600',
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    marginLeft: 16,
    paddingVertical: 12,
    color: '#181725',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    marginHorizontal: 16,
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    color: '#181725',
  },

  eyeIcon: {
    width: 22,
    height: 14,
  },
});

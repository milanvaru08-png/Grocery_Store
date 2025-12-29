import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LocationScreen = () => {
  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(false);
  const [value, setValue] = React.useState('Select Your Zone');
  const [area, setArea] = React.useState('Select Your Area');

  const option = ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'];
  const areaa = ['Area 1', 'Area 2', 'Area 3', 'Area 4'];

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ marginLeft: 15, fontSize: 27 }}>←</Text>
        </TouchableOpacity>

        <Image source={require('../assets/E.png')} style={styles.image} />

        <Text style={styles.title}>Select your location</Text>
        <Text style={styles.subTitle}>
          Switch on your location to stay in tune with what’s happening in your
          area
        </Text>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.dropdownText}>Your Zone</Text>

          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => {
              setOpen(!open);
              setClose(false);
            }}
          >
            <View style={styles.dropdownRow}>
              <Text>{value}</Text>
              <Text>▼</Text>
            </View>
          </TouchableOpacity>

          {open &&
            option.map(item => (
              <TouchableOpacity
                key={item}
                style={styles.option}
                onPress={() => {
                  setValue(item);
                  setOpen(false);
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
        </View>

        {/* AREA DROPDOWN */}
        <View style={{ marginTop: 30, marginBottom: 40 }}>
          <Text style={styles.dropdownText}>Your Area</Text>

          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => {
              setClose(!close);
              setOpen(false);
            }}
          >
            <View style={styles.dropdownRow}>
              <Text>{area}</Text>
              <Text>▼</Text>
            </View>
          </TouchableOpacity>

          {close &&
            areaa.map(item => (
              <TouchableOpacity
                key={item}
                style={styles.option}
                onPress={() => {
                  setArea(item);
                  setClose(false);
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
        </View>

        <TouchableOpacity onPress={()=>(navigation.navigate("Login"))}>
            <Text style={{ backgroundColor: '#3e8c5b', color: 'white', fontSize: 18,bottom:-40, textAlign: 'center', padding: 15, marginHorizontal: 15, borderRadius: 10, marginBottom: 30 }}>Submit</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationScreen;
const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },

  title: {
    fontSize: 25,
    marginTop: 20,
    textAlign: 'center',
    color: '#181725',
    fontWeight: '600',
  },

  subTitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#7C7C7C',
    marginHorizontal: 20,
  },

  dropdownText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#C4C4C4',
    fontWeight: '500',
  },

  dropdown: {
    borderBottomWidth: 1,
    borderColor: '#b8b4b4ff',
    marginTop: 10,
    marginHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  option: {
    borderBottomWidth: 1,
    borderColor: '#b8b4b4ff',
    marginHorizontal: 15,
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

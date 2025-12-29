import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Pressable,
  Image
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useCart } from "../context/CartContext";
const BaverageScreen = () => {
  const { addToCart } = useCart();

  const navigation = useNavigation<any>();
  const data = [
    {
      id: 'r1',
      image: require('../assets/BB.png'),
      title: 'Diet Coke',
      des: '355ml, Price',
      price: 1.99,
        height:"42%",
      width:"20%",
    
      
    },
    {
      id: 'r2',
      image: require('../assets/CCC.png'),
      title: 'Sprite Can',
      des: '325ml, Price',
      price: 1.5,
       height:"42%",
      width:"20%",
    },
    {
      id: 'r3',
      image: require('../assets/DD.png'),
      title: 'Apple & Grape Juice',
      des: '2L, Price',
      price: 15.99,
        height:"42%",
      width:"20%",
    },
    {
      id: 'r4',
      image: require('../assets/DD.png'),
      title: 'Orenge Juice',
      des: '2L, Price',
      price: 15.99,
       height:"42%",
      width:"20%",
    },
    {
      id: 'r5',
      image: require('../assets/EEEE.png'),
      title: 'Coca Cola Can',
      des: '325ml, Price',
      price: 4.99,
        height:"42%",
      width:"20%",
    },
    {
      id: 'r6',
      image: require('../assets/FFFF.png'),
      title: 'Pepsi Can ',
      des: '330ml, Price',
      price: 4.99,
        height:"42%",
      width:"20%",
    },
    
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ marginLeft: width*0.015, fontSize: 27 }}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Baverages</Text>
      </View>

      <View>
        <FlatList data={data} keyExtractor={item=>item.id} numColumns={2} renderItem={({item})=>(

<TouchableOpacity
      key={item.id}
      style={styles.productCard}
      activeOpacity={0.8}
      onPress={()=>navigation.navigate("Product",{
        product:
          item
        
      })}
    >
      <Image
        source={item.image}
        style={styles.productImage}
        resizeMode="contain"
      />

      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productDes}>{item.des}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>

      <Pressable
        style={styles.productBtn} onPress={()=>addToCart(item)}
      >
        <Text style={styles.plus}>+</Text>
      </Pressable>
    </TouchableOpacity>


        )
        
        
        }/>
      </View>
    </SafeAreaView>
  );
};

export default BaverageScreen;
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: '25%',
  },
  productCard:{
      height: height * 0.26,
    width: width * 0.45,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginRight: width*0.010,
    marginLeft:width*0.030,

    borderRadius: 17,
    marginTop:height*0.020
  },

  productImage: {
    width: width * 0.25,
    height: height * 0.1,
    alignSelf: 'center',
    marginTop: height * 0.015,
  },

  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: width * 0.05,
    marginTop: height * 0.01,
  },

  productDes: {
    fontSize: 12,
    fontWeight: '400',
    marginLeft: width * 0.05,
    color: '#7C7C7C',
    marginTop: height * 0.01,
  },

  productPrice: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: height * 0.03,
    marginLeft: width * 0.05,
  },
    productBtn: {
    height: 45,
    width: 45,
    borderWidth: 1,
    borderRadius: 19,
    borderColor: '#53B175',
    backgroundColor: '#53B175',
    position: 'absolute',
    right: width * 0.05,
    bottom: height * 0.02,
  },
  
  plus: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },

});

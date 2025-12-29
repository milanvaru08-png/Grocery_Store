import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
import { useCart } from "../context/CartContext";
import { useFavourite } from "../context/FavouriteContext";



const ProductDetailScreen = ({ route, navigation }: any) => {
  const { product } = route.params;
const { addToCart } = useCart();
const { addToFavourite } = useFavourite();
  const [qty, setQty] = useState(1);

  const [isFav, setIsFav] = useState(false);

  const incQty = () => {
    setQty(prev => prev + 1);
  };
  const decQty = () => {
    if (qty > 1) {
      setQty(prev => prev - 1);
    }
  };



  const handleFavourite = () => {
  setIsFav(prev => !prev);   
  addToFavourite({
    image:product.image,
      id: product.id,
      title: product.title,
      des: product.des,
      price: product.price,
  });
};

  return (
  <SafeAreaView style={{ flex: 1 }}>
    <View>
      <Image
        source={require('../assets/p.png')}
        style={{ left: '90%', height: height*0.020, width:width*0.050, top: 25 }}
      />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ marginLeft: width * 0.039, fontSize: 35,bottom:22 }}>←</Text>
      </TouchableOpacity>

      <Image
        source={product.image}
        style={[styles.image, { height: product.height, width: product.width }]}
      />
    </View>
    <View style={{flex:1,flexDirection:"row",top:height*0.020}}>
<Text style={{ fontSize: 24, fontWeight: '600', marginLeft: width * 0.10 , bottom:height*0.120, }}>
        {product.title}
      </Text>
    
    <TouchableOpacity
      style={{ position: "absolute", right:width*0.060,bottom:height*0.210 }}
      onPress={handleFavourite}
    >{isFav?
      <Image style={{height:20,width:20}} source={require("../assets/favvv.png")} />
      :
      <Image style={{height:20,width:20}} source={require("../assets/favv.png")} />
       
      }
    </TouchableOpacity>
    </View>
<View style={{bottom:170}}>
    {/* Qty controls */}
    <View style={styles.qtyRow}>
      <Pressable onPress={decQty} style={styles.qtyBtn}>
        <Text style={styles.qtyText}>−</Text>
      </Pressable>

      <Text style={styles.qtyNumber}>{qty}</Text>

      <Pressable onPress={incQty} style={styles.qtyBtn}>
        <Text style={styles.qtyText}>+</Text>
      </Pressable>

      <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: width * 0.33 }}>
        ${product.price}
      </Text>
    </View>

    <Text
      style={{
        borderBottomWidth: 1,
        top: height * 0.06,
        borderColor: '#E2E2E2B2',
      }}
    />

    <Text
      style={{
        fontSize: 18,
        fontWeight: '600',
        top: height * 0.07,
        left: width * 0.055,
      }}
    >
      Product Detail
    </Text>

    <Image
      source={require("../assets/down.png")}
      style={{ height: 20, width: 14, left: "90%", top: 40 }}
    />

    <View style={{ height: 60, width: 360, top: height * 0.002 }}>
      <Text
        style={{
          fontSize: 13,
          color: '#7C7C7C',
          alignSelf: 'center',
          fontWeight: '600',
          top: height * 0.07,
          left: width * 0.055,
        }}
      >
        Apples are nutritious. Apples may be good for weight loss. apples may
        be good for your heart. As part of a healtful and varied diet.
      </Text>
    </View>

    <Text
      style={{
        borderBottomWidth: 1,
        top: height * 0.06,
        borderColor: '#E2E2E2B2',
      }}
    />

    <View style={{ flexDirection: 'row' }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          top: height * 0.080,
          left: width * 0.055,
        }}
      >
        Nutritions
      </Text>
    </View>

    <Image
      source={require("../assets/Q.png")}
      style={{ height: 20, width: 55, left: "70%", top: 53 }}
    />
    <Image
      source={require("../assets/next.png")}
      style={{ height: 18, width: 12, left: "90%", top: 35 }}
    />

    <Text
      style={{
        borderBottomWidth: 1,
        top: height * 0.06,
        borderColor: '#E2E2E2B2',
      }}
    />

    <View style={{ flexDirection: 'row' }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          top: height * 0.080,
          left: width * 0.055,
        }}
      >
        Review
      </Text>
    </View>

    <Image
      source={require("../assets/star (1).png")}
      style={{ height: 20, width: 55, left: "70%", top: 53 }}
    />
    <Image
      source={require("../assets/next.png")}
      style={{ height: 18, width: 12, left: "90%", top: 35 }}
    />
    </View>

    <TouchableOpacity style={styles.button} onPress={() => addToCart(product)}>
      <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>
        Add to Basket
      </Text>
    </TouchableOpacity>
  </SafeAreaView>
);

}
export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
   
    alignSelf: 'center',
    top: height * 0.007,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    left: width * 0.07,
    top: height * 0.02,
  },
 

  des: {
    fontSize: 14,
    fontWeight: '400',
    left: width * 0.07,
    top: height * 0.02,
    color: '#7C7C7C',
  },
  qtyRow: {
    top: height * 0.06,
    left: width * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
  },

  qtyBtn: {
    width: 36,
    height: 36,

    alignItems: 'center',
    justifyContent: 'center',
  },

  qtyText: {
    fontSize: 30,
    color: '#0c0c0cff',
  },

  qtyNumber: {
    borderWidth: 1,
    width: width * 0.12,
    height: height * 0.045,
    borderRadius: 19,
    borderColor: '#d8d6d6ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: width * 0.048,
    paddingTop: height * 0.008,
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '600',
  },
    button: {
    position: 'absolute',
    bottom: height * 0.08,
    left: width * 0.054,
    width: width * 0.90,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#3e8c5bff',
    alignContent: 'center',
    justifyContent: 'center',
  },
})
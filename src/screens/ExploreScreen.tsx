import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,Pressable,ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
import { useCart } from "../context/CartContext";

const ExploreScreen = () => {
      const navigation = useNavigation<any>();
const { addToCart } = useCart();

  const [searchText,setSearchText]=React.useState('');

  const data = [
    {
      id: '1',
      image: require('../assets/U.png'),
      title: ' Fruits & Vegetable',
      color: "rgba(83, 177, 117, 0.10)",
      bcolor:"#53B175B2",
            screen:"Baverage"


    },
    {
      id: '2',
      image: require('../assets/V.png'),
      title: 'Cooking Oil& Ghee',
      color: "rgba(248, 164, 76, 0.10)",
      bcolor:"#F8A44CB2",
            screen:"Egg"

    },
    {
      id: '3',
      image: require('../assets/W.png'),
      title: 'Meat & Fish',
      color: "rgba(247, 165, 147, 0.10)",
      bcolor:"#F7A593",
            screen:"Baverage"

    },
    {
      id: '4',
      image: require('../assets/X.png'),
      title: 'Bakery & Snacks',
      color: "rgba(211, 176, 224, 0.10)",
      bcolor:"#D3B0E0",
            screen:"Egg"

    },
    {
      id: '5',
      image: require('../assets/Y.png'),
      title: 'Dairy & Eggs',
      color: "rgba(253, 229, 152, 0.10)",
      bcolor:"#FDE598",
            screen:"Egg"

    },
    {
      id: '6',
      image: require('../assets/Z.png'),
      title: 'Beverages',
      color: "rgba(183, 223, 245, 0.10)",
      bcolor:"#B7DFF5",
      screen:"Baverage"
    },
  ];


  const productData=[
        {
      id: 'r1',
      image: require('../assets/BB.png'),
      title: 'Diet Coke',
      des: '355ml, Price',
      price: 1.99,
    },
    {
      id: 'r2',
      image: require('../assets/CCC.png'),
      title: 'Sprite Can',
      des: '325ml, Price',
      price: 1.5,
    },
    {
      id: 'r3',
      image: require('../assets/DD.png'),
      title: 'Apple & Grape Juice',
      des: '2L, Price',
      price: 15.99,
    },
    {
      id: 'r4',
      image: require('../assets/DD.png'),
      title: 'Orenge Juice',
      des: '2L, Price',
      price: 15.99,
    },
    {
      id: 'r5',
      image: require('../assets/EEEE.png'),
      title: 'Coca Cola Can',
      des: '325ml, Price',
      price: 4.99,
    },
    {
      id: 'r6',
      image: require('../assets/FFFF.png'),
      title: 'Pepsi Can ',
      des: '330ml, Price',
      price: 4.99,
    },
     {
      id: 'e1',
      image: require('../assets/GGG.png'),
      title: 'Egg Chicken Red',
      des: '4pcs, Price',
      price: 1.99,
    },
    {
      id: 'e2',
      image: require('../assets/HHHH.png'),
      title: 'Egg Chicken White',
      des: '180g, Price',
      price: 1.5,
    },
    {
      id: 'e3',
      image: require('../assets/II.png'),
      title: 'Egg Pasta ',
      des: '30gm, Price',
      price: 15.99,
    },
    {
      id: 'e4',
      image: require('../assets/JJ.png'),
      title: 'Egg Noodles',
      des: '2L, Price',
      price: 15.99,
    },
    {
      id: 'e5',
      image: require('../assets/KK.png'),
      title: 'Mayonnais Eggless',
      des: '325ml, Price',
      price: 4.99,
    },
    {
      id: 'e6',
      image: require('../assets/LL.png'),
      title: 'Egg Noodles ',
      des: '330ml, Price',
      price: 4.99,
    },
  ]
    const filterData=useMemo(()=>{
      return productData.filter(item=>item.title.toLowerCase().includes(searchText.toLowerCase()))
    },[searchText]);
  return (
  

    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>Find Products</Text>

      <TextInput
        placeholder="  🔎   Search"
        placeholderTextColor="#999"
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
      />
{searchText.trim()===""?(
      <View>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.productCard, { backgroundColor: item.color ,borderColor:item.bcolor}]}
              activeOpacity={0.8}
              onPress={()=>navigation.navigate(item.screen)}
            >
              <Image
                source={item.image}
                style={styles.productImage}
                resizeMode="contain"
              />

              <Text style={styles.productName}>{item.title}</Text>
            </TouchableOpacity>
          )}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ padding: 16 }}
        />
      </View> )  : ( <ScrollView showsVerticalScrollIndicator={false}>
              <FlatList data={filterData} keyExtractor={item=>item.id} numColumns={2} renderItem={({item})=>(
      
      <TouchableOpacity
            key={item.id}
            style={styles.productCar}
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
            </ScrollView>
)}

    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  input: {
    fontSize: 16,
    width: width * 0.9,
    height:height*0.055,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: height * 0.03,
    color: '#181725',
    borderRadius:15,
    borderColor:"#F2F3F2",backgroundColor:"#d7dad7ff"
  },
  productCard: {
    height: height * 0.2,
    width: width * 0.43,
    borderWidth: 1,
    marginRight: 2,
    borderRadius: 17,
    marginTop:height*0.023
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
    alignSelf:"center",
    marginTop: height * 0.01,
  },

  productCar:{
      height: height * 0.26,
    width: width * 0.45,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginRight: width*0.010,
    marginLeft:width*0.030,

    borderRadius: 17,
    marginTop:height*0.020
  },



  productDes: {
    fontSize: 12,
    fontWeight: '400',
    marginLeft: width * 0.05,
    color: '#7C7C7C',
    marginTop: height * 0.01,
  },
  
  plus: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },

  productPrice: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: height * 0.03,
    marginLeft: width * 0.05,
  },
    productBtn: {
    height:height*0.050,
    width: width*0.12,
    borderWidth: 1,
    borderRadius: 19,
    borderColor: '#53B175',
    backgroundColor: '#53B175',
    position: 'absolute',
    right: width * 0.05,
    bottom: height * 0.02,
  },
});

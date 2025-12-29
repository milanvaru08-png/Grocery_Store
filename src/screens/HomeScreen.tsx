import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from "../context/CartContext";


const data = [
  {
    id: '1',
    image: require('../assets/K.png'),
  },
  {
    id: '2',
    image: require('../assets/org.jpeg'),
  },
  {
    id: '3',
    image: require('../assets/C.png'),
  },
];


const products=[
  {
    id:'1',
    image:require("../assets/L.png"),
    title:"Organic Banana",
    des:"7pcs, Priceg",
    price:4.99,
    height:"42%",
      width:"55%",
  },
  {
     id:'2',
    image:require("../assets/M.png"),
    title:"Red Apple",
    des:"1kg, Priceg",
    price:4.99,
    height:"42%",
      width:"59%",
  }
,
 {
     id:'3',
    image:require("../assets/M.png"),
    title:"Red Apple",
    des:"1kg, Priceg",
    price:4.99,
    height:"42%",
      width:"59%",
  }

]


const product2=[
  {
      id:"b-1",
      image:require("../assets/N.png"),
      title:"Bell Pepper Red",
      des:"1kg, Priceg",
      price:4.99,
      height:"41.5%",
      width:"59%",

  },
  {
    id:"b-2",
    image:require("../assets/O.png"),
    title:"Ginger",
    des:"250gm, Priceg",
    price:4.99,
    height:"41.5%",
      width:"55%",


  },{
      id:"b-3",
    image:require("../assets/O.png"),
    title:"Ginger",
    des:"250gm, Priceg",
    price:4.99,
    height:"41.5%",
      width:"55%",


  }

]

const data1=[
  {
    id:'1',
    image:require("../assets/L.png"),
    title:"Organic Banana",
    des:"7pcs, Priceg",
    price:4.99,
     height:"42%",
      width:"55%",
  },
  {
     id:'2',
    image:require("../assets/M.png"),
    title:"Red Apple",
    des:"1kg, Priceg",
    price:4.99,
    height:"42%",
      width:"59%",
    

  }
,
 {
     id:'3',
    image:require("../assets/M.jpg"),
    title:"Red Apple",
    des:"1kg, Priceg",
    price:4.99,
    height:"42%",
      width:"59%",
  }
  ,
  {
      id:"b-1",
      image:require("../assets/N.png"),
      title:"Bell Pepper Red",
      des:"1kg, Priceg",
      price:4.99,
       height:"43%",
      width:"56%",

  },
  {
    id:"b-2",
    image:require("../assets/O.png"),
    title:"Ginger",
    des:"250gm, Priceg",
    price:4.99,
     height:"43%",
      width:"55%",


  },{
      id:"b-3",
    image:require("../assets/O.png"),
    title:"Ginger",
    des:"250gm, Priceg",
    price:4.99,
     height:"43%",
      width:"55%",


  }
]



const HomeScreen = () => {
  const { addToCart } = useCart();

  const { width, height } = Dimensions.get('window');
  const [index, setIndex] = useState(0);
  const [searchText,setSearchText]=useState('')
  const navigation = useNavigation<any>();

  const onScrollEnd = (e: any) => {
    const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(newIndex);
  };
  const filterData=useMemo(()=>{
    return data1.filter(item=>item.title.toLowerCase().includes(searchText.toLowerCase()))
  },[searchText])
  return (

    
    <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

      <Image source={require('../assets/G.png')} style={styles.image}></Image>

      <Text
        style={{
          alignSelf: 'center',
          top: 60,
          fontSize: 18,
          fontWeight: '600',
          color: '#4C4F4D',
        }}
      >
        Dhaka, Banassre
      </Text>

      <TextInput
        placeholder="  🔎   Search"
        placeholderTextColor="#999"
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
      />

{searchText.trim()===""?(

        <><View style={{ top: -20 }}>
              <FlatList
                data={data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={onScrollEnd}
                keyExtractor={item => item.id}
                style={{ marginTop: height * 0.06 }}
                renderItem={({ item }) => (
                  <View style={[styles.banner, { width }]}>
                    <Image source={item.image} style={styles.bannerImage} />
                  </View>
                )} />
            </View><View style={{ flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: '600', marginLeft: 15 }}>
                  Exclusive Offer
                </Text>
                <TouchableOpacity style={{ bottom: 24 }}>
                  <Text
                    style={{
                      left: '80%',
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#53B175',
                    }}
                  >
                    See all
                  </Text>
                </TouchableOpacity>
              </View><ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.productRow}
              >
                {products.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.productCard}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Product", {
                      product: item
                    })}
                  >
                    <Image
                      source={item.image}
                      style={styles.productImage}
                      resizeMode="contain" />

                    <Text style={styles.productName}>{item.title}</Text>
                    <Text style={styles.productDes}>{item.des}</Text>
                    <Text style={styles.productPrice}>${item.price}</Text>

                    <Pressable
                      style={styles.productBtn} onPress={()=>addToCart(item)}
                    >
                      <Text style={styles.plus}>+</Text>
                    </Pressable>
                  </TouchableOpacity>
                ))}
              </ScrollView><View style={{ flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: '600', marginLeft: 15 }}>
                  Best Selling
                </Text>
                <TouchableOpacity style={{ bottom: 24 }}>
                  <Text
                    style={{
                      left: '80%',
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#53B175',
                    }}
                  >
                    See all
                  </Text>
                </TouchableOpacity>
              </View><ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.productRow}
              >

                {product2.map((item) => (

                  <TouchableOpacity
                    key={item.id}
                    style={styles.productCard}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Product", {
                      product: item
                    })}
                  >
                    <Image
                      source={item.image}
                      style={styles.productImage}
                      resizeMode="contain" />

                    <Text style={styles.productName}>{item.title}</Text>
                    <Text style={styles.productDes}>{item.des}</Text>
                    <Text style={styles.productPrice}>${item.price}</Text>

                    <Pressable
                      style={styles.productBtn} onPress={()=>addToCart(item)}
                    >
                      <Text style={styles.plus}>+</Text>
                    </Pressable>
                  </TouchableOpacity>

                ))}


              </ScrollView>
            </>
          )
         : (
      <View>
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
        style={styles.productBtn}
      >
        <Text style={styles.plus}>+</Text>
      </Pressable>
    </TouchableOpacity>


        )
        
        
        }/>
      </View>)}
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: width * 0.08,
    height: height * 0.04,
    alignSelf: 'center',
    position: 'absolute',
    top: height * 0.015,
  },

  plus: {
    fontSize: 35,
    marginTop:height*0.001,
    color: '#fff',
    textAlign: 'center',
  },

  title: {
    fontSize: 25,
    marginTop: height * 0.22,
    marginLeft: width * 0.05,
    color: '#181725',
    fontWeight: '600',
  },

  subTitle: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: width * 0.05,
    color: '#7C7C7C',
    fontWeight: '600',
  },

  inputTitle: {
    fontSize: 15,
    marginLeft: width * 0.05,
    color: '#7C7C7C',
    fontWeight: '600',
  },
 input: {
    fontSize: 16,
    width: width * 0.9,
    height:height*0.055,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: height * 0.04,
    color: '#181725',
    borderRadius:15,
    borderColor:"#F2F3F2",backgroundColor:"#d7dad7ff"
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    marginHorizontal: width * 0.04,
  },

  banner: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bannerImage: {
    width: width * 0.9,
    height: height * 0.15,
    borderRadius: 20,
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

  productCard: {
    height: height * 0.3,
    width: width * 0.45,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginRight: 16,
    borderRadius: 17,
  },
productCar: {
    height: height * 0.3,
    width: width * 0.45,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginRight: 4,
    marginLeft:11,
    marginTop:12,
    borderRadius: 17,
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

  productRow: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.04,
  },

  productBtn: {
    height:height*0.055,
    width:width*0.11,
    borderWidth: 1,
    
    borderRadius: 19,
    borderColor: '#53B175',
    backgroundColor: '#53B175',
    position: 'absolute',
    right: width * 0.05,
    bottom: height * 0.02,
  },
});


import React from "react";
import { View, Text, Pressable, FlatList, StyleSheet ,Dimensions,Image,TouchableOpacity} from "react-native";
import { useCart } from "../context/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CheckoutModal from "../components/CheckoutModal";
const { width, height } = Dimensions.get("window");

const CartScreen = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart , openCheckout} = useCart();
  const navigation = useNavigation();


  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={styles.text}>My Cart</Text>
      <Text style={{borderBottomWidth:1,borderColor:"#E2E2E2"}}></Text>
          <FlatList
      data={cartItems}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
       <View style={styles.cartItem}>
  <Image source={item.image} style={styles.productImage} />

  <View style={styles.itemInfo}>
    <Text style={styles.itemTitle}>{item.title}</Text>
    <Text style={styles.itemDes}>{item.des}</Text>

    <View style={styles.qtyRow}>
      <Pressable style={styles.qtyBtn} onPress={() => decreaseQty(item.id)}>
        <Text>−</Text>
      </Pressable>

      <Text style={styles.qtyText}>{item.qty}</Text>

      <Pressable style={styles.qtyBtn} onPress={() => increaseQty(item.id)}>
        <Text style={{ color: "#53B175" }}>+</Text>
      </Pressable>
    </View>
  </View>

  <View style={styles.priceColumn}>
    <Pressable onPress={()=>removeFromCart(item.id)}>
      <Text style={styles.removeBtn}>×</Text>
    </Pressable>

    <Text style={styles.priceText}>${item.price}</Text>
  </View>
</View>

      )}
    />
     <TouchableOpacity style={styles.button} onPress={openCheckout}>
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Go to Checkout </Text>
          </TouchableOpacity>
          <CheckoutModal/>
    </SafeAreaView>

  );
};

export default CartScreen;

const styles=StyleSheet.create({
text:{
  fontSize:24,
  fontWeight:"600",
  alignSelf:"center"
}, 
 productImage: {
    width: width * 0.20,
    height: height * 0.08,
    left:20,
    top:50,
    marginTop: height * 0.01,
  },
    button: {
    position: 'absolute',
    bottom: height * 0.01,
    left: width * 0.06,
    width: width * 0.90,
    height:height*0.050,
    borderRadius: 15,
    backgroundColor: '#3e8c5bff',
    alignContent: 'center',
    justifyContent: 'center',
  },
cartItem: {
  flexDirection: "row",
  paddingVertical:width*0.020,
  paddingHorizontal: 16,
  borderBottomWidth: 1,
  borderColor: "#E2E2E2",
  alignItems: "center",
},

productImage: {
  width:width*0.190,
  height: height*0.070,
  resizeMode: "contain",
  marginRight: 14,
},

itemInfo: {
  flex: 1,
},

itemTitle: {
  fontSize: 18,
  fontWeight: "600",
  color: "#181725",
},

itemDes: {
  fontSize: 14,
  color: "#7C7C7C",
  marginTop:height*0.004,
},

qtyRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: height*0.014,
},

qtyBtn: {
  width: width*0.070,
  height: height*0.034,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "#E2E2E2",
  alignItems: "center",
  justifyContent: "center",
},

qtyText: {
  marginHorizontal: width*0.014,
  fontSize: 18,
  fontWeight: "600",
},

priceColumn: {
  alignItems: "flex-end",
  justifyContent: "space-between",
  height: height*0.080,
},

priceText: {
  fontSize: 18,
  fontWeight: "600",
  color: "#181725",
},

removeBtn: {
  fontSize: 22,
  color: "#B3B3B3",
},



}

)

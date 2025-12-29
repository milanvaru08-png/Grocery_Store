import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { useFavourite } from "../context/FavouriteContext";
import { useCart } from "../context/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const FavouriteScreen = () => {
  const { favourites } = useFavourite();
  const { addToCart } = useCart();

  if (favourites.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No favourite items ❤️</Text>
      </View>
    );
  }

  const addAllToCart = () => {
    favourites.forEach(item => {
      addToCart({
        id: item.id,
        title: item.title,
        des: item.des,
        image: item.image,
        price: item.price,
      });
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <Text style={styles.header}>Favourite</Text>

      {/* List */}
      <FlatList
        data={favourites}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {/* Left Image */}
            <Image source={item.image} style={styles.image} />

            {/* Middle Content */}
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.des}>{item.des}</Text>
            </View>

            {/* Right Price + Arrow */}
            <View style={styles.right}>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.arrow}>›</Text>
            </View>
          </View>
        )}
      />

      {/* Bottom Button */}
      <TouchableOpacity style={styles.addAllBtn} onPress={addAllToCart}>
        <Text style={styles.addAllText}>Add All To Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FavouriteScreen;
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
  },

  image: {
    width: width*0.10,
    height:height*0.060,
    resizeMode: "contain",
    marginRight: 14,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
  },

  des: {
    fontSize: 12,
    color: "#7C7C7C",
    marginTop: 4,
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },

  arrow: {
    fontSize: 22,
    color: "#B3B3B3",
  },

  addAllBtn: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 56,
    backgroundColor: "#53B175",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  addAllText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

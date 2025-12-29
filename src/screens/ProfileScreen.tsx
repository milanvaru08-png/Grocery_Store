import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const data = [
  { id: 1, image: require("../assets/NN.png"), name: "Orders" },
  { id: 2, image: require("../assets/NN.png"), name: "My Details" },
  { id: 3, image: require("../assets/OO.png"), name: "Delivery Address" },
  { id: 4, image: require("../assets/QQ.png"), name: "Payment Methods" },
  { id: 5, image: require("../assets/QQ.png"), name: "Promo Cord" },
  { id: 6, image: require("../assets/RR.png"), name: "Notifications" },
  { id: 7, image: require("../assets/SS.png"), name: "Help" },
];

const ProfileScreen = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.profileHeader}>
        <Image
          source={require("../assets/PPP.png")} // optional avatar
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Afsar Hossen</Text>
          <Text style={styles.email}>Imshuvo97@gmail.com</Text>
        </View>
      </View>

      {data.map(item => (
        <TouchableOpacity key={item.id} style={styles.menuItem}>
          <Image source={item.image} style={styles.menuIcon} />
          <Text style={styles.menuText}>{item.name}</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}

     
      <TouchableOpacity style={styles.logoutBtn} onPress={()=>navigation.navigate("Signin")}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

 
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
  },

  email: {
    fontSize: 14,
    color: "#7C7C7C",
    marginTop: 4,
  },

 
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
  },

  menuIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginRight: 15,
  },

  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#181725",
  },

  arrow: {
    fontSize: 18,
    color: "#181725",
  },

  /* Logout */
  logoutBtn: {
    marginTop: 30,
    backgroundColor: "#F2F3F2",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#53B175",
  },
});

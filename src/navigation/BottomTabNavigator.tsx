

import CartScreen from '../screens/CartScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen'
import FavouriteScreen from '../screens/FavouriteScreen';
import HomeScreen from '../screens/HomeScreen';
import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";




const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused
              ? require("../assets/HHH.png")
              : require("../assets/HH.png");
          }

          if (route.name === "Explore") {
            icon = focused
              ? require("../assets/EEE.png")
              : require("../assets/EE.png");
          }

          if (route.name === "Cart") {
            icon = focused
              ? require("../assets/car.png")
              : require("../assets/CC.png");
          }

          if (route.name === "Favourite") {
            icon = focused
              ? require("../assets/hear.png")
              : require("../assets/favv.png");
          }

          
          if (route.name === "Profile") {
            icon = focused
              ? require("../assets/PPP.png")
              : require("../assets/PP.png");
          }
          return (
            <Image
              source={icon}
              style={{
                width: 24,
                height: 24,
                resizeMode: "contain",
              }}
            />
          );
        },

        tabBarActiveTintColor: "#53B175",
        tabBarInactiveTintColor: "#030303",
        tabBarStyle: {
          height: 90,
          paddingBottom: 8,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />

      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}



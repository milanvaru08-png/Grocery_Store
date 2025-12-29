import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardScreen from '../screens/OnboardScreen';
import SigninScreen from '../screens/SigninScreen';
import NumberScreen from '../screens/NumberScreen';
import VerificationScreen from '../screens/VerificationScreen';
import LocationScreen from '../screens/LocationScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import BottomTabNavigator from './BottomTabNavigator';
import BaverageScreen from '../screens/BaverageScreen';
import EggScreen from '../screens/EggScreen';
import PlaceOrderScreen from '../screens/PlaceOrderScreen';


export type RootStackParamList = {
  Onboard: undefined;
  Home: undefined;
  Number: undefined;
  Signin: undefined;
  Verification: undefined;
  Location:undefined;
  Login:undefined;
  Signup:undefined;
  Product:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboard"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboard" component={OnboardScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Product" component={ProductDetailScreen}/>
        <Stack.Screen name="Cart" component={CartScreen}/>
        <Stack.Screen name="Explore" component={ExploreScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Favourite" component={FavouriteScreen}/>
        <Stack.Screen name="Baverage" component={BaverageScreen}/>
        <Stack.Screen name="Egg" component={EggScreen}/>
        <Stack.Screen name="Place" component={PlaceOrderScreen}/>


         <Stack.Screen
          name="MainTabs"
          component={BottomTabNavigator}
        />

        







      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

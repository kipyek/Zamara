import React, { useEffect, useRef } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeRoutes } from "../Components/Navigation";
import Home from "./Home";
import Staff from "./Staff";
import Continents from "./Continents";


const Stack = createNativeStackNavigator<HomeRoutes>();



export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Staff" component={Staff} />
      <Stack.Screen name="Continents" component={Continents} />
    </Stack.Navigator>
  )
}



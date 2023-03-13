import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppRoutes } from "./src/Components/Navigation";
import { HomeNavigator } from "./src/Dashboard";
import { AuthenticationNavigator } from "./src/Authentication";
import { NavigationContainer } from '@react-navigation/native';


const AppStack = createNativeStackNavigator<AppRoutes>();
const AuthPath = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#a06931' }}>
      <AppStack.Navigator initialRouteName="Authentication" screenOptions={{ headerShown: false }}>
        <AppStack.Group>
          <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
          <AppStack.Screen name="Home" component={HomeNavigator} />
        </AppStack.Group>
      </AppStack.Navigator>
    </SafeAreaView>
  )
}

const HomePath = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#a06931' }}>
      <AppStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={HomeNavigator} />
        <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
      </AppStack.Navigator>
    </SafeAreaView>

  )
}

export default function App() {
  const [userToken, setUserToken] = useState(null)

  useEffect(() => {
    let unmounted = false
    AsyncStorage.getItem('activeUser').then(value => {
      let parsed = JSON.parse(value);
      if (parsed.token === null) {

        console.log("Not Auhtorized");
      } else {
        setUserToken(parsed?.token);
      }
    }).catch(error => {
      console.log(error)
    })

    return () => { unmounted = true }
  }, [userToken]);

  return (
    userToken ?
      <NavigationContainer>
        <HomePath />
      </NavigationContainer>
      :
      <NavigationContainer>
        <AuthPath />
      </NavigationContainer>

  );
};

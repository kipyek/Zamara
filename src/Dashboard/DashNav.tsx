import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../Components/CustomDrawerContent';
import Home from './Home';
import Staff from './Staff';
import Continents from './Continents';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Staff" component={Staff} />
    <Stack.Screen name="Continents" component={Continents} />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={StackNavigator} options={{ title: 'ZAMARA APP' }} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default DrawerNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './Components/CustomDrawerContent';
import Home from './Dashboard/Home';
import Staff from './Dashboard/Staff';
import Continents from './Dashboard/Continents';

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
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <CustomDrawerContent {...props}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 15, color: 'red' },
        backgroundColor: 'red',
        width: 2000,
      }}
    />}>
    <Drawer.Screen name="Home" component={StackNavigator} options={{ title: 'ZAMARA APP' }} />
  </Drawer.Navigator>
);

export default DrawerNavigator;

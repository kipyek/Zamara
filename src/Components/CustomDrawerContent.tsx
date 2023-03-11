import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Alert } from 'react-native';

const CustomDrawerContent = (props: any) => {
  const { navigation } = props;

  const handleLogout = () => {
    alert("You logout here")
  };

  const handleHomeScreen = () => {
    navigation.navigate("Home")
  };

  const handleStaffScreen = () => {
    navigation.navigate("Staff")
  };

  const handleContinentsScreen = () => {
    navigation.navigate("Continents")
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="HOME"
        onPress={handleHomeScreen}
      />
      <DrawerItem
        label="STAFF"
        onPress={handleStaffScreen}
      />
      <DrawerItem
        label="CONTINENTS"
        onPress={handleContinentsScreen}
      />
      <DrawerItem
        label="SIGN OUT"
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

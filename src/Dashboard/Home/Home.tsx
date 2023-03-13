import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { MaterialIcons } from "@expo/vector-icons"
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ route, navigation }: any) => {
  // const { item } = route.params
  const [visible, setVisible] = useState(false);
  const [token, setToken] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('activeUser').then(value => {
      let parsed = JSON.parse(value);
      setToken(parsed.token);
    }).catch(error => {
      console.log(error)
    }).catch(error => {
      console.log(error)
    })
  }, []);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  const staff = () => {
    navigation.navigate("Staff");
    hideMenu()
  }
  const continent = () => {
    navigation.navigate("Continents");
    hideMenu()
  }

  const signOut = () => {
    try {
      AsyncStorage.clear()
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Authentication' },
        ],
      }))
      console.log("Sign Out", "You have successfully signed out")
    } catch (e) {
      console.log("Sign Out", "Please Try again later")
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Menu
          visible={visible}
          onRequestClose={hideMenu}
          style={{ marginTop: 50 }}
        >
          <MenuItem onPress={() => hideMenu()}>HOME</MenuItem>
          <MenuItem onPress={() => staff()} >STAFF</MenuItem>
          <MenuItem onPress={() => continent()}>CONTINENTS</MenuItem>
          <MenuItem onPress={() => signOut()}>SIGN OUT</MenuItem>
        </Menu>
      </View>
      <View style={{ backgroundColor: '#FFA500', paddingVertical: 20, flexDirection: 'row' }}>
        <MaterialIcons name="menu" size={24} color="white" onPress={() => showMenu()} style={{ marginLeft: 20 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 10 }} >ZAMARA APP</Text>
      </View>
      <Image
        source={cartoon[0]}
        style={{
          width: 80,
          height: 80,
          marginTop: 80,
          position: 'absolute',
          alignSelf: 'flex-end',
        }} />
      <View style={styles.content}>
        <View style={styles.body}>
          <Text>Welcome</Text>
          <Text style={styles.labels}> Medhurst Smitham,</Text>
        </View>

        <Text>Your profile details is as below:</Text>

        <View style={styles.body}>
          <Text style={styles.labels}>Age: </Text>
          <Text>26</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.labels}>Gender: </Text>
          <Text>Male</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.labels}>Email: </Text>
          <Text style={styles.email}>deniskipyegon88@gmail.com</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.labels}>Phone: </Text>
          <Text>+25418477952</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.labels}>Birth Date: </Text>
          <Text>02/05/1999</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.labels}>Blood Group: </Text>
          <Text>B</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.labels}>Height: </Text>
          <Text>1.8</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.labels}>Weight: </Text>
          <Text>70</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.labels}>Eye Color: </Text>
          <Text>white</Text>
        </View>

      </View>
    </View>
  )
}

export default Home
const cartoon = [require("../../../assets/Zamara.png")]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
  content: {
    alignItems: 'center',
    marginTop: 20
  },
  body: {
    flexDirection: 'row',
    marginVertical: 10
  },
  labels: {
    fontWeight: 'bold',
  },
  email: {
    textDecorationLine: 'underline',
    color: 'blue'
  }
})
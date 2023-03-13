import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { AuthNavigationProps } from '../../Components/Navigation';
import axios from 'axios';

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  const [details, setDetails] = useState(null)
  const [userData, setUserData] = useState([])
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users',
          {
            method: 'GET'
          });

        const result = await response.json();
        const results = result.users
        const filteredData = Array.isArray(results) ? results.filter((item: { id: number; }) => item.id === details?.id) : [];
        AsyncStorage.setItem('activeDetails', JSON.stringify(filteredData))
        setUserData(filteredData);
        console.log("object", filteredData)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [details]);

  const loginApi = () => {
    let payload = {
      username: name,
      password: password
    }

    axios.post('https://dummyjson.com/auth/login', payload)
      .then(response => {
        const data = response.data
        setDetails(data)
        console.log(data)
        AsyncStorage.setItem('activeUser', JSON.stringify(data))

        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
              params: { item: userData }
            },
          ],
        }))
      })
      .catch((error: any) => {
        console.log(error)

      })
  }


  return (
    <View style={{ alignItems: 'center', justifyContent: "center", flex: 1, backgroundColor: 'lightgrey' }}>
      <Text style={{ fontSize: 40, }}>
        Welcome
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 20,
        }}>
        Login to your account
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={{ width: "84%", marginTop: 20 }}>
        <Button
          onPress={() => loginApi()}
          title="LOGIN"
          color='tomato'
        />
      </View>


    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 300,
    backgroundColor: 'rgb(220,220, 221)',
    marginVertical: 10,
    paddingVertical: 16
  },
  button: {
    width: 150
  }
})
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Button } from 'react-native';

const Login = ({ navigation }: any) => {
  const [data, setData] = useState(null)
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
        const filteredData = Array.isArray(results) ? results.filter((item: { id: number; }) => item.id === data?.id) : [];

        setUserData(filteredData);
        console.log("object", filteredData)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [data]);

  const loginApi = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: name,
        password: password,
      })
    })
      .then(res => res.json())
      .then(
        setData
      );
  }


  return (
    <View style={{ alignItems: 'center', justifyContent: "center", flex: 1, backgroundColor: 'lightgrey' }}>
      <Text style={{ fontSize: 40, fontFamily: 'ChivoMono-Bold' }}>
        Welcome
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 20,
          fontFamily: 'ChivoMono-Thin'
        }}>
        Login to your account{data?.id}
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
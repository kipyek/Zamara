import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const Update = ({ route, navigation }: any) => {
  const { item } = route.params

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [salary, setSalary] = useState('')


  const handleUpdate = () => {
    const payload = {
      "staffNumber": number ? number : item.staffNumber,
      "staffName": name ? name : item.staffName,
      "staffEmail": email ? email : item.staffEmail,
      "department": department ? department : item.department,
      "salary": salary ? salary : item.salary
    }
    axios.put(`https://crudcrud.com/api/6246af62dabf4cacbb73516f4aeaf26b/zamara/${item._id}`, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).
      then((response) => {
        console.log("Updated", response.data)
        // navigation.navigate("Staff")
      }).
      catch((e) => {
        console.log("e", e.response.data)
      })
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: "center", flex: 1, backgroundColor: 'lightgrey' }}>
      <Text style={{ fontSize: 40, }}>
        Update
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 20,
        }}>
        Update only what applies
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Number"
        defaultValue={item.staffNumber}
        onChangeText={(text) => setNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        defaultValue={item.staffName}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        defaultValue={item.staffEmail}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Department"
        defaultValue={item.department}
        onChangeText={(text) => setDepartment(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="salary"
        defaultValue={item.salary}
        onChangeText={(text) => setSalary(text)}
      />
      <View style={{ width: "84%", marginTop: 20 }}>
        <Button
          onPress={() => handleUpdate()}
          title="UPDATE"
          color='tomato'
        />
      </View>


    </View>
  )
}

export default Update

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
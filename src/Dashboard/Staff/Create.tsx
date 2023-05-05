import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'
import * as MailComposer from 'expo-mail-composer';
//import { SMTPClient } from 'smtpbucket';

const Create = () => {

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [salary, setSalary] = useState('')

  // const smtpClient = new SMTPClient({
  //   host: 'mail.smtpbucket.com',
  //   port: 8025,
  //   auth: {
  //     user: 'your-username',
  //     pass: 'your-password',
  //   },
  // });


  const handleCreate = () => {
    const payload = {
      "staffNumber": number,
      "staffName": name,
      "staffEmail": email,
      "department": department,
      "salary": salary
    }
    axios.post("https://crudcrud.com/api/6246af62dabf4cacbb73516f4aeaf26b/zamara", payload, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).
      then((response) => {
        const data = response.data
        console.log("res", data)
      }).
      catch((e) => {
        console.log("Error", e.response.data)
        // const email = {
        //   recipients: 'd.kipye@gmail.com',
        //   subject: 'Welcome to MyApp',
        //   body: `Hi \n\nWelcome to MyApp!`,
        // };
        // smtpClient.send(
        //   email.recipients.join(','),
        //   email.subject,
        //   email.body,
        //   { cc: '', bcc: '' },
        //   {
        //     onSuccess: () => console.log('Email sent successfully'),
        //     onError: (error: any) => console.error(`Error sending email: ${error}`),
        //   }
        // );
      })

  }





  return (
    <View style={{ alignItems: 'center', justifyContent: "center", flex: 1, marginTop: 50 }}>
      <Text style={{ fontSize: 40, }}>
        Create
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 20,
        }}>
        Create new staff
      </Text>
      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Number"
          onChangeText={(text) => setNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Department"
          onChangeText={(text) => setDepartment(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="salary"
          onChangeText={(text) => setSalary(text)}
        />
        <View style={{ width: "98%", marginTop: 20 }}>
          <Button
            onPress={() => handleCreate()}
            title="CREATE"
            color='tomato'
          />
        </View>
      </ScrollView>


    </View>
  )
}

export default Create

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
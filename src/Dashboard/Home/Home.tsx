import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={cartoon[0]}
        style={{
          width: 80,
          height: 80,
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
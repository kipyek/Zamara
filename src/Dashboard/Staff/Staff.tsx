import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";
import { FAB } from 'react-native-paper'

export default function Staff({ navigation }: any) {
  const [token, setToken] = useState(null);
  const [staff, setStaff] = useState([]);
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('activeUser').then(value => {
      let parsed = JSON.parse(value);
      setToken(parsed.token);

    }).catch(error => {
      console.log(error)
    })

  }, []);

  useEffect(() => {
    //handleListStaff()
  }, [token])

  const handleListStaff = () => {
    axios.get("https://crudcrud.com/api/6246af62dabf4cacbb73516f4aeaf26b/zamara", {
      headers: {
        'Content-Type': 'application/json'
      },
    }).
      then((response) => {
        const data = response.data
        setStaff(data)
        console.log("res", response.data)
      }).
      catch((e) => {
        console.log("Error", e.response.data)
      })
  }
  const handleDelete = (item: { _id: any; }) => {
    axios.delete(`https://crudcrud.com/api/6246af62dabf4cacbb73516f4aeaf26b/zamara/${item._id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).
      then((response) => {
        console.log("Deleted", response.data)
        handleListStaff()
      }).
      catch((e) => {
        console.log("e", e)
      })
  }

  const checking = (item: { _id: any; }) => {
    Alert.alert(
      "Warning!!",
      "You will not be able to retrive data once deleted",
      [
        {
          text: "No",
          onPress: () => {
            setVisible(false);
          },
        },
        {
          text: "Delete",
          onPress: () => {
            handleDelete(item)
          },
        }
      ],
      { cancelable: false }
    );

  }
  const renderStaff = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.staffNumber}</Text>
      <Text style={styles.cell}>{item.staffName}</Text>
      <Text style={styles.cell}>{item.staffEmail}</Text>
      <Text style={styles.cell}>{item.department}</Text>
      <Text style={styles.cell}>{item.salary}</Text>
      <View style={styles.actionsCell}>
        <Feather name="edit" size={24} color="black" style={styles.actionText} onPress={() => navigation.navigate("Update", { item: item })} />
        <AntDesign name="delete" size={24} color="black" style={styles.actionText} onPress={() => checking(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#FFA500', paddingVertical: 20, flexDirection: 'row' }}>
        <MaterialIcons name="arrow-back" size={24} color="white" onPress={() => navigation.navigate("Home")} style={{ marginLeft: 20 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 10 }} >STAFF LIST</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerCell}>Staff Number</Text>
        <Text style={styles.headerCell}>Staff Name</Text>
        <Text style={styles.headerCell}>Staff Email</Text>
        <Text style={styles.headerCell}>Department</Text>
        <Text style={styles.headerCell}>Salary</Text>
        <Text style={styles.headerCell}>Actions</Text>
      </View>
      <FlatList
        data={staff}
        renderItem={renderStaff}
        keyExtractor={(item) => item._id}

      />

      <View>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Create')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  cell: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 15
  },
  actionsCell: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10
  },
  actionText: {
    color: '#007AFF',
    fontSize: 16
  },
  fab: {
    position: 'absolute',
    margin: 16,
    backgroundColor: 'tomato',
    right: 0,
    bottom: 0,
  },
});

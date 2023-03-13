import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';

export default function Staff() {
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
    handleListStaff()
  }, [token])

  const handleListStaff = async () => {
    axios.get("https://crudcrud.com/api/b90693f84b7045b49ab189aa6b4a429a/zamara", {
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
        console.log("Error", e)
      })
  }
  const handleDelete = () => {
    axios.delete(`https://crudcrud.com/api/b90693f84b7045b49ab189aa6b4a429a/zamara/${staff[0]._id}`, {
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

  const checking = () => {
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
            handleDelete()
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
        <Text style={styles.actionText}>Edit</Text>
        <Text style={styles.actionText} onPress={() => checking()}>Delete</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
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
        keyExtractor={(item) => item.staffNumber.toString()}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
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
    fontSize: 10,
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
  }
});

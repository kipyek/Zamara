import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Staff() {
  const [staff, setStaff] = useState([
    { staffNumber: 1, staffName: 'John Smith', staffEmail: 'john.smith@example.com', department: 'Sales', salary: 50000 },
    { staffNumber: 2, staffName: 'Jane Doe', staffEmail: 'jane.doe@example.com', department: 'Marketing', salary: 60000 },
    { staffNumber: 3, staffName: 'Bob Johnson', staffEmail: 'bob.johnson@example.com', department: 'IT', salary: 70000 }
  ]);

  const renderStaff = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.staffNumber}</Text>
      <Text style={styles.cell}>{item.staffName}</Text>
      <Text style={styles.cell}>{item.staffEmail}</Text>
      <Text style={styles.cell}>{item.department}</Text>
      <Text style={styles.cell}>{item.salary}</Text>
      <View style={styles.actionsCell}>
        <Text style={styles.actionText}>Edit</Text>
        <Text style={styles.actionText}>Delete</Text>
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

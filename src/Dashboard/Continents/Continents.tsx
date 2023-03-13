import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { DataTable } from 'react-native-paper';
import { MaterialIcons } from "@expo/vector-icons"


export default function Continents({ navigation }: any) {
  const [continents, setContinents] = useState([]);
  useEffect(() => {
    const xmlRequest = `<?xml version="1.0" encoding="utf-8"?>
    <soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
        <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo">
        </ListOfContinentsByName>
      </soap12:Body>
    </soap12:Envelope>`;

    axios.post('http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL', xmlRequest, {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
      }
    })
      .then((response) => {
        const parser = new XMLParser();
        const ParsedData = parser.parse(response.data)
        const continent = ParsedData['soap:Envelope']['soap:Body']['m:ListOfContinentsByNameResponse']['m:ListOfContinentsByNameResult']['m:tContinent'];
        setContinents(continent)

      })

      .catch((error) => {
        console.log("ydebdh", error);
      });

  }, []);

  return (
    <View style={styles.container}>

      <View style={{ backgroundColor: '#FFA500', paddingVertical: 20, flexDirection: 'row' }}>
        <MaterialIcons name="arrow-back" size={24} color="white" onPress={() => navigation.navigate("Home")} style={{ marginLeft: 20 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 10 }} >CONTINENTS</Text>
      </View>

      <DataTable style={{ padding: 5 }}>
        <DataTable.Header style={{ backgroundColor: '#DCDCDC' }}>
          <DataTable.Title>Code</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
        </DataTable.Header>
        {continents.map((item) =>
          <DataTable.Row>
            <DataTable.Cell>{item['m:sCode']}</DataTable.Cell>
            <DataTable.Cell>{item['m:sName']}</DataTable.Cell>
          </DataTable.Row>
        )}
      </DataTable>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  }
})

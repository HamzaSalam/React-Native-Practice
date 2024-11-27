import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const Grid = () => {
  const data = [
    {id: '1', name: 'Farzeen ali'},
    {id: '2', name: 'Fahad'},
    {id: '3', name: 'Roy'},
    {id: '4', name: 'Bilal'},
    {id: '5', name: 'Ahsan'},
    {id: '6', name: 'Huzaifa'},
    {id: '7', name: 'Khan'},
    {id: '8', name: 'Ali'},
    {id: '9', name: 'Ali'},
    {id: '10', name: 'Ali'},
    {id: '11', name: 'Ali'},
    {id: '12', name: 'Alie'},
    {id: '13', name: 'hamza'},
  ];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map(item => (
          <View key={item.id} style={styles.gridItem}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  gridItem: {
    backgroundColor: '#ff6f61',
    padding: 20,
    marginBottom: 10,
    width: '48%',
    height: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default Grid;

import {View, Text, FlatList, Button, Alert} from 'react-native';
import React from 'react';
import style from '../../style/listStyle';

const List = () => {
  const data = [
    {id: 1, name: 'hamza'},
    {id: 2, name: 'hamza'},
    {id: 3, name: 'hamza'},
    {id: 4, name: 'hamza'},
    {id: 5, name: 'hamza'},
    {id: 6, name: 'ali'},
    {id: 7, name: 'hamza'},
    {id: 8, name: 'hamza'},
  ];

  const colorChange = id => {
    Alert.alert('cliked ' + id);
    console.log(id);
  };

  const render = ({item}) => (
    <View style={style.box}>
      <Text>{item.name}</Text>
      <Button
        color="#f194ff"
        title="button"
        onPress={() => colorChange(item.id)}></Button>
    </View>
  );
  return (
    <View>
      <Text>Display List</Text>
      <FlatList
        data={data}
        renderItem={render}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default List;

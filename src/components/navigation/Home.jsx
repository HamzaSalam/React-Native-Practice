import {View, Text, Button} from 'react-native';
import React from 'react';
import About from './About';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Button"
        onPress={() => {
          navigation.navigate('About');
        }}
      />
      {/* <Button
        title="open drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      /> */}
    </View>
  );
};

export default Home;

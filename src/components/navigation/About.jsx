import {View, Text, Button} from 'react-native';
import React from 'react';

const About = props => {
  return (
    <View>
      <Text>About</Text>
      <Button title="Got back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default About;

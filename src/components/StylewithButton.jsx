import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const StylewithButton = () => {
  return (
    <View>
      <Text>StylewithButton</Text>
      <Button title="Button" color={'red'} />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.button}
        underlayColor="#3A1078"
        onPress={() => {
          console.log('button pressed');
        }}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

export default StylewithButton;

const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: '#4E31AA',
    padding: 20,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

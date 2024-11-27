import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../screens/contact/styles';

const ContactItem = ({email, name}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

export default ContactItem;

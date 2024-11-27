import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {users} from './userContactList';
import ContactItem from '../../src/components/ContactItem';
import {styles} from './styles';

const ContactListScreen = () => {
  const render = ({item}) => (
    <ContactItem email={item.email} name={item.name} />
  );
  return (
    <View>
      <FlatList
        data={users}
        renderItem={render}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<Text style={styles.heading}>Contacts</Text>}
      />
    </View>
  );
};

export default ContactListScreen;

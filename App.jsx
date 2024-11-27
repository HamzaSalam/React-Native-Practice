import {View, Text, TextInput, StatusBar} from 'react-native';
import React from 'react';
import List from './src/components/List';
import LoginForm from './src/components/LoginForm';
import ContactListScreen from './screens/contact/ContactListScreen';
import Grid from './src/components/Grid';
import StylewithButton from './src/components/StylewithButton';
import Loader from './src/components/Loader';
import PressableComponent from './src/components/PressableComponent';
import SatusBarExample from './src/components/SatusBarExample';
import ModalDialogBox from './src/components/ModalDialogBox';

const App = () => {
  return (
    <>
      <View style={{flex: 1}}>
        {/* <Text>hello</Text>
      <Text>Wolrd </Text>
      <TextInput
        placeholder="email"
        style={{backgroundColor: '#000', color: '#fff'}}
        placeholderTextColor="#fff"
      /> */}
        {/* <List /> */}
        {/* <LoginForm /> */}
        {/* <ContactListScreen /> flatlist ma component kesy pass krty he  */}
        {/* <Grid /> */}
        {/* <StylewithButton /> */}
        {/* <Loader /> */}
        {/* <PressableComponent /> */}
        {/* <SatusBarExample /> */}
        <ModalDialogBox />
      </View>
    </>
  );
};

export default App;

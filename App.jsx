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
import AlertExample from './src/components/AlertExample';
import GET_API from './src/components/GET_API';
import POST_API from './src/components/POST_API';
import PUT_API from './src/components/PUT_API';
import PATCH_API from './src/components/PATCH_API';
import DELETE_API from './src/components/DELETE_API';
import PlatformExample from './src/components/PlatformExample';
import GET_API_LIST from './src/components/GET_API_LIST';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/navigation/Home';
import About from './src/components/navigation/About';

// const App = () => {
//   return (
//     <>
//       <View style={{flex: 1}}>
//         {/* <Text>hello</Text>
//       <Text>Wolrd </Text>
//       <TextInput
//         placeholder="email"
//         style={{backgroundColor: '#000', color: '#fff'}}
//         placeholderTextColor="#fff"
//       /> */}
//         {/* <List /> */}
//         {/* <LoginForm /> */}
//         {/* <ContactListScreen /> flatlist ma component kesy pass krty he  */}
//         {/* <Grid /> */}
//         {/* <StylewithButton /> */}
//         {/* <Loader /> */}
//         {/* <PressableComponent /> */}
//         {/* <SatusBarExample /> */}
//         {/* <ModalDialogBox />
//         <AlertExample/> */}
//         {/* <GET_API />
//         <POST_API />
//         <PUT_API />
//         <PATCH_API /> */}
//         {/* <DELETE_API /> */}
//         {/* <GET_API_LIST/> */}
//         <PlatformExample />
//       </View>
//     </>
//   );
// };

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

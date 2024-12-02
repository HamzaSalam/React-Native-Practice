import {
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  StyleSheet,
} from 'react-native';
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
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AsyncStorageExample from './src/components/AsyncStorageExample';
import ImageComponentExample from './src/components/ImageComponentExample';
import Parent from './src/components/context/Parent';
import FirstChild from './src/components/context/FirstChild';
import Subchild from './src/components/context/SubChild';

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
        {/* <ModalDialogBox />
        <AlertExample/> */}
        {/* <GET_API />
        <POST_API />
        <PUT_API />
        <PATCH_API /> */}
        {/* <DELETE_API /> */}
        {/* <GET_API_LIST/> */}
        {/* <PlatformExample /> */}
        {/* <AsyncStorageExample /> */}
        {/* <ImageComponentExample /> */}
        <Parent />
      </View>
    </>
  );
};

// open activity to activity

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="About"
//           component={About}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// DrawerLayout

// const App = () => {
//   const Drawer = createDrawerNavigator();
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//     // <NavigationContainer>
//     //   <Drawer.Navigator
//     //     screenOptions={{
//     //       drawerStyle: {backgroundColor: '#e6e6e6', width: 240},
//     //       drawerLabelStyle: {
//     //         fontSize: 18,
//     //         color: '#333',
//     //       },
//     //       headerStyle: {
//     //         backgroundColor: '#6200EE',
//     //       },
//     //       headerTintColor: '#fff',
//     //       headerTitleAlign: 'center',
//     //     }}>
//     //     <Drawer.Screen name="Home" component={Home} />
//     //     <Drawer.Screen name="About" component={About} />
//     //   </Drawer.Navigator>
//     // </NavigationContainer>
//   );
// };

// Bottom bar navigation

// const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   <View>
//     <Text>Home Screen</Text>
//     <Button title="button" />
//   </View>;
// };

// const ProfileScreen = () => {
//   <View>
//     <Text>Home Screen</Text>
//   </View>;
// };

// const SettingScreen = () => {
//   <View>
//     <Text style={{color: '#000'}}>Home Screen</Text>
//   </View>;
// };

// const MyTabs = createBottomTabNavigator();

// const getTabBarIcon = (routeName, focused, color, size) => {
//   let iconName;
//   if (routeName === 'Home') {
//     iconName = focused ? 'home' : 'home-outline';
//   } else if (routeName === 'Profile') {
//     iconName = focused ? 'person' : 'person-outline';
//   }

//   return <Icon name={iconName} size={size} color={color} />;
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MyTabs.Navigator
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused, color, size}) =>
//             getTabBarIcon(route.name, focused, color, size),
//           tabBarActiveTintColor: '#007bff',
//           tabBarInactiveTintColor: 'gray',
//           tabBarStyle: {
//             paddingBottom: 5,
//             height: 60,
//           },
//         })}>
//         <MyTabs.Screen name="Home" component={HomeScreen} />
//         <MyTabs.Screen name="Profile" component={ProfileScreen} />
//         <MyTabs.Screen name="Setting" component={SettingScreen} />
//       </MyTabs.Navigator>
//     </NavigationContainer>
//   );
// };

// const MyTab = createMaterialTopTabNavigator();

// const Chats = () => {
//   <View style={style.contianer}>
//     <Text style={style.text}>Home Screen</Text>
//     <Button title="button" />
//   </View>;
// };

// const Status = () => {
//   <View style={style.contianer}>
//     <Text style={style.text}>Screen</Text>
//   </View>;
// };

// const Calls = () => {
//   <View style={style.contianer}>
//     <Text style={style.text}>Home Screen</Text>
//   </View>;
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MyTab.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: '#007bff',
//           tabBarInactiveTintColor: 'gray',
//           tabBarStyle: {backgroundColor: '#fff'},
//           tabBarIndicatorStyle: {backgroundColor: '#007bff', height: 3},
//           tabBarLabelStyle: {fontSize: 16},
//         }}>
//         <MyTab.Screen name="Chats" component={Home} />
//         <MyTab.Screen name="Status" component={Status} />
//         <MyTab.Screen name="Calls" component={Calls} />
//       </MyTab.Navigator>
//     </NavigationContainer>
//   );
// };

// const style = StyleSheet.create({
//   contianer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f',
//   },
//   text: {
//     fontSize: 20,
//   },
// });

export default App;

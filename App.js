/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp';
import EnterKey from './screen/EnterKey';
import Home from './pages/Home';
import SearchHistory from './pages/SearchHistory';
import DetailBook from './pages/DetailBook';
import ShowData from './pages/ShowData';
import FlipBook from './pages/FlipBook';
import ListAudio from './pages/ListAudio';
import ListSong from './pages/ListSong';
import AppNavigator from './app/navigation/AppNavigator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="ListSong" component={ListSong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

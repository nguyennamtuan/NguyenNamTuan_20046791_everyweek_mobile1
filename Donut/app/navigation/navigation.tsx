import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import CakePopup from './CakePopup';

const Stack = createStackNavigator();


const Navigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

    <Stack.Screen name="CakePopup" component={CakePopup} />

  </Stack.Navigator>
  )
}

export default Navigation
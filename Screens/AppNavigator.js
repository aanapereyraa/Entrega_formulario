//Conexiones 
// AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '/prueba/Screens/HomeScreen';
import DetailsScreen from '/prueba/Screens/DetailsScreen';
import { Linking } from 'react-native';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['http://localhost:8081/'],
  config: {
    screens:{
      Home: 'home',
      'Sign Up': 'signup'
    }
  }
}

function AppNavigator() {
  return (
    <NavigationContainer linking={Linking}> 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
            headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{
            headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;


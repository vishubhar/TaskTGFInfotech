import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './Screens/Landing';
import WeightScreen from './Screens/WeightScreen';
import AgeScreen from './Screens/AgeScreen';
import GenderScreen from './Screens/GenderScreen';
import GoalScreen from './Screens/GoalScreen';
import HeightScreen from './Screens/HeightScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen
          name="LandingScreen"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WeightScreen"
          component={WeightScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HeightScreen"
          component={HeightScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AgeScreen"
          component={AgeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GenderScreen"
          component={GenderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GoalScreen"
          component={GoalScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

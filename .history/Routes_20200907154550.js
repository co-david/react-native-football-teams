import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/screens/Home';
import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import UserSettings from './app/screens/UserSettings';
import BusinessUserSettings from './app/screens/BusinessUserSettings';

const Stack = createStackNavigator();

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="UserSettings"
          component={UserSettings}
        />
        <Stack.Screen
          name="BusinessUserSettings"
          component={BusinessUserSettings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;
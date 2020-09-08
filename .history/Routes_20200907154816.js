import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Teams from './app/screens/Teams';
import Team from './app/screens/Team';

const Stack = createStackNavigator();

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true
        }}
      >
        <Stack.Screen
          name="Teams"
          component={Teams}
          options={{ title: 'Teams' }}
        />
        <Stack.Screen
          name="Team"
          component={Team}
          options={{ title: 'Team' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;
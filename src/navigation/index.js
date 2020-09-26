import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {User} from '../screens/Main';
import {Login, Registration} from '../screens/Auth';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator initialRouteName="Login" headerMode="none">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Registration" component={Registration} />
  </AuthStack.Navigator>
);

const RootNavigator = () => (
  <RootStack.Navigator initialRouteName="User" headerMode="none">
    <RootStack.Screen name="User" component={User} />
  </RootStack.Navigator>
);

const Navigator = () => {
  return (
    <NavigationContainer>
      {false ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;

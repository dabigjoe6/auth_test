import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {User} from '../screens/Main';
import {Login, Register} from '../screens/Auth';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator initialRouteName="Login" headerMode="none">
    <AuthStack.screen name="Login" component={Login} />
    <AuthStack.screen name="Register" comopnent={Register} />
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
      {true ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;

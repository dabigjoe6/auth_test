import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {User} from '../screens/Main';
import {Login, Registration} from '../screens/Auth';
import {StoreContext} from '../contexts/Store';

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
  const {store} = useContext(StoreContext);

  return (
    <NavigationContainer>
      {store.isAuth ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;

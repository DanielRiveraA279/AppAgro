import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../containers/Login';
import Home from '../containers/Home';
import NewProducer from '../containers/NewProducer';
import Setting from '../containers/Setting';
import SyncUp from '../containers/SyncUp';

const Stack = createStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NewProducer" component={NewProducer} />
            <Stack.Screen name="SyncUp" component={SyncUp} />
            <Stack.Screen name="Setting" component={Setting} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

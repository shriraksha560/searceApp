import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../Login/LoginContainer';
import DashboardContainer from '../Dashboard/DashboardContainer';
import UserProfileContainer from '../UserProfile/UserProfileContainer';

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginContainer"
        screenOptions={({route, navigation}) => ({
          gestureEnabled: true,
          cardOverlayEnabled: true,
        })}
        mode="modal"
        headerMode="none">
        <Stack.Screen name="LoginContainer" component={LoginContainer} />
        <Stack.Screen
          name="DashboardContainer"
          component={DashboardContainer}
        />
        <Stack.Screen
          name="UserProfileContainer"
          component={UserProfileContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationStack;

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, SignIn, SignUp, Welcome } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
          <Stack.Navigator>
              <Stack.Screen name="Splash" component={Splash}/>
              <Stack.Screen name="SignIn" component={SignIn}/>
              <Stack.Screen name="SignUp" component={SignUp}/>
              <Stack.Screen name="Welcome" component={Welcome}/>
          </Stack.Navigator>
      );
};

export default Router;
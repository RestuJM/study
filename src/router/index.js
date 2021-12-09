import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, SignIn, SignUp, Welcome } from '../pages';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#155fba" },
    headerTitleColor: { Color: "white" },
    headerTintColor: "white"
}

const Router = () => {
    return (
        <Stack.Navigator screenOptions={globalScreenOptions}>
            <Stack.Screen
                name="Splash"
                options={{ headerShown: false }}
                component={Splash} />
            <Stack.Screen
                name="SignIn"
                options={{ headerShown: false }}
                component={SignIn} />
            <Stack.Screen
                name="SignUp"
                options={{ headerShown: false }}
                component={SignUp} />
            <Stack.Screen
                name="Welcome"
                // options={{
                //     headerBackVisible: true,
                //     headerShown: false
                // }}
                component={Welcome} />
        </Stack.Navigator>
    );
};

export default Router;
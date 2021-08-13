import React from 'react';
import { useEffect } from 'react';
import { Text, View } from "react-native";

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 2000);
    });
    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    );
};

export default Splash;


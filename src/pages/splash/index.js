import React from 'react';
import { useEffect } from 'react';
import { StatusBar, Text, View } from "react-native";
import colors from '../../config/styles/colors';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 4000);
    });
    return (
        <View>
            <StatusBar
                backgroundColor={colors.colorPrimary}
            />
            <Text>Splash Screen</Text>
        </View>
    );
};

export default Splash;
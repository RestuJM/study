import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeAuth = props => {
    return (
        <View style={styles.screen}>
            <Text>Hello Aceng...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WelcomeAuth;

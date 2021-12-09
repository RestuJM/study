import { AuthCredential } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { View, StatusBar, Image, KeyboardAvoidingView, BackHandler, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';
import { signInAuth, authentication } from '../../../../firebase';
import styles from '../../../config/styles/custom';
import colors from '../../../config/styles/colors';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /* BackHandler */
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Perhatian", "pesan ....", [
                {
                    text: "cancel",
                    onPress: () => null,
                    style: "cancel",
                },
                {
                    text: "ok",
                    onPress: () => BackHandler.exitApp(),
                },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        /* Login */
        const unsubscribe = authentication.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.dispatch({
                    ...StackActions.replace("Welcome")
                });
            }
        })
        return unsubscribe;
    }, [])
    // function
    const signIn = () => {
        signInAuth(email, password)
    }

    const signUp = props => {
        navigation.navigate("SignUp")
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}
        >
            <StatusBar
                backgroundColor={colors.colorPrimary}
            />
            <Image
                source={{
                    uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png'
                }}
                style={{
                    width: 200,
                    height: 200,
                }}
            />
            <View style={styles.inputContainer}>
                <Input
                    containerStyle={styles.input}
                    placeholder="example@example.exa"
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={val => setEmail(val)}
                />
                <Input
                    placeholder="******"
                    secureTextEntry={true}
                    type="password"
                    value={password}
                    onChangeText={val => setPassword(val)}
                />
            </View>
            <Button
                containerStyle={styles.button}
                title="Sign In"
                onPress={signIn}
            />
            <Button
                containerStyle={styles.button}
                title="Sign Up"
                type="outline"
                onPress={signUp}
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};

export default SignIn;

import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import styles from '../../../config/styles/custom';
import { authentication, registAuth } from '../../../../firebase';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imgUrl, setImgUrl] = useState("")

    /* Sign Up */
    const signUp = () => {
        registAuth(email, password, name, imgUrl);
    }
    /* Sign In */
    const signIn = () => {
        navigation.navigate('SignIn')
    }
    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <Text h1 style={styles.titleHeader}>
                let's create an account here Aceng...
            </Text>
            <View style={styles.inputContainer}>
                {/* Full Name */}
                <Text style={{ marginLeft: 10 }}>
                    Full Name
                    <Text style={{ color: "red" }}>
                        *
                    </Text>
                </Text>
                <Input
                    containerStyle={styles.input}
                    placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(val) => setName(val)}
                />

                {/* Email */}
                <Text style={{ marginLeft: 10 }}>
                    Email
                    <Text style={{ color: "red" }}>
                        *
                    </Text>
                </Text>
                <Input
                    containerStyle={styles.input}
                    placeholder="example@example.exa"
                    type="email"
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                />

                {/* Password */}
                <Text style={{ marginLeft: 10 }}>
                    Password
                    <Text style={{ color: "red" }}>
                        *
                    </Text>
                </Text>
                <Input
                    containerStyle={styles.input}
                    placeholder="******"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                />

                {/* Confirm Password */}
                <Text style={{ marginLeft: 10 }}>
                    Image Url
                    <Text style={{ color: "grey" }}>
                        (Optional)
                    </Text>
                </Text>
                <Input
                    containerStyle={styles.input}
                    placeholder="******"
                    value={imgUrl}
                    onChangeText={(val) => setImgUrl(val)}
                />
            </View>
            <Button
                title="Sign Up"
                containerStyle={styles.button}
                onPress={signUp}
            />
            <Button
                title="Back to Sign In"
                type="outline"
                containerStyle={styles.button}
                onPress={signIn}
            />
        </KeyboardAvoidingView>
    );
};

export default SignUp;

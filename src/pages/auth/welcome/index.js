import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import colors from '../../../config/styles/colors';
import { authentication, db } from '../../../../firebase';
import CustomListItem from '../../../components/customListItem';
import { Avatar } from 'react-native-elements';

const WelcomeAuth = ({ navigation }) => {
    const name = authentication.currentUser.email;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
            headerLeft: () => (
                <View style={{ marginLeft: Platform.OS == "web" ? 17 : 0, marginRight: 20 }}>
                    <TouchableOpacity>
                        <Avatar rounded source={{
                            uri: "https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png"
                        }} />
                    </TouchableOpacity>
                </View>
            ),
        })
    }, [])
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar
                backgroundColor={colors.colorPrimary}
            />
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
});

export default WelcomeAuth;

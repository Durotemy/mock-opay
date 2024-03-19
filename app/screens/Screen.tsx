import React from "react";
import Constants from "expo-constants";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';



interface ScreenProps {
    children: React.ReactNode;
    style?: any;
}

const Screen: React.FC<ScreenProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <StatusBar style="dark" />
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%',
        backgroundColor:'white',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
    },
    view: {
        flex: 1,
        height: "100%",
        backgroundColor:'white'

    },
});
export default Screen;

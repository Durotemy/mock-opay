import React from "react";
import { Text, StyleSheet } from "react-native";


const AppText = ({ children, style, ...otherProps }: any) => {

    return (
        <Text style={[styles.text, style,]} {...otherProps}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'gray',
    },
})


export default AppText;

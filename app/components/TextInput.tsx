import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import useFont from '../hooks/useFont';
import usePassword from "../hooks/usePassword";
import colors from '@/constants/colors';


interface InputProps {
    icon?: string;
    onBlur?: any;
    style?: StyleProp<ViewStyle>;
    placeholder?: string;
    secureTextEntry?: any;
    onChange?: any;
    value?: string;
    phoneCode?: string;
    onChangeText?: any;
    width?: string | number;
    editable?: boolean;
    label?: string;
}


const AppTextInput = ({
    icon,
    label,
    style,
    secureTextEntry,
    onChangeText,
    value,
    width = "100%",
    editable = true,
    placeholder,
    ...otherProps
}: InputProps) => {

    const fontFamily = useFont();
    const password = usePassword(secureTextEntry);


    const getInputStyle = () => {
        const color = editable ? colors.black : colors.gray;
        return [styles.text, { color, fontFamily }];
    };
    const getPhoneCode = () => {
        // if (phoneCode) return <Text style={styles.phoneCode}>{phoneCode}</Text>;

        if (icon)
            return (
                // @ts-ignore
                <MaterialCommunityIcons
                    // @ts-ignore
                    name={icon}
                    size={18}
                    color={colors.gray}
                    style={styles.icon}
                />
            );

        return null;
    };
    return (
        <View style={[styles.container, style]}>
            {getPhoneCode()}
            {/* <Text>{label}</Text> */}
            <TextInput
                {...otherProps}
                editable={editable}
                placeholderTextColor={colors.gray}
                secureTextEntry={password.isVisible}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
                style={getInputStyle()}
            />
            <Touchable
                visible={value?.length && editable}
                icon="close-circle"
                onPress={() => onChangeText("")}
            />
            <Touchable
                // @ts-ignore
                visible={otherProps.textContentType === "password"}
                icon={password.isVisible ? "eye-off" : "eye"}
                onPress={password.togglePassword}
            />
        </View>


    )
}

function Touchable({ visible, icon, onPress }: any) {
    if (!visible) return null;

    return (
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <MaterialCommunityIcons name={icon} size={20} color={colors.gray} />
        </TouchableOpacity>
    );
}

export default AppTextInput;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        // paddingVertical: 12,
        paddingHorizontal: 15,
        // marginVertical: 10,
        height: 60,
        // marginBottom:20,
        marginTop:5,
        // backgroundColor: colors.medium,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#00B876",
    },
    icon: {
        marginRight: 10,
    },
    phoneCode: {
        color: colors.bloodRed,
        fontSize: 16,
        marginRight: 10,
        fontWeight: "500",
    },
    text: {
        flex: 1,
        fontSize: 16,
    },
    touchable: {
        paddingLeft: 10,
    },
});
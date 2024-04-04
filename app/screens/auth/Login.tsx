import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, } from 'react-native';
import Screen from '../Screen';
import AppForm from '@/app/components/forms/Forms';
import * as yup from "yup";
import FormField from '@/app/components/forms/FormField';
import SubmitButton from '@/app/components/forms/SubmitButton';
import AppText from '@/app/components/Text';
import AppKeyboardAvoidingView from '@/app/components/KeyboardAvoidScrolling';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import routes from '@/app/navigation/routes';
import { Platform } from 'react-native';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required()
        .matches(emailRegex, 'Invalid email address')
        .label("Email Address"),

    password: yup.string().
        // .matches(passwordRegex, 'Password must contain at least one uppercase letter and one special symbol').
        required().label("Password"),
});

const Login = () => {
    const navigation = useNavigation()

    console.log("lopiir")

    const handleSubmit = (values: any) => {
        console.log("herere", values);
        // @ts-ignore
        navigation.navigate(routes.register)
    }
    return (
        <Screen>
            <AppKeyboardAvoidingView>

                <View className="flex h-full  justify-center my-auto">
                    <View className="h-4/5 justify-center ">
                        <Text className="text-center font-bold  flex text-[20px] text-green">
                            Enter your details to login
                        </Text>
                        <View className="flex justify-center py-4 items-center">
                            <MaterialCommunityIcons name="account-lock-open-outline" size={88} color="#00B876" className="flex py-4" />
                        </View>

                        <View className="" >
                            <AppForm
                                initialValues={{ email: "", password: "" }}
                                // @ts-ignore
                                onSubmit={(values: any) => handleSubmit(values)}
                                validationSchema={validationSchema}
                            >

                                <FormField
                                    name={'email'}
                                    placeholder="Enter Email"
                                    icon="account"
                                />

                                <FormField name={'password'} placeholder="Enter Password" icon="lock" />
                                <View className="w-full flex mt-8">
                                    <SubmitButton text="Submit"
                                        className="bg-green"
                                        style={styles.btn}

                                    />
                                </View>

                            </AppForm>
                        </View>
                    </View>
                </View>
            </AppKeyboardAvoidingView>

        </Screen >
    )
}

export default Login

const styles = StyleSheet.create({
    box: {
        elevation: 10,
        backgroundColor: '#FFFFFF',
        padding: 5,
    },
    container: {
        flex: 1,
    },
    btn: {
        elevation: 10,
        backgroundColor: 'red'
    }
})
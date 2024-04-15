import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Screen from '../Screen';
import AppForm from '@/app/components/forms/Forms';
import * as yup from "yup";
import FormField from '@/app/components/forms/FormField';
import SubmitButton from '@/app/components/forms/SubmitButton';
import AppText from '@/app/components/Text';
import AppKeyboardAvoidingView from '@/app/components/KeyboardAvoidScrolling';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import routes from '@/app/navigation/routes';
import { RouteName } from '@/app/types';
import axios from 'axios';
import ActivityIndicator from '@/app/components/ActivityIndicator';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])[A-Za-z\d@$!%*?&]+$/;

const validationSchema = yup.object().shape({
    phone: yup
        .number()
        .required()
        .label("Phone "),

    address: yup
        .string()
        .required()
        .label("Phone "),

    password: yup.string().
        // .matches(passwordRegex, 'Password must contain at least one uppercase letter').
        required().label("Password"),
});

const ProfileDetails = ({ route }: any) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [loading, setLoading] = useState(false);
    console.log("route", route?.params?.values)

    const res = route?.params?.values
    // console.log("lopiir")

    const handleSubmit = async (values: { email: string, password: string, address: string }) => {

        const data = {
            name: route?.params?.values.name,
            gender: route?.params?.values?.gender,
            email: route?.params?.values?.email,
            address: values?.address,
            password: values?.password
        }

        try {
            setLoading(true)
            const response = await axios.post(`https://mock-opay-backend.onrender.com/create-user`, data)
            setLoading(false)
            console.log("respnse", response.data)
            navigation.navigate(routes.authsuccess)

        } catch (error) {
            Alert.alert("something went wrong")
        }

    }
    return (
        <Screen>
            <ActivityIndicator visible={loading} />
            <AppKeyboardAvoidingView>
                <View className=" flex h-full justify-center my-auto">

                    <Text className="text-center my-auto  h-[1/5]   text-green font-bold  flex text-[20px]">
                        Enter more of your details
                    </Text>
                    <View className="flex my-auto h-4/5" >

                        <AppForm
                            initialValues={{ address: "", phone: "", password: "", }}
                            // @ts-ignore
                            onSubmit={(values: any) => handleSubmit(values)}
                            validationSchema={validationSchema}
                        >
                            {/* @ts-ignore */}
                            <FormField
                                name={'phone'}
                                width={'80'}
                                placeholder="Enter Phonenumber"
                                icon="cellphone"
                            />
                            <FormField
                                name={'address'}
                                width={'80'}
                                placeholder="Enter Address"
                                icon="source-commit-local"
                            />


                            <FormField
                                name={'password'}
                                width={'80'}
                                placeholder="Enter Password"
                                icon="lock"
                            />

                            <View className="w-full flex mt-4">
                                <SubmitButton text="Submit"
                                    className="bg-green"
                                    style={styles.btn}
                                // onPress={handleSubmit}
                                />
                            </View>

                        </AppForm>
                    </View>


                </View>
            </AppKeyboardAvoidingView>
        </Screen >
    )
}

export default ProfileDetails;

const styles = StyleSheet.create({
    box: {
        elevation: 10,
        backgroundColor: '#FFFFFF',
        padding: 5,
    },
    btn: {
        elevation: 10,
        backgroundColor: 'red',
        fontSize: 40
    }
})
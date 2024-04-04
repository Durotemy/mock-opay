import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required()
        .matches(emailRegex, 'Invalid email address')
        .label("Email Address"),

    password: yup.string()
        .matches(passwordRegex, 'Password must contain at least one uppercase letter and one special symbol').
        required().label("Password"),
});

const ProfileDetails = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    // console.log("lopiir")

    const handleSubmit = (values: { email: string, password: string, address: string }) => {

        // navigation.navigate(routes.register)
        navigation.navigate(routes.register);
    }
    return (
        <Screen>
            <AppKeyboardAvoidingView>
                <View className=" flex h-full justify-center my-auto">

                    <Text className="text-center my-auto  h-[1/5]   text-green font-bold  flex text-[20px]">
                        Enter more your details
                    </Text>
                    <View className="flex my-auto h-4/5" >

                        <AppForm
                            initialValues={{ address: "", phonenumber: "", gender: "", }}
                            // @ts-ignore
                            onSubmit={(values: any) => handleSubmit(values)}
                            validationSchema={validationSchema}
                        >
                            {/* @ts-ignore */}
                            <FormField
                                name={'phonenumber'}
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
                                name={'gender'}
                                width={'80'}
                                placeholder="Enter Gender"
                                icon="account"
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
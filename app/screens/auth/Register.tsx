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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])/;

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

const Register = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();



  const handleSubmit = (values: any) => {
    console.log("herere", values);
    navigation.navigate(routes.details)
  }
  return (
    <Screen>
      <AppKeyboardAvoidingView>
        <View className="flex h-full justify-center my-auto">

          <Text className="  my-4 py-4  text-green text-center font-bold  flex text-[20px]">
            Enter your details to register
          </Text>

          <View className="flex  my-auto " >
            <AppForm
              initialValues={{ firstname: "", lastname: "", email: "", password: "", }}
              // @ts-ignore
              onSubmit={(values: any) => handleSubmit(values)}
              validationSchema={validationSchema}
            >
              {/* @ts-ignore */}
              <FormField name={'firstname'}
                width={'80'}
                placeholder="Enter First-name"
                icon="account"
              />
              <FormField
                name={'lastname'}
                width={'80'}
                placeholder="Enter Last-name"
                icon="account"
              />
              <FormField
                name={'email'}
                width={'80'}
                placeholder="Enter Email"
                icon="email"
              />


              <FormField
                name={'password'}
                width={'80'}
                placeholder="Enter Password"
                icon="lock"
              />

              <FormField
                name={'confirm-Password'}
                placeholder="Confirm Password"
                icon="lock"
              />

              <View className="w-full flex mt-4">
                <SubmitButton text="Next"
                  className="bg-green"
                  style={styles.btn}

                />
              </View>

            </AppForm>
          </View>
        </View>
      </AppKeyboardAvoidingView>
    </Screen >
  )
}

export default Register;

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
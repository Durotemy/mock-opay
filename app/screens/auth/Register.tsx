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

const validationSchema = yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .label("Name"),
  nickName: yup.string()

    .label("Name"),

  email: yup
    .string()
    .required()
    .matches(emailRegex, 'Invalid email address')
    .label("Email Address"),

    gender: yup
    .string()
    .required()
    .label("Email Address"),
});

const Register = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();



  const handleSubmit = (values: any) => {

    navigation.navigate(routes.details, {
      values: values
    })

  }
  return (
    <Screen>
      <AppKeyboardAvoidingView>
        <View className="flex h-full justify-center">

          <Text className="  my-4 py-4  text-green text-center font-bold  flex text-[20px]">
            Enter your details to register
          </Text>

          <View className="flex  my-auto " >
            <AppForm
              initialValues={{ name: "", nickName: "", email: "", gender: "", }}
              // @ts-ignore
              onSubmit={(values: any) => handleSubmit(values)}
              validationSchema={validationSchema}
            >
              {/* @ts-ignore */}
              <FormField name={'name'}
                width={'80'}
                placeholder="Enter Name"
                icon="account"
              />
              <FormField
                name={'nickName'}
                width={'80'}
                placeholder="Enter Nick-name (optioner)"
                icon="account"
              />
              <FormField
                name={'email'}
                width={'80'}
                placeholder="Enter Email"
                icon="email"
              />




              <FormField
                name={'gender'}
                placeholder="Enter Gender"
                icon="account"
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
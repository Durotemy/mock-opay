import React from 'react';
import { useFormikContext } from "formik";
import { Text, View } from 'react-native';

import ErrorMessage from "./ErrorMessage";
import AppTextInput from '../TextInput';

interface FormFieldProps {
    name: string;
    width?: string;
    placeholder: string;
    icon: string,
    otherProps?: any;
}

const FormField = ({ name, width = '100%', ...otherProps }: FormFieldProps) => {

    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();
    const typedValues = values as { [key: string]: string };

    return (
        <View className="flex flex-col mt-4">
            <Text className="capitalize text-green">{name}</Text>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={(text: string) => setFieldValue(name, text)}
                value={typedValues[name]}
                width={width}
                {...otherProps}
            />
            <ErrorMessage
                // @ts-ignore
                error={errors[name]} visible={touched[name]}
            />
        </View>

    )
}

export default FormField;
import React from 'react';
import { StyleSheet } from 'react-native';

import Input from "../Text";
import colors from '@/constants/colors';

interface Error {
    error: string;
    visible: any;

}

const ErrorMessage = ({ error, visible }: Error) => {
    if (!visible || !error) return null;

    return (
        <Input style={styles.error}>
            {error}
        </Input>
    )
}
const styles = StyleSheet.create({
    error: { color: colors.bloodRed },
});


export default ErrorMessage;
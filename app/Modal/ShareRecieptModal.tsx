import { StyleSheet, Text, View, Modal, TouchableOpacity, Animated, Alert } from 'react-native'
import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import Screen from '../screens/Screen';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import HeaderTitle from '../components/HeaderTitle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SubmitButton from '../components/forms/SubmitButton';
import { Button } from '../components';
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import routes from '../navigation/routes';


export const Details = ({ A, B }: any) => {
    return (
        <View className="flex justify-between py-2" style={styles.details}>
            <Text className="text-[#8492a6] text-[14px]">
                {A}
            </Text>
            <Text className="text-[14px]">
                {B}
            </Text>
        </View>
    )
}

const ShareReceiptModal = ({ setShowModal, data, transfer }: any) => {
    const [open, setOpen] = useState(false)
    const [bottomSheetVisible, setBottomSheetVisible] = useState(true);
    const [isBiometricSupported, setIsBiometricSupported] = useState(false)
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const formatAmount = (value: string) => {
        const floatValue = parseFloat(value);
        if (isNaN(floatValue)) {
            return "Invalid input";
        }
        const formattedValue = floatValue.toLocaleString('en') + ".00";
        return formattedValue;
    }


    const handleClose = () => {
        setShowModal(false)
    }


    useEffect(() => {

        (async () => {
            const compactible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compactible)
        })();
    })
    const fallBackToDefaultAuth = () => {
        console.log(`fall back`)
    }
    const alertComponent = (title: any, mess: any, btnTxt: any, btnFunc: any) => {
        return Alert.alert(title, mess, [
            {
                text: btnTxt,
                onPress: btnFunc
            }
        ])
    }

    const handlePay = async () => {
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

        if (!isBiometricAvailable) {
            Alert.alert('please fill')
        }
        if (isBiometricAvailable)
            await LocalAuthentication.supportedAuthenticationTypesAsync()

        const savedBio = await LocalAuthentication.isEnrolledAsync();
        // if (!savedBio) return Alert.alert("no found saved")

        const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login with biometric',
            cancelLabel: 'cancel',
            disableDeviceFallback: true
        })

        if (!biometricAuth || biometricAuth) {
            navigation.navigate(routes.success, {
                data: data,
                transfer: transfer,
            })

            const success = biometricAuth.success;
        }


    }

    return (
        <Modal
            visible={bottomSheetVisible}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.bottomSheetContainer}>
                <View style={styles.bottomSheet}>
                    

                   

                    
                </View>
            </View>
        </Modal>
    )
}

export default ShareReceiptModal;

const styles = StyleSheet.create({

    
    container: {

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bottomSheetContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%"
        // position: "relative"
    },
    bottomSheet: {
        display: "flex",
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "70%",
        elevation: 5,
        backgroundColor: "white",
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '98%',
        // position: "relative"
    },
    
    
    details: {
        display: 'flex',
        flexDirection: "row"
    },
    rectangleContainer: {
        elevation: 5,
    }
})
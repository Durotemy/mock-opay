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
import { useUser } from '../context/userContext';
import axios from 'axios';


export const Details = ({ A, B }: any) => {
    return (
        <View className="flex justify-between py-2" style={styles.details}>
            <Text className="text-[#8492a6] text-[14px] capitalize">
                {A}
            </Text>
            <Text className="text-[14px] capitalize">
                {B}
            </Text>
        </View>
    )
}

const TransferModal = ({ setShowModal, data, transfer }: any) => {
    const [open, setOpen] = useState(false)
    const [bottomSheetVisible, setBottomSheetVisible] = useState(true);
    const [isBiometricSupported, setIsBiometricSupported] = useState(false)
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const { user, setUser } = useUser();
    console.log("user000", user)

    
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

        // if (!isBiometricAvailable) {
        //     Alert.alert('please fill')
        // }
        // if (isBiometricAvailable)
        //     await LocalAuthentication.supportedAuthenticationTypesAsync()

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

        const details = {
            senderPhone: user?.phone,
            receiverPhone: data?.phone,
            amount: transfer?.amount
        }

        const response = await axios.post("https://mock-opay-backend.onrender.com/transaction", details)
        // console.log("response", response.data)

    }

    const AllowtoPay = () => {
        if (Number(user?.balance) > Number(transfer?.amount)) {
            return true
        }
        else {
            return false
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
                    <View>
                        <TouchableOpacity onPress={handleClose}>
                            <Text className="text-3xl p-2 text-gray">x</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row justify-center items-end">
                        <Text className="text-1xl mb-1">
                            ₦
                        </Text>
                        <Text className="text-3xl" >
                            {formatAmount(transfer?.amount)}
                        </Text>
                    </View>

                    <View className="p-2 mx-auto w-full mt-2">
                        <Details A={"Account Number"} B={data?.phone} />
                        <Details A={"Name"} B={data?.name} />
                        <Details A={"Amount"} B={`₦${formatAmount(transfer?.amount)}`} />
                    </View>

                    <View className="border-t border-gray border-solid  my-2" />
                    <View className="flex flex-row items-center justify-between bg-[#f8f8fa] p-4 rounded-lg" style={styles.rectangleContainer}>
                        <View className="flex flex-row justify-center items-center">
                            <View className="px-1">
                                <MaterialCommunityIcons name="file-cabinet" size={30} color="#00B876" />
                            </View>
                            <View className="flex flex-col justify-center px-2">
                                <Text className="text-gray text-[20px] items-start my-1"> ₦{user?.balance}</Text>
                                <Text className="text-gray font-bold">{AllowtoPay() ? 'Sufficient' : 'Insufficient'} </Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text className="text-green text-[16px]">Add money {'>'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.greenBox} className="  rounded-lg">
                        <View>
                            <Text className="text-gray p-2">Enjoy daily return and seamless payment</Text>
                        </View>
                    </View>
                    <View style={styles.btn}>
                        <Button text={AllowtoPay() ? 'Pay' : 'Insufficient Funds'} onPress={handlePay} disabled={!AllowtoPay()} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default TransferModal

const styles = StyleSheet.create({

    btn: {
        // padding: 10,
        position: "absolute",
        right: 0,
        // alignItems: "center",
        justifyContent: "center",
        bottom: 1,
        width: "100%"
    },
    greenBox: {
        backgroundColor: "#e2f5eb",
        display: "flex",
        width: "100%",
        alignSelf: "center",

        elevation: 2,
        height: 80,
        padding: 5,
        // padding: 40,
        position: "absolute",
        bottom: 50,
    },
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
    bottomSheetButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 15,
    },
    bottomSheetButtonText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    bar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 5,

    },
    details: {
        display: 'flex',
        flexDirection: "row"
    },
    rectangleContainer: {
        elevation: 5,
    }
})
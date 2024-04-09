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
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

import generateInvoiceHTML from '../components/generateInvoice';


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


    const closeModal = () => {
        setShowModal(false)
    }

    const handleDownloadInvoice = async () => {
        
        try {
            const htmlContent = generateInvoiceHTML(data, transfer);
            const pdf = await Print.printToFileAsync({ html: htmlContent });

            const customFileName = "InvoiceRecepit.pdf";

            const customUri = `${FileSystem.documentDirectory}${customFileName}`;

            await FileSystem.moveAsync({
                from: pdf.uri,
                to: customUri,
            });

            await Sharing.shareAsync(customUri);
        } catch (error) {
            console.error("Error generating or sharing PDF:", error);
        }
    };


    return (
        <Screen>
            <Modal
                visible={bottomSheetVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.bottomSheetContainer}>
                    <View style={styles.bottomSheet}>

                        <View className="flex flex-row items-center w-full">
                            <Text className=" flex  mx-auto items-center text-[17px] justify-center font-bold py-2">Share Receipt</Text>
                            <TouchableOpacity className="flex px-2" onPress={closeModal}>
                                <Text className='font-bold text-[17px]'>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="border-t border-gray border-solid  my-2" />
                        <TouchableOpacity onPress={handleDownloadInvoice}>
                            <Text className="text-center py-3 font-bold text-[17px]">PDF</Text>
                        </TouchableOpacity>
                        <View className="border-t border-gray border-solid w-full  my-2" />
                        <TouchableOpacity>
                            <Text className="text-center py-3 font-bold text-[17px]">Image</Text>
                        </TouchableOpacity>
                        {/* <View className="border-t border-gray border-solid  my-2" /> */}

                    </View>
                </View>
            </Modal>
        </Screen>
    )
}

export default ShareReceiptModal;

const styles = StyleSheet.create({


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
        // padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "25%",
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
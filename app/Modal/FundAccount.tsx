import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppForm from '../components/forms/Forms'
import SubmitButton from '../components/forms/SubmitButton'
import FormField from '../components/forms/FormField'
import * as yup from "yup";
import { useUser } from '../context/userContext'
import { fundWallet } from '../api/api'
import axios from "axios"
import AppKeyboardAvoidingView from '../components/KeyboardAvoidScrolling'

interface Props {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const FundAccount: React.FC<Props> = ({ setShowModal }) => {
    const { user, setUser } = useUser();

    const validationSchema = yup.object().shape({
        amount: yup
            .number()
            .required()
    });

    const handleSubmit = async (values: { amount: string, phone?: string, account?: string }) => {
        values.phone = values.account;
        delete values.account;
        const respose = await axios.post(`https://mock-opay-backend.onrender.com/fund`, values)
        console.log("rrrrr", respose)

        setUser({ ...user, balance: respose.data.user.balance });

        // setUser(respose.data)
        setShowModal(false)
        // fundWallet(values)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
            >
                <View style={styles.bottomSheetContainer}>
                    <View style={styles.bottomSheet} className='rounded-lg'>
                        <AppKeyboardAvoidingView>
                            <Text className="text-center py-2 text-[18px] text-green font-bold">Fund your account</Text>
                            <TouchableOpacity className="absolute right-0" onPress={closeModal}>
                                <Text className=" px-2 text-[20px] text-green">X</Text>
                            </TouchableOpacity>
                            <View className='w-10/12 flex mx-auto'>
                                <AppForm initialValues={{ amount: "", account: user?.phone }} onSubmit={(values: any) => handleSubmit(values)}
                                    validationSchema={validationSchema}>
                                    <FormField name={'account'} placeholder={''} icon={'account'} editable={false} />
                                    <FormField name={'amount'} placeholder={'Enter amount'} icon={'cash'} />
                                    <SubmitButton
                                        text="Fund Account"
                                    />
                                </AppForm>
                            </View>
                        </AppKeyboardAvoidingView>
                    </View>
                </View>
            </Modal >
        </View>
    )
}

export default FundAccount

const styles = StyleSheet.create({


    bottomSheetContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%"
        // position: "relative"
    },
    bottomSheet: {

        height: "45%",
        elevation: 5,
        backgroundColor: "white",
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '95%',
        // paddingVertical:10,

    },
})
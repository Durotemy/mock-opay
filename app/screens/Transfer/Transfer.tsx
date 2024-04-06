import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppForm from '@/app/components/forms/Forms';
import FormField from '@/app/components/forms/FormField';
import * as yup from "yup";
import SubmitButton from '@/app/components/forms/SubmitButton';
import AppKeyboardAvoidingView from '@/app/components/KeyboardAvoidScrolling';
import HeaderTitle from '@/app/components/HeaderTitle';
import { TransferModal } from '@/app/Modal';

const num = yup.string() || yup.number()

const validationSchema = yup.object().shape({
    Amount: num
        .required("Amount is required")
        .min(3, "Minimum amount is 10")
        .max(5000000, "Maximum amount is 5,000,000"),

    Remark: yup.string().label("Remark"),
});

const Transfer = ({ route }: any) => {
    const [formattedAmount, setFormattedAmount] = useState("");
    const [showModal, setShowModal] = useState(false)
    const [transferDetails, setTransferDetails] = useState()
    
    const data = route?.params?.item
    const name = route?.params?.item?.name;
    const account = route?.params?.item.number

    const handleSubmit = (values:any) => {
        console.log("values", values)
        setTransferDetails(values)
        setShowModal(true)
    }

    return (
        <Screen>
            <HeaderTitle title={'Transfer to Account'} />
            <View className="h-4/5 w-11/12 justify-center my-auto flex mx-auto">
                <View className="flex justify-center items-center">
                    <MaterialCommunityIcons name="account-circle" size={84} color="gray" className='text-center flex justify-center' />
                    <Text className="text-[20px] text-center py-2">{name}</Text>
                    <Text className="text-center">{account}</Text>
                </View>
                <AppKeyboardAvoidingView>
                    <View className="w-full flex mx-auto justify-center">

                        <AppForm
                            initialValues={{ Amount: "", Remark: "", }}
                            onSubmit={(values: any) => handleSubmit(values)}
                            validationSchema={validationSchema}
                        >
                            <FormField name={'Amount'} placeholder={'10.00 - 5,000,000.00'} icon={'pound'} />
                            <FormField name={'Remark'} placeholder={"What's this for?(optional)"} icon={''} />

                            <View className="mt-8">
                                <SubmitButton text="Confirm" />
                            </View>
                        </AppForm>

                    </View>
                </AppKeyboardAvoidingView>
            </View>
            {showModal && <TransferModal setShowModal={setShowModal} transfer={transferDetails} data={data}/>}
        </ Screen>
    )
}

export default Transfer

const styles = StyleSheet.create({})
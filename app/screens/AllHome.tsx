import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import Screen from './Screen'
import Headers from '../components/Headers'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Details from './Details';
import MoreDetails from './MoreDetails';
import { useUser } from '../context/userContext';
import FundAccount from '../Modal/FundAccount';
import axios from 'axios';

interface Props {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AllHome: React.FC<Props> = () => {
    const [showBalance, setShowBalance] = useState(true)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [refreshing, setRefreshing] = useState(false);

    const { user, setUser } = useUser();

    console.log("userdddrrrtt", user)

    const handledetails = () => {
        setShowBalance(prev => !prev);
    }
    const handleFund = () => {
        setShowModal(true)
    }

    const details = {
        phone: user?.phone
    }
    console.log("details", details)

    const onRefresh = async () => {
        try {
            const response = await axios.post("https://mock-opay-backend.onrender.com/refresh", {
                phone: user?.phone
            })
            console.log("response", response.data)
            setUser(response.data.user)
        }
        catch (error) {
            console.error(error)
        }


    }

    return (
        <Screen>
            {showModal && <FundAccount setShowModal={setShowModal} />}
            <Headers />
            <View className="bg-green h-38 mt-4 rounded-md flex flex-row justify-between shadow-2xl p-4">


                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={['green']}
                            progressBackgroundColor="#ffffff"
                        />
                    }
                    contentContainerStyle={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 8 }}

                //  
                >
                    <View className="flex flex-col  text-white">
                        <View className="flex flex-row py-2">

                            <Octicons name="shield-check" size={20} color="white" />
                            <Text className="text-white text-[13px] pl-2 pr-1">Available balance</Text>

                            <TouchableOpacity onPress={handledetails} className='pl-1'>
                                {showBalance ?
                                    <Octicons name="eye" size={18} color="white" /> :
                                    <Octicons name="eye-closed" size={18} color="white" />
                                }
                            </TouchableOpacity>
                        </View>

                        <Text className="text-2xl text-white font-bold">
                            {!showBalance ? '****' : `₦${user?.balance}`}
                        </Text>
                    </View>
                    <View className="flex flex-col justify-around">
                        <Text className="text-white text-[13px] py-2">Transaction History  {'>'}</Text>
                        <TouchableOpacity className="p-2 rounded-2xl align-center text-center  bg-white text-green flex flex-row" onPress={handleFund}>
                            <AntDesign name="plus" size={20} color="#00B876" />
                            <Text className="pl-1 font-bold text-green">Fund account</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <Details />
            <MoreDetails />
        </Screen>
    )
}

export default AllHome

const styles = StyleSheet.create({})
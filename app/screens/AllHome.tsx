import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Screen from './Screen'
import Headers from '../components/Headers'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Details from './Details';
import MoreDetails from './MoreDetails';


const AllHome = () => {
    const [showBalance, setShowBalance] = useState(true)

    const handledetails = () => {
        setShowBalance(prev => !prev);
    }
    return (
        <Screen>
            <Headers />
            <View className="bg-green h-28 mt-10 rounded-md flex flex-row justify-between shadow-2xl p-4">
                <View className="flex flex-col justify-around text-white">
                    <View className="flex flex-row">

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
                        {!showBalance ? '****' : '₦2,000.17'}
                    </Text>
                </View>
                <View className="flex flex-col justify-around">
                    <Text className="text-white text-[13px]">Transaction History  {'>'}</Text>
                    <View className="p-2 rounded-2xl align-center text-center  bg-white text-green flex flex-row">
                        <AntDesign name="plus" size={20} color="#00B876" />
                        <Text className="pl-2 font-bold text-green">Add money</Text>
                    </View>
                </View>
            </View>
            <Details />
            <MoreDetails />
        </Screen>
    )
}

export default AllHome

const styles = StyleSheet.create({})
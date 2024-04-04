import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import routes from '../navigation/routes';



const Headers = () => {
    const navigation = useNavigation();
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();


    const toggleCameraFacing = () => {
        // @ts-ignore
        navigation.navigate(routes.scan)
    }

    const handleProfile = () => {
        // @ts-ignore
        navigation.navigate(routes.profile)
    }

    return (

        <View className="flex flex-row  items-center w-full">
            <View className="flex flex-row  items-center w-[58%] ">
                <MaterialCommunityIcons name={'home-circle-outline'} size={30} color={'#00B876'} onPress={handleProfile} />
                <Text className=" pl-4 text-[20px] uppercase ">Hi, Emmanuel</Text>
            </View>
            <View className="flex flex-row  items-center w-[45%] justify-between pl-4 pr-4 ">
                <MaterialIcons name="headset-mic" size={25} color="black" />
                <TouchableOpacity>
                    <MaterialIcons name="qr-code-scanner" size={25} color="black" onPress={toggleCameraFacing} />
                </TouchableOpacity>
                <Ionicons name="notifications-outline" size={25} color="black" />
            </View>
        </View>
    )
}

export default Headers;

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
})
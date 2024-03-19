import React from 'react'
import Screen from './Screen'
import { StyleSheet, Text, View } from 'react-native'

import { CameraView, useCameraPermissions } from 'expo-camera/next';


const HandleScan = () => {
    return (
        <Screen>
            <CameraView>
                <View className="h-[100%] rounded">

                </View>
            </CameraView>
        </Screen>
    )
}

export default HandleScan

const styles = StyleSheet.create({

})
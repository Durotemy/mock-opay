import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import Screen from '../Screen';
import HeaderTitle from '@/app/components/HeaderTitle';
import LottieView from "lottie-react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ShareReceiptModal from '@/app/Modal/ShareRecieptModal';


const SuccessPage = () => {
    

    return (
        <Screen>
            <HeaderTitle
                title={"Share receipt"}
                history={'Done'}
            />
            <View style={styles.top} className="my-auto flex h-4/5 justify-center ">
                <LottieView
                    autoPlay
                    loop={false}
                    // onAnimationFinish={null}
                    source={require("../../../assets/animations/done.json")}
                    style={styles.animation}
                />

                <View style={styles.titleContainer}>
                    <Text style={styles.title} className="text-[18px]">Account created successfully!</Text>
                </View>
                
                <View className=" mt-auto flex flex-row  relative justify-between   w-full p-2">
                   
                </View>
            </View>
        </Screen>
    )
}

export default SuccessPage

const styles = StyleSheet.create({
    animation: {
        width: 100,
        height: 100,
    },
    back: {
        width: 35,
        height: 35,
        position: "absolute",
        top: 20,
        left: 20,
        // backgroundColor: colors.black,
        borderRadius: 20,
        zIndex: 20,
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        padding: 20,
        flex: 1,
    },
    subtitle: {
        textAlign: "center",
        // paddingTop: 10,
        width: "100%",
        // fontSize: sizes.verySmall,
    },
    title: {
        // fontSize: sizes.h3,
        // color: colors.black,
        fontWeight: "500"
    },
    titleContainer: {
        padding: 10,
        paddingHorizontal: 20,
        marginVertical: 1,
        borderRadius: 30,
        // backgroundColor: colors.lightGrayTwo,
    },
    top: {
        alignItems: "center",
        // flex: 1,
        justifyContent: "flex-start",
        width: "100%",
    },
})
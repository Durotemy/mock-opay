import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import Screen from '../Screen';
import HeaderTitle from '@/app/components/HeaderTitle';
import LottieView from "lottie-react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Share = ({ route }: any) => {

    console.log("route", route.params)
    const transfer = route.params.transfer;

    const formatAmount = (value: string) => {
        const floatValue = parseFloat(value);
        if (isNaN(floatValue)) {
            return "Invalid input";
        }
        const formattedValue = floatValue.toLocaleString('en') + ".00";
        return formattedValue;
    }
    const handleModal = () => {
        console.log("reaches")
    }

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
                    <Text style={styles.title} className="text-[18px]">Transfer Successful!</Text>
                </View>
                <Text style={styles.subtitle} className="text-[28px]">
                    ₦{formatAmount(transfer?.Amount)}
                </Text>
                <View className="mt-auto flex flex-row  justify-between w-full p-2">
                    <TouchableOpacity className="bg-[#F8F8FA] rounded w-5/12 h-[100px] items-center flex flex-col justify-center p-2" onPress={handleModal}>
                        <MaterialCommunityIcons name="cloud-download-outline" size={30} color="#00B876" />
                        <Text className="text-[17px]">Share receipt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-[#F8F8FA] rounded w-5/12 h-[100px] p-2 items-center flex flex-col justify-center">
                        <MaterialCommunityIcons name="account-plus-outline" size={30} color="#00B876" />
                        <Text className="text-[17px]">Add to favourites</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    )
}

export default Share

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
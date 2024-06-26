import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface titleProps {
    title?: string;
    history?: string;
}

const HeaderTitle = ({ title, history }: titleProps) => {
    const navigation = useNavigation()
    const handleBack = () => {
        navigation.goBack()
    }
    return (
        <View className="flex flex-row justify-between">
            <TouchableOpacity className="flex flex-row justify-center items-center" onPress={handleBack}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
                <Text className="text-[15px] mr-2 ml-2">{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text className="text-green text-[15px]">
                    {history}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderTitle

const styles = StyleSheet.create({})
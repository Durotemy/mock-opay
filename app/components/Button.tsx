import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'


interface ButtonProps {
    text: string,
    onPress: () => void
}

const Button = ({ text, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity className="flex items-center justify-center w-10/12 mx-auto p-4 border border-[#00B876] rounded-md mb-2 mt-2 uppecase"
            onPress={onPress}>

            <Text className="text-[#00B876] text-[16px]">{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({})
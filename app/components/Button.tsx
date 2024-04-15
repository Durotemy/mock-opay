import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'


interface ButtonProps {
    text: string,
    onPress: () => void
    disabled?: boolean
}

const Button = ({ text, onPress, disabled }: ButtonProps) => {
    return (
        <TouchableOpacity className={`flex items-center justify-center w-10/12 mx-auto p-4 border border-[#00B876] bg-green rounded-2xl mb-2 mt-2 uppecase ${disabled && 'cursor-not-allowed opacity-1'}`}
            onPress={!disabled ? onPress : undefined}
        >
            <Text className="text-white font-bold text-[20px]">{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({})
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

interface textProps {
    text: string
}

interface InputFieldProps {
    onSearch: (text: string) => void;
    placeholder: 'text'
}

const InputField: React.FC<InputFieldProps> = ({ onSearch, placeholder }) => {

    const [searchText, setSearchText] = useState<string>('')

    const handleSearch = (text: string) => {
        setSearchText(text);
        onSearch(text);
    }
    const handleCancel = () => {
        setSearchText('');
        onSearch('');
    }
    return (
        <View className="py-2 px-2 border border-gray rounded-lg bg-white flex flex-row justify-between ">
            <TextInput
                placeholder={placeholder}
                onChangeText={handleSearch}
                value={searchText}
            />
            {
                searchText && (
                    <TouchableOpacity onPress={handleCancel} className="rounded-xl cursor-pointer">
                        <Text className="text-gray text-[20px]">x</Text>
                    </TouchableOpacity>
                )
            }

        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
    input: {
        elevation: 10,
    }
})
import React, { useState } from 'react'
import Screen from '../Screen';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';


import { Button } from '@/app/components';

const ProfilePhoto = () => {
    const navigation = useNavigation()
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            // @ts-ignore
            setImage(result.assets[0].uri) as any
        }
    };

    const handleback = () => {
        navigation.goBack()
    }

    

    const handleCapture = () => {

    }

    return (
        <Screen>
            <View className="flex flex-row align-center mt-4">
                <MaterialCommunityIcons name="arrow-left" size={24} color="black" onPress={handleback} />
                <Text className="ml-4 text-[16px] text-[gray]">Photo</Text>
            </View>

            <TouchableOpacity className="flex items-center justify-center mt-12 bg-[red] h-[200px] p-2">
                <MaterialCommunityIcons name="camera-enhance-outline" size={80} color="white" className=" bg-lightGreen" style={styles.icon} />
            </TouchableOpacity>

            <View>
                <Button text="Select from album" onPress={pickImage} />
                <Button text="Take a Photo" onPress={handleCapture} />
            </View>
        </Screen>
    )
}

export default ProfilePhoto

const styles = StyleSheet.create({

    icon: {
        backgroundColor: '#00B876',
        borderRadius: 60,
        padding: 15,
    }
})
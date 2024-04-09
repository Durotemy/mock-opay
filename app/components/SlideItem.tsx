import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { Animated, Easing } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from './Button';



interface ItemProps {
    id: any,
    image: string,
    title: string
}

const SlideItem = ({ item }: any) => {
    const { height, width } = useWindowDimensions();

    const translateYImage = new Animated.Value(40);

    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
    }).start();

    return (
        <View style={[styles.container, { height, width }]} className=" w-full items-center">
            <Animated.Image
                source={item.img}
                resizeMode="contain"
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                translateY: translateYImage,
                            },
                        ],
                    },
                ]}
            />
            <View className="" style={styles.content}>
                <View className="flex flex-row items-center justify-between w-11/12 mx-2 rounded-lg p-2 ">

                    <View className=" bg-[#d0f7e9] rounded-2xl h-14 w-14 p-2 flex items-center justify-center">
                        <MaterialCommunityIcons name="bag-personal-outline" size={34} color="#00B876" />
                    </View>
                    <View className="w-9/12  rounded p-1">
                        <Text className="font-bold capitalize my-1 text-green">{item.title}</Text>
                        <Text className="text-green">{item.description}</Text>
                    </View>

                </View>

                <View className="w-full my-16 flex">
                    <Button text={'Get it Now'} onPress={function (): void {
                        throw new Error('Function not implemented.');
                    }} />
                </View>


            </View>
        </View>
    )
}

export default SlideItem

const styles = StyleSheet.create({
    image: {
        flex: 0.4,
        width: '90%',
        display: "flex",
        justifyContent: "center"
    },
    container: {
        // height: "100%"
    },
    content: {
        flex: 0.4,
        width:'100%'
    }
})
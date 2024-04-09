import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import Sliders from "../utils/card.utils"
import SlideItem from './SlideItem'
import Pagination from './Pagination'


const Slider = () => {
    const [index, setIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleOnScroll = (event: any) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            },
        )(event);
    };

    const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) => {


        if (viewableItems && viewableItems.length > 0 && viewableItems[0].index) {
            setIndex(viewableItems[0].index);
        }
        else {
            setIndex(0);
        }

    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;


    return (
        <View>
            <FlatList
                data={Sliders}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            <Pagination data={Sliders} scrollx={scrollX} index={index} />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({

})
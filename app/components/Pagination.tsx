import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native'
import React from 'react'

const Pagination = ({ data, scrollx, index }: any) => {

    const width = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            {
                data.map((_: any, id: any) => {

                    const inputRange = [(id - 1) * width, id * width, (id + 1) * width]

                    const dotWidth = scrollx.interpolate({
                        inputRange,
                        outputRange: [12, 30, 12],
                        extrapolate: 'clamp'
                    })
                    return <Animated.View key={id.toString()} style={[styles.dot, { width: dotWidth }]} />
                })
            }
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        flexDirection: 'row',
        width: '100%',
        display: 'flex',
      
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 3,
        backgroundColor: '#ccc',
    }
})
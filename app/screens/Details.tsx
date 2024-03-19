import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Screen from './Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Details = () => {
  return (
    <View className=" flex flex-row justify-between p-6" style={styles.container}>
      {data.map((ele) => (
        <TouchableOpacity className="flex flex-col items-center">
          <View className="bg-lightGreen p-2 rounded-lg">
            {/* @ts-ignore */}
            <MaterialCommunityIcons name={ele.icon} size={25} color={"#00B876"} className="font-bold" />
          </View>
          <Text className="capitalize font-bold mt-4">{ele.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 20,
  }
})

const data = [
  {
    id: '1',
    title: 'to opay',
    icon: 'account-convert',
  },
  {
    id: '2',
    title: 'to bank',
    icon: 'bank-outline',
  },
  {
    id: '3',
    title: 'withdraw',
    icon: 'share-all-outline',
  }
]
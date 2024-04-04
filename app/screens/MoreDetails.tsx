import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useWindowDimensions } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const MoreDetails = () => {
  const { height, width } = useWindowDimensions();


  const renderItem = ({ item }: any) => (
    <TouchableOpacity className="items-center justify-center">
      <TouchableOpacity className="bg-lighterGreen  flex flex-col items-center justify-center  h-12 w-12  ml-5 mr-5 mt-2 mb-2" style={styles.item}>
        {/* @ts-ignore */}
        <MaterialCommunityIcons name={item.icon} size={24} color={"#00B876"} className="font-bold" />
      </TouchableOpacity>
      <Text className="text-[12px]">{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container} className="flex justify-between">
      <FlatList
        contentContainerStyle={styles.flatListContent}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        ItemSeparatorComponent={() => <View style={styles.separator} />}

      />
    </View>
  )
}

export default MoreDetails;

const styles = StyleSheet.create({
  item: {
    elevation: 2,
    backgroundColor: '#ecfaf5',
    borderRadius: 30,
  },

  flatListContent: {
    display:"flex",
    justifyContent: "space-between",
    alignItems: 'center',
    // backgroundColor:'red',
  },
  container: {
    elevation: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 5,
    padding: 5,


  },
  separator: {
    width: 1,
    gap: 4,
    backgroundColor: 'transparent',
  },
})
const data = [
  {
    id: 1,
    title: 'Airtime',
    icon: 'cellphone'
  },
  {
    id: 2,
    title: 'Data',
    icon: 'upload-network'
  },
  {
    id: 3,
    title: 'Betting',
    icon: 'football-australian'
  },
  {
    id: 4,
    title: 'TV',
    icon: 'television'
  },
  {
    id: 5,
    title: 'OWealth',
    icon: 'piggy-bank-outline'
  },
  {
    id: 6,
    title: 'Loan',
    icon: 'hand-coin-outline'
  },
  {
    id: 7,
    title: 'Pay4aChild',
    icon: 'human-child'
  },
  {
    id: 8,
    title: 'More',
    icon: 'unfold-more-vertical'
  }
]


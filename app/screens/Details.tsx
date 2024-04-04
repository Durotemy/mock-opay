import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Screen from './Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import routes from '../navigation/routes';



type IconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];

// { data }: { data: { id: string; icon: IconName; title: string }[] }
const Details = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleNavigate = (name: string) => {
    if (name == "opay") {
      navigation.navigate(routes.opay)
    }
    console.log("route", name)
  }
  return (
    <View className=" flex flex-row justify-between  py-3 px-8" style={styles.container}>
      {data?.map((ele) => (
        <TouchableOpacity className="flex flex-col items-center " key={ele.id} onPress={() => handleNavigate(ele.name)}>
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
    name: 'opay',
    title: 'to opay',
    icon: 'account-convert',
  },
  {
    id: '2',
    name: 'bank',
    title: 'to bank',
    icon: 'bank-outline',
  },
  {
    id: '3',
    name: 'transfer',
    title: 'withdraw',
    icon: 'share-all-outline',
  }
]
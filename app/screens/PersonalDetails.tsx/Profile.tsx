import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../Screen';
import routes from '@/app/navigation/routes';


const Details = ({ A, B }: any) => {
  return (
    <View className="flex justify-between" style={styles.details}>
      <Text className="text-[#8492a6] text-[14px]">
        {A}
      </Text>
      <Text className="text-[14px]">
        {B}
      </Text>
    </View>
  )
}

const Profile = () => {
  const windowWidth = Dimensions.get('window').width;
  const tenPercentOfScreenWidth = windowWidth * 0.9;

  const navigation = useNavigation();

  const handleNavigator = () => {
    // @ts-ignore
    navigation.navigate(routes.ProfilePhoto)
  }

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View className='mx-auto   px-4'
          style={[styles.container, { width: tenPercentOfScreenWidth }]}
        >
          <TouchableOpacity className="p-2" style={styles.cameraContainer} onPress={handleNavigator}>
            <MaterialCommunityIcons name="camera-enhance-outline" size={40} color="white" style={styles.camera} />
          </TouchableOpacity>
          <Text className="text-center  mb-8 uppercase text-[16px]" >Emmanuel</Text>
          <View className=" mt-4 mb-5">
            <Details A={"Full Name"} B={"EMMANUEL SEUN DUROTIMI"} />
          </View>
          <View className=" mt-4 mb-5">
            <Details A={"Mobile Number"} B={"+2349033776421"} />
          </View>
          <View className=" mt-4 mb-5">
            <Details A={"Nick Name"} B={"durotemy"} />
          </View>
          <View className=" mt-4 mb-5">
            <Details A={"Gender"} B={"Male"} />
          </View>
          <View className=" mt-4 mb-5">
            <Details A={"Email"} B={"durotemy@gmail.com"} />
          </View>
          <View className=" mt-4 mb-5">
            <Details A={"Address"} B={"Okhun road opp 7up company"} />
          </View>
        </View>

        <View className="mx-auto w-11/12 mt-4 p-2 mb-2"
          style={[styles.container, { width: tenPercentOfScreenWidth }]}
        >
          <View className="  mb-5">
            <Details A={"Opay Account Number"} B={"09033776421"} />
          </View>

          <View className=" mt-4 mb-5">
            <Details A={"Address"} B={"Okhun road opp 7up company"} />
          </View>
          <View className=" mt-4 mb-5">
            <Details A={"BVN"} B={"2222222222287"} />
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
}

export default Profile

const styles = StyleSheet.create({
  details: {
    display: 'flex',
    flexDirection: "row"
  },
  camera: {
    padding: 20,
  },
  cameraContainer: {
    elevation: 1,
    borderRadius: 50,
    padding: 19,
    // height: 60,
    // width: 60,
    backgroundColor: '#00B876',
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    elevation: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  }
})
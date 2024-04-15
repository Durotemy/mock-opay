import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Screen from './Screen'
import { useNavigation } from '@react-navigation/native'
import routes from '../navigation/routes'

const Account = () => {
  const navigation = useNavigation()

  const handleLogin = () => {
    // @ts-ignore
    navigation.navigate(routes.register)

  }
  return (
    <Screen>
      <TouchableOpacity onPress={handleLogin}>
      <Text>Account</Text>
      </TouchableOpacity>
    </Screen>
  )
}

export default Account

const styles = StyleSheet.create({})
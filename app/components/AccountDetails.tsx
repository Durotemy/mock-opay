import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AccountDetails = () => {
  return (
    <View style={styles.container}>
      <Text >AccountDetails</Text>
    </View>
  )
}

export default AccountDetails

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#00B876',
        color:'#FFFFF',
        padding:5,
        width:'90%',
        display:'flex',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:10,
        height: 70,
    }
    
})
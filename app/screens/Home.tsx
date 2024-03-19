import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import React from 'react'
import Screen from './Screen'
import routes from '../navigation/routes';
import Headers from '../components/Headers';
import AccountDetails from '../components/AccountDetails';


const Home = () => {
  const navigation = useNavigation();

  const handleNavigate = () =>{
    // navigation.navigate(routes.cards);
  }
  return (
    <Screen>
      <View >
        <Headers />
        <AccountDetails />
        {/* <TouchableOpacity onPress={handleNavigate}>
          <Text>Click</Text>
        </TouchableOpacity> */}
      </View>
    </Screen>

  )
}

export default Home
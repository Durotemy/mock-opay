import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../Screen'
import { MaterialIcons } from '@expo/vector-icons';
import HeaderTitle from '@/app/components/HeaderTitle';
import { Button } from '@/app/components';
import { Details } from '@/app/Modal/TransferModal';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import routes from '@/app/navigation/routes';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const SuccessPage = ({ route }: any) => {

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  console.log(route)
  const data = route.params.data
  const detailsName = data.name
  const transfer = route.params.transfer

  const formatAmount = (value: string) => {
    const floatValue = parseFloat(value);
    if (isNaN(floatValue)) {
      return "Invalid input";
    }
    const formattedValue = floatValue.toLocaleString('en') + ".00";
    return formattedValue;
  }

  const handleBack = () => {
    navigation.goBack()
  }

  let today = new Date();
  let day = String(today.getDate()).padStart(2, '0');
  let monthIndex = today.getMonth();
  let year = today.getFullYear();

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let monthName = monthNames[monthIndex];
  let formattedDate = `${day},${monthName.toUpperCase()},${year}`;

  const handlePay = () => {
    navigation.navigate(routes.share, {
      transfer, data
    })
  }

  const info = [
    {
      id: 1,
      name: "Trasaction type",
      details: "money sent"
    },
    {
      id: 2,
      name: "Recipient Name",
      details: detailsName || 'Emman',
    },
    {
      id: 3,
      name: "Sender Details",
      details: "Emmanuel Durotimi"
    },
    {
      id: 3,
      name: "Transaction Reference",
      details: "009988776655224"
    }
  ]

  return (
    <>
      <View className="flex flex-row justify-between" style={styles.header}>
        <TouchableOpacity className="flex flex-row justify-center items-center" onPress={handleBack}>
          <MaterialIcons name="keyboard-arrow-left" size={26} color="black" />
          <Text className="text-[17px] mr-2 ml-2">{"Shared receipt"}</Text>
        </TouchableOpacity>
      </View>
      <View className=" mx-auto rounded" style={styles.container}>
        <View className="p-4 flex flex-row justify-between items-center">
          <Text className="text-green rounded bg-lightGreen w-12 h-12 text-[20px]"></Text>
          <Text>Transaction Receipt</Text>
        </View>
        <Text className="text-green text-center font-bold text-[30px] mb-1">₦{formatAmount(transfer?.amount)}</Text>
        <Text className="text-center text-[17px] uppercase">Success</Text>
        <Text className="text-center text-gray text-[12px] uppercase">{formattedDate}</Text>
        <View className="border-t border-gray border-solid  my-2" />

        <View>
          {info?.map((ele) => (
            <Details
              A={ele.name}
              B={ele.details}
            />
          ))}
        </View>


      </View>
      <View style={styles.btn}>
        <Button text={'Share Receipt'} onPress={handlePay} />
      </View>
    </>
  )
}

export default SuccessPage

const styles = StyleSheet.create({
  btn: {
    // padding: 10,
    position: "absolute",
    right: 0,
    // alignItems: "center",
    justifyContent: "center",
    bottom: 10,
    width: "100%"
  },
  header: {
    height: 60,
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 1,
    marginBottom: 10,
  },
  container: {
    // flex: 1,
    elevation: 5,
    height: '62%',
    width: "95%",
    margin: 'auto',

    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    borderStyle: 'dotted'

  },
  view: {
    height: "80%",
    backgroundColor: 'white'
  }

})
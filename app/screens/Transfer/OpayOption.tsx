import { StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Screen from '../Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HeaderTitle from '@/app/components/HeaderTitle'
import InputField from '@/app/components/forms/InputField'
import routes from '@/app/navigation/routes';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import ActivityIndicator from '@/app/components/ActivityIndicator';
import { getAlluser } from '@/app/api/api';


interface DataItem {
    name: string;
    number: string;
}

const OpayOption = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const [filteredData, setFilteredData] = useState<DataItem[]>([]);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const [data, setData] = useState([])


    const fetchData = async () => {
        try {
            const response = await getAlluser()
            console.log("resonse", response.data.users)
            setData(response.data?.users)
        } catch (error) {
            console.error("error", error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleSearch = (text: (string)) => {
        setSearchText(text);
        const filtered = data?.filter((item: { name: string, phone: string }) =>
            item.name.toLowerCase().includes(text.toLowerCase()) ||
            item.phone.includes(text)
        );
        // @ts-ignore
        setFilteredData(filtered);
    };

    const handlePress = (item: any) => {
        navigation.navigate(routes.transfer, {
            item: item
        })
    }

    useEffect(() => {
        // Simulating loading delay
        const timeout = setTimeout(() => {
            setIsLoading(false); // Set loading to false after 3 seconds
        }, 3000);

        // Clear timeout to prevent memory leaks
        return () => clearTimeout(timeout);
    }, []); // Run only on initial render

    interface itemProp {
        phone: string | any;
        name?: string;
        id?: string;
    }

    return (
        <Screen>
            {/* <ActivityIndicator  visible={isLoading}/> */}
            <View>
                <HeaderTitle title={'Transfer to account'} />
            </View>
            <View className="mt-8 p-2">
                <Text className="font-bold text-[20px] pb-4">Recipient Account</Text>

                <InputField onSearch={handleSearch} placeholder="Phone No./Opay Account No./Name" />

                <View className="bg-lightGreen mt-8 mb-4 py-2 rounded-xl flex-row items-center  flex px-2">
                    <MaterialCommunityIcons name="cash-plus" size={24} color="#00B876" />
                    <Text className="text-green font-bold p-2">Instant, Zero Issues, Free</Text>
                </View>
                <View style={styles.row} className="rounded-lg">
                    <FlatList
                        data={filteredData}
                        renderItem={({ item }:any) => (
                            <TouchableOpacity className="flex flex-row rounded-lg items-center px-4 py-4" key={item.id} onPress={() => handlePress(item)}>
                                <MaterialCommunityIcons name="account-circle-outline" size={36} color="gray" />
                                <View className="flex flex-column pl-2">
                                    <Text key={item.id}>{item.name}</Text>
                                    <Text>
                                        {item.phone}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}

                    />
                </View>
            </View>
        </Screen>
    )
}

export default OpayOption


// const data = [
//     {
//         name: 'David Olusanya Gabriel',
//         number: '09022778899'
//     },
//     {
//         name: 'Doris Ikhimwin Osarenren',
//         number: '08023370998'
//     },
//     {
//         name: 'Oreoluwa Banimoh',
//         number: '09023370998'
//     },
//     {
//         name: 'Deborah Osayuwa',
//         number: '07023370998'
//     },
//     {
//         name: "Adewale Ademola",
//         number: "0978915201"
//     },
//     {
//         name: 'John Doe',
//         number: "083472846782"
//     },
//     {
//         name: "Femi Lazarus",
//         number: '08066998872'
//     },
//     {
//         name: "Opeoluwa Ojo",
//         number: '08060098872'
//     },
//     {
//         name: "Sunday Peter",
//         number: '08066798872'
//     }
// ]

const styles = StyleSheet.create({
    row: {
        elevation: 5,
        backgroundColor: '#ffffff'
    },
    separator: {
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        marginVertical: 4,
    },
})
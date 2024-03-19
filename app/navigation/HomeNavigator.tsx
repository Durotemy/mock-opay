import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import routes from './routes';
import { Home } from '../screens';
import Cardss from '../screens/Cardss';
import AllHome from '../screens/AllHome';
import HandleScan from '../screens/HandleScan';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={routes.allhome}
        >
            <Stack.Screen
                name={routes.allhome}
                component={AllHome}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name={routes.cards}
                component={Cardss}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={routes.scan}
                component={HandleScan}
                options={{
                    headerShown: true,
                    title: 'Scan QR Code',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>

    );
};

export default HomeNavigator;

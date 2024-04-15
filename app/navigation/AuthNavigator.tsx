import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import routes from './routes';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import AllHome from '../screens/AllHome';
import ProfileDetails from '../screens/auth/ProfileDetails';
import SuccessPage from '../screens/auth/SuccessPage';


const AuthNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator >
            <Stack.Screen
                name={routes.login}
                component={Login}
                options={{
                    // headerShown: true,
                    // title: 'Login page',
                    headerStyle: {
                        height: 70,
                        backgroundColor: '#00B876',
                        // color:'white'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 19,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 1,
                        shadowRadius: 10,
                    },
                }}
            />
            <Stack.Screen
                name={routes.register}
                component={Register}
                options={{
                    headerShown: true,
                    title: 'Register page',
                    headerStyle: {
                        height: 70,
                        backgroundColor: '#00B876',
                        // color:'white'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 19,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 1,
                        shadowRadius: 10,
                    },
                }}
            />
            <Stack.Screen
                name={routes.authsuccess}
                component={SuccessPage}
                options={{
                    headerShown: false,
                }}
            />


            <Stack.Screen
                name={routes.details}
                component={ProfileDetails}
                options={{
                    headerShown: true,
                    title: 'Register page > more details',
                    headerStyle: {
                        height: 70,
                        backgroundColor: '#00B876',
                        // color:'white'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 19,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 1,
                        shadowRadius: 10,
                    },
                }}
            />
            
            <Stack.Screen
                name={routes.authsuccess}
                component={SuccessPage}
                options={{
                    headerShown: false,
                }}
            />


        </Stack.Navigator>
    )
}
export default AuthNavigator;
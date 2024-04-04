import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import routes from './routes';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';


const AuthNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator >
            <Stack.Screen name={routes.login} component={Login}
                options={{
                    headerShown: true,
                    title: 'My Profile',
                    headerStyle: {
                        height: 70,
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontSize: 12,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 1,
                        shadowRadius: 10,
                    },
                }}
            />
            <Stack.Screen name={routes.register} component={Register} />

        </Stack.Navigator>
    )
}
export default AuthNavigator;
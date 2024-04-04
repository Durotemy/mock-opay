import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import routes from './routes';
import { Home } from '../screens';
import Cardss from '../screens/Cardss';
import AllHome from '../screens/AllHome';
import HandleScan from '../screens/HandleScan';
import Profile from '../screens/PersonalDetails.tsx/Profile';
import ProfilePhoto from '../screens/PersonalDetails.tsx/ProfilePhoto';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Details from '../screens/Details';
import ProfileDetails from '../screens/auth/ProfileDetails';
import OpayOption from '../screens/Transfer/OpayOption';
import Transfer from '../screens/Transfer/Transfer';


export type ScreenNames = ["Home", "Auth"] // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
// export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();


// const Stack = createStackNavigator();

const HomeNavigator = () => {
    const screens = [
        { name: routes.allhome, component: AllHome, options: { headerShown: false } },
        { name: routes.cards, component: Cardss, options: { headerShown: false } },
        {
            name: routes.scan, component: HandleScan, options: {
                ...sharedScreenOptions,
                title: 'Scan QR Code',
                headerTitleStyle: { fontWeight: 'bold', ...sharedScreenOptions.headerTitleStyle },
            }
        },
        {
            name: routes.profile, component: Profile, options: {
                ...sharedScreenOptions,
                // title: 'My Profile',
                // @ts-ignore
                headerTitleStyle: { fontSize: 17, ...sharedScreenOptions.headerTitleStyle },
            }
        },
        {
            name: routes.ProfilePhoto, component: ProfilePhoto, options: {
                ...sharedScreenOptions,
                // title: 'My Profile',
                // @ts-ignore
                headerTitleStyle: { fontSize: 12, ...sharedScreenOptions.headerTitleStyle },
            }
        },
        {
            name: routes.login, component: Login, options: {
                ...sharedScreenOptions,
                title: 'Login page',
            }
        },
        {
            name: routes.register, component: Register, options: {
                ...sharedScreenOptions,
                title: 'Register page',
            }
        },
        {
            name: routes.details, component: ProfileDetails, options: {
                ...sharedScreenOptions,
                title: 'Register page > more details',
            }
        },
        {
            name: routes.opay, component: OpayOption, options: {
                ...sharedScreenOptions,
                // title: 'Register page > more details',
            }
        },
    ];
    return (
        <Stack.Navigator
            // @ts-ignore
            initialRouteName={routes.allhome}
        >
            {/* {screens.map(screen => (
                // @ts-ignore
                <Stack.Screen key={screen.name} name={screen.name} component={screen.component} options={screen.options} />
            ))} */}
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
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'My Profile',
                    headerStyle: {
                        height: 70,
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontSize: 17,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 1,
                        shadowRadius: 10,
                        elevation: 10
                    },
                }}
                name={routes.profile}
                component={Profile}
            />

            <Stack.Screen
                name={routes.ProfilePhoto}
                component={ProfilePhoto}
                options={{
                    headerShown: false,
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
            <Stack.Screen
                name={routes.login}
                component={Login}
                options={{
                    headerShown: true,
                    title: 'Login page',
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
                name={routes.opay}
                component={OpayOption}
                options={{
                    headerShown: false,
                    // title: 'Register page > more details',
                    // headerStyle: {
                    //     height: 70,
                    //     backgroundColor: '#00B876',
                    //     // color:'white'
                    // },
                    // headerTintColor: 'white',
                    // headerTitleStyle: {
                    //     fontSize: 19,
                    //     shadowColor: 'rgba(0, 0, 0, 0.5)',
                    //     shadowOffset: { width: 2, height: 2 },
                    //     shadowOpacity: 1,
                    //     shadowRadius: 10,
                    // },
                }}
            />
            <Stack.Screen
                name={routes.transfer}
                component={Transfer}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>

    );
};

const sharedScreenOptions = {
    // headerShown: true,
    headerStyle: {
        height: 70,
        backgroundColor: '#00B876',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontSize: 19,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
};

export default HomeNavigator;

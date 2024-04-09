import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Account, Card, Finance, Rewards, Home } from "../screens";
import routes from "./routes";
import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const DrawerNavigation = () => {
    const navigation = useNavigation();
    const getTabBarIconColor = (focused: any) => focused ? '#00B876' : 'grey';

    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: '#00B876',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            {dataTabs.map((tab, index) => (
                <Tab.Screen
                    key={index}
                    name={tab.label}
                    component={tab.Component}
                    // @ts-ignore
                    onPress={() => navigation.navigate(routes.route)}
                    options={{
                        headerShown: true,
                        title: 'Purchase card',
                        tabBarIcon: ({ color, size, focused }) => (
                            // @ts-ignore
                            <MaterialCommunityIcons name={tab.icon} size={size} color={getTabBarIconColor(focused)}
                            />
                        ),

                        // headerShown: false,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export { DrawerNavigation };

const dataTabs = [
    {
        label: 'Home',
        icon: 'home-circle-outline',
        route: routes.allhome,
        Component: HomeNavigator,
        focused: 'home-circle'
    },
    {
        label: 'Reward',
        icon: 'gift-outline',
        route: routes.reward,
        Component: Rewards,
        focused: 'database-settings'
    },
    {
        label: 'Card',
        icon: 'card-account-details-outline',
        route: routes.card,
        Component: Card,
        focused: 'card-account-details'
    },
    {
        label: 'Finance',
        icon: 'finance',
        route: routes.reward,
        Component: Finance,
        focused: 'database-settings'
    },
    {
        label: 'Account',
        icon: 'account-circle-outline',
        route: routes.account,
        Component: Account,
        focused: 'database-settings'
    },
];

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigation } from './navigation/DrawerNavigator';
import { useUser, UserProvider } from './context/userContext'; // Import useUser and UserProvider
import AuthNavigator from './navigation/AuthNavigator';

const App = () => {
    // @ts-ignore
    const { user } = useUser();

    console.log("user", user);
    return (
        <NavigationContainer independent={true}>
            {/* <AuthNavigator /> */}
            {user ? <DrawerNavigation /> : <AuthNavigator />}
            {/* <DrawerNavigation /> */}
        </NavigationContainer>
    );
}

const AppWithUserProvider = () => (
    <UserProvider>
        <App />
    </UserProvider>
);

export default AppWithUserProvider;

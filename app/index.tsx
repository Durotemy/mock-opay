import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigation } from './navigation/DrawerNavigator';

const App = () => {
    return (
        <NavigationContainer independent={true}>
            <DrawerNavigation />
        </NavigationContainer>
    )
}

export default App;
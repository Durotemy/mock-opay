import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigation } from "./navigation/DrawerNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { NavigationIndependentTree } from "@react-navigation/native";

import { useUser, UserProvider } from "./context/userContext";

const App = () => {
  // @ts-ignore
  const { user } = useUser();

  console.log("user", user);
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        {!user ? <DrawerNavigation /> : <AuthNavigator />}
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

const AppWithUserProvider = () => (
  <UserProvider>
    <App />
  </UserProvider>
);

export default AppWithUserProvider;

import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../types';
import routes from '../navigation/routes';

export const navigateToRoute = (routeName: RouteName) => {
  const navigation = useNavigation();

  // Ensure the routeName is a valid key of routes
  if (routeName in routes) {
    // navigation.navigate(routes[routeName]);
  } else {
    console.error(`Invalid route name: ${routeName}`);
  }
};
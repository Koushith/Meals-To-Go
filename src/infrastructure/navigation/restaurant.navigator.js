import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../components/features/restaurants/screens/restaurants.screen";

const Stack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
    </Stack.Navigator>
  );
};

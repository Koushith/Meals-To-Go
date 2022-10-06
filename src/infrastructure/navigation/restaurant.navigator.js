import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";
import { RestaurantsScreen } from "../../components/features/restaurants/screens/restaurants.screen";
import { RestaurantDetails } from "../../components/features/restaurants/screens/restaurant-detail.screen";

const Stack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" screenOptions={{}}>
      <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
      <Stack.Screen name="RestaurandDetails" component={RestaurantDetails} />
    </Stack.Navigator>
  );
};

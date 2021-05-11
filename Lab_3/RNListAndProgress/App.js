import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import SortAndFilterScreen from "./components/SortAndFilterScreen";
import LazyLoadingScreen from "./components/LazyLoadingScreen";
import StepProgressScreen from "./components/StepProgressScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Spread Operator">
        <Tab.Screen
          name="Sort&Filter"
          component={SortAndFilterScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Icons name={"sort-numeric-ascending"} size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Lazy loading"
          component={LazyLoadingScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icons name={"loading"} size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Step progress"
          component={StepProgressScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icons name={"debug-step-over"} size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

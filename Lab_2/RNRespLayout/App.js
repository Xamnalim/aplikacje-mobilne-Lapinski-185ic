import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import SpreadOperScreen from "./components/SpreadOperScreen";
import RestParamsScreen from "./components/RestParamsScreen";
import ReactHooksScreen from "./components/ReactHooksScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Spread Operator">
        <Tab.Screen
          name="Spread Operator"
          component={SpreadOperScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Icons name={"dots-horizontal"} size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Rest Parameters"
          component={RestParamsScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icons name={"sleep"} size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="React Hooks useState"
          component={ReactHooksScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icons name={"hook"} size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

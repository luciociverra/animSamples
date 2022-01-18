import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuPrincipale from "./MenuPrincipale";
import Page2 from "./page2";
import Page3 from "./page3";
const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu Principale"
        component={MenuPrincipale}
        options={{ headerShown: false }}
      />

      <Stack.Group screenOptions={{ presentation: "modal", headerShown: true }}>
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Root;

const styles = StyleSheet.create({});


import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuPrincipale from "./MenuPrincipale";
import Page3 from "./page3";
import Page2 from "./page2";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Page8 from "./page8";
import FlatListPage from "./FlatList";
import Page10 from "./page10";
import Page11 from "./page11"; //Circular show
import Page12 from "./page12";
import drawer from "./drawer";
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
        <Stack.Screen name="Page4" component={Page4} />
        <Stack.Screen name="Page5" component={Page5} />
        <Stack.Screen name="Page6" component={Page6} />
        <Stack.Screen name="Page7" component={Page7} />
        <Stack.Screen name="Page8" component={Page8} />
        <Stack.Screen name="FlatList" component={FlatListPage} />
        <Stack.Screen name="Page10" component={Page10} />
        <Stack.Screen name="Page11" component={Page11} />
        <Stack.Screen name="Page12" component={Page12} />
        <Stack.Screen name="Drawer" component={drawer} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Root;

const styles = StyleSheet.create({});


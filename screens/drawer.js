import * as React from "react";
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Page11 from "./page11"; //Circular show
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PAGINA FEED</Text>
      <Text>MENU AZIONI DRAWER</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>1 Notifications Screen</Text>
      <Text>2 Notifications Screen</Text>
      <Text>3 Notifications Screen</Text>
      <Text>4 Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Circular show" component={Page11} />
    </Drawer.Navigator>
  );
}

export default function drawer() {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
  );
}

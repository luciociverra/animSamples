
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


const MenuPrincipale = ({navigation}) => {
  return (
    <View style={{marginTop: 100, alignItems: 'center'}}>
        <Pressable style={{borderWidth: 2, padding: 10, width: 300, alignItems: 'center'}}
        onPress={()=> navigation.navigate("Page2")}>
        <Text>
           2. FadeIn/FadeOut
        </Text>
        </Pressable>

        <Pressable style={{borderWidth: 2, padding: 10, width: 300, alignItems: 'center'}}
        onPress={()=> navigation.navigate("Page3")}>
        <Text>
           2. FadeIn/FadeOut
        </Text>
        </Pressable>

    </View>
  );
};

export default MenuPrincipale;

const styles = StyleSheet.create({});


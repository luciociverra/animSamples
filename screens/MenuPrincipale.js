
import React, {useEffect, useRef}  from "react";
import { Animated, Pressable, StyleSheet, Text, View,Button, Dimensions } from "react-native";


const MenuPrincipale = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const initPosition = {
    x: 0,
    y: -200,
  };

  useEffect(() => {
    Animated.spring(position, {
      toValue: {x: initPosition.x, y: 50}, //spostamento di 250px in verticale rispetto alla initPosition
      //tension: 40, //controlla la velocità, 40 è predefinito
      friction: 1,  //minore è il dato e più dura il rimbalzo (dopo il 6 non rimbalza più)
      //stiffness: 100, //coefficiente di rigidità della molla
      useNativeDriver: false,
    }).start(() => {
      //position.setValue(initPosition);
    });
  }, []);

  const position = useRef(new Animated.ValueXY(initPosition)).current;



  return (
    <View style={{marginTop: 100, alignItems: 'center'}}>

      <Animated.View style={position.getLayout()}>


        <Pressable style={{borderWidth: 2, padding: 10, width: 300, alignItems: 'center'}}
        onPress={()=> navigation.navigate("Page2")}>
        <Text>
           p2. Timing
        </Text>
        </Pressable>

        <Pressable style={{borderWidth: 2, padding: 10, width: 300, alignItems: 'center', marginTop:'10%'}}
        onPress={()=> navigation.navigate("Page3")}>
        <Text>
           p3. Animated.timing opacity
        </Text>
        </Pressable>

        <Pressable style={{borderWidth: 2, padding: 10, width: 300, alignItems: 'center', marginTop:'10%'}}
        onPress={()=> navigation.navigate("Page4")}>
        <Text>
           p4. Animated.timing rotation
        </Text>
        </Pressable>

        <Pressable style={{borderWidth: 2, padding: 10, width: 300, alignItems: 'center', marginTop:'10%'}}
        onPress={()=> navigation.navigate("Page5")}>
        <Text>
           p5. Spring
        </Text>
        </Pressable>

        <Pressable style={{borderWidth: 2, padding: 10, width: 300, alignItems: 'center', marginTop:'10%'}}
        onPress={()=> navigation.navigate("Page6")}>
        <Text>
           p6. Toast
        </Text>
        </Pressable>


        <Pressable style={{borderWidth: 2, padding: 10, width: 300, alignItems: 'center', marginTop:'10%'}}
        onPress={()=> navigation.navigate("Page7")}>
        <Text>
           p7. Pan GestureHandler
        </Text>
        </Pressable>

        <Pressable style={{borderWidth: 2, padding: 10, width: 300, alignItems: 'center', marginTop:'10%'}}
        onPress={()=> navigation.navigate("Page8")}>
        <Text>
           p8. Double Tap Gesture Handler
        </Text>
        </Pressable>

        </Animated.View>

    </View>
  );
};

export default MenuPrincipale;

const styles = StyleSheet.create({

});

 
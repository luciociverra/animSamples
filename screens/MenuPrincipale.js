
import React, {useEffect, useRef}  from "react";
import { Animated, Pressable, StyleSheet, Text, View,Button, Dimensions } from "react-native";
import { ScrollView, Swipeable } from "react-native-gesture-handler";
const { height } = Dimensions.get('window');

const MenuPrincipale = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const initPosition = {
    x: 0,
    y: 20, //-200 per rimbalzo
  };

  useEffect(() => {
    /* rimbalO MENU
    Animated.spring(position, {
      toValue: {x: initPosition.x, y: 50}, //spostamento di 250px in verticale rispetto alla initPosition
      //tension: 40, //controlla la velocità, 40 è predefinito
      friction: 1,  //minore è il dato e più dura il rimbalzo (dopo il 6 non rimbalza più)
      //stiffness: 100, //coefficiente di rigidità della molla
      useNativeDriver: false,
    }).start(() => {
      //position.setValue(initPosition);
    });*/
  }, []);

  const position = useRef(new Animated.ValueXY(initPosition)).current;

  return (
    <View style={{marginTop: 20, alignItems: 'center'}}>

    <ScrollView style={{height: height}}>
      <Animated.View style={position.getLayout()}>


        <Pressable style={styles.menuButton} onPress={()=> navigation.navigate("Page2")}>
        <Text>p2. Timing</Text>
        </Pressable>

        <Pressable style={styles.menuButton} onPress={()=> navigation.navigate("Page3")}>
        <Text>p3. Animated.timing opacity</Text>
        </Pressable>

        <Pressable style={styles.menuButton} onPress={()=> navigation.navigate("Page4")}>
        <Text>p4. Animated.timing rotation</Text>
        </Pressable>

        <Pressable style={styles.menuButton} onPress={()=> navigation.navigate("Page5")}>
        <Text>p5. Spring</Text>
        </Pressable>

        <Pressable style={styles.menuButton} onPress={()=> navigation.navigate("Page6")}>
        <Text>p6. Toast</Text>
        </Pressable>

        <Pressable style={styles.menuButton} onPress={()=> navigation.navigate("Page7")}>
        <Text>p7. Pan GestureHandler</Text>
        </Pressable>

        <Pressable style={styles.menuButton} onPress={()=> navigation.navigate("Page8")}>
        <Text>p8. Double Tap Gesture Handler</Text>
        </Pressable>

        <Pressable style={styles.menuButton}  onPress={()=> navigation.navigate("FlatList")}>
        <Text>p9. FlatList</Text>
        </Pressable>

        <Pressable style={styles.menuButton}nPress={()=> navigation.navigate("Page10")}>
        <Text> p10. Swipe Gesture</Text>
        </Pressable>

        <Pressable style={styles.menuButton} onPress={()=> navigation.navigate("Page11")}>
        <Text>p11. Circular show</Text>
        </Pressable>

        <Pressable style={styles.menuButton} onPress={()=> navigation.navigate("Page12")}>
        <Text>p12. ???</Text>
        </Pressable>
        <Pressable style={styles.menuButton} onPress={()=> navigation.navigate("Drawer")}>
        <Text>Drawer</Text>
        </Pressable>
        
        
        </Animated.View>
        </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
   menuButton:{
      borderWidth: 2, padding: 15, width: 300, alignItems: 'center', marginTop:10
    }});
export default MenuPrincipale;



 
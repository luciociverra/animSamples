import React, { useRef, useEffect} from "react";
import { Text, View, StyleSheet, Button, SafeAreaView, Value, Pressable, Animated, 
Dimensions } from 'react-native';


function Page3() {   

  const translation = useRef(new Animated.Value(10)).current; // 0 px di distanza sx in partenza

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 150,  //spostamento pixel da bordo sx 
      duration: 3000,  //durata spostamento
      useNativeDriver: true,
    }).start();
  }, []);

   
    return (

      <View style={styles.container}>
      <Animated.View 
      style={{
        width: 100,
        height: 100,
        borderRadius: 50, 
        backgroundColor: '#ff33cc',

        transform:[
          {translateX: translation},
          {translateY: 200},
        ],
        opacity: translation.interpolate( { 
          inputRange: [0, 100], 
          outputRange: [0, 1],  // This means that opacity will equal 0.5 when the translation is 50, and 1 when it is 100.
          //extrapolateLeft: 'clamp', //"cosa dovrebbe accadere al di fuori degli intervalli e quale tipo di schema dovrebbero seguire i valori esterni".
          //extrapolateRight: 'clamp', 
        } ),
      }}
      />
      </View>
    )
}


const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  }});

export default Page3;
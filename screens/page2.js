
import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView,Pressable } from 'react-native';


const Page2 = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const leftValue= useRef(new Animated.Value(0)).current;
  const heightValue= useRef(new Animated.Value(0)).current;
  const commonTime = 3000;


  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true
    }).start();
  };

  const moveSquare= () =>{
    Animated.parallel([
        Animated.timing(leftValue, {
            toValue: 300, duration: commonTime, useNativeDriver: false
        }),
        Animated.timing(heightValue, {
            toValue: 20, duration: commonTime,useNativeDriver: false
        })
    ]).start(() => {  //callback
       //backSquare()
    });
  };

  const backSquare= () =>{
    Animated.parallel([
        Animated.timing(leftValue, {
            toValue: 0, duration: commonTime, useNativeDriver: false
        }),
        Animated.timing(heightValue, {
            toValue: 100, duration: commonTime,useNativeDriver: false
        })
    ]).start(() => {
       //moveSquare()
    });
  };


  return (
    <SafeAreaView style={styles.container}>

      {/*Away and Back square*/}
     
      <Animated.View style={{ width: 100,
                 height: heightValue,
                 backgroundColor: 'red',
                 left: leftValue}} />

            <Pressable 
        onPress={moveSquare}>
            <Text style={{marginBottom: 20, marginTop: 20, fontSize: 21}}>
                Away
            </Text>
        </Pressable>

        <Pressable 
        onPress={backSquare}>
            <Text style={{fontSize: 21}}>
                Back
            </Text>
        </Pressable>


      {/*Fade In & Out*/}
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>

      <Text>
        reference.current accesses the reference value, and reference.current = newValue updates the reference value.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default Page2;



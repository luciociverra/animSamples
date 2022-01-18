import React, { useRef, useEffect} from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Value, Pressable } from 'react-native';

const Page3= () => {
    const leftValue= useRef(new Animated.Value(0)).current;
    const heightValue= useRef(new Animated.Value(100)).current;
    const commonTime = 3000;


    useEffect(() => {
        moveSquare()
    }, [])

    const moveSquare= () =>{

        Animated.parallel([
            Animated.timing(leftValue, {
                toValue: 300, duration: commonTime, useNativeDriver: false
            }),
            Animated.timing(heightValue, {
                toValue: 200, duration: commonTime,useNativeDriver: false
            })
        ]).start(() => {  //callback
           backSquare()
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
           moveSquare()
        });
    }

    return (
        <View>
            <Animated.View style={{ width: 100,
                 height: heightValue,
                 backgroundColor: 'red',
                 left: leftValue}} />

            <Pressable 
        onPress={moveSquare}>
            <Text>
                Away
            </Text>
        </Pressable>

        <Pressable 
        onPress={backSquare}>
            <Text>
                Back
            </Text>
        </Pressable>
        </View>
    )
}

export default Page3;
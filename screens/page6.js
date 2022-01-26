import React, { useState, useEffect } from 'react';
import { StatusBar, Text} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle, useSharedValue, withDelay, withTiming,
} from 'react-native-reanimated';

// global container for messages
export default function Page6() {
 


  const height = 300;
  const show = useSharedValue(height);

  const styles = {
    container: useAnimatedStyle(() => ({
      height,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      position: 'absolute',
      paddingTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      transform: [
        { translateY: show.value },
      ],
    })),
    text: {
      fontSize: 15,
      fontWeight: '500',
      color: 'black',
    },
  };

  const vai=()=>{

    show.value = withTiming(show.value-40);
    setTimeout(() => {
        vai();
      }, 100);  
  }

  // show/hide when message set
  useEffect(() => {
   {
      show.value = withTiming(0);
      //show.value = withDelay(2000, withTiming(-330));
    vai();    }
  }, []);

  return (
    <Animated.View style={styles.container}>
      <Text style={styles.text}>hola bitcches</Text>
    </Animated.View>
  );
}


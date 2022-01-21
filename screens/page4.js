import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export default function Page4 (){

  const translation = useRef(new Animated.Value(10)).current; // 0 px di distanza sx in partenza
  
  useEffect(() => {
    Animated.timing(translation, {
      toValue: 150,  //spostamento pixel da bordo sx 
      duration: 3000,  //durata spostamento
      useNativeDriver: true,
    }).start();
  }, []);
   // https://eveningkid.medium.com/interpolation-with-react-native-animations-853e467fe5c1
  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderBottomColor: 'black',
        borderTopColor: 'red',
        borderRightColor: 'blue',
        borderLeftColor: 'yellow',
        borderWidth: 10,
        transform: [
          { translateX: translation},
          { translateY: 200}, //X spostamento orizz, Y verticale
          {
            rotate: translation.interpolate({
              inputRange: [0, 100], //
              outputRange: ['0deg', '90deg'], //spostamento 1 o 4 lati/ 90, 360dgr
            })
          },
        ],    
      }}
    />
  );
}
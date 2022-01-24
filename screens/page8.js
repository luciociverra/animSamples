import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

export default function TapGesture() {

  const [likeColour, setLikeColour] = useState('#28b5b5'); // colore di partenza
  const doubleTapRef = useRef(null);



  const onDoubleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      likeColour === '#977bd1'
        ? setLikeColour('#fff700')
        : setLikeColour('#977bd1');
    }
  };

  const styles = StyleSheet.create({
    square: {
      width: 150,
      height: 150,
      borderRadius: 20,
      backgroundColor: likeColour,
      margin: 120
     },
  });

  return (

    <View style={{width: '100%', height: '100%', backgroundColor: '#e1caeb'}}>
      <Text style={{alignSelf: 'center', marginTop: 100}}>Double Tap Gesture Handler</Text>

        <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={onDoubleTapEvent}
          numberOfTaps={2}
        >
          <View style={styles.square} />
        </TapGestureHandler>
    </View>

  );
}
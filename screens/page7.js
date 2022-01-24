import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Animated, StyleSheet, Text } from 'react-native';


export default class Page7 extends Component {

  translateX = new Animated.Value(0);
  translateY = new Animated.Value(0);

  onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: this.translateX,
          translationY: this.translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  render() {
    return (
      <>
      {/*Pan Gesture Handler*/}

        <Text style={{padding: 100}}>Pan Gesture Handler</Text>
        <PanGestureHandler onGestureEvent={this.onPanGestureEvent}>
          <Animated.View
            style={[
              styles.circle,
              {
                transform: [
                  {
                    translateX: this.translateX,
                  },
                  {
                    translateY: this.translateY,
                  },
                ],
              },
            ]}
          />
        </PanGestureHandler>
        <StatusBar style="auto" />
      </>
    );
  }
}
const styles = StyleSheet.create({
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#f29100',
    margin: 120,
  },
});
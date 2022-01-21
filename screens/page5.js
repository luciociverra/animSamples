import React, {useRef} from 'react';
import {StyleSheet, Dimensions, View, Animated, Button} from 'react-native';

export default function Page5(){
  const windowWidth = Dimensions.get('window').width;
  const initPosition = {
    x: parseInt(windowWidth / 2) - 50,
    y: 0,
  };

  const position = useRef(new Animated.ValueXY(initPosition)).current;

  const animate = () => {
    Animated.spring(position, {
      toValue: {x: initPosition.x, y: 250}, //spostamento di 250px in verticale rispetto alla initPosition
      //tension: 40, //controlla la velocità, 40 è predefinito
      friction: 0,  //minore è il dato e più dura il rimbalzo (dopo il 6 non rimbalza più)
      //stiffness: 100, //coefficiente di rigidità della molla
      useNativeDriver: false,
    }).start(() => {
      position.setValue(initPosition);
    });
  };

  return (
    <View style={styles.container}>
      <Button onPress={animate} title="RUN" />
      <Animated.View style={[position.getLayout(), styles.ball]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },
});
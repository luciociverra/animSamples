import React, { useRef } from "react";
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, 
  StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, 
  SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');
// PAGINA  https://www.youtube.com/watch?v=F8x-dyIsrJ8
const images = {
  man:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  skullcandy:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  help:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    man1:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids1:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  skullcandy1:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  help1:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',

    man2:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women2:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids2:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  skullcandy2:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  help2:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',

};
const DATA = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  image: images[i],
}));
const BG_IMG="https://www.suipassi.it/mind/images/splash.png";
const SPACING = 20;
const AVATAR_SIZE = 70;
const item_size=AVATAR_SIZE+SPACING*3;
// effetti pasando da Flatlist ad Animated flatlist
const FlatListPage =() => {
   const scrollY = useRef(new Animated.Value(0)).current;
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image source={{uri:BG_IMG}} style={StyleSheet.absoluteFillObject} />
         <Animated.FlatList 
        data={DATA}
        keyExtractor={item=>item.key}
        contentContainerStyle={{padding:SPACING,paddingTop:StatusBar.currentHeight || 42}}

        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: { y : scrollY}}}],
          { useNativeDriver: true}
        )}
        
        renderItem={({item,index}) => {
         const inputRange=[
           -1,
           0,
           item_size * index,
           item_size * (index+2)
         ]

         const opacityInputRange=[
          -1,
          0,
          item_size * index,
          item_size * (index+.5)
         ]

         const scale = scrollY.interpolate({
           inputRange, // per ogno aumento definito sopra
           outputRange:[1,1,1,0] // scale varrà..0 rimpicc. 2 ingrandisce
         })
         const opacity = scrollY.interpolate({
          inputRange:opacityInputRange,
          outputRange:[1,1,1,0]
        })


         return <Animated.View style={{flexDirection:'row',padding:SPACING,marginBottom:SPACING,backgroundColor:'#f7f7f7',borderRadius:16,
         shadowColor:"red",
         shadowOffset:{ width:0, height:10 },
         shadowOpacity:.2, // abbassa l'ombra
         shadowRadius:20,
         opacity,             // GESTISTA DA ANIMATION
         transform:[{scale}]  // GESTITA DA ANIMATION
        }}>
          <Image source={{uri:item.image}}
          style={{width:AVATAR_SIZE,height:AVATAR_SIZE,borderRadius:AVATAR_SIZE,
          marginRight:SPACING/2}}

          />
          <View>
          <Text style={{fontWeight:'700',fontSize:20}}>1 {item.title}</Text>
          <Text>2 {item.title}</Text>
          </View>
      </Animated.View>
     }}
   />
  </View>
   )
const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  }});
}
export default FlatListPage;
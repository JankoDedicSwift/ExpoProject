
import { StyleSheet, Text, View,Button,TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import animationData from '../assets/clock.json';
export default function HomeScreen({ navigation }) {

  const [anim, setAnim] = useState(null);

  useEffect(() => {
    if (anim) {
      anim.play();
    }
  }, [anim])
  return (
    <View style={styles.container}>
      <LottieView
          ref={animation => {
            setAnim(animation);
          }}
          style={{
            width: 400,
            height: 400,
          }}
          source={require('../assets/clock.json')}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
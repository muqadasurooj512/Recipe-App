import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (

    <View style={styles.Container}>
      <Image source={require('../../images/logoApp.png')} style={styles.Image} />
      <Text style={styles.TextHub}>Recipe Master</Text>

    </View>



  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"black"
  },
  Image: {
    width: 120,
    height: 120,
    marginBottom: 10
  },
  TextHub: {
    fontSize: 30,
    color: '#e9dcdc',

  }
});

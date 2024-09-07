
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { useState, useEffect } from 'react';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';
import MyStack from './src/Layout/Layout';
const App = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => {
      clearTimeout(timer)
    };
  }, []);
  return (
    <NavigationContainer>
      {visible ? (
        <SplashScreen />
      ) : (
        <MyStack />
      )}


    </NavigationContainer>

  )
}

export default App
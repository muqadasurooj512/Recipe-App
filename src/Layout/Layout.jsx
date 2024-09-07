
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home/Home';
import Details from '../Screens/Details/Details'
const Stack =createStackNavigator();
const MyStack = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} options={{ title: 'Recipe List',headerTintColor:"white", headerStyle: {
              backgroundColor: '#a78926',
           } }}/>
    <Stack.Screen name='Details' component={Details} options={{ title: 'Details',headerTintColor:"white", headerStyle: {
              backgroundColor: '#a78926',
           } }}/>
   </Stack.Navigator>
  )
}

export default MyStack

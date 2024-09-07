import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../Components/ScreenWrapper/ScreenWrapper'
import Search from '../../Components/SearchInput/Search'
import Categories from '../../Components/Categories/Categories'
import RecipeCard from '../../Components/RecipeCard/RecipeCard'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <ScreenWrapper>

      <Search icon='search'/>
      <View><Text style={styles.text}>Categories</Text></View>
      <View><Categories/></View>
      <View><Text style={styles.text}>Recipes</Text></View>
      <View><RecipeCard/></View>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  text:{
    fontSize:22,
    fontWeight:"bold",
    color:"white",
    marginHorizontal:20,
    marginBottom:10
  }
})
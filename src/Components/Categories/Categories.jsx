import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories } from '../Contstants/Constants'
import { ScrollView } from 'react-native-gesture-handler'
const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View key={index} style={styles.containers}>
              <Text style={styles.name}>{category.name} </Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  containers: {
    backgroundColor: "#a78926",
    margin:10,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 16,

  },
  name:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  }
})
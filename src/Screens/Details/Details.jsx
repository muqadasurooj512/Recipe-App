import { StyleSheet, View, Image ,Text} from 'react-native'
import React from 'react'
import ScreenWrapper from '../../Components/ScreenWrapper/ScreenWrapper'
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
const Details = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <ScreenWrapper>
      <ScrollView>
      <View style={styles.container}><Image source={item.image} style={styles.Image} />
     </View>
      <View>
        <View style={styles.rowside}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.textname}>{item.time}</Text>
        </View>
      <Text style={styles.textname}>Ingredients:</Text>
      <Text style={styles.text}>{item.ingredients}</Text>
      <Text style={styles.textname}>Instructions:</Text>
      <Text style={styles.text}>{item.instructions}</Text>
      </View>
      </ScrollView>


    </ScreenWrapper>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 50,
    alignItems: "center"

  },
  Image: {
    width: 250,
    height: 250,
    resizeMode: "contain"

  },
  textname: {
    fontSize: 22,
    color: "#a78926",
    fontWeight: "bold",
   marginHorizontal:20,
   marginBottom:10
  },
  text:{
    fontSize:18,
    color:"#e0e0e0",
    marginHorizontal:20,
    marginBottom:10,
    textAlign:"justify",

  },
  rowside:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 26,
    color: "#f3efef",
    fontWeight: "bold",
   marginHorizontal:20,
   marginBottom:20
  },
})
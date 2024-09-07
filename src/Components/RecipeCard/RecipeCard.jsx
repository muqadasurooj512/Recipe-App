import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { recipesList } from '../Contstants/Constants';
import { useNavigation } from "@react-navigation/native";
import { Rating } from 'react-native-ratings';
const RecipeCard = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingBottom:270}}>
      <FlatList
        data={recipesList}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('Details',{item:item})}>
            <View style={styles.item}>
              <Image source={item.image} style={styles.Image} />
              <Text style={styles.textname}>{item.name}</Text>

              <Rating
                type='star'
                ratingCount={5}
                tintColor='#000000'
                ratingColor="gold"

                imageSize={20}
                //readonly
                startingValue={item.rating}

                style={{ paddingVertical:10, marginTop:5}}
              />


            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  item: {
    width: 180,
    height:270,
    backgroundColor: "#a78926",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 20,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  Image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  textname: {
    fontSize: 18,
    color: "#f3ecec",
    fontWeight: "bold",
    textAlign: "center",
  },


});

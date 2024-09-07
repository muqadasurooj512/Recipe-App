import { StyleSheet, TextInput, View } from 'react-native'
import React,{ useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = ({ icon, onSearch }) => {
  const [query, setQuery] = useState('');
  return (
    <View style={styles.searchType} >
      <Ionicons name={icon} size={20} color="#110f0f" />
      <TextInput
        style={styles.input}
        placeholder="Search for recipes..."
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          onSearch(text);
        }}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  searchType: {
    backgroundColor: "#f7f3f3",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginVertical: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7
  },
  input: {
    paddingLeft: 10,
    fontSize: 20,
    color: "#928e8e",
  }
})
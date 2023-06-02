import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const CustomSearchBar = ({ query, onQueryChange, onQuerySubmit }) => {
  const handleQueryChange = (newQuery) => {
    onQueryChange(newQuery);
  };

  const handleQuerySubmit = () => {
    onQuerySubmit();
    handleQueryChange("");
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search.."
        value={query}
        onChangeText={handleQueryChange}
        autoCorrect={false}
        onSubmitEditing={handleQuerySubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default CustomSearchBar;

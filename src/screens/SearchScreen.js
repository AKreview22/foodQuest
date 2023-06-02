import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomSearchBar from "../components/CustomSearchBar";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleQueryChange = (newQuery) => {
    setSearchQuery(newQuery);
  };

  const handleQuerySubmit = () => {
    console.log(` ${searchQuery} term was submitted`);
  };

  return (
    <View style={styles.container}>
      <CustomSearchBar
        query={searchQuery}
        onQueryChange={handleQueryChange}
        onQuerySubmit={handleQuerySubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default SearchScreen;

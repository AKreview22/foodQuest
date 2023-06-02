import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Perform search or any other action with the query
  };

  const handleSearchIconClick = () => {
    // Perform search or any other action when search icon is clicked
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
        icon={({ color, size }) => (
          <TouchableOpacity onPress={handleSearchIconClick}>
            <Feather name="search" size={size} color={color} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default SearchBar;

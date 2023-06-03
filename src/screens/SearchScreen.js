import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import CustomSearchBar from "../components/CustomSearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchApi, results, isLoading] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <CustomSearchBar
        query={searchQuery}
        onQueryChange={setSearchQuery}
        onQuerySubmit={() => searchApi(searchQuery)}
      />
      {isLoading ? (
        <ActivityIndicator style={styles.loader} size="large" />
      ) : (
        <>
          <Text>We found {results.length} places</Text>
          <ResultsList
            results={filterResultsByPrice("$")}
            title="Cost Effective"
          />
          <ResultsList
            results={filterResultsByPrice("$$")}
            title="Bit Pricer"
          />
          <ResultsList
            results={filterResultsByPrice("$$$")}
            title="Big Spender"
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  loader: {
    marginTop: 10,
  },
});

export default SearchScreen;

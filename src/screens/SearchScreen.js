import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ActivityIndicator, Divider, List } from "react-native-paper";
import CustomSearchBar from "../components/CustomSearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchApi, results, isLoading] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <List.Section>
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
          </List.Section>
        </ScrollView>
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
  divider: {
    marginVertical: 10,
  },
});

export default SearchScreen;

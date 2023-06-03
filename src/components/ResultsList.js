import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
});

export default ResultsList;

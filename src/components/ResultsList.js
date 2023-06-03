import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import { List, Subheading, Divider } from "react-native-paper";
import ResultsDetail from "./ResultsDetail";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  const TouchableComponent =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.subheader}>{title}</List.Subheader>
        <FlatList
          horizontal
          data={results}
          keyExtractor={(result) => result.id.toString()}
          renderItem={({ item }) => (
            <TouchableComponent
              onPress={() => navigation.navigate("Result", { id: item.id })}
              activeOpacity={0.7}>
              <ResultsDetail result={item} />
            </TouchableComponent>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </List.Section>

      <Divider style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  subheader: {
    fontWeight: "bold",
    fontSize: 30,
  },
  listContent: {
    paddingBottom: 16,
  },
  divider: {
    marginVertical: 10,
  },
});

export default withNavigation(ResultsList);

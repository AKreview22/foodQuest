import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Chip, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const ResultsDetail = ({ result }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: result.image_url }} style={styles.image} />
      <Card.Content>
        <Title style={styles.name}>{result.name}</Title>
        <Paragraph style={styles.address}>
          {result.location.display_address.join(", ")}
        </Paragraph>
        <Paragraph style={styles.phone}>{result.display_phone}</Paragraph>
        <Card.Actions style={styles.chipsContainer}>
          {result.categories.map((category, index) => (
            <Chip key={index} style={styles.category}>
              {category.title}
            </Chip>
          ))}
        </Card.Actions>
        <Card.Actions style={styles.review}>
          <AntDesign name="star" size={16} color="#FFD700" />
          <Paragraph style={styles.rating}>{result.rating}</Paragraph>
          <Paragraph style={styles.reviewCount}>
            ({result.review_count} reviews)
          </Paragraph>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  image: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  chipsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 5,
  },
  category: {
    fontSize: 14,
    backgroundColor: "#F1F1F1",
    marginRight: 5,
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
  },
  phone: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  review: {
    marginTop: 10,
    alignItems: "center",
  },
  rating: {
    marginLeft: 5,
  },
  reviewCount: {
    marginLeft: 5,
    fontSize: 12,
    color: "#888",
  },
});

export default ResultsDetail;

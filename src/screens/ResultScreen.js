import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  Linking,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  ActivityIndicator,
  Caption,
  Title,
  Subheading,
  Divider,
  Paragraph,
  IconButton,
  Chip,
  Snackbar,
  Card,
  Badge,
  Text,
} from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import useResult from "../hooks/useResult";

const ResultScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, isLoading] = useResult(id);
  const [snackbar, setSnackbar] = useState({ visible: false, message: "" });
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleLinkClick = (url, errorMessage) => {
    if (url) {
      Linking.openURL(url);
    } else {
      setSnackbar({ visible: true, message: errorMessage });
    }
  };

  const handleSnackbarDismiss = () => {
    setSnackbar({ visible: false, message: "" });
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleModalClose = () => {
    setSelectedPhoto(null);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (result) {
    const {
      name,
      url,
      yelp_menu_url,
      image_url,
      is_closed,
      location,
      categories,
      display_phone,
      rating,
      review_count,
      photos,
    } = result;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Title style={styles.title}>{name}</Title>
            </View>
            <View style={styles.iconButtonsContainer}>
              <IconButton
                icon="web"
                size={24}
                onPress={() => handleLinkClick(url, "Website not available")}
              />
              <IconButton
                icon="book"
                size={24}
                onPress={() =>
                  handleLinkClick(yelp_menu_url, "Menu not available")
                }
              />
            </View>
          </View>
          <Image source={{ uri: image_url }} style={styles.image} />
          <Subheading style={styles.address}>
            {location.display_address.join(", ")}
          </Subheading>
          <Paragraph>Phone: {display_phone}</Paragraph>
          <View style={styles.review}>
            <AntDesign name="star" size={16} color="#FFD700" />
            <Paragraph style={styles.rating}>{rating}</Paragraph>
            <Paragraph style={styles.reviewCount}>
              ({review_count} reviews)
            </Paragraph>
          </View>
          <Divider style={styles.divider} />
          <View>
            <View style={styles.detailsContainer}>
              <View style={styles.categories}>
                <View style={styles.chipsContainer}>
                  {categories.map((category, index) => (
                    <Chip key={index} style={styles.category}>
                      {category.title}
                    </Chip>
                  ))}
                </View>
              </View>
              <Badge
                style={[
                  styles.badge,
                  { backgroundColor: is_closed ? "red" : "green" },
                ]}>
                {is_closed ? "Closed" : "Open"}
              </Badge>
            </View>

            <Subheading style={styles.photosTitle}>Photos:</Subheading>
            <FlatList
              data={photos}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handlePhotoClick(item)}>
                  <Image source={{ uri: item }} style={styles.photo} />
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
        <Modal visible={selectedPhoto !== null} transparent>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalBackground}
              activeOpacity={1}
              onPress={handleModalClose}>
              <Image
                source={{ uri: selectedPhoto }}
                style={styles.modalImage}
              />
            </TouchableOpacity>
          </View>
        </Modal>
        <Snackbar
          visible={snackbar.visible}
          onDismiss={handleSnackbarDismiss}
          duration={3000}
          style={styles.snackbar}
          action={{
            label: "Close",
            onPress: handleSnackbarDismiss,
          }}>
          {snackbar.message}
        </Snackbar>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Caption>No result found.</Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconButtonsContainer: {
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  address: {
    marginBottom: 8,
  },
  divider: {
    marginVertical: 16,
  },
  categories: {
    marginBottom: 8,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  category: {
    marginRight: 8,
    marginBottom: 8,
  },
  photosTitle: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  photo: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 8,
  },
  review: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  rating: {
    marginLeft: 4,
  },
  reviewCount: {
    marginLeft: 8,
    color: "gray",
  },
  snackbar: {
    marginBottom: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
});

export default ResultScreen;

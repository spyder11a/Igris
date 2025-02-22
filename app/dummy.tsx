import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useHotelReviews } from "./(tabs)/context/useHotelReviews"; // Import the hook we created

export default function HotelReviewForm() {
  const { submitReview } = useHotelReviews();

  const [hotelAddress, setHotelAddress] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async () => {
    if (!hotelAddress || !reviewText || !ipfsHash || !rating) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    const numericRating = parseInt(rating, 10);
    if (isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
      Alert.alert("Error", "Rating must be a number between 1 and 5");
      return;
    }
    
    try {
      await submitReview(hotelAddress, reviewText, ipfsHash, numericRating);
    } catch (error) {
      Alert.alert("Error", "Failed to submit review");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hotel Address:</Text>
      <TextInput
        style={styles.input}
        value={hotelAddress}
        onChangeText={setHotelAddress}
        placeholder="Enter hotel address"
      />

      <Text style={styles.label}>Review Text:</Text>
      <TextInput
        style={styles.input}
        value={reviewText}
        onChangeText={setReviewText}
        placeholder="Enter your review"
      />

      <Text style={styles.label}>IPFS Hash:</Text>
      <TextInput
        style={styles.input}
        value={ipfsHash}
        onChangeText={setIpfsHash}
        placeholder="Enter IPFS hash"
      />

      <Text style={styles.label}>Rating (1-5):</Text>
      <TextInput
        style={styles.input}
        value={rating}
        onChangeText={setRating}
        placeholder="Enter rating"
        keyboardType="numeric"
      />

      <Button title="Submit Review" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor:'white'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

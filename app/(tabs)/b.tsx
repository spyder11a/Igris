import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";  // Import Video from expo-av

const b = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "You need to grant permission to access media.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedVideo(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadBox} onPress={pickVideo}>
        {selectedVideo ? (
          <Video
            source={{ uri: selectedVideo }}
            style={styles.video} // Full cover video
            useNativeControls
            resizeMode="cover" // Ensures video covers the whole div
          />
        ) : (
          <View style={styles.uploadPlaceholder}>
            <Image
              source={{ uri: "https://img.icons8.com/ios/100/000000/upload.png" }}
              style={styles.uploadIcon}
            />
            <Text style={styles.uploadText}>Tap to upload video</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  uploadBox: {
    width: 300,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  uploadPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  uploadIcon: {
    width: 50,
    height: 50,
    opacity: 0.6,
  },
  uploadText: {
    marginTop: 10,
    color: "#666",
  },
  video: {
    width: "100%", // Full width
    height: "100%", // Full height
    position: "absolute", // Ensures full coverage
  },
});

export default b;

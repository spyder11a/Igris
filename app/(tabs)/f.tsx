import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const App = () => {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.box, selected === 1 && styles.selectedBox]}
        onPress={() => setSelected(1)}
      />
      <TouchableOpacity
        style={[styles.box, selected === 2 && styles.selectedBox]}
        onPress={() => setSelected(2)}
      />
      <TouchableOpacity
        style={[styles.button, selected ? styles.activeButton : styles.disabledButton]}
        disabled={!selected}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "blue",
    margin: 10,
  },
  selectedBox: {
    backgroundColor: "white",
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: "blue",
  },
  disabledButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default App;

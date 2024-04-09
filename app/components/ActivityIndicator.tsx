import React from "react";
import LottieView from "lottie-react-native";

import { StyleSheet, View, Image } from "react-native";


const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        // style={styles.animation}
        style={{width: 100, height: 100}}
        // source={require("../../assets/animations/loader.json")}
        source={require("../../assets/animations/done.json")}
      />
    </View>
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.95,
    width: "100%",
    zIndex: 20,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

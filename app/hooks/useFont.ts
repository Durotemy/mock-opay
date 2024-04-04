import { isLoaded } from "expo-font";
import { Platform } from "react-native";

const useFont = () => {
  const loaded = isLoaded("Avenir");

  const getFontFamily = () => {
    let isAndroid = Platform.OS === "android";

    return isAndroid ? (loaded ? "Avenir" : "sans-serif-condensed") : "Avenir";
  };

  return getFontFamily();
};

export default useFont;

import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AppKeyboardAvoidingView: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            bounces={false}
            // contentContainerStyle={styles.container}
            resetScrollToCoords={{ x: 0, y: 0 }}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
});

export default AppKeyboardAvoidingView;

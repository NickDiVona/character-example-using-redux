import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CustomButton = ({ onPress, buttonText, bgColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, { backgroundColor: bgColor }]}>
      <View>
        <Text style={{ fontSize: 16 }}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 250,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 20
  }
});

import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const CustomButton = ({ onPress, buttonText, bgColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginBottom: 20
      }}
    >
      <View>
        <Text style={{ fontSize: 16 }}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

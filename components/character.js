import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { characterHealthSelector } from "../redux/character/chracter.selectors";
import {
  decreaseHealth,
  resetHealth,
  useHealthPotion,
  decreaseHealthByAmount
} from "../redux/character/character.reducer";
import CustomButton from "./customButton";

const Character = () => {
  const dispatch = useDispatch();
  const characterHealth = useSelector(characterHealthSelector);

  const showLifeLogo = (healthVal) => {
    if (healthVal >= 15) {
      return "❤️";
    } else if (healthVal > 0) {
      return "💔";
    } else if (healthVal <= 0) {
      return "💀";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{showLifeLogo(characterHealth)}</Text>
      <Text style={styles.titleText}>Character HP: {characterHealth}</Text>
      {characterHealth > 0 ? (
        <View>
          <CustomButton
            onPress={() => dispatch(decreaseHealth())}
            buttonText="Block attack (HP - 1)"
            bgColor="tomato"
          />
          <CustomButton
            onPress={() => dispatch(decreaseHealthByAmount(4))}
            buttonText="Direct hit (HP - 4)"
            bgColor="red"
          />
          <CustomButton
            onPress={() => dispatch(useHealthPotion())}
            buttonText="Use potion (HP +5)"
            bgColor="mediumseagreen"
          />
        </View>
      ) : (
        <CustomButton
          onPress={() => dispatch(resetHealth())}
          buttonText="Respawn"
          bgColor={"royalblue"}
        />
      )}
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  titleText: { marginBottom: 40, fontSize: 24 }
});

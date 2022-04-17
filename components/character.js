import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseHealth,
  resetHealth,
  decreaseHealthByAmount,
  useHealthPotion
} from "../redux/actionCreators";
import CustomButton from "./customButton";

const Character = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);

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
      <Text style={styles.titleText}>{showLifeLogo(character.health)}</Text>
      <Text style={styles.titleText}>Character HP: {character.health}</Text>
      {character.health > 0 ? (
        <View>
          <CustomButton
            onPress={() => dispatch(decreaseHealth())}
            buttonText="Block attack (HP - 1)"
            bgColor="tomato"
          />
          <CustomButton
            onPress={() => dispatch(decreaseHealthByAmount(4, character.health))}
            buttonText="Direct hit (HP - 4)"
            bgColor="red"
          />
          <CustomButton
            onPress={() => dispatch(useHealthPotion(character.health))}
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

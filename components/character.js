import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  decreaseHealth,
  resetHealth,
  decreaseHealthByAmount,
  useHealthPotion
} from "../redux/actionCreators";
import CustomButton from "./customButton";

class Character extends Component {
  constructor(props) {
    super(props);
  }

  showLifeLogo = (healthVal) => {
    if (healthVal >= 15) {
      return "❤️";
    } else if (healthVal > 0) {
      return "💔";
    } else if (healthVal <= 0) {
      return "💀";
    }
  };

  render() {
    const { decreaseHealth, resetHealth, decreaseHealthByAmount, useHealthPotion, character } =
      this.props;

    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>{this.showLifeLogo(character.health)}</Text>
        <Text style={styles.titleText}>Character HP: {character.health}</Text>
        {character.health > 0 ? (
          <View>
            <CustomButton
              onPress={() => decreaseHealth()}
              buttonText="Block attack (HP - 1)"
              bgColor="tomato"
            />
            <CustomButton
              onPress={() => decreaseHealthByAmount(4, character.health)}
              buttonText="Direct hit (HP - 4)"
              bgColor="red"
            />
            <CustomButton
              onPress={() => useHealthPotion(character.health)}
              buttonText="Use potion (HP +5)"
              bgColor="mediumseagreen"
            />
          </View>
        ) : (
          <CustomButton onPress={() => resetHealth()} buttonText="Respawn" bgColor={"royalblue"} />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.character
  };
};

const mapDispatchToProps = {
  decreaseHealth: () => decreaseHealth(),
  resetHealth: () => resetHealth(),
  decreaseHealthByAmount: (damage, currentHealth) => decreaseHealthByAmount(damage, currentHealth),
  useHealthPotion: (currentHealth) => useHealthPotion(currentHealth)
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);

const styles = StyleSheet.create({
  titleText: { marginBottom: 40, fontSize: 24 }
});

import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}&nbsp;
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn("Custom was pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content="Existing Inventary"
          onPress={() => {
            console.warn("Existing Inventary was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

import React from "react";
import { Modal, View, Text } from "react-native";
import CardSection from "./CardSection";
import Button from "./Button";

export const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {}}
      >
        <View style={styles.containerStyle}>
          <CardSection style={styles.cardSectionStyle}>
            <Text style={styles.textStyle}>{children}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardSection>
        </View>
      </Modal>
    </View>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: "center"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: "rgba(0,0,0,0.75)",
    position: "relative",
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
};

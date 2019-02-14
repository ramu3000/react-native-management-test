import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    height: 100,
    elevation: 6,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.9,
    position: "relative",
    marginBottom: 20
  },
  textStyle: {
    fontSize: 22
  }
};

export default Header;
//or
/*
export { Header }
*/

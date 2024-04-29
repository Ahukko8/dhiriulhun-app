import { Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? '0.5' : '100',
          
        },
      ]}
    >
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA001",
    padding: 10,
    marginTop: 15,
    borderRadius: "1rem",
    minHeight: 62,
  },
  btnText: {
    color: "black",
    fontSize: "1.525rem",
    fontWeight: "bold",
    fontFamily: "MvIzyanreethi-Bold",
  },
  

});

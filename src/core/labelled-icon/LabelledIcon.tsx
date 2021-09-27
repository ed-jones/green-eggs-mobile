import React from "react";
import { Text, Icon } from "@ui-kitten/components";
import { View, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  label: {
    fontWeight: "bold",
  },
});

interface ILabelledIconProps {
  iconName: string;
  label: string;
  onPress?: () => void;
  fill?: string;
}

const LabelledIcon = ({
  iconName,
  label,
  onPress,
  fill,
}: ILabelledIconProps) => (
  <Pressable onPress={onPress}>
    <View style={styles.view}>
      <Icon style={styles.icon} name={iconName} fill={fill || "black"} />
      <Text style={styles.label}>{label}</Text>
    </View>
  </Pressable>
);

export default LabelledIcon;

import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onXPress: () => void;
  currentTime: string;
  percent: string;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#53ADB8"
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 30
  },
  x: {
    color: "#F6EDE5",
    fontSize: 30
  },
  timeText: {
    color: "#fff",
    fontSize: 18
  },
  line: {
    height: 3,
    backgroundColor: "#F0A22E"
  }
});

export const WorkoutTimer: React.FC<Props> = ({ onXPress, currentTime, percent }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, { width: percent }]} />
      <View style={styles.row}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <TouchableOpacity onPress={onXPress}>
          <Text style={styles.x}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

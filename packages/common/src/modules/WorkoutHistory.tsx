import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";
import { HistoryCard } from "../ui/HistoryCard";

interface Props extends RouteComponentProps {}

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  }
})

export const WorkoutHistory: React.FC<Props> = observer(({ history }) => {
  const rootStore = React.useContext(RootStoreContext);

  const rows: JSX.Element[][] = []

  Object.entries(rootStore.workoutStore.history).forEach(([dt, v], i) => {
    const hc = <HistoryCard key={dt} header={dt} currentExercises={v} />
    if(i % 2 === 0){
      rows.push([hc])
    } else {
      rows[rows.length -1].push(

      )
    }
  })

  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="Create Workout"
        onPress={() => {
          rootStore.workoutStore.currentExercises.push(
            {
              exercise: "Squat",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 315
            },
            {
              exercise: "Bench Press",
              numSets: 5,
              reps: 5,
              sets: ["5", "5", "5", "5", "5"],
              weight: 245
            },
            {
              exercise: "Deadlift",
              numSets: 3,
              reps: 5,
              sets: ["5", "5", "5", "x", "x"],
              weight: 405
            }
          );
          history.push("/current-workout");
        }}
      />

      {rows.map((r, i) => <View style={styles.row} key={i}>{r}</View>)}
    </View>
  );
});

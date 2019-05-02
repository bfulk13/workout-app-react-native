import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { RootStoreContext } from "../stores/RootStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="Create Workout"
        onPress={() => {
          rootStore.workoutStore.currentExercises.push(
            {
              exercise: 'Squat',
              numSets: 5,
              reps: 5,
              sets: ["5", "5", "5", "5", "5"],
              weight: 315
            },
            {
              exercise: 'Bench Press',
              numSets: 5,
              reps: 5,
              sets: ["5", "5", "5", "5", "5"],
              weight: 245
            },
            {
              exercise: 'Deadlift',
              numSets: 3,
              reps: 5,
              sets: ["5", "5", "5", "x", "x"],
              weight: 405
            },
          )
          rootStore.routerStore.screen = "CurrentWorkout";
        }}
      />
    </View>
  );
});

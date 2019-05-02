import { observable } from "mobx";
import { RootStore } from "./RootStore";

type WorkoutDay = "a" | "b";

interface WorkoutHistory {
  [key: string]: Array<{
    exercise: string;
    value: number;
  }>;
}

/*
{
  '04-18-2019': [
    {
      exercise: 'squat',
      value: 90
    },
    {
      exercise: 'benchPress',
      value: 100
    }
  ]
}
*/

interface CurrentExercise {
  weight: number;
  reps: number;
  numSets: number;
  exercise: string;
  sets: string[];
}

export class WorkoutStore {
  rootStore = RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = RootStore;
  }

  @observable currentSquat: number;
  @observable currentBenchPress: number;
  @observable currentOverheadPress: number;
  @observable currentDeadlift: number;
  @observable currentBarbellRow: number;

  @observable lastWorkoutType: WorkoutDay;

  @observable currentExercises: CurrentExercise[] = [];

  @observable history: WorkoutHistory;
}

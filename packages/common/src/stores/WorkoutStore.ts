import { computed, observable } from "mobx";
import { persist } from "mobx-persist";
import { RootStore } from "./RootStore";

type WorkoutDay = "a" | "b";

export interface CurrentExercise {
  weight: number;
  reps: number;
  numSets: number;
  exercise: string;
  sets: string[];
}

interface WorkoutHistory {
  [key: string]: CurrentExercise[];
}

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @persist @observable currentSquat: number = 275;
  @persist @observable currentBenchPress: number = 245;
  @persist @observable currentOverheadPress: number = 205;
  @persist @observable currentDeadlift: number = 365;
  @persist @observable currentBarbellRow: number = 185;
  @persist @observable currentPullup: number = 0;

  @persist @observable lastWorkoutType: WorkoutDay = "a";

  @persist("list") @observable currentExercises: CurrentExercise[] = [];

  @computed get hasCurrentWorkout() {
    return !!this.currentExercises.length;
  }

  @persist("object") @observable history: WorkoutHistory = {};
}
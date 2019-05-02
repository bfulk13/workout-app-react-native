import { observable } from "mobx";
import { RootStore } from "./RootStore";

type Routes = "WorkoutHistory" | "CurrentWorkout";

export class RouterStore {
  rootStore = RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = RootStore;
  }

  @observable screen: Routes = "WorkoutHistory";
}

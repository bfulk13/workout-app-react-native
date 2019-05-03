import { observer } from "mobx-react-lite";
import React from "react";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { Route, Router, Switch } from "./Router/index";

export const Routes = observer(() => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WorkoutHistory} />
        <Route exact path="/current-workout" component={CurrentWorkout} />
      </Switch>
    </Router>
  );
});
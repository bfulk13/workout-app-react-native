"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
var HistoryCard_1 = require("../ui/HistoryCard");
var react_native_2 = require("react-native");
var styles = react_native_2.StyleSheet.create({
    row: {
        flexDirection: 'row'
    }
});
exports.WorkoutHistory = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history;
    var rootStore = React.useContext(RootStore_1.RootStoreContext);
    var rows = [];
    Object.entries(rootStore.workoutStore.history).forEach(function (_a, i) {
        var dt = _a[0], v = _a[1];
        var hc = React.createElement(HistoryCard_1.HistoryCard, { key: dt, header: dt, currentExercises: v });
        if (i % 2 === 0) {
            rows.push([hc]);
        }
        else {
            rows[rows.length - 1].push();
        }
    });
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Text, null, "Workout History Page"),
        React.createElement(react_native_1.Button, { title: "Create Workout", onPress: function () {
                rootStore.workoutStore.currentExercises.push({
                    exercise: "Squat",
                    numSets: 5,
                    reps: 5,
                    sets: ["", "", "", "", ""],
                    weight: 315
                }, {
                    exercise: "Bench Press",
                    numSets: 5,
                    reps: 5,
                    sets: ["5", "5", "5", "5", "5"],
                    weight: 245
                }, {
                    exercise: "Deadlift",
                    numSets: 3,
                    reps: 5,
                    sets: ["5", "5", "5", "x", "x"],
                    weight: 405
                });
                history.push("/current-workout");
            } }),
        rows.map(function (r, i) { return React.createElement(react_native_1.View, { style: styles.row, key: i }, r); })));
});

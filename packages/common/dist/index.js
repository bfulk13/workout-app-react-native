"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Routes_1 = require("./Routes");
var CounterStore_1 = require("./stores/CounterStore");
var instructions = react_native_1.Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android: "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu"
});
exports.App = function () {
    var CounterStore = react_1.useContext(CounterStore_1.CounterStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.wrapper },
            react_1.default.createElement(Routes_1.Routes, null))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: '100%'
    },
    wrapper: {
        flex: 1,
        width: "100%",
        maxWidth: 425,
        backgroundColor: "#F5FCFF"
    }
});

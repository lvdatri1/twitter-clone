import React, { Component } from "react";
import { StyleSheet } from "react-native";
import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";
import material from "./native-base-theme/variables/material";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import TweetDetailsScreen from "./screens/tweetDetails";
import { Root } from "native-base";

import { Provider } from "react-redux";
import store from "./store";
import "regenerator-runtime/runtime";
console.disableYellowBox = true;

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,

  },
  Profile: {
    screen: ProfileScreen,
  },
  TweetDetails: {
    screen: TweetDetailsScreen,
  }
}, {
    initialRouteName: 'Login',
    headerMode: "none"
  });

const AppNavigator = createAppContainer(RootStack);


export default class App extends Component {
  constructor() {
    super();

  }

  componentWillMount() {
  }



  render() {

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

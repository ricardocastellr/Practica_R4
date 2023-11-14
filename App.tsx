import React, { Component } from "react";
import LoginView from "./src/LoginView";
import { Actions, Scene, Router } from "react-native-router-flux";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navigationBarTitleStyle: {
    padding: 95,
  }
});

const scenes: void = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar />
  </Scene>
)

export default class App extends Component<Scene>{
  render() {
    return <Router scenes={scenes} />
  }
  
}
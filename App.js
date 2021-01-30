import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Causes from './screens/causes'
import Precautions from './screens/precautions'


export default class App extends React.Component {

  render() {
    return (
      <AppContainer />
    )
  }
}


const TabNavigator = createBottomTabNavigator({
  Cause: { screen: Causes },
  Precaution: { screen: Precautions }
})

const AppContainer = createAppContainer(TabNavigator)

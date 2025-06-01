import React, { Fragment } from 'react'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './navigation/AuthNavigation'
import DefaultTheme from './theme/DefaultTheme'
import { Pressable } from 'react-native'
import { StatusBar, StatusBarHeight } from './components/StatusBar'
import { PrimaryButton, SecondaryButton, SecondaryLightButton } from './components/Buttons'
import StackNavigation from './navigation/StackNavigation';

// import { StatusBar } from 'react-native'

export const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        {/* <AuthNavigation /> */}
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

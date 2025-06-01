import { View, Text, ImageBackground } from 'react-native'
import React, { Fragment, useEffect } from 'react'
import { welcomeimage } from '../../assets/images'
import { StatusBar } from '../../components/StatusBar'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const Naviagtion = useNavigation();


  setTimeout(() => {
    Naviagtion.push('AuthPreviewScreen') // IntroScreen
  }, 3000);
  
  return (
    <Fragment>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={'dark-content'} />
        <ImageBackground source={welcomeimage} resizeMode='cover' style={{ flex: 1 }}>

        </ImageBackground>
      </View>
    </Fragment>
  )
}

export default WelcomeScreen
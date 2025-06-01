import React, { Fragment } from 'react'
import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import { StatusBar, StatusBarHeight } from '../../components/StatusBar';
import { back_icon } from '../../assets/icons';
import { HeaderText } from '../../components/Typography';
import { FacebookButton, GoogleButton, AppleButton, } from '../../components/AuthButton';
import { PrimaryButton } from '../../components/Buttons';
import { Dashline } from '../../components/Dashline';

const AuthPreviewScreen = () => {
  const { colors } = useTheme();
  const Navigation = useNavigation();

  return (
    <Fragment>
      <StatusBar />
      <ScrollView style={{ backgroundColor: colors?.white, paddingHorizontal: 35 }} contentContainerStyle={{ paddingTop: (StatusBarHeight + 15), flex: 1 }}>
        <Pressable onPress={() => Navigation.goBack()} style={{ width: 26, height: 18, }}>
          <Image source={back_icon} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
        </Pressable>


        <View style={{ paddingBottom: 55, paddingTop: 35, alignItems:'center' }}>
          <HeaderText>Let’s you in</HeaderText>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <FacebookButton />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <GoogleButton />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <AppleButton />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 80 }}>
          <Dashline />
          <Text style={{ paddingHorizontal: 25, color: colors?.primary, fontSize: 16, fontFamily: 'Jost-Bold' }} >or</Text>
          <Dashline />
        </View>

        <View>
          <PrimaryButton onPress={() => Navigation.navigate('LoginAccountScreen')} Title={'Sign in with password'} />
        </View>
 
        <View style={{ position: 'absolute', bottom: 20, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: colors?.secondary, fontSize: 16, fontFamily: 'Montserrat-Regular' }} >Don’t have an account?</Text>
            <Pressable onPress={() => Navigation.navigate('CreateAccountScreen')} style={{ paddingHorizontal: 15, }}>
              <Text style={{ color: colors?.primary, fontSize: 16, fontFamily: 'Montserrat-Bold' }} >Sign up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  )
}

export default AuthPreviewScreen
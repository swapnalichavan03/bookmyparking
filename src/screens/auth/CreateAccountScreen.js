import React, { Fragment, useState } from 'react'
import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import { StatusBar, StatusBarHeight } from '../../components/StatusBar';
import { back_icon } from '../../assets/icons';
import { HeaderText } from '../../components/Typography';
import { FacebookButton, GoogleButton, AppleButton, } from '../../components/AuthButton';
import { PrimaryButton } from '../../components/Buttons';
import { RNTextInput } from '../../components/TextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Ckeckbox from '../../components/Ckeckbox';
import { Dashline } from '../../components/Dashline';

const CreateAccountScreen = () => {
  const { colors } = useTheme();
  const Navigation = useNavigation();
  const [isCheck, setIsCheck] = useState(false);

  return (
    <Fragment>
      <StatusBar />
      <ScrollView style={{ backgroundColor: colors?.white, paddingHorizontal: 20 }} contentContainerStyle={{ paddingTop: (StatusBarHeight + 15), flex: 1 }}>
        <Pressable onPress={() => Navigation.goBack()} style={{ width: 26, height: 18, }}>
          <Image source={back_icon} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
        </Pressable>
        <View style={{ paddingVertical: 35, }}>
          <HeaderText>Create Your Account</HeaderText>
        </View>

        <View style={{ paddingVertical: 10 }}>
          <RNTextInput
            placeholder="Email"
            startIcon={() => {
              return (
                <Pressable style={{ width: 56, height: 56, borderRadius: 15, justifyContent: 'center', alignItems: "center" }}>
                  <MaterialCommunityIcons name={'email'} size={22} color={colors?.placeholder} />
                </Pressable>
              )
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <RNTextInput
            placeholder="Password"
            startIcon={() => {
              return (
                <Pressable style={{ width: 56, height: 56, borderRadius: 15, justifyContent: 'center', alignItems: "center" }}>
                  <FontAwesome6 name={'lock'} size={22} color={colors?.placeholder} />
                </Pressable>
              )
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 40 }}>
          <Ckeckbox isActive={isCheck} onPress={() => { setIsCheck(!isCheck) }} />
          <Text style={{ paddingHorizontal: 15, color: colors?.primary, fontSize: 16, fontFamily: 'Jost-SemiBold' }} >Remember me</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
          <PrimaryButton Title={"Sign up"} />
        </View>

        <Pressable onPress={() => Navigation.navigate('ForgotPasswordScreen')} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
          <Text style={{ color: colors?.primary, fontSize: 16, fontFamily: 'Montserrat-Bold' }} >Forgot the password?</Text>
        </Pressable>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
          <Dashline />
          <Text style={{ paddingHorizontal: 25, color: colors?.placeholder, fontSize: 16, fontFamily: 'Jost-SemiBold' }} >or continue with</Text>
          <Dashline />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingVertical: 30 }}>
          <FacebookButton isIcon={true} />
          <GoogleButton isIcon={true} />
          <AppleButton isIcon={true} />
        </View>

        <View style={{ position: 'absolute', bottom: 20, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: colors?.secondary, fontSize: 16, fontFamily: 'Montserrat-Regular' }} >Don’t have an account?</Text>
            <Pressable onPress={() => Navigation.navigate('LoginAccountScreen')} style={{ paddingHorizontal: 15, }}>
              <Text style={{ color: colors?.primary, fontSize: 16, fontFamily: 'Montserrat-Bold' }} >Sign in</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  )
}

export default CreateAccountScreen
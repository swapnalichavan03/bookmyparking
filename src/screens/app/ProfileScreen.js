import { View, Text, Image, ScrollView, Pressable, ImageBackground } from 'react-native'
import React, { Fragment, useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { Row, Col } from 'react-native-responsive-grid-system';
import { HeadingText } from '../../components/Typography'
import { RNTextInput } from '../../components/TextInput'
import {
  icon_background, more_icon, s_icon, pencil_icon, user_icon,
  payment_icon,
  notification_icon,
  security_icon,
  help_icon,
  logout_icon
} from '../../assets/icons'
import { profile_pic } from '../../assets/images'
import Modals from '../../components/Modals'
import { StatusBar, StatusBarHeight } from '../../components/StatusBar'
import { PrimaryButton, SecondaryButton } from '../../components/Buttons';

const ProfileScreen = () => {
  const { colors } = useTheme();

  const ListProfile = [
    { id: 1, icon: user_icon, title: 'Edit Profile', navigate: () => { } },
    { id: 2, icon: payment_icon, title: 'Payment', navigate: () => { } },
    { id: 3, icon: notification_icon, title: 'Notification', navigate: () => { } },
    { id: 4, icon: security_icon, title: 'Security', navigate: () => { } },
    { id: 5, icon: help_icon, title: 'Help', navigate: () => { } },
    // { id: '', icon: logout_icon, title: '', navigate: () => { } },
  ]

  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors?.white, paddingTop: StatusBarHeight, paddingHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>

          <ImageBackground source={icon_background} resizeMode={'contain'} style={{ width: 25, height: 25, justifyContent: "center", alignItems: 'center' }}>
            <Image source={s_icon} resizeMode={'contain'} style={{ width: 13, height: 14, }} />
          </ImageBackground>
          <View style={{ paddingHorizontal: 15 }}>
            <HeadingText>Profile</HeadingText>
          </View>
        </View>
        <Image source={more_icon} resizeMode={'contain'} style={{ width: 24, height: 24, }} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors?.white, paddingHorizontal: 15, }}
        contentContainerStyle={{
          width: '100%',
        }}
      >
        <View style={{ width: '100%', paddingVertical: 10, alignItems: 'center', justifyContent: "center" }}>
          <View style={{ width: 132, height: 132, borderRadius: (132 / 2), backgroundColor: colors?.white, }}>
            <ImageBackground source={profile_pic} resizeMode={'contain'} style={{ width: 132, height: 132, justifyContent: "center", alignItems: 'center' }} />
            <ImageBackground source={icon_background} resizeMode={'contain'} style={{ width: 25, height: 25, justifyContent: "center", alignItems: 'center', position: 'absolute', bottom: 10, right: 10 }}>
              <Image source={pencil_icon} resizeMode={'contain'} style={{ width: 13, height: 14, }} />
            </ImageBackground>
          </View>
          <View style={{ paddingVertical: 10, alignItems: 'center', justifyContent: "center" }}>
            <Text style={{ color: colors?.black, fontSize: 20, fontFamily: "Poppins-SemiBold" }}>Anabia Rani</Text>
            <Text style={{ color: colors?.black, fontSize: 14, fontFamily: "Poppins-Regular" }}>anabiajatoi448@gmail.com</Text>
          </View>
        </View>

        <View>
          {ListProfile?.map((value, index) => (
            <Pressable onPress={() => value?.navigate()} key={index} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
              <Image source={value?.icon} resizeMode='stretch' style={{ width: 22, height: 22 }} />
              <Text style={{ color: colors?.black, fontSize: 18, fontFamily: 'Jost-Medium', paddingHorizontal: 15 }}>{value?.title}</Text>
            </Pressable>
          ))}
          <Pressable onPress={() => {}}  style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
            <Image source={logout_icon} resizeMode='stretch' style={{ width: 22, height: 22 }} />
            <Text style={{ color: colors?.orangedDark, fontSize: 18, fontFamily: 'Jost-Medium', paddingHorizontal: 15 }}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Fragment>
  )
}

export default ProfileScreen
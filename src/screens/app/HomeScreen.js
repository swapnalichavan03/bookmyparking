import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { StatusBar, StatusBarHeight } from '../../components/StatusBar'
import { RNMaps } from '../../components/RNMaps'
import { notification_icon_primary, search_icon_active } from '../../assets/icons'
import { useNavigation, useTheme } from '@react-navigation/native'

const HomeScreen = () => {
  const Navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle={'dark-content'} />
      {/* <RNMaps /> */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingHorizontal: 15, paddingTop: StatusBarHeight }}>
        <Pressable onPress={() => Navigation.navigate('SearchScreen')} style={{ alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: (48 / 2), backgroundColor: colors?.secondaryDark, margin: 5 }}>
          <Image source={search_icon_active} resizeMode='contain' style={{ width: 18, height: 18 }} />
        </Pressable>
        <Pressable onPress={() => Navigation.navigate('NotificationScreen')} style={{ alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: (48 / 2), backgroundColor: colors?.secondaryDark, margin: 5 }}>
          <Image source={notification_icon_primary} resizeMode='contain' style={{ width: 18, height: 20 }} />
        </Pressable>
      </View>
    </View>
  )
}

export default HomeScreen
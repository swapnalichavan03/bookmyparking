import React, { Fragment } from 'react'
import { View, FlatList, Image, Pressable, Text, } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import { StatusBar, StatusBarHeight } from '../../components/StatusBar'
import { more_icon, back_icon, } from '../../assets/icons'
import { HeadingText } from '../../components/Typography'
import { ArrayToGrouped, NotificationIcons, NotificationSection } from '../../utils'

const NotificationScreen = () => {
  const { colors } = useTheme();
  const Navigation = useNavigation();

  const viewabilityConfig = {
    minimumViewTime: 1000,
    waitForInteraction: true,
    itemVisiblePercentThreshold: 100,
  }

  const onViewableItemsChanged = React.useCallback(
    ({ viewableItems, changed }) => {
      // console.log('viewableItems', viewableItems)
      // console.log('changed', changed)
    },
    []
  )

  const viewabilityConfigCallbackPairs = React.useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <Fragment>
      <StatusBar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ArrayToGrouped(data)}
        style={{ backgroundColor: colors?.white, paddingHorizontal: 15 }}
        stickyHeaderIndices={[0]}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListHeaderComponent={() => {
          return (
            <Fragment>
              <View style={{ backgroundColor: colors?.white, paddingTop: StatusBarHeight, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                  <Pressable onPress={() => Navigation.goBack()} style={{ width: 25, height: 25, justifyContent: "center", alignItems: 'center' }}>
                    <Image source={back_icon} resizeMode={'contain'} style={{ width: 26, height: 18, }} />
                  </Pressable>
                  <View style={{ paddingHorizontal: 15 }}>
                    <HeadingText>Notification</HeadingText>
                  </View>
                </View>
                <Image source={more_icon} resizeMode={'contain'} style={{ width: 24, height: 24, }} />
              </View>
            </Fragment>
          )
        }}
        renderItem={({ item }) => {

          return (
            <Fragment>
              <Text numberOfLines={1} style={{ color: colors?.black, paddingVertical: 15, fontSize: 20, fontFamily: 'Jost-SemiBold' }}>{NotificationSection(item?.date)}</Text>
              {/* <Text numberOfLines={1} style={{ color: colors?.black, paddingVertical: 15, fontSize: 20, fontFamily: 'Jost-SemiBold' }}>{(new Date(item?.date)?.toLocaleDateString() === new Date()?.toLocaleDateString()) && "Today"}</Text> */}
              {item?.data?.map((value, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, backgroundColor: colors?.secondaryNormal, marginVertical: 6, borderRadius: 15, height: 99 }}>
                  <Image source={NotificationIcons(value?.status)} resizeMode='contain' style={{ width: 77, height: 67 }} />
                  <View style={{ paddingHorizontal: 15 }}>
                    <Text numberOfLines={1} style={{ color: colors?.blackDark, fontSize: 16, fontFamily: 'Jost-SemiBold' }}>{value?.title}</Text>
                    <Text numberOfLines={1} style={{ color: colors?.blackDar, opacity: 0.5, fontSize: 14, fontFamily: 'Jost-Regular' }}>{value?.subTitle}</Text>
                  </View>
                </View>
              ))}
            </Fragment>
          )
        }}
        keyExtractor={(item, index) => index}
      />
    </Fragment>
  )
}

export default NotificationScreen;
// https://stackoverflow.com/questions/69328054/transform-array-of-data-into-grouped-data-for-sectionlist-component
// https://stackoverflow.com/questions/74782512/react-native-group-array-items-to-build-a-section-list
const data = [
  { id: 1, date: '2023-08-24T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 2, date: '2023-08-24T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 3, date: '2023-08-24T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 4, date: '2023-08-24T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 5, date: '2023-08-23T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 6, date: '2023-08-23T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 7, date: '2023-08-23T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 8, date: '2023-08-23T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 9, date: '2023-08-23T06:34:37.960Z', title: '2 step verification successful', subTitle: 'Google Authenticator set successful!', status: 'Tow_Step_Verification' },
  { id: 10, date: '2023-08-23T06:34:37.960Z', title: 'E-Wallet Connected', subTitle: 'Wallet has been connected to Parking..', status: 'Wallet' },
  { id: 11, date: '2023-08-23T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 12, date: '2023-08-23T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 13, date: '2023-08-23T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 14, date: '2023-08-23T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 15, date: '2023-08-23T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 16, date: '2023-08-22T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 17, date: '2023-08-22T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 18, date: '2023-08-22T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 19, date: '2023-08-22T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 20, date: '2023-08-22T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 21, date: '2023-08-21T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 22, date: '2023-08-21T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 23, date: '2023-08-21T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 24, date: '2023-08-21T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 25, date: '2023-08-21T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 26, date: '2023-08-20T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 27, date: '2023-08-20T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 28, date: '2023-08-20T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 29, date: '2023-08-20T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 30, date: '2023-08-20T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 31, date: '2023-08-19T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 32, date: '2023-08-19T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 33, date: '2023-08-19T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 34, date: '2023-08-19T06:30:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 35, date: '2023-08-19T06:34:37.960Z', title: 'Payment Successful!', subTitle: 'Parking booking at Partley was succ..', status: 'Successful' },
  { id: 36, date: '2023-08-18T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 37, date: '2023-08-18T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 38, date: '2023-08-18T06:34:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 39, date: '2023-08-18T06:32:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 40, date: '2023-08-18T06:35:37.960Z', title: 'Parking Booking Canceled', subTitle: 'You have canceled parking at Gouse..', status: 'Canceled' },
  { id: 41, date: '2023-07-01T06:35:37.960Z', title: 'Verification Successful', subTitle: 'Account verification complete', status: 'Verification' },
]
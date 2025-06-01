import { View, Text, Image, FlatList, Pressable, ImageBackground } from 'react-native'
import React, { Fragment, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Row, Col } from 'react-native-responsive-grid-system';
import { HeadingText } from '../../components/Typography'
import { icon_background, s_icon, search_icon } from '../../assets/icons'
import { StatusBar, StatusBarHeight } from '../../components/StatusBar'
import { PrimaryOutlinedButton } from '../../components/Buttons';

const BookingScreen = () => {
  const Navigation = useNavigation();
  const { colors } = useTheme();
  const [isActive, setIsActive] = useState('Ongoing')

  const renderbutton = [
    { id: 1, Title: 'Ongoing' },
    { id: 2, Title: 'Completed' },
    { id: 3, Title: 'Canceled' },
  ];

  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ backgroundColor: colors?.white, flex: 1, /*  */ }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: StatusBarHeight, paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <ImageBackground source={icon_background} resizeMode={'contain'} style={{ width: 25, height: 25, justifyContent: "center", alignItems: 'center' }}>
              <Image source={s_icon} resizeMode={'contain'} style={{ width: 13, height: 14, }} />
            </ImageBackground>
            <View style={{ paddingHorizontal: 15 }}>
              <HeadingText>My Parking</HeadingText>
            </View>
          </View>
          <Pressable style={{ width: 18, height: 18, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={search_icon} resizeMode={'contain'} style={{ width: 18, height: 18 }} />
          </Pressable>
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
          <Row>
            {renderbutton?.map((value, index) => (
              <Col key={index} xs={4} sm={4} md={4} lg={4}>
                <Pressable onPress={() => setIsActive(value?.Title)} style={{ height: 37, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: (isActive === value?.Title) ? colors?.primary : 'transparent', borderWidth: 2, borderColor: colors?.primary, borderStyle: 'solid', borderRadius: (53 / 2) }}>
                  <Text style={{ color: (isActive === value?.Title) ? colors?.white : colors?.primary, fontSize: 16, fontFamily: 'Jost-SemiBold' }}>{value?.Title}</Text>
                </Pressable>
              </Col>
            ))}
          </Row>
        </View>

        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          data={results?.filter(item => item?.status === isActive)}
          ItemSeparatorComponent={() => {
            return (
              <Fragment>
                <View style={{ height: 10 }} />
              </Fragment>
            )
          }}
          renderItem={({ item }) => {
            return (
              <Fragment>
                <Pressable style={{ backgroundColor: colors?.background, borderRadius: 10, paddingHorizontal: 15, marginHorizontal: 15, paddingVertical: 15 }}>
                  <Pressable style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0` }} resizeMode={'contain'} style={{ borderRadius: 19, width: 98, height: 98 }} />
                    <View style={{ paddingHorizontal: 15, width: 240 }}>
                      <Text numberOfLines={1} style={{ color: colors?.black, fontFamily: 'Jost-SemiBold', fontSize: 20 }}>{item?.name}</Text>
                      <Text numberOfLines={1} style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 14 }}>7518 Washington Alley</Text>

                      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                        <Text numberOfLines={1} style={{ color: colors?.primary, fontFamily: 'Montserrat-Bold', fontSize: 16 }}>{item?.price}</Text>
                        <Text numberOfLines={1} style={{ color: colors?.secondaryLight, fontFamily: 'Montserrat-Bold', fontSize: 8 }}>/{item?.time}</Text>

                        <Pressable style={{ backgroundColor: 'transparent', height: 28, borderStyle: 'solid', borderWidth: 2, borderColor: (isActive === 'Canceled') ? colors?.oranged : (isActive === "Ongoing") ? colors?.primary : colors?.green, alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginHorizontal: 10 }}>
                          <Text style={{ fontSize: 14, color: (isActive === 'Canceled') ? colors?.oranged : (isActive === "Ongoing") ? colors?.primary : colors?.green, fontFamily: 'Jost-SemiBold', paddingHorizontal: 8 }}>{item?.status}</Text>
                        </Pressable>
                      </View>
                    </View>
                  </Pressable>
                  {(isActive === "Completed") &&
                    <View style={{ paddingVertical: 20, }}>
                      <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 15, }}>
                        <View style={{ backgroundColor: colors?.secondaryLine, width: '100%', height: 1, borderRadius: (1 / 2) }} />
                      </View>
                      <PrimaryOutlinedButton onPress={() => Navigation.navigate('TicketScreen')} Title={"View Ticket"} />
                    </View>
                  }
                  {(isActive === "Ongoing") &&
                    <View style={{ paddingVertical: 20, }}>
                      <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 15, }}>
                        <View style={{ backgroundColor: colors?.secondaryLine, width: '100%', height: 1, borderRadius: (1 / 2) }} />
                      </View>
                      <Row>
                        <Col xs={6} sm={6} md={6} lg={6}>
                          <Pressable style={{ height: 37, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', borderWidth: 2, borderColor: colors?.primary, borderStyle: 'solid', borderRadius: (53 / 2) }}>
                            <Text style={{ color: colors?.primary, fontSize: 16, fontFamily: 'Jost-SemiBold' }}>Cancel Booking</Text>
                          </Pressable>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                          <Pressable onPress={() => Navigation.navigate('TicketScreen')} style={{ height: 37, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: colors?.primary, borderWidth: 2, borderColor: colors?.primary, borderStyle: 'solid', borderRadius: (53 / 2) }}>
                            <Text style={{ color: colors?.white, fontSize: 16, fontFamily: 'Jost-SemiBold' }}>View Ticket</Text>
                          </Pressable>
                        </Col>
                      </Row>
                    </View>
                  }
                </Pressable>
              </Fragment>
            )
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    </Fragment >
  )
}

export default BookingScreen

const results = [
  {
    "descrition": "7518 Washington Alley",
    "id": 98,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "MYLES SELF DRIVE - parking, Hyderabad, Telangana",
    "price": "$6.58",
    "status": "Canceled",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 99,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Parking",
    "price": "$6.58",
    "status": "Canceled",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 100,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Deloitte NCP Parking",
    "price": "$6.58",
    "status": "Canceled",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 101,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Radisson Parking Lot",
    "price": "$6.58",
    "status": "Canceled",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 102,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Parking",
    "price": "$6.58",
    "status": "Canceled",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 103,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Galleria Mall Exit",
    "price": "$6.58",
    "status": "Completed",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 104,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Car Parking Zone",
    "price": "$6.58",
    "status": "Completed",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 105,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Nisum Technologies Parking",
    "price": "$6.58",
    "status": "Completed",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 106,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Gallera mall entry",
    "price": "$6.58",
    "status": "Completed",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 107,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Parking place",
    "price": "$6.58",
    "status": "Completed",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 108,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Mehfil Parking",
    "price": "$6.58",
    "status": "Ongoing",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 109,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Trendz enclave",
    "price": "$6.58",
    "status": "Ongoing",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 110,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Parking Garage",
    "price": "$6.58",
    "status": "Ongoing",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 111,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Cyber towers exit",
    "price": "$6.58",
    "status": "Paid",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 112,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Ratnadeep Parking",
    "price": "$6.58",
    "status": "Ongoing",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 113,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Parking place",
    "price": "$6.58",
    "status": "Ongoing",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 114,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Car care",
    "price": "$6.58",
    "status": "Ongoing",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 115,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Suraj Bar & Restaurant Parkig Lot",
    "price": "$6.58",
    "status": "Ongoing",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 116,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "N Convention Parking",
    "price": "$6.58",
    "status": "Ongoing",
    "time": "2 hours"
  },
  {
    "descrition": "7518 Washington Alley",
    "id": 117,
    "image": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aaw_FcJ6X1JImg_cla5I3tGhUSZV2P8nMEHujPq7hKF00KMVaalTfmMqkbsms319_aly3WvWMsEwl-zJBI7JLTy2Kqi7EtqunXqKXqA-pXRAkqCvQ5yPv6p-tBYiQdektHMZK1KMlWZlqhfPzwyAnfhLZeOzS6L7j3BSwAF5v-F3cJGIVhhk&sensor=false&key=AIzaSyAhZVYw7_fop94kBO63xKxKdiX_GJGLKO0",
    "name": "Shiva sai automobiles multi Brand Work Shop",
    "price": "$6.58",
    "status": "Ongoing",
    "time": "2 hours"
  }
]
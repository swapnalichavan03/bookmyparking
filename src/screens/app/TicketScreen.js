import React, { Fragment, } from 'react'
import { View, ScrollView, Image, Pressable, Text, } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Row, Col } from 'react-native-responsive-grid-system'
import { StatusBar, StatusBarHeight } from '../../components/StatusBar'
import { more_icon, back_icon } from '../../assets/icons'
import { HeadingText } from '../../components/Typography'
import { PrimaryButton } from '../../components/Buttons'

const TicketScreen = () => {
  const { colors } = useTheme()
  const Navigation = useNavigation();

  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors?.white, paddingTop: StatusBarHeight, paddingHorizontal: 15, }}
        contentContainerStyle={{
          width: '100%',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Pressable onPress={() => Navigation.goBack()} style={{ width: 25, height: 25, justifyContent: "center", alignItems: 'center' }}>
              <Image source={back_icon} resizeMode={'contain'} style={{ width: 26, height: 18, }} />
            </Pressable>
            <View style={{ paddingHorizontal: 15 }}>
              <HeadingText>Parking Ticket</HeadingText>
            </View>
          </View>
          <Image source={more_icon} resizeMode={'contain'} style={{ width: 24, height: 24, }} />
        </View>

        <View style={{ paddingVertical: 20, }}>
          <View style={{ height: 634, /* borderWidth: 2, borderStyle: 'solid', borderColor: colors?.secondaryLine, */ /* justifyContent: 'center', alignItems: 'center' */ }}>
            <View style={{ borderWidth: 2, borderStyle: 'solid', borderColor: colors?.secondaryLine, width: '100%', height: 318, borderRadius: 23, position: 'absolute', top: 0 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }} >
                <Text style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 16 }}>
                  Scan this on the scanner machine
                </Text>
                <Text style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 16 }}>
                  when you are in the parking lot
                </Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                <View style={{ width: 219, height: 219, borderWidth: 1, borderColor: "#000000" }} />
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 315, zIndex: 999 }}>
              <View style={{ height: 4, width: '88%', backgroundColor: colors?.white, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ borderWidth: 1, borderColor: colors?.secondaryLine, borderStyle: 'dashed', width: '100%' }} />
              </View>
            </View>
            <View style={{ borderWidth: 2, borderStyle: 'solid', borderColor: colors?.secondaryLine, width: '100%', height: 318, borderRadius: 23, position: 'absolute', bottom: 0, justifyContent: 'center', paddingHorizontal: 25 }}>
              <Row>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <View style={{ paddingVertical: 10 }}>
                    <Text style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 16 }}>Name</Text>
                    <Text style={{ color: colors?.black, fontFamily: 'Jost-SemiBold', fontSize: 15 }}>Andrew Ainsley</Text>
                  </View>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <View style={{ paddingVertical: 10 }}>
                    <Text style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 16 }}>Vehicle</Text>
                    <Text style={{ color: colors?.black, fontFamily: 'Jost-SemiBold', fontSize: 15 }}>Toyota (AFD 6397)</Text>
                  </View>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <View style={{ paddingVertical: 10 }}>
                    <Text style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 16 }}>Parking Area</Text>
                    <Text style={{ color: colors?.black, fontFamily: 'Jost-SemiBold', fontSize: 15 }}>San Manoliay</Text>
                  </View>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <View style={{ paddingVertical: 10 }}>
                    <Text style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 16 }}>Parking Spot</Text>
                    <Text style={{ color: colors?.black, fontFamily: 'Jost-SemiBold', fontSize: 15 }}>1st Floor (A05)</Text>
                  </View>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                  <View style={{ paddingVertical: 10 }}>
                    <Text style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 16 }}>Duration</Text>
                    <Text style={{ color: colors?.black, fontFamily: 'Jost-SemiBold', fontSize: 15 }}>4 hours</Text>
                  </View>
                </Col >
                <Col xs={6} sm={6} md={6} lg={6}>
                  <View style={{ paddingVertical: 10 }} >
                    <Text style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 16 }}>Date</Text>
                    <Text style={{ color: colors?.black, fontFamily: 'Jost-SemiBold', fontSize: 15 }}>May 11, 2023</Text>
                  </View>
                </Col >
                <Col xs={6} sm={6} md={6} lg={6}>
                  <View style={{ paddingVertical: 10 }} >
                    <Text style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 16 }}>Hours</Text>
                    <Text style={{ color: colors?.black, fontFamily: 'Jost-SemiBold', fontSize: 15 }}>09 Am - 13 PM</Text>
                  </View>
                </Col >
                <Col xs={6} sm={6} md={6} lg={6}>
                  <View style={{ paddingVertical: 10 }} >
                    <Text style={{ color: colors?.secondaryLight, fontFamily: 'Jost-Medium', fontSize: 16 }}>Phone</Text>
                    <Text style={{ color: colors?.black, fontFamily: 'Jost-SemiBold', fontSize: 15 }}>+92 3244449931</Text>
                  </View>
                </Col >
              </Row >
            </View >
          </View >
        </View >

        <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <PrimaryButton onPress={() => Navigation.navigate('MapNavigateScreen')} Title={'Navigate to Parking Lot'} />
        </View>
      </ScrollView >
    </Fragment >
  )
}

export default TicketScreen
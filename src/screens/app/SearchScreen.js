import React, { Fragment, useState } from 'react'
import { View, FlatList, Image, Pressable, Text, ScrollView, } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import { StatusBar, StatusBarHeight } from '../../components/StatusBar'
import { park_large, back_icon, filter_icon, } from '../../assets/icons'
import { HeadingText } from '../../components/Typography'
import { SearchInput } from '../../components/TextInput'
import Modals from '../../components/Modals'
import { Row, Col } from 'react-native-responsive-grid-system';
import { Slider } from 'react-native-elements';
import { PrimaryButton, SecondaryButton } from '../../components/Buttons'
import { Switch } from '../../components/Switch'

const SearchScreen = () => {
  const { colors } = useTheme();
  const Navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(0);
  const [isActive, setIsActive] = useState('Lower Price')
  const [isTrue, setIsTrue] = useState(false)

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

  const renderbutton = [
    { id: 1, Title: 'Distance' },
    { id: 2, Title: 'Slots Available' },
    { id: 3, Title: 'Lower Price' },
  ];

  return (
    <Fragment>
      <StatusBar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
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
                    <HeadingText>Search</HeadingText>
                  </View>
                </View>
              </View>

              <View style={{ backgroundColor: colors?.white, paddingVertical: 5 }}>
                <SearchInput
                  endIcon={() => {
                    return (
                      <Pressable onPress={() => setIsVisible(!isVisible)} style={{ width: 56, height: 56, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={filter_icon} resizeMode={'contain'} style={{ width: 20, height: 16 }} />
                      </Pressable>
                    )
                  }}
                />
                <Text style={{ color: colors?.blackDark, fontFamily: 'Jost-SemiBold', fontSize: 16, paddingVertical: 10 }}>Results (1,275)</Text>
              </View>
            </Fragment>
          )
        }}
        renderItem={({ item }) => {

          return (
            <Fragment>
              <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, height: 53 }}>
                <Image source={park_large} resizeMode='contain' style={{ width: 42.17, height: 42.17 }} />
                <View style={{ paddingHorizontal: 15 }}>
                  <Text numberOfLines={1} style={{ color: colors?.blackDark, fontSize: 18, fontFamily: 'Jost-SemiBold' }}>{item?.title}</Text>
                  <Text numberOfLines={1} style={{ color: colors?.blackDar, opacity: 0.5, fontSize: 14, fontFamily: 'Jost-Medium' }}>{item?.subTitle}</Text>
                </View>
                <View style={{ flexGrow: 1 }} />
                <View style={{ alignItems: 'flex-end' }}>
                  <Text numberOfLines={1} style={{ color: colors?.blackDark, fontSize: 18, fontFamily: 'Jost-SemiBold' }}>{item?.distance}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text numberOfLines={1} style={{ color: colors?.primary, fontSize: 14, fontFamily: 'Jost-SemiBold' }}>{item?.price}</Text>
                    <Text numberOfLines={1} style={{ color: colors?.blackDark, fontSize: 10, fontFamily: 'Jost-SemiBold' }}> /{item?.unit}</Text>
                  </View>
                </View>
              </Pressable>
            </Fragment>
          )
        }}
        keyExtractor={(item, index) => index}
      />

      <Modals
        visible={isVisible}
        onRequestClose={() => { setIsVisible(!isVisible) }}
      >
        <View style={{ backgroundColor: colors?.white, bottom: 0, position: 'absolute', width: '100%', zIndex: 999, height: 486, borderTopRightRadius: 60, borderTopLeftRadius: 60, overflow: 'hidden' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10, }}>
            <View style={{ backgroundColor: colors?.secondaryLine, width: 35, height: 3, borderRadius: (3 / 2) }} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <HeadingText>Filter</HeadingText>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 20 }}>
            <View style={{ backgroundColor: colors?.secondaryLine, width: '100%', height: 1, borderRadius: (1 / 2) }} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 20 }}>
            <Text style={{ color: colors?.black, fontSize: 20, fontFamily: 'Jost-SemiBold' }}>Sort by</Text>
            <View style={{ flexGrow: 1 }} />
            <Pressable>
              <Text style={{ color: colors?.primary, fontSize: 16, fontFamily: 'Jost-Regular' }}>See All</Text>
            </Pressable>
          </View>

          <View style={{ /* paddingHorizontal: 20, */ paddingVertical: 10 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
              {renderbutton?.map((value, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: (renderbutton.at(0)?.id === value?.id) ? 20 : 7, paddingRight: (renderbutton.at(-1)?.id === value?.id) ? 20 : 7 }}>
                  <Pressable onPress={() => setIsActive(value?.Title)} style={{ height: 37, width: 'auto', alignItems: 'center', justifyContent: 'center', backgroundColor: (isActive === value?.Title) ? colors?.primary : 'transparent', borderWidth: 2, borderColor: colors?.primary, borderStyle: 'solid', borderRadius: (53 / 2) }}>
                    <Text style={{ color: (isActive === value?.Title) ? colors?.white : colors?.primary, fontSize: 16, fontFamily: 'Jost-SemiBold', paddingHorizontal: 20, }}>{value?.Title}</Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 20 }}>
            <Text style={{ color: colors?.black, fontSize: 20, fontFamily: 'Jost-SemiBold' }}>Distance</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 20 }}>
            {/* <Slider
              style={{ width: '100%', borderRadius: (8 / 2) }}
              value={50}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor={colors?.primary}
              maximumTrackTintColor={colors?.greyDark}
              thumbTouchSize={{ width: 17, height: 17 }}
              thumbStyle={{ width: 17, height: 17, borderColor: colors?.primary, borderWidth: 5, borderStyle: 'solid' }}
              trackHeight={20}
              trackStyle={{ height: 8, borderRadius: (8 / 2) }}
            /> */}

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'stretch', }}>
              <Slider
                value={value}
                onValueChange={setValue}
                maximumValue={10}
                minimumValue={0}
                step={1}
                minimumTrackTintColor={colors?.primary}
                maximumTrackTintColor={colors?.greyDark}
                trackStyle={{ height: 8, backgroundColor: colors?.greyDark, borderRadius: (8 / 2) }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: colors?.primary }}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 20 }}>
            <Text style={{ color: colors?.black, fontSize: 20, fontFamily: 'Jost-SemiBold' }}>Valet Parking </Text>
            <View style={{ flexGrow: 1 }} />
            <Switch isActive={isTrue} onPress={() => setIsTrue(!isTrue)} />
          </View>

          <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <Row>
              <Col xs={6} sm={6} md={6} lg={6}>
                <SecondaryButton height={60} Title={'Reset'} />
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <PrimaryButton height={60} Title={'Apply Filter'} />
              </Col>
            </Row>
          </View>
        </View>
      </Modals>
    </Fragment>
  )
}

export default SearchScreen

const data = [
  {
    id: 1,
    title: 'Campion Cattoges',
    subTitle: '1324 Antonietta Rest',
    price: '$2.22',
    distance: '1km',
    unit: 'hour'
  },
  {
    id: 2,
    title: 'De Lara Way',
    subTitle: '85043 Kuhlman Key Apt. 375',
    price: '$2.42',
    distance: '1.2km',
    unit: 'hour'
  },
  {
    id: 3,
    title: 'Edward Brambles',
    subTitle: '73405 Kiback Forks',
    price: '$$1.32',
    distance: '2.0km',
    unit: 'hour'
  },
  {
    id: 4,
    title: 'Oak Tree Parc',
    subTitle: '43822 Hirthe Harbor APT. 53',
    price: '$2.48',
    distance: '2.9km',
    unit: 'hour'
  },
  {
    id: 5,
    title: 'Hopton Hollies',
    subTitle: '21290 Gutmann Lan',
    price: '$2.48',
    distance: '2.1km',
    unit: 'hour'
  },
  {
    id: 6,
    title: 'Blake Valley',
    subTitle: '623 Haillie Park',
    price: '$2.70',
    distance: '1.9km',
    unit: 'hour'
  },
  {
    id: 7,
    title: 'North Grove Way',
    subTitle: '216 Sage Alley',
    price: '$1.48',
    distance: '1.4km',
    unit: 'hour'
  },
  {
    id: 8,
    title: 'Willam Bush Close ',
    subTitle: '687 Joaquin Parts',
    price: '$2.72',
    distance: '2.6km',
    unit: 'hour'
  },
  {
    id: 9,
    title: 'Palmerston Lawn',
    subTitle: '8395 Trantow Courts',
    price: '$2.78',
    distance: '13.6km',
    unit: 'hour'
  },
  {
    id: 10,
    title: 'Appleton Warren',
    subTitle: '7734 Harris Gardens Suite 114',
    price: '$1.99',
    distance: '8km',
    unit: 'hour'
  },
  {
    id: 11,
    title: 'Campion Cattoges',
    subTitle: '1324 Antonietta Rest',
    price: '$2.22',
    distance: '1km',
    unit: 'hour'
  },
  {
    id: 12,
    title: 'De Lara Way',
    subTitle: '85043 Kuhlman Key Apt. 375',
    price: '$2.42',
    distance: '1.2km',
    unit: 'hour'
  },
  {
    id: 13,
    title: 'Edward Brambles',
    subTitle: '73405 Kiback Forks',
    price: '$$1.32',
    distance: '2.0km',
    unit: 'hour'
  },
  {
    id: 14,
    title: 'Oak Tree Parc',
    subTitle: '43822 Hirthe Harbor APT. 53',
    price: '$2.48',
    distance: '2.9km',
    unit: 'hour'
  },
  {
    id: 15,
    title: 'Hopton Hollies',
    subTitle: '21290 Gutmann Lan',
    price: '$2.48',
    distance: '2.1km',
    unit: 'hour'
  },
  {
    id: 16,
    title: 'Blake Valley',
    subTitle: '623 Haillie Park',
    price: '$2.70',
    distance: '1.9km',
    unit: 'hour'
  },
  {
    id: 17,
    title: 'North Grove Way',
    subTitle: '216 Sage Alley',
    price: '$1.48',
    distance: '1.4km',
    unit: 'hour'
  },
  {
    id: 18,
    title: 'Willam Bush Close ',
    subTitle: '687 Joaquin Parts',
    price: '$2.72',
    distance: '2.6km',
    unit: 'hour'
  },
  {
    id: 19,
    title: 'Palmerston Lawn',
    subTitle: '8395 Trantow Courts',
    price: '$2.78',
    distance: '13.6km',
    unit: 'hour'
  },
  {
    id: 20,
    title: 'Appleton Warren',
    subTitle: '7734 Harris Gardens Suite 114',
    price: '$1.99',
    distance: '8km',
    unit: 'hour'
  },
]
import React, { Fragment, useRef } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StatusBar } from '../../components/StatusBar'
import { intro_1, intro_2, intro_3 } from '../../assets/images'
import { TitleText } from '../../components/Typography';
import { useNavigation } from '@react-navigation/native';
import { RenderDoneButton, RenderNextButton, RenderSkipButton, } from '../../components/Buttons'

const data = [
  {
    title: 'Find Parking Places Around You Easily',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard.",
    image: intro_1,
    bg: '#FFFFFF',
  },
  {
    title: 'Book and Pay Parking Quickly & Safely',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard.",
    image: intro_2,
    bg: '#FFFFFF',
  },
  {
    title: 'Extend Parking Time As You Need',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard.",
    image: intro_3,
    bg: '#FFFFFF',
  },
];

const IntroScreen = () => {
  const Navigation = useNavigation();

  const _renderItem = ({ item }) => {
    return (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
        <Image source={item.image} style={styles.image} />
        <View style={{ paddingHorizontal: 20 }}>
          <TitleText>{item.title}</TitleText>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };


  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          bottomButton={true}
          showSkipButton={false}
          showNextButton={true}
          showDoneButton={false}
          showPrevButton={false}
          keyExtractor={(item) => item.title}
          renderDoneButton={RenderDoneButton}
          renderNextButton={RenderNextButton}
          renderSkipButton={RenderSkipButton}
          renderItem={_renderItem}
          data={data}
          activeDotStyle={{ backgroundColor: "#BC0063", width: 25, height: 9, position: 'relative', top: -25 }}
          dotStyle={{ backgroundColor: '#D9D9D9', position: 'relative', top: -25 }}
          onDone={() => Navigation.navigate('AuthPreviewScreen')}
          onSkip={() => Navigation.navigate('AuthPreviewScreen')}
        />
        {/* <RenderSkipButton /> */}
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 288,
    marginVertical: 32,
  },
  text: {
    color: '#000000',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: '#000000',
    textAlign: 'center',
  },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreen


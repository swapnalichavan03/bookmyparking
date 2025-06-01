import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import PrimaryButton from './PrimaryButton'
import { useTheme } from '@react-navigation/native';

const RenderSkipButton = () => {
  const { colors } = useTheme();

  return (
    <Fragment>
      <View style={{ backgroundColor: colors?.primary, width: '100%', height: 53, borderRadius: (53 / 2), justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: colors?.white }}>Skip</Text>
      </View>
    </Fragment>
  )
}

export default RenderSkipButton
import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import { useTheme } from '@react-navigation/native';

const HeaderText = ({ children }) => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.black, fontSize: 48, fontFamily: 'Jost-SemiBold', lineHeight: 55  }}>
        {children}
      </Text>
    </View>
  )
}

export default HeaderText
import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
// import { useTheme } from '@react-navigation/native';

const RenderNextButton = () => {
  // const { colors } = useTheme();

  return (
    <View style={{
      backgroundColor: 'red', width: '100% ', height: 53, justifyContentL: 'center', alignItems: 'center'
    }}>
      <Text style={{ color: '#FFFFFF' }
      } > Next</Text>
    </View >
  )
}

export default RenderNextButton
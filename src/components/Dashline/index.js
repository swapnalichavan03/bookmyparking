import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

export const Dashline = () => {
    const { colors } = useTheme();

    return (
        <View style={{ width: '100%', height: 1, backgroundColor: colors?.secondary }} />
    )
}

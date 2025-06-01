import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import { useTheme } from '@react-navigation/native';

const TitleText = ({ children }) => {
    const { colors } = useTheme();

    return (
        <View>
            <Text style={{ color: colors.black, fontSize: 31, fontFamily: 'Jost-SemiBold', textAlign: 'center', lineHeight: 35 }}>
                {children}
            </Text>
        </View>
    )
}

export default TitleText
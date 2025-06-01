import { View, Text, Pressable, LayoutAnimationAnim, Platform, StyleSheet, TouchableOpacity, UIManager, LayoutAnimation, } from 'react-native'
import React, { Fragment, useState } from 'react'
import { useTheme } from '@react-navigation/native'

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental(true)) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}
const Switch = ({ isActive = false, onPress = () => { } }) => {
    const { colors } = useTheme();

    const isHandle = () => {
        LayoutAnimation.easeInEaseOut();
        onPress()
    }
    return (
        <Fragment>
            <Pressable onPress={() => isHandle()} style={{ width: 50, height: 26, borderRadius: (26/ 2), backgroundColor: isActive ? colors?.primary : colors?.secondaryGrey, justifyContent: 'center' }}>
                <Pressable onPress={() => isHandle()} style={{ width: 20, height: 20, borderRadius: (20 / 2), backgroundColor: colors?.white, marginHorizontal: 3, alignSelf: isActive ? 'flex-end' : 'flex-start' }} />
            </Pressable>
        </Fragment>
    )
}

export default Switch
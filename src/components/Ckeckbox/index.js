import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Ckeckbox = ({ isActive, onPress = () => { } }) => {
    const { colors } = useTheme();

    return (
        <Pressable onPress={() => onPress()} style={{ width: 18, height: 19, borderWidth: 3, borderStyle: 'solid', justifyContent: 'center', alignItems: 'center', backgroundColor: isActive ? colors?.primary : 'transparent', borderColor: colors?.primary, borderRadius: 6 }}>
            {isActive && <MaterialCommunityIcons name={'check'} color={colors?.white} />}
        </Pressable>
    )
}

export default Ckeckbox
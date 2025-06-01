import { Image, Text, Pressable } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { google_icon } from '../../assets/icons'

const GoogleButton = ({ isIcon }) => {
    const { colors } = useTheme()
    return (
        isIcon ?
            <Pressable style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 82, height: 53, borderRadius: 15, borderWidth: 1, borderColor: colors?.black }}>
                <Image source={google_icon} resizeMode='contain' style={{ width: 27, height: 27, }} />
            </Pressable>
            :
            <Pressable style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: 53, borderRadius: 15, borderWidth: 1, borderColor: colors?.black }}>
                <Image source={google_icon} resizeMode='contain' style={{ width: 27, height: 27, position: 'absolute', left: 30 }} />
                <Text style={{ color: colors?.black, fontSize: 14, fontFamily: 'Poppins-SemiBold' }}>Continue with Google</Text>
            </Pressable>
    )
}

export default GoogleButton
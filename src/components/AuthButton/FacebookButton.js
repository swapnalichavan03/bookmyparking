import { View, Text, Pressable, Image } from 'react-native'
import React, { Fragment } from 'react'
import { useTheme } from '@react-navigation/native'
import { facebook_icon } from '../../assets/icons'

const FacebookButton = ({ isIcon }) => {
    const { colors } = useTheme();

    return (
        <Fragment>
            {isIcon ?
                <Pressable style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: 82, height: 53, borderRadius: 15, borderWidth: 1, borderColor: colors?.black }} >
                    <Image source={facebook_icon} resizeMode='contain' style={{ width: 27, height: 27, }} />
                </Pressable >
                :
                <Pressable style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', height: 53, borderRadius: 15, borderWidth: 1, borderColor: colors?.black }}>
                    <Image source={facebook_icon} resizeMode='contain' style={{ width: 27, height: 27, position: 'absolute', left: 30 }} />
                    <Text style={{ color: colors?.black, fontSize: 14, fontFamily: 'Poppins-SemiBold' }}>Continue with Facebook</Text>
                </Pressable>}
        </Fragment>
    )
}

export default FacebookButton
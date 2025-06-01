import { View, TextInput } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const EmailInput = (props) => {
    const { colors } = useTheme();

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#D9D9D9', opacity: 0.5, height: 56, borderRadius: 15 }}>
            {(typeof props?.startIcon === 'function') && props?.startIcon()}
            <TextInput
                style={{
                    paddingLeft: (typeof props?.startIcon === 'function') ? 0 : 15,
                    paddingRight: (typeof props?.endIcon === 'function') ? 0 : 15,
                    height: 56,
                    borderRadius: 15,
                    flex: 1,
                    fontSize: 15,
                    color: colors?.black,
                    fontFamily: 'Montserrat-Medium',
                }}
                placeholderTextColor={colors?.placeholder}
                {...props}
            />
            {(typeof props?.endIcon === 'function') && props?.endIcon()}
        </View>
    )
}

export default EmailInput
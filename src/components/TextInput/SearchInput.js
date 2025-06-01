import { View, TextInput, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { search_icon, search_icon_active } from '../../assets/icons';

const SearchInput = (props) => {
    const { colors } = useTheme();
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: isFocus ? colors?.primaryLight : colors?.whiteDark, height: 56, borderRadius: 15, borderColor: isFocus ? colors?.primary : colors?.whiteDark, borderWidth: 1, borderStyle: 'solid' }}>
            <Pressable style={{ width: 56, height: 56, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={isFocus ? search_icon_active : search_icon} resizeMode={'contain'} style={{ width: 18, height: 18, }} />
            </Pressable>
            <TextInput
                style={{
                    paddingRight: (typeof props?.endIcon === 'function') ? 0 : 15,
                    height: 56,
                    borderRadius: 15,
                    flex: 1,
                    fontSize: 16,
                    color: colors?.blackDark,
                    fontFamily: 'Jost-SemiBold',
                }}
                placeholderTextColor={colors?.placeholder}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                placeholder={'Search'}
            />
            {(typeof props?.endIcon === 'function') && props?.endIcon()}
        </View>
    )
}

export default SearchInput
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

const SecondaryButton = ({ Title, onPress, height = 53, startComponent, endComponent }) => {
const {colors} = useTheme();

    return (
        <Pressable onPress={(event) => onPress(event)} style={{ height: height, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: colors?.secondary, borderWidth: 2, borderColor: colors?.secondary, borderStyle: 'solid', borderRadius: (53 / 2) }}>
            <Text style={{ color: "#BC0063", fontSize: 16, fontFamily: 'Montserrat-Bold' }}>{Title}</Text>
        </Pressable>
    )
}

SecondaryButton.propTypes = {
    Title: PropTypes.string,
    onPress: PropTypes.func,
    height: PropTypes.number,
};

SecondaryButton.defaultProps = {
    Title: '',
    onPress: () => { },
    height: 53,
}

export default SecondaryButton
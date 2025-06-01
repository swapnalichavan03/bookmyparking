import { View, Text, Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

const SecondaryLightButton = ({ Title, onPress, startComponent, endComponent }) => {

    return (
        <Pressable onPress={(event) => onPress(event)} style={{ height: 53, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F1F1F1', borderRadius: (53 / 2) }}>
            <Text style={{ color: "#BC0063", fontSize: 16, fontWeight: 'bold' }}>{Title}</Text>
        </Pressable>
    )
}

SecondaryLightButton.propTypes = {
    Title: PropTypes.string,
    onPress: PropTypes.func,
};

SecondaryLightButton.defaultProps = {
    Title: '',
    onPress: () => { },
}

export default SecondaryLightButton
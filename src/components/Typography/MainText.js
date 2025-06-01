import { Text } from 'react-native'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

const MainText = (props) => {
    const { colors } = useTheme();
    const { color, fontFamily, fontSize } = props?.style;

    console.log((color === '') ? colors?.primary : color)
    return (
        <Fragment>
            <Text style={{ ...props?.style, color: (color === '') ? colors?.primary : color, fontSize: fontSize, fontFamily: fontFamily }} >{props?.children}</Text>
        </Fragment>
    )
}

MainText.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object
};

MainText.defaultProps = {
    children: PropTypes.string,
    style: {
        color: '',
        fontFamily: 'Jost-SemiBold',
        fontSize: 16
    }
}

export default MainText
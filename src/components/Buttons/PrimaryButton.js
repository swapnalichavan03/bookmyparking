import { Text, Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

const PrimaryButton = ({ Title, onPress, height = 53, startComponent, endComponent }) => {
  const {colors} = useTheme();

  return (
    <Pressable onPress={(event) => onPress(event)} style={{ height: height, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: colors?.primary, borderWidth: 2, borderColor: colors?.primary, borderStyle: 'solid', borderRadius: (53 / 2) }}>
      <Text style={{ color: "#FFFFFF", fontSize: 16, fontFamily: 'Montserrat-Bold' }}>{Title}</Text>
    </Pressable>
  )
}

PrimaryButton.propTypes = {
  Title: PropTypes.string,
  onPress: PropTypes.func,
  height: PropTypes.number,
};

PrimaryButton.defaultProps = {
  Title: '',
  onPress: () => { },
  height: 53,
}

export default PrimaryButton
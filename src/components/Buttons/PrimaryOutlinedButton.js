import { Text, Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

const PrimaryOutlinedButton = ({ Title, onPress, height = 37, startComponent, endComponent }) => {
  const { colors } = useTheme();

  return (
    <Pressable onPress={(event) => onPress(event)} style={{ height: height, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', borderWidth: 2, borderColor: colors?.primary, borderStyle: 'solid', borderRadius: (53 / 2) }}>
      <Text style={{ color: colors?.primary, fontSize: 16, fontFamily: 'Jost-SemiBold' }}>{Title}</Text>
    </Pressable>
  )
}


PrimaryOutlinedButton.propTypes = {
  Title: PropTypes.string,
  onPress: PropTypes.func,
  height: PropTypes.number,
};

PrimaryOutlinedButton.defaultProps = {
  Title: '',
  onPress: () => { },
  height: 37,
}

export default PrimaryOutlinedButton
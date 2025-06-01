import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const Modals = ({ visible = false, onRequestClose = () => { }, children }) => {
    const { colors } = useTheme();

    return (
        <Modal
            visible={visible}
            onRequestClose={onRequestClose}
            transparent={true}
            animationType={'slide'}
            statusBarTranslucent={true}
        >
            <Pressable /* onPress={onRequestClose} */ style={{ flex: 1, backgroundColor: colors?.blackLight, }}>
                {children}
            </Pressable>
        </Modal>
    )
}

export default Modals
import { StatusBar as Sbar } from 'react-native'
import React, { Fragment } from 'react'

export const StatusBar = ({barStyle}) => {
    return (
        <Fragment>
            <Sbar barStyle={barStyle} backgroundColor={'transparent'} animated={true} translucent={true} />
        </Fragment>
    )
}

export const StatusBarHeight = Sbar.currentHeight
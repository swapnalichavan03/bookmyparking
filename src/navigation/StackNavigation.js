import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNavigation from './BottomNavigation';
import { forSlideAnimate, configAnimate } from './NavigationAnimate';
import { TicketScreen, MapNavigateScreen, SearchScreen, NotificationScreen } from '../screens/app';

const Stack = createStackNavigator()
const StackNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                transitionSpec: { open: configAnimate, close: configAnimate },
                cardStyleInterpolator: forSlideAnimate,
            }}
        >
            <Stack.Screen name={'Root'} component={BottomNavigation} />
            <Stack.Screen name={'TicketScreen'} component={TicketScreen} />
            <Stack.Screen name={'MapNavigateScreen'} component={MapNavigateScreen} />
            <Stack.Screen name={'SearchScreen'} component={SearchScreen} />
            <Stack.Screen name={'NotificationScreen'} component={NotificationScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation
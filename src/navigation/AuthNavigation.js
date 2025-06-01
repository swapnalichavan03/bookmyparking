import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { WelcomeScreen, IntroScreen, AuthPreviewScreen, CreateAccountScreen, CreateProfileScreen, LoginAccountScreen, ForgotPasswordScreen, ForgotPasswordMobileVerifyScreen, ForgotPasswordEmailVerifyScreen, CreateNewPasswordScreen, } from '../screens/auth'
import { forSlideAnimate, configAnimate } from './NavigationAnimate';

const Stack = createStackNavigator()
const AuthNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                transitionSpec: { open: configAnimate, close: configAnimate },
                cardStyleInterpolator: forSlideAnimate,
            }}
        >
            <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
            <Stack.Screen name={'IntroScreen'} component={IntroScreen} />
            <Stack.Screen name={'AuthPreviewScreen'} component={AuthPreviewScreen} />
            <Stack.Screen name={'CreateAccountScreen'} component={CreateAccountScreen} />
            <Stack.Screen name={'CreateProfileScreen'} component={CreateProfileScreen} />
            <Stack.Screen name={'LoginAccountScreen'} component={LoginAccountScreen} />
            <Stack.Screen name={'ForgotPasswordScreen'} component={ForgotPasswordScreen} />
            <Stack.Screen name={'ForgotPasswordMobileVerifyScreen'} component={ForgotPasswordMobileVerifyScreen} />
            <Stack.Screen name={'ForgotPasswordEmailVerifyScreen'} component={ForgotPasswordEmailVerifyScreen} />
            <Stack.Screen name={'CreateNewPasswordScreen'} component={CreateNewPasswordScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigation
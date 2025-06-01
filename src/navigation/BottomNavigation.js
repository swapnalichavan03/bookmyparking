import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BookingScreen, HomeScreen, ProfileScreen, SavedScreen } from '../screens/app';
import { Image } from 'react-native';
import { home_icon, home_icon_active } from '../assets/icons';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarInactiveTintColor: '#CACACA',
                tabBarActiveTintColor: '#BC0063',
                tabBarStyle: { paddingTop: 20, paddingBottom: 20, height: 90, backgroundColor: '#FFFFFF', elevation: 0 },
                tabBarHideOnKeyboard: true,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarLabelStyle: {
                        fontFamily: 'Jost-SemiBold',
                        fontSize: 12,
                    },
                    tabBarShowLabel: true,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Image source={focused ? home_icon_active : home_icon} resizeMode='contain' style={{width: 20, height: 20}} />
                    ),
                }}
            />
            <Tab.Screen
                name='SavedScreen'
                component={SavedScreen}
                options={{
                    tabBarLabelStyle: {
                        fontFamily: 'Jost-SemiBold',
                        fontSize: 12,
                    },
                    tabBarShowLabel: true,
                    tabBarLabel: 'Saved',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "bookmark" : "bookmark-outline"} color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name='BookingScreen'
                component={BookingScreen}
                options={{
                    tabBarLabelStyle: {
                        fontFamily: 'Jost-SemiBold',
                        fontSize: 12,
                    },
                    tabBarShowLabel: true,
                    tabBarLabel: 'Booking',
                    tabBarIcon: ({ color, focused }) => (
                        <Octicons name="home" color={color} size={20} />
                    ),
                }}
            />
            <Tab.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    tabBarLabelStyle: {
                        fontFamily: 'Jost-SemiBold',
                        fontSize: 12,
                    },
                    tabBarShowLabel: true,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome name={focused ? "user" : "user-o"} color={color} size={20} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation